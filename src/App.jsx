import './App.css'
import Header from './components/header/Header.jsx'
import Hero from './components/hero/Hero.jsx'
import Sponsor from './components/sponsor/Sponsor.jsx'
import Info from './components/info/Info.jsx'
import Portfolio from './components/portfolio/Portfolio.jsx'

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Hero />
        <Sponsor />
        <Info />
        <Portfolio />
      </div>
    </div>
  )
}

export default App
