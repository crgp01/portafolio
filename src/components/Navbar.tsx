function Navbar() {
    const scrollTo = (id: string) => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }
  
    return (
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1.5rem 4rem',
        backgroundColor: 'var(--cream)',
        borderBottom: '1px solid var(--border)',
      }}>
        <span style={{
          fontFamily: 'var(--font-script)',
          fontSize: '1.4rem',
          color: 'var(--brown-dark)',
        }}>
          Cristina Rivera Pastrano
        </span>
  
        <ul style={{
          listStyle: 'none',
          display: 'flex',
          gap: '3rem',
        }}>
          {[
            { label: 'BIOGRAFÍA', id: 'biografia' },
            { label: 'PORTAFOLIO', id: 'portafolio' },
            { label: 'CONTACTO', id: 'contacto' },
          ].map(({ label, id }) => (
            <li key={id}>
              <button
                onClick={() => scrollTo(id)}
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '0.85rem',
                  letterSpacing: '0.15em',
                  color: 'var(--brown-dark)',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    )
  }
  
  export default Navbar