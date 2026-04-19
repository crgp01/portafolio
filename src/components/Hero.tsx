import useIsMobile from '../hooks/useIsMobile'

function Hero() {
  const isMobile = useIsMobile()

  return (
    <section style={{
      minHeight: '100vh',
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : '0.35fr 0.65fr',
      alignItems: 'center',
      padding: isMobile ? '3rem 1.5rem' : '0 4rem',
      gap: '2rem',
    }}>

      {/* Columna izquierda — texto */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1.2rem',
        textAlign: isMobile ? 'center' : 'left',
      }}>
        <h1 style={{
          fontFamily: 'var(--font-script)',
          fontSize: isMobile ? '3rem' : 'clamp(3rem, 6vw, 5rem)',
          color: 'var(--brown-dark)',
          lineHeight: 1.1,
        }}>
          Cristina Rivera<br />Pastrano
        </h1>

        <p style={{
          fontFamily: 'var(--font-serif)',
          fontSize: isMobile ? '1.3rem' : '1.6rem',
          fontWeight: 300,
          color: 'var(--brown-medium)',
          letterSpacing: '0.05em',
        }}>
          Artista digital
        </p>

        <p style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '0.95rem',
          color: 'var(--brown-light)',
        }}>
          riverap.cristina@gmail.com
        </p>
      </div>

      {/* Imagen destacada */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        order: isMobile ? -1 : 0,
      }}>
        <div style={{
          width: '100%',
          maxWidth: isMobile ? '320px' : '95%',
          aspectRatio: '4/3',
          boxShadow: '8px 12px 40px rgba(44, 24, 16, 0.12)',
          overflow: 'hidden',
        }}>
          <img
            src="/images/paisaje_zorro.png"
            alt="Familia de zorros"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </div>
      </div>

    </section>
  )
}

export default Hero