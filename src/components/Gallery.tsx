import { useState } from 'react'
import { artworks } from '../data/artworks'
import type { Artwork } from '../types'
import ArtworkModal from './ArtworkModal'

function Gallery() {
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null)
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section style={{
      minHeight: '100vh',
      padding: '4rem',
    }}>

      {/* Título */}
      <h2 style={{
        fontFamily: 'var(--font-serif)',
        fontSize: 'clamp(2.5rem, 5vw, 4rem)',
        fontWeight: 300,
        color: 'var(--brown-dark)',
        marginBottom: '0.5rem',
      }}>
        Portafolio
      </h2>

      <p style={{
        fontFamily: 'var(--font-sans)',
        fontSize: '0.95rem',
        color: 'var(--brown-muted)',
        marginBottom: '3rem',
      }}>
        {artworks.length} obras
      </p>

      {/* Grilla */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '1.5rem',
      }}>
        {artworks.map(artwork => (
          <div
            key={artwork.id}
            onClick={() => setSelectedArtwork(artwork)}
            onMouseEnter={() => setHoveredId(artwork.id)}
            onMouseLeave={() => setHoveredId(null)}
            style={{
              position: 'relative',
              cursor: 'pointer',
              overflow: 'hidden',
              borderRadius: '2px',
              border: '1px solid var(--border)',
              aspectRatio: '4/3',
            }}
          >
            {/* Imagen */}
            <img
              src={artwork.imageUrl}
              alt={artwork.alt}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transition: 'transform 0.4s ease',
                transform: hoveredId === artwork.id ? 'scale(1.05)' : 'scale(1)',
              }}
            />

            {/* Overlay en hover */}
            <div style={{
              position: 'absolute',
              inset: 0,
              backgroundColor: 'rgba(44, 24, 16, 0.55)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              padding: '1.25rem',
              opacity: hoveredId === artwork.id ? 1 : 0,
              transition: 'opacity 0.3s ease',
            }}>
              <h3 style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.1rem',
                fontWeight: 500,
                color: 'white',
                marginBottom: '0.25rem',
              }}>
                {artwork.title}
              </h3>
              <p style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.8rem',
                color: 'rgba(255,255,255,0.8)',
              }}>
                {artwork.technique} · {artwork.year}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedArtwork && (
        <ArtworkModal
          artwork={selectedArtwork}
          onClose={() => setSelectedArtwork(null)}
        />
      )}

    </section>
  )
}

export default Gallery