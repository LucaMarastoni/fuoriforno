import Link from "next/link";

type PrimaryButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "fire" | "light" | "outline";
};

export function PrimaryButton({ href, children, variant = "fire" }: PrimaryButtonProps) {
  const variants = {
    fire: "bg-tomato text-white hover:bg-fire",
    light: "bg-dough text-charcoal hover:bg-white",
    outline: "border border-white/35 text-white hover:border-white hover:bg-white/10",
  };

  return (
    <Link
      href={href}
      className={`group inline-flex min-h-12 items-center justify-center gap-5 rounded-full px-6 text-sm font-bold transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-fire ${variants[variant]}`}
    >
      {children}
      <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
        ↗
      </span>
    </Link>
  );
}
