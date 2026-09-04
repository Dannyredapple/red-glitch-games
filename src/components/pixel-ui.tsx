import { Link } from "@tanstack/react-router";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

export function GlitchTitle({
  children,
  className,
  as: As = "h2",
}: {
  children: string;
  className?: string;
  as?: "h1" | "h2" | "h3";
}) {
  return (
    <As className={cn("relative inline-block font-pixel leading-tight", className)}>
      <span className="relative z-10 glow-text">{children}</span>
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 text-primary/70"
        style={{ animation: "glitch-shift 4.5s infinite steps(1)" }}
      >
        {children}
      </span>
    </As>
  );
}

export function NeonPanel({
  children,
  className,
  label,
}: {
  children: ReactNode;
  className?: string;
  label?: string;
}) {
  return (
    <div
      className={cn(
        "relative border border-primary/40 bg-card/70 backdrop-blur-sm",
        "shadow-[0_0_0_1px_var(--color-background),0_0_28px_-8px_var(--color-primary)]",
        className,
      )}
    >
      <span className="pointer-events-none absolute -left-px -top-px h-3 w-3 border-l-2 border-t-2 border-primary" />
      <span className="pointer-events-none absolute -right-px -top-px h-3 w-3 border-r-2 border-t-2 border-primary" />
      <span className="pointer-events-none absolute -bottom-px -left-px h-3 w-3 border-b-2 border-l-2 border-primary" />
      <span className="pointer-events-none absolute -bottom-px -right-px h-3 w-3 border-b-2 border-r-2 border-primary" />
      {label ? (
        <span className="absolute -top-3 left-4 bg-background px-2 font-pixel text-[9px] uppercase tracking-widest text-primary">
          {label}
        </span>
      ) : null}
      {children}
    </div>
  );
}

const pixelBase =
  "inline-flex items-center justify-center gap-2 border-2 border-primary bg-transparent px-5 py-3 font-pixel text-[10px] uppercase tracking-widest text-primary transition-all duration-100 shadow-[4px_4px_0_0_var(--color-primary)] hover:bg-primary hover:text-primary-foreground hover:shadow-[0_0_22px_0_var(--color-primary)] active:translate-x-1 active:translate-y-1 active:shadow-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-50";

export function PixelButton({ className, ...props }: ComponentProps<"button">) {
  return <button className={cn(pixelBase, className)} {...props} />;
}

export function PixelLink({
  className,
  ...props
}: ComponentProps<typeof Link>) {
  return <Link className={cn(pixelBase, className)} {...props} />;
}

export function PixelAnchor({ className, ...props }: ComponentProps<"a">) {
  return <a className={cn(pixelBase, className)} {...props} />;
}
