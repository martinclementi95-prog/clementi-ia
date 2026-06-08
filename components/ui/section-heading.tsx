import { cn } from "@/lib/utils";
import { Label } from "./badge";

export function SectionHeading({
  label,
  title,
  description,
  align = "left",
  className,
}: {
  label?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-5 max-w-3xl",
        align === "center" && "items-center text-center mx-auto",
        className,
      )}
    >
      {label && <Label>{label}</Label>}
      <h2 className="text-[2rem] md:text-[2.75rem] lg:text-[3.25rem] font-bold tracking-[-0.035em] leading-[1.02] text-balance">
        {title}
      </h2>
      {description && (
        <p className="text-[16px] md:text-[17px] text-muted text-pretty leading-[1.55] max-w-2xl">
          {description}
        </p>
      )}
    </div>
  );
}
