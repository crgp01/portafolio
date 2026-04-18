import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'

function App() {
  return (
    <div>
      <Navbar />
      <main style={{ paddingTop: '80px' }}>
        <Hero />
        <About />
        <Portfolio />
        <Contact />
      </main>
    </div>
  )
}

export default App