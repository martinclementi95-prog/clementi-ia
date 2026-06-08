"use client";

import { useActionState } from "react";
import { useSearchParams } from "next/navigation";
import { useFormStatus } from "react-dom";
import { CheckCircle2, Send } from "lucide-react";
import { sendContactMessage, type ContactState } from "@/lib/actions/contact";
import { cn } from "@/lib/utils";

const initial: ContactState | null = null;

const fieldBase =
  "h-11 px-4 rounded-sm bg-white border border-ink/15 text-ink placeholder:text-muted-2 outline-none transition-colors focus:border-ink focus:bg-white";

export function ContactForm() {
  const params = useSearchParams();
  const presetFormation = params.get("formation");

  const [state, action] = useActionState(sendContactMessage, initial);

  if (state?.ok) {
    return (
      <div className="rounded-lg border border-terra/20 bg-terra-soft p-10 text-center flex flex-col items-center gap-4">
        <CheckCircle2 className="size-10 text-ink" strokeWidth={1.5} />
        <h3 className="text-[1.5rem] font-bold tracking-[-0.02em] text-ink">
          Message bien reçu.
        </h3>
        <p className="text-muted max-w-md leading-[1.55]">
          Je vous réponds personnellement sous 24 h ouvrées. À très vite !
        </p>
      </div>
    );
  }

  return (
    <form action={action} className="flex flex-col gap-5">
      {/* honeypot */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="absolute opacity-0 size-0 pointer-events-none"
        aria-hidden="true"
      />

      {presetFormation && (
        <input type="hidden" name="formation" value={presetFormation} />
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Nom complet" name="name" required error={state?.fieldErrors?.name?.[0]} />
        <Field label="Email" type="email" name="email" required error={state?.fieldErrors?.email?.[0]} />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Société" name="company" optional />
        <Field label="Téléphone" name="phone" type="tel" optional />
      </div>

      <SelectField
        label="Sujet"
        name="subject"
        required
        options={[
          { value: "formation-b2b", label: "Formation pour mon entreprise" },
          { value: "formation-b2c", label: "Formation à titre personnel" },
          { value: "audit", label: "Audit IA" },
          { value: "accompagnement", label: "Accompagnement / Conseil" },
          { value: "autre", label: "Autre" },
        ]}
      />

      <TextareaField
        label="Votre projet en quelques lignes"
        name="message"
        required
        rows={5}
        placeholder="Décrivez votre activité, vos objectifs, ce que vous attendez d’un partenaire IA…"
        error={state?.fieldErrors?.message?.[0]}
      />

      {!state?.ok && state?.error && (
        <p className="text-sm text-red-700 bg-red-50 border border-red-200 rounded-sm px-4 py-3">
          {state.error}
        </p>
      )}

      <SubmitButton />

      <p className="text-[12px] text-muted-2 leading-[1.5]">
        En envoyant ce formulaire, vous acceptez d’être recontacté par email
        ou téléphone. Vos données ne sont jamais partagées.
      </p>
    </form>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-md bg-ink text-white font-medium text-[15px] hover:bg-ink-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {pending ? (
        <>
          <span className="size-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
          Envoi en cours…
        </>
      ) : (
        <>
          Envoyer le message
          <Send className="size-4" />
        </>
      )}
    </button>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  optional,
  error,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  optional?: boolean;
  error?: string;
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-[12px] font-medium text-ink">
        {label}
        {required && <span className="text-ink"> *</span>}
        {optional && <span className="text-muted-2 font-normal"> (facultatif)</span>}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        className={cn(fieldBase, error && "border-red-500/60")}
      />
      {error && <span className="text-xs text-red-700">{error}</span>}
    </label>
  );
}

function SelectField({
  label,
  name,
  required,
  options,
}: {
  label: string;
  name: string;
  required?: boolean;
  options: { value: string; label: string }[];
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-[12px] font-medium text-ink">
        {label}
        {required && <span className="text-ink"> *</span>}
      </span>
      <select
        name={name}
        required={required}
        defaultValue=""
        className={fieldBase}
      >
        <option value="" disabled>
          Choisir un sujet…
        </option>
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </label>
  );
}

function TextareaField({
  label,
  name,
  required,
  rows,
  placeholder,
  error,
}: {
  label: string;
  name: string;
  required?: boolean;
  rows?: number;
  placeholder?: string;
  error?: string;
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-[12px] font-medium text-ink">
        {label}
        {required && <span className="text-ink"> *</span>}
      </span>
      <textarea
        name={name}
        required={required}
        rows={rows}
        placeholder={placeholder}
        className={cn(
          "px-4 py-3 rounded-sm bg-white border border-ink/15 text-ink placeholder:text-muted-2 outline-none transition-colors focus:border-ink resize-y",
          error && "border-red-500/60",
        )}
      />
      {error && <span className="text-xs text-red-700">{error}</span>}
    </label>
  );
}
