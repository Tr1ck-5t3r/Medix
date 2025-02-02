import React from 'react'
import Header from './Components/Header'
import Home from './Pages/Home'
import About from './Pages/About'
import Diagnose from './Pages/Diagnose'
import Footer from './Components/Footer'
import "./App.css"
import { Routes, Route  } from 'react-router-dom'
import Terms from './Pages/Terms'

function App() {
  return (
    <main>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/diagnose" element={<Diagnose />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
      <Footer />
    </main>
  )
}

export default App
