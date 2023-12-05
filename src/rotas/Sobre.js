import React from 'react'
import NavBar from '../componentes/NavBar'
import Footer from '../componentes/Footer'
import HeroImg2 from '../componentes/HeroImg2'
import SobreContent from '../componentes/SobreContent'

const Sobre = () => {
  return (
    <div>
      <NavBar />
      <HeroImg2 heading="SOBRE NÓS." text="Somos desenvolvedores de sistemas e jogos em Unity e GameMaker"/>
      <SobreContent />
      <Footer />
    </div>
  )
}

export default Sobre