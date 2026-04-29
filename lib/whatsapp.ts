const PHONE = "5491155809992"

export function waUrl(message: string): string {
  return `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`
}

export const WA_GENERAL = waUrl(
  "Hola! Los contacto desde la web de Forza Constructora. Me gustaría obtener más información sobre sus servicios."
)

export const WA_PRESUPUESTO = waUrl(
  "Hola! Los contacto desde la web de Forza Constructora. Me gustaría solicitar un presupuesto para mi proyecto."
)

export const WA_ENTREVISTA_COMPLEJO = waUrl(
  "Hola! Los contacto desde la web de Forza Constructora. Me gustaría solicitar una entrevista técnica para mi proyecto de complejo deportivo."
)

export const WA_PROYECTO_METALICO = waUrl(
  "Hola! Los contacto desde la web de Forza Constructora. Me gustaría consultar sobre mi proyecto de arquitectura metálica."
)

export const WA_VIVIENDAS = waUrl(
  "Hola! Los contacto desde la web de Forza Constructora. Me gustaría iniciar el proyecto de mi casa Steel Frame."
)

export const WA_MANTENIMIENTO = waUrl(
  "Hola! Los contacto desde la web de Forza Constructora. Me gustaría solicitar un relevamiento técnico sin cargo para mi planta."
)
