import React from 'react'

import NavBar from '../componentes/NavBar'
import Footer from '../componentes/Footer'
import HeroImg2 from '../componentes/HeroImg2'
import Form from '../componentes/Form'

const Contato = () => {
  return (
    <div>
      <NavBar />
      <HeroImg2 heading="CONTATO." text="Deixe uma mensagem :D"/>
      <Form />
      <Footer />
    </div>
  )
}

export default Contato