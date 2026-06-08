import { cn } from "@/lib/utils";

type BadgeVariant = "default" | "terra" | "outline";

export function Badge({
  className,
  variant = "default",
  children,
}: {
  className?: string;
  variant?: BadgeVariant;
  children: React.ReactNode;
}) {
  const variants: Record<BadgeVariant, string> = {
    default: "bg-ink/5 text-ink",
    terra: "bg-terra-soft text-ink",
    outline: "border border-ink/20 text-ink",
  };
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-medium",
        variants[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}

/** Eyebrow — petit label avec trait, façon Linear/Vercel */
export function Label({
  children,
  as: As = "span",
  className,
}: {
  children: React.ReactNode;
  as?: "span" | "p" | "div";
  className?: string;
}) {
  return <As className={cn("eyebrow", className)}>{children}</As>;
}

/** Legacy alias — used by /a-propos, /contact, /formations, /conseil */
export const EyebrowBadge = Label;
