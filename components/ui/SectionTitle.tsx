interface SectionTitleProps {
  title: string
  subtitle?: string
  align?: "left" | "center"
}

export function SectionTitle({ title, subtitle, align = "center" }: SectionTitleProps) {
  const alignClass = align === "center" ? "items-center text-center" : "items-start text-left"

  return (
    <div className={`flex flex-col ${alignClass} mb-12`}>
      <h2 className="font-heading font-black text-2xl sm:text-3xl md:text-4xl text-primary">{title}</h2>
      <div className="mt-4 w-16 h-0.5 bg-brand-gold" />
      {subtitle && <p className="mt-6 text-muted text-lg max-w-2xl">{subtitle}</p>}
    </div>
  )
}
