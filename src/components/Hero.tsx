function Hero() {
    return (
      <section style={{
        minHeight: '100vh',
        display: 'grid',
        gridTemplateColumns: '0.35fr 0.65fr',
        alignItems: 'center',
        padding: '0 4rem',
        position: 'relative',
        overflow: 'hidden',
      }}>
  
        {/* Columna izquierda — texto */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <h1 style={{
            fontFamily: 'var(--font-script)',
            fontSize: 'clamp(3rem, 6vw, 5rem)',
            color: 'var(--brown-dark)',
            lineHeight: 1.1,
          }}>
            Cristina Rivera<br />Pastrano
          </h1>
  
          <p style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '1.6rem',
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
            letterSpacing: '0.03em',
          }}>
            riverap.cristina@gmail.com
          </p>
        </div>
  
        {/* Columna derecha — obra destacada */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <div style={{
            width: '100%',
            maxWidth: '80%',
            aspectRatio: '4/3',
            backgroundColor: 'var(--cream-dark)',
            border: '1px solid var(--border)',
            boxShadow: '8px 12px 40px rgba(44, 24, 16, 0.12)',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <img
            src="/images/paisaje_zorro.png"
            alt="Familia de zorros"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        </div>
  
      </section>
    )
  }
  
  export default Hero