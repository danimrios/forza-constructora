import { ImageResponse } from 'next/og'

export const alt = 'Forza Constructora SRL'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0A0A0A',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 24,
        }}
      >
        <div
          style={{
            color: '#FFFFFF',
            fontSize: 64,
            fontWeight: 900,
            letterSpacing: '-0.02em',
            textAlign: 'center',
          }}
        >
          FORZA CONSTRUCTORA SRL
        </div>
        <div
          style={{
            color: '#C9922A',
            fontSize: 32,
            fontWeight: 600,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
          }}
        >
          Construcción Llave en Mano
        </div>
      </div>
    ),
    { ...size }
  )
}
