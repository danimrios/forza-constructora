import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://forzaconstructora.com.ar'
  const lastModified = new Date()

  return [
    { url: base, lastModified, changeFrequency: 'monthly', priority: 1 },
    { url: `${base}/nosotros`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/servicios/complejos-deportivos`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/servicios/edificios`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/servicios/mantenimiento`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/servicios/industrial`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/servicios/viviendas`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/servicios/redes-incendio`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
  ]
}
