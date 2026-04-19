import { useState } from 'react'
import { artworks } from '../data/artworks'
import type { Artwork } from '../types'
import ArtworkModal from './ArtworkModal'
import { useNavigate } from 'react-router-dom'

const VISIBLE = 3 // cuántas cards se ven a la vez

function Portfolio() {
  const [startIndex, setStartIndex] = useState(0)
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null)
  const navigate = useNavigate()

  const prev = () => setStartIndex(i => 
    i === 0 ? artworks.length - VISIBLE : i - 1
  )
  const next = () => setStartIndex(i => 
    i >= artworks.length - VISIBLE ? 0 : i + 1
  )

  const visibleArtworks = artworks.slice(startIndex, startIndex + VISIBLE)

  return (
    <section id="portafolio" style={{
      minHeight: '100vh',
      padding: '5rem 4rem',
      position: 'relative',
    }}>

      {/* Título */}
      <h2 style={{
        fontFamily: 'var(--font-serif)',
        fontSize: 'clamp(2.5rem, 5vw, 4rem)',
        fontWeight: 300,
        color: 'var(--brown-dark)',
        marginBottom: '3rem',
      }}>
        Portafolio
      </h2>

      {/* Carrusel */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '1.5rem',
      }}>

        {/* Flecha izquierda */}
        <button
        onClick={prev}
        style={{
            fontSize: '2.5rem',
            color: 'var(--brown-dark)',
            flexShrink: 0,
        }}
        >
        ←
        </button>

        {/* Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '2rem',
          flex: 1,
        }}>
          {visibleArtworks.map(artwork => (
            <div
              key={artwork.id}
              onClick={() => setSelectedArtwork(artwork)}
              style={{
                border: '1px solid var(--border)',
                borderRadius: '2px',
                overflow: 'hidden',
                cursor: 'pointer',
                backgroundColor: 'var(--cream)',
                transition: 'transform 0.2s, box-shadow 0.2s',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)'
                ;(e.currentTarget as HTMLDivElement).style.boxShadow = '0 8px 30px rgba(44,24,16,0.1)'
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)'
                ;(e.currentTarget as HTMLDivElement).style.boxShadow = 'none'
              }}
            >
              {/* Imagen */}
              <div style={{
                width: '100%',
                aspectRatio: '4/3',
                overflow: 'hidden',
                backgroundColor: 'var(--cream-dark)',
              }}>
                <img
                  src={artwork.imageUrl}
                  alt={artwork.alt}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.3s',
                  }}
                />
              </div>

              {/* Info */}
              <div style={{ padding: '1.25rem', textAlign: 'center' }}>
                <h3 style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.2rem',
                  fontWeight: 600,
                  color: 'var(--brown-dark)',
                  marginBottom: '0.5rem',
                }}>
                  {artwork.title}
                </h3>
                <p style={{
                  fontFamily: 'var(--font-serif)',
                  fontStyle: 'italic',
                  fontSize: '0.95rem',
                  color: 'var(--brown-light)',
                  lineHeight: 1.6,
                }}>
                  {artwork.technique}<br />
                  {artwork.dimensions && <>{artwork.dimensions}<br /></>}
                  {artwork.year}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Flecha derecha */}
        <button
        onClick={next}
        style={{
            fontSize: '2.5rem',
            color: 'var(--brown-dark)',
            flexShrink: 0,
        }}
        >
         →
        </button>
      </div>

      {/* Indicador de posición */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '0.5rem',
        marginTop: '2rem',
      }}>
        {artworks.map((_, i) => (
          <div
            key={i}
            style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              backgroundColor: 'var(--brown-dark)',
              opacity: i >= startIndex && i < startIndex + VISIBLE ? 1 : 0.2,
              transition: 'opacity 0.2s',
            }}
          />
        ))}
      </div>

      {/* Modal */}
      {selectedArtwork && (
        <ArtworkModal
          artwork={selectedArtwork}
          onClose={() => setSelectedArtwork(null)}
        />
      )}
    {/* Botón ver más */}
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2.5rem' }}>
    <button
        onClick={() => navigate('/portafolio')}
        style={{
        fontFamily: 'var(--font-serif)',
        fontSize: '1rem',
        color: 'var(--brown-medium)',
        letterSpacing: '0.05em',
        borderBottom: '1px solid var(--brown-muted)',
        paddingBottom: '2px',
        transition: 'color 0.2s',
        }}
        onMouseEnter={e => (e.currentTarget.style.color = 'var(--brown-dark)')}
        onMouseLeave={e => (e.currentTarget.style.color = 'var(--brown-medium)')}
    >
        Ver portafolio completo →
    </button>
    </div>
    </section>
  )
}

export default Portfolio