# Clementi IA — site web

Site vitrine "Partenaire IA du Pays de Gex" pour Martin Clementi.
Stack : **Next.js 16 · React 19 · TypeScript · Tailwind v4 · Framer Motion · Resend**.

---

## Lancer le site en local

```bash
npm install
npm run dev
```

Ouvre [http://localhost:3000](http://localhost:3000).

---

## Éditer le contenu

**Tout le contenu textuel est centralisé** dans deux fichiers, pas besoin de toucher au code des pages :

### `lib/config/site.ts`

Identité de la marque, contact, coordonnées, liens sociaux, villes desservies, mentions légales.

### `lib/config/formations.ts`

Catalogue complet des formations (titre, prix, programme, public visé, prérequis, etc.).
Ajouter une formation = ajouter un objet dans le tableau `formations`. Sa page de détail est générée automatiquement à l'URL `/formations/<slug>`.

---

## Ajouter ta photo

1. Place une image carrée (recommandé : 800×800 px, JPEG ou WebP) dans `/public/martin.jpg`.
2. Dans `components/sections/founder-card.tsx` et `app/a-propos/page.tsx`, remplace le bloc placeholder "MC" par :

```tsx
import Image from "next/image";

<Image
  src="/martin.jpg"
  alt="Martin Clementi"
  width={800}
  height={800}
  className="aspect-square rounded-2xl object-cover border border-white/10"
  priority
/>
```

---

## Configurer le formulaire de contact (Resend)

1. Crée un compte gratuit sur [resend.com](https://resend.com).
2. Récupère ta clé API : Settings → API Keys.
3. Dupliquer `.env.example` en `.env.local` et renseigne :

```env
RESEND_API_KEY=re_xxxxxxxxxx
CONTACT_EMAIL=hello@clementi-ia.fr
RESEND_FROM=onboarding@resend.dev
```

- `CONTACT_EMAIL` = l'adresse qui recevra les messages.
- `RESEND_FROM` = l'adresse expéditrice. Pour démarrer, utilise `onboarding@resend.dev` (fonctionne sans config). Ensuite, vérifie ton propre domaine dans Resend pour expédier depuis `hello@clementi-ia.fr`.

Sans variables d'environnement, le formulaire fonctionne mais affiche un message disant à l'utilisateur d'écrire directement à ton email.

---

## Configurer Calendly

Crée un événement "Échange découverte 30 min" sur [calendly.com](https://calendly.com), puis remplace l'URL dans `lib/config/site.ts` :

```ts
contact: {
  ...
  calendly: "https://calendly.com/ton-pseudo/decouverte",
}
```

---

## Déployer sur Vercel

1. Pousse le projet sur GitHub.
2. Sur [vercel.com](https://vercel.com), clique "New Project" → importe ton repo.
3. Vercel détecte automatiquement Next.js. Aucune configuration à modifier.
4. Dans **Settings → Environment Variables**, ajoute :
   - `RESEND_API_KEY`
   - `CONTACT_EMAIL`
   - `RESEND_FROM`
   - `NEXT_PUBLIC_SITE_URL` (ex. `https://clementi-ia.fr`)
5. Clique "Deploy".

Pour ton domaine `clementi-ia.fr` :
- Achète-le où tu veux (OVH, Gandi, Namecheap).
- Dans Vercel → Settings → Domains, ajoute `clementi-ia.fr` et `www.clementi-ia.fr`.
- Vercel te donnera les enregistrements DNS à pointer.

---

## Structure du projet

```
app/
  layout.tsx              # Layout racine + fonts + metadata SEO globaux
  page.tsx                # Home
  formations/
    page.tsx              # Catalogue
    [slug]/page.tsx       # Détail formation (généré dynamiquement)
  conseil/page.tsx
  a-propos/page.tsx
  contact/page.tsx
  mentions-legales/page.tsx
  not-found.tsx
  sitemap.ts              # Sitemap auto
  robots.ts               # robots.txt
  globals.css             # Tailwind v4 + design tokens

components/
  brand/logo.tsx
  layout/
    header.tsx            # Header sticky avec menu mobile
    footer.tsx
  sections/               # Sections réutilisables de la home
    hero.tsx
    value-props.tsx
    offers-preview.tsx
    methode.tsx
    founder-card.tsx
    b2c-strip.tsx
    local-trust.tsx
    cta.tsx
  ui/                     # Primitives design system
    button.tsx
    card.tsx
    badge.tsx
    container.tsx
    section-heading.tsx
  contact-form.tsx        # Formulaire avec Server Action

lib/
  config/
    site.ts               # ← édite ton identité ici
    formations.ts         # ← édite tes formations ici
  actions/
    contact.ts            # Server Action Resend
  utils.ts                # cn(), formatPrice()
```

---

## Personnaliser la charte graphique

Les couleurs et la typographie sont définies dans `app/globals.css` via `@theme` (Tailwind v4) :

- Couleur de marque (`--color-brand-*`) — actuellement un vert sapin profond, clin d'œil au Jura.
- Couleur neutre chaude (`--color-ink-*`).
- Typographie : **Inter** pour le corps, **Instrument Serif** pour les titres.

Pour changer la couleur de marque, modifie les variables `--color-brand-*`. Tous les composants suivront automatiquement.

---

## Checklist avant mise en ligne

- [ ] Remplacer la photo placeholder dans `/public/martin.jpg`
- [ ] Vérifier le SIRET dans `lib/config/site.ts` → `legal.siret`
- [ ] Ajuster les prix et la liste de formations dans `lib/config/formations.ts`
- [ ] Vérifier email et téléphone dans `lib/config/site.ts`
- [ ] Mettre l'URL Calendly réelle
- [ ] Vérifier le domaine vérifié dans Resend
- [ ] Tester le formulaire de contact en production
- [ ] Vérifier le rendu mobile sur ton téléphone

---

## Commandes utiles

```bash
npm run dev       # Développement local
npm run build     # Build production
npm run start     # Lancer le build production en local
npm run lint      # Linter
```
