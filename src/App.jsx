import React from 'react'
import Header from './components/header';
import HeroSection from './components/heroSection';
import DestinationsSection from './components/destination';
import ContactForm from './components/contect';
import Footer  from './components/footer';
import './App.css'


function App() {
  return (
    <>
     <Header/>
    <HeroSection/>
    <DestinationsSection/>
    <ContactForm/>
    <Footer/>
    </>
  )
}

export default App
