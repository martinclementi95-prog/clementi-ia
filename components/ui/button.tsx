import * as React from "react";
import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all duration-150 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        // Primary — ink solide, géométrie nette
        primary:
          "bg-ink text-white hover:bg-ink-2 rounded-md",
        terra:
          "bg-terra text-bg hover:bg-terra-dark rounded-md",
        // Outline — bordure ink, plus de bg
        outline:
          "border border-ink/20 text-ink hover:border-ink hover:bg-ink/5 rounded-md",
        // Ghost — discret
        ghost:
          "text-ink hover:bg-ink/5 rounded-md",
        link:
          "text-ink underline decoration-ink/30 decoration-1 underline-offset-[6px] hover:decoration-ink decoration-2 px-0 rounded-none",
      },
      size: {
        sm: "h-9 px-4 text-[13px]",
        md: "h-11 px-5 text-[14px]",
        lg: "h-12 px-6 text-[15px]",
        xl: "h-14 px-7 text-[16px]",
        link: "h-auto p-0 text-[15px]",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  ),
);
Button.displayName = "Button";

type ButtonLinkProps = React.ComponentProps<typeof Link> &
  VariantProps<typeof buttonVariants>;

export function ButtonLink({
  className,
  variant,
  size,
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}

export { buttonVariants };
