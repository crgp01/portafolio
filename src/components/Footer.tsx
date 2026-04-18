function Footer() {
    return (
      <footer style={{
        backgroundColor: 'var(--cream)',
        borderTop: '1px solid var(--border)',
        padding: '4rem 2rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1rem',
        textAlign: 'center',
      }}>
  
        {/* Nombre */}
        <h2 style={{
          fontFamily: 'var(--font-script)',
          fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
          color: 'var(--brown-dark)',
          lineHeight: 1.2,
        }}>
          Cristina Rivera<br />Pastrano
        </h2>
  
        {/* Subtítulo */}
        <p style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '0.95rem',
          color: 'var(--brown-medium)',
          letterSpacing: '0.03em',
        }}>
          Artista digital / Ingeniera de software
        </p>
  
        {/* Email */}
        
        <a href="mailto:riverap.cristina@gmail.com"
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '1rem',
            color: 'var(--brown-dark)',
            letterSpacing: '0.02em',
          }}
        >
          riverap.cristina@gmail.com
        </a>
  
        {/* Ubicación */}
        <p style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '0.9rem',
          color: 'var(--brown-muted)',
        }}>
          Curacaví, Chile
        </p>
  
        {/* Redes sociales */}
        <div style={{
          display: 'flex',
          gap: '1.5rem',
          marginTop: '0.5rem',
        }}>
  
          {/* Instagram */}
          
          <a href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            style={{ color: 'var(--brown-dark)' }}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <circle cx="12" cy="12" r="4"/>
              <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
            </svg>
          </a>
  
          {/* LinkedIn */}
          
          <a href="https://linkedin.com/in/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            style={{ color: 'var(--brown-dark)' }}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
              <rect x="2" y="9" width="4" height="12"/>
              <circle cx="4" cy="4" r="2"/>
            </svg>
          </a>
  
          {/* GitHub */}
          
          <a href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            style={{ color: 'var(--brown-dark)' }}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
            </svg>
          </a>
        </div>
  
        {/* Copyright */}
        <p style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '0.8rem',
          color: 'var(--brown-muted)',
          marginTop: '1rem',
        }}>
          © {new Date().getFullYear()} Cristina Rivera Pastrano
        </p>
  
      </footer>
    )
  }
  
  export default Footer