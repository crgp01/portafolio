import { useLocation, useNavigate } from 'react-router-dom'

function Navbar() {
  const location = useLocation()
  const navigate = useNavigate()
  const isGallery = location.pathname === '/portafolio'

  const scrollTo = (id: string) => {
    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }
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

      {/* Logo — siempre lleva al inicio */}
      <button
        onClick={() => navigate('/')}
        style={{
          fontFamily: 'var(--font-script)',
          fontSize: '1.4rem',
          color: 'var(--brown-dark)',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        Cristina Rivera Pastrano
      </button>

      {/* Links — cambian según la página */}
      {isGallery ? (
        <button
          onClick={() => navigate('/')}
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
          ← INICIO
        </button>
      ) : (
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
      )}

    </nav>
  )
}

export default Navbar