import { AnimatedCounter } from "@/components/ui/AnimatedCounter"

interface Stat {
  end: number
  suffix: string
  label: string
}

const STATS: Stat[] = [
  { end: 15, suffix: "+", label: "Años de experiencia" },
  { end: 200, suffix: "+", label: "Obras ejecutadas" },
  { end: 4, suffix: "", label: "Especialidades" },
  { end: 100, suffix: "%", label: "Llave en mano" },
]

export function Stats() {
  return (
    <section className="bg-brand-gold py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12">
        {STATS.map((stat) => (
          <div key={stat.label} className="flex flex-col items-center text-center">
            <span className="font-heading font-black text-5xl text-brand-dark">
              <AnimatedCounter end={stat.end} suffix={stat.suffix} />
            </span>
            <span className="text-brand-dark/70 text-sm font-medium uppercase tracking-wide mt-2">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
