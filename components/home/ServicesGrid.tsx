import { SERVICES } from "@/lib/services"
import { ServiceCard } from "@/components/ui/ServiceCard"

export function ServicesGrid() {
  const gridServices = SERVICES.filter((s) => s.showInGrid)
  const featured = gridServices.filter((s) => s.featured)
  const rest = gridServices.filter((s) => !s.featured)

  return (
    <section className="bg-brand-surface py-12 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {featured.length > 0 && (
          <div className={`grid grid-cols-1 ${featured.length > 1 ? "md:grid-cols-2" : ""} gap-6 mb-6`}>
            {featured.map((service) => (
              <ServiceCard key={service.slug} service={service} tall />
            ))}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {rest.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </div>
    </section>
  )
}
