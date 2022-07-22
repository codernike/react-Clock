import React from 'react'
import Clock from './lib/clock'
import Footer from './lib/footer'
import Navbar from './lib/navbar'

export default function App() {
  return (
  <>
  <Navbar/>
  <div ></div>
  <div class="container">
  <Clock/>
  </div>
  <Footer/>
  </>
  )
}
