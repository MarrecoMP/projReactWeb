import React from 'react'

import NavBar from '../componentes/NavBar'
import Footer from '../componentes/Footer'
import HeroImg2 from '../componentes/HeroImg2'
import TabelaPrecos from '../componentes/TabelaPrecos'
import Work from '../componentes/Work'

const Projeto = () => {
  return (
    <div>
      <NavBar />
      <HeroImg2 heading="PROJETOS." text="Alguns trabalhos realizados." />
      <Work/>
      <TabelaPrecos/>
      <Footer />
    </div>
  )
}

export default Projeto