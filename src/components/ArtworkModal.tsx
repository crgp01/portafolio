import { useState, useEffect } from 'react'
import type { Artwork } from '../types'

interface Props {
  artwork: Artwork
  onClose: () => void
}

function ArtworkModal({ artwork, onClose }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const prev = () => setCurrentIndex(i => Math.max(i - 1, 0))
  const next = () => setCurrentIndex(i => Math.min(i + 1, artwork.images.length - 1))

  // Cerrar con tecla Escape
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [])

  // Bloquear scroll del body mientras el modal está abierto
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        style={{
          position: 'fixed', inset: 0,
          backgroundColor: 'rgba(0,0,0,0.75)',
          zIndex: 200,
        }}
      />

      {/* Modal */}
      <div style={{
        position: 'fixed', inset: 0,
        zIndex: 201,
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'var(--cream)',
        margin: '2rem',
        borderRadius: '4px',
        overflow: 'hidden',
      }}>

        {/* Header */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '1rem 2rem',
          borderBottom: '1px solid var(--border)',
        }}>
          <span style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '1.1rem',
            color: 'var(--brown-medium)',
          }}>
            Galería
          </span>
          <button
            onClick={onClose}
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '1rem',
              color: 'var(--brown-dark)',
              letterSpacing: '0.05em',
            }}
          >
            Cerrar ✕
          </button>
        </div>

        {/* Cuerpo */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 320px',
          flex: 1,
          overflow: 'hidden',
        }}>

          {/* Columna izquierda — imagen + miniaturas */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            borderRight: '1px solid var(--border)',
          }}>

            {/* Imagen principal con flechas */}
            <div style={{
              flex: 1,
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#f0ece4',
              overflow: 'hidden',
            }}>
              <img
                src={artwork.images[currentIndex]}
                alt={artwork.alt}
                style={{
                  maxHeight: '100%',
                  maxWidth: '100%',
                  objectFit: 'contain',
                }}
              />

              {/* Flecha izquierda */}
              {currentIndex > 0 && (
                <button
                  onClick={prev}
                  style={{
                    position: 'absolute', left: '1rem',
                    fontSize: '2rem', color: 'var(--brown-dark)',
                    opacity: 0.7,
                  }}
                >
                  ‹
                </button>
              )}

              {/* Flecha derecha */}
              {currentIndex < artwork.images.length - 1 && (
                <button
                  onClick={next}
                  style={{
                    position: 'absolute', right: '1rem',
                    fontSize: '2rem', color: 'var(--brown-dark)',
                    opacity: 0.7,
                  }}
                >
                  ›
                </button>
              )}

              {/* Contador */}
              <span style={{
                position: 'absolute', bottom: '1rem',
                fontFamily: 'var(--font-sans)',
                fontSize: '0.85rem',
                color: 'var(--brown-medium)',
              }}>
                {currentIndex + 1} / {artwork.images.length}
              </span>
            </div>

            {/* Miniaturas */}
            <div style={{
              display: 'flex',
              gap: '0.5rem',
              padding: '1rem',
              overflowX: 'auto',
              borderTop: '1px solid var(--border)',
              backgroundColor: 'var(--cream)',
            }}>
              {artwork.images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`Miniatura ${i + 1}`}
                  onClick={() => setCurrentIndex(i)}
                  style={{
                    width: '80px',
                    height: '60px',
                    objectFit: 'cover',
                    cursor: 'pointer',
                    flexShrink: 0,
                    border: i === currentIndex
                      ? '2px solid var(--brown-dark)'
                      : '2px solid transparent',
                    opacity: i === currentIndex ? 1 : 0.6,
                    transition: 'opacity 0.2s, border-color 0.2s',
                  }}
                />
              ))}
            </div>
          </div>

          {/* Columna derecha — info de la obra */}
          <div style={{
            padding: '2rem',
            overflowY: 'auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.2rem',
          }}>
            <h2 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1.8rem',
              fontWeight: 400,
              color: 'var(--brown-dark)',
            }}>
              {artwork.title}
            </h2>

            <div style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.9rem',
              color: 'var(--brown-light)',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.3rem',
            }}>
              <span>{artwork.technique}</span>
              {artwork.dimensions && <span>{artwork.dimensions}</span>}
              <span>{artwork.year}</span>
            </div>

            <hr style={{ border: 'none', borderTop: '1px solid var(--border)' }} />

            <div>
              <h3 style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1rem',
                fontWeight: 500,
                color: 'var(--brown-medium)',
                marginBottom: '0.75rem',
                letterSpacing: '0.05em',
              }}>
                Proceso
              </h3>
              <p style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.95rem',
                color: 'var(--brown-dark)',
                lineHeight: 1.8,
                fontWeight: 300,
              }}>
                {artwork.process}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ArtworkModal