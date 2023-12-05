import { Link } from "react-router-dom"
import "./SobreContentStyles.css"
import unity1 from "../assets/unity1.png"
import bau from "../assets/bau.png"

import React from 'react'

const SobreContent = () => {
  return (
    <div className="sobre">
        <div className="left">
            <h1>Quem Somos?</h1>
            <p>Somos um grupo de estudantes que decidimos colocar nossos futuros projetos e de mais outros colaboradores, nosso intuito pé divulgar nossos trabalhos
                e realizar trabalhos em conjuntos em relação a desenvolvimento de sistemas ou jogos.
            </p>
            <Link to="/contato">
                <button className="btn">Contato</button>
            </Link>
        </div>

        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={unity1} className="img" alt="true"/>
                </div>
                <div className="img-stack bottom">
                    <img src={bau} className="img" alt="true"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SobreContent