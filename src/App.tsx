import Navbar from './components/Navbar'
import Hero from './components/Hero'

function App() {
  return (
    <div>
      <Navbar />
      <main style={{ paddingTop: '80px' }}>
        <Hero />
        <h1>Hola mundo</h1>
      </main>
    </div>
  )
}

export default App