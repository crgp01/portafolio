import { useLocation, useNavigate } from 'react-router-dom'
import useIsMobile from '../hooks/useIsMobile'

function Navbar() {
  const location = useLocation()
  const navigate = useNavigate()
  const isMobile = useIsMobile()
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
      padding: isMobile ? '1rem 1.5rem' : '1.5rem 4rem',
      backgroundColor: 'var(--cream)',
      borderBottom: '1px solid var(--border)',
    }}>

      {/* Logo */}
      <button
        onClick={() => navigate('/')}
        style={{
          fontFamily: 'var(--font-script)',
          fontSize: isMobile ? '0.95rem' : '1.4rem',
          color: 'var(--brown-dark)',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          whiteSpace: 'nowrap',
        }}
      >
        Cristina Rivera Pastrano
      </button>

      {/* Links */}
      {isGallery ? (
        <button
          onClick={() => navigate('/')}
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: isMobile ? '0.75rem' : '0.85rem',
            letterSpacing: '0.1em',
            color: 'var(--brown-dark)',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            whiteSpace: 'nowrap',
          }}
        >
          ← INICIO
        </button>
      ) : (
        <ul style={{
          listStyle: 'none',
          display: 'flex',
          gap: isMobile ? '1rem' : '3rem',
        }}>
          {[
            { label: isMobile ? 'BIO' : 'BIOGRAFÍA', id: 'biografia' },
            { label: isMobile ? 'OBRAS' : 'PORTAFOLIO', id: 'portafolio' },
            { label: isMobile ? 'CONTACTO' : 'CONTACTO', id: 'contacto' },
          ].map(({ label, id }) => (
            <li key={id}>
              <button
                onClick={() => scrollTo(id)}
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: isMobile ? '0.7rem' : '0.85rem',
                  letterSpacing: '0.1em',
                  color: 'var(--brown-dark)',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
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