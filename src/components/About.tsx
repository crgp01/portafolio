function About() {
    return (
      <section id="biografia" style={{
        minHeight: '100vh',
        display: 'grid',
        gridTemplateColumns: '65% 35%',
        alignItems: 'stretch',
        padding: '0 4rem',
      }}>
        <div style={{ position: 'relative', overflow: 'hidden'}}>
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
            bottom: '20rem',
            left: '3rem',
          }}>
            <h2 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 300,
              color: 'white',
              lineHeight: 1.1,
              textShadow: '0 2px 20px rgba(0,0,0,0.3)',
            }}>
              Sobre <em>mi</em>
            </h2>
            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '1.05rem',
              fontWeight: 300,
              color: 'white',
              marginTop: '0.75rem',
              textShadow: '0 2px 12px rgba(0,0,0,0.3)',
            }}>
              De ingeniera de software<br />a artista digital
            </p>
          </div>
        </div>
  
        {/* Columna derecha — texto biográfico */}
        <div style={{
          padding: '4rem 3rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: '2rem',
          backgroundColor: 'var(--cream)',
          borderLeft: '1px solid var(--border)',
        }}>
          <p style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '1.15rem',
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