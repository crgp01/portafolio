import { useState } from 'react'
import type { ContactFormData } from '../types'

function Contact() {
  const [form, setForm] = useState<ContactFormData>({
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    mensaje: '',
  })

  const [enviado, setEnviado] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // 📌 Aquí conectarás tu servicio de email (EmailJS, Formspree, etc.)
    console.log('Formulario enviado:', form)
    setEnviado(true)
  }

  const inputStyle = {
    width: '100%',
    padding: '0.85rem 1rem',
    border: '1px solid var(--border)',
    borderRadius: '2px',
    backgroundColor: 'transparent',
    fontFamily: 'var(--font-sans)',
    fontSize: '0.95rem',
    color: 'var(--brown-dark)',
    outline: 'none',
  }

  return (
    <section id="contacto" style={{
      minHeight: '100vh',
      padding: '5rem 4rem',
      display: 'grid',
      gridTemplateColumns: '0.35fr 0.65fr',
      gap: '4rem',
      alignItems: 'center',
    }}>

      {/* Columna izquierda — formulario */}
      <div>
        <h2 style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 'clamp(2.5rem, 5vw, 4rem)',
          fontWeight: 300,
          color: 'var(--brown-dark)',
          marginBottom: '2.5rem',
        }}>
          Contacto
        </h2>

        {enviado ? (
          <div style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '1.3rem',
            fontWeight: 300,
            color: 'var(--brown-medium)',
            lineHeight: 1.8,
          }}>
            ¡Gracias por tu mensaje! <br />
            Te responderé pronto. 🌿
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <input
              style={inputStyle}
              type="text"
              name="nombre"
              placeholder="Nombre *"
              value={form.nombre}
              onChange={handleChange}
              required
            />
            <input
              style={inputStyle}
              type="text"
              name="apellido"
              placeholder="Apellido"
              value={form.apellido}
              onChange={handleChange}
            />
            <input
              style={inputStyle}
              type="email"
              name="email"
              placeholder="Email *"
              value={form.email}
              onChange={handleChange}
              required
            />
            <input
              style={inputStyle}
              type="tel"
              name="telefono"
              placeholder="No de teléfono"
              value={form.telefono}
              onChange={handleChange}
            />
            <textarea
              style={{ ...inputStyle, minHeight: '130px', resize: 'vertical' }}
              name="mensaje"
              placeholder="Tu mensaje *"
              value={form.mensaje}
              onChange={handleChange}
              required
            />
            <button
              type="submit"
              style={{
                alignSelf: 'flex-start',
                padding: '0.85rem 2.5rem',
                backgroundColor: 'var(--peach)',
                borderRadius: '50px',
                fontFamily: 'var(--font-serif)',
                fontSize: '1.1rem',
                fontWeight: 500,
                color: 'var(--brown-dark)',
                transition: 'background-color 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'var(--peach-dark)')}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'var(--peach)')}
            >
              Enviar
            </button>
          </form>
        )}
      </div>

      {/* Columna derecha — imagen decorativa */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>

        <img src="/images/manzana.png" alt="obra" style={{ width: '100%', borderRadius: '2px' }} />
        <div style={{
          width: '100%',
          aspectRatio: '4/3',
          backgroundColor: 'var(--cream-dark)',
          border: '1px solid var(--border)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        </div>
      </div>

    </section>
  )
}

export default Contact