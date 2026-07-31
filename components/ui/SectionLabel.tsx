type SectionLabelProps = {
  index?: string;
  children: React.ReactNode;
  light?: boolean;
};

export function SectionLabel({ index, children, light = false }: SectionLabelProps) {
  return (
    <p
      className={`flex items-center gap-3 text-[0.68rem] font-bold uppercase tracking-[0.22em] ${light ? "text-white/65" : "text-charcoal/55"}`}
    >
      {index ? <span className="font-serif text-base italic tracking-normal text-tomato">{index}</span> : null}
      {children}
    </p>
  );
}
