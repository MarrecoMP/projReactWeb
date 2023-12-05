import "./HeroimgStyles.css";

import IntroImg from "../assets/intro-bg.jpg"
import { Link } from "react-router-dom";
import React from 'react'

const Heroimg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="into-img" src={IntroImg} alt="IntroImg"/>
        </div>
        <div className="content">
            <p>OLÁ, SOMOS FREELANCERS.</p>
            <h1>Games and Software Developers.</h1>
            <div>
                <Link to="/projeto" className="btn">Projetos</Link>
                <Link to="/contato" className="btn btn-light">Contatos</Link>
            </div>
        </div>
    </div>
  )
}

export default Heroimg