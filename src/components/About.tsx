import useIsMobile from '../hooks/useIsMobile'

function About() {
  const isMobile = useIsMobile()

  return (
    <section id="biografia" style={{
      minHeight: '100vh',
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : '65% 35%',
      alignItems: 'stretch',
    }}>

      {/* Foto */}
      <div style={{
        position: 'relative',
        overflow: 'hidden',
        minHeight: isMobile ? '60vw' : 'auto',
      }}>
        <img
          src="/images/foto-cristina.jpg"
          alt="Cristina Rivera Pastrano"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center top',
          }}
        />

        {/* Texto sobre la foto */}
        <div style={{
          position: 'absolute',
          bottom: '2rem',
          left: isMobile ? '1.5rem' : '3rem',
        }}>
          <h2 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: isMobile ? '2rem' : 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: 300,
            color: 'white',
            lineHeight: 1.1,
            textShadow: '0 2px 20px rgba(0,0,0,0.3)',
          }}>
            Sobre <em>mi</em>
          </h2>
          <p style={{
            fontFamily: 'var(--font-sans)',
            fontSize: isMobile ? '0.9rem' : '1.05rem',
            fontWeight: 300,
            color: 'white',
            marginTop: '0.5rem',
            textShadow: '0 2px 12px rgba(0,0,0,0.3)',
          }}>
            De ingeniera de software<br />a artista digital
          </p>
        </div>
      </div>

      {/* Texto biográfico */}
      <div style={{
        padding: isMobile ? '2.5rem 1.5rem' : '4rem 3rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: '2rem',
        backgroundColor: 'var(--cream)',
        borderLeft: isMobile ? 'none' : '1px solid var(--border)',
        borderTop: isMobile ? '1px solid var(--border)' : 'none',
      }}>
        <p style={{
          fontFamily: 'var(--font-serif)',
          fontSize: isMobile ? '1rem' : '1.15rem',
          fontWeight: 300,
          color: 'var(--brown-dark)',
          lineHeight: 1.8,
        }}>
          Después de 10 años trabajando como ingeniera de software
          decidí que mi verdadera pasión es el arte, así que decidí
          aprender de forma autodidacta y dedicar mi carrera a lo que amo
        </p>
      </div>

    </section>
  )
}

export default About