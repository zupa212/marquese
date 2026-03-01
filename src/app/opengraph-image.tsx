import { ImageResponse } from 'next/og'

export const alt = 'Marquise Barber Shop'
export const size = {
    width: 1200,
    height: 630,
}

export const contentType = 'image/png'

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    fontSize: 128,
                    background: '#2E5A47',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#FDFCF0',
                    fontFamily: 'serif',
                    flexDirection: 'column',
                    border: '10px solid #D4AF37',
                }}
            >
                <div style={{ fontSize: 40, letterSpacing: '0.4em', marginBottom: 20 }}>MARQUISE</div>
                <div style={{ fontSize: 100, fontWeight: 'bold' }}>BARBER SHOP</div>
                <div style={{ fontSize: 30, marginTop: 40, opacity: 0.8 }}>Kifisia, Greece</div>
            </div>
        ),
        {
            ...size,
        }
    )
}
