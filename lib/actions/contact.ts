"use server";

import { z } from "zod";
import { Resend } from "resend";
import { siteConfig } from "@/lib/config/site";

const contactSchema = z.object({
  name: z.string().min(2, "Votre nom est trop court").max(120),
  email: z.string().email("Email invalide"),
  company: z.string().max(120).optional().nullable(),
  phone: z.string().max(40).optional().nullable(),
  subject: z.enum([
    "formation-b2b",
    "formation-b2c",
    "audit",
    "accompagnement",
    "autre",
  ]),
  message: z
    .string()
    .min(20, "Décrivez un peu plus votre projet (20 caractères min.)")
    .max(4000),
  formation: z.string().max(80).optional().nullable(),
  // Honeypot anti-bot
  website: z.string().max(0).optional().nullable(),
});

export type ContactInput = z.infer<typeof contactSchema>;

const subjectLabels: Record<ContactInput["subject"], string> = {
  "formation-b2b": "Formation entreprise",
  "formation-b2c": "Formation particulier",
  audit: "Audit IA",
  accompagnement: "Accompagnement / Conseil",
  autre: "Autre",
};

export type ContactState =
  | { ok: true }
  | { ok: false; error: string; fieldErrors?: Record<string, string[]> };

export async function sendContactMessage(
  _prev: ContactState | null,
  formData: FormData,
): Promise<ContactState> {
  const raw = Object.fromEntries(formData.entries());
  const parsed = contactSchema.safeParse(raw);

  if (!parsed.success) {
    return {
      ok: false,
      error: "Certains champs sont invalides.",
      fieldErrors: parsed.error.flatten().fieldErrors as Record<string, string[]>,
    };
  }

  // Honeypot triggered → silent success
  if (parsed.data.website) {
    return { ok: true };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_EMAIL ?? siteConfig.contact.email;
  const from = process.env.RESEND_FROM ?? "onboarding@resend.dev";

  if (!apiKey) {
    console.error("[contact] RESEND_API_KEY missing — message non envoyé", parsed.data);
    return {
      ok: false,
      error:
        "Le service d'envoi n'est pas configuré. Écrivez directement à " +
        to +
        " — merci !",
    };
  }

  const { name, email, company, phone, subject, message, formation } = parsed.data;
  const subjectLabel = subjectLabels[subject];

  try {
    const resend = new Resend(apiKey);
    await resend.emails.send({
      from: `${siteConfig.brand} <${from}>`,
      to,
      replyTo: email,
      subject: `[${subjectLabel}] ${name}${company ? ` — ${company}` : ""}`,
      html: renderHtml({
        name,
        email,
        company,
        phone,
        subjectLabel,
        formation,
        message,
      }),
    });
    return { ok: true };
  } catch (e) {
    console.error("[contact] resend error", e);
    return {
      ok: false,
      error:
        "L'envoi a échoué. Réessayez dans un instant, ou écrivez directement à " +
        to,
    };
  }
}

function renderHtml(d: {
  name: string;
  email: string;
  company?: string | null;
  phone?: string | null;
  subjectLabel: string;
  formation?: string | null;
  message: string;
}) {
  const row = (k: string, v?: string | null) =>
    v
      ? `<tr><td style="padding:8px 12px;color:#666;font-size:13px;border-bottom:1px solid #eee;">${k}</td><td style="padding:8px 12px;font-size:14px;border-bottom:1px solid #eee;"><strong>${escapeHtml(v)}</strong></td></tr>`
      : "";

  return `
  <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;max-width:600px;margin:0 auto;padding:24px;color:#1a1a1a;">
    <div style="border-left:4px solid #2b6243;padding-left:16px;margin-bottom:24px;">
      <h2 style="margin:0 0 4px;font-size:18px;">Nouveau message — ${escapeHtml(d.subjectLabel)}</h2>
      <p style="margin:0;color:#666;font-size:13px;">Reçu via clementi-ia.fr</p>
    </div>
    <table style="width:100%;border-collapse:collapse;border:1px solid #eee;border-radius:8px;overflow:hidden;">
      ${row("Nom", d.name)}
      ${row("Email", d.email)}
      ${row("Société", d.company)}
      ${row("Téléphone", d.phone)}
      ${row("Formation", d.formation)}
    </table>
    <div style="margin-top:24px;padding:20px;background:#fafaf9;border-radius:8px;">
      <p style="margin:0 0 8px;color:#666;font-size:13px;">Message :</p>
      <p style="margin:0;white-space:pre-wrap;line-height:1.6;">${escapeHtml(d.message)}</p>
    </div>
  </div>`;
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
