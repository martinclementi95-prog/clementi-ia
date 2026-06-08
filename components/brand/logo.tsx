import { cn } from "@/lib/utils";

/**
 * Logo — mark géométrique sans-serif, monogramme inversé sur carré ink.
 * Pas de cercle, pas de serif. Lisible en petit, neutre, ne crie pas "IA".
 */
export function Logo({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex size-8 items-center justify-center rounded-[6px] bg-ink text-white text-[14px] font-bold leading-none",
        className,
      )}
      aria-hidden="true"
    >
      C
    </span>
  );
}

export function Wordmark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "text-[16px] font-bold tracking-[-0.02em] text-ink leading-none",
        className,
      )}
    >
      Clementi<span className="text-muted">.ia</span>
    </span>
  );
}
