import "./FooterStyles.css"

import React from 'react'
import {FaPhone, FaMailBulk, FaUser, FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa';
const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="user">
                 <h4><FaUser size={20} style={{color:"#fff", marginRight:"2rem"}}/> Miguel Pinheiro | Fernando Cesar | Vinicius Jesus</h4>
                </div>

                <div className="phone">
                    <h4><FaPhone size={20} style={{color:"#fff", marginRight:"2rem"}}/> +55 019 99999-9999 | +55 019 99999-9997 | +55 019 99999-9998</h4>
                </div>

                <div className="email">
                    <h4><FaMailBulk size={20} style={{color:"#fff", marginRight:"2rem"}}/> info@gmail.com </h4>
                </div>
            </div>

            <div className="right">
                <h4>Sobre nós</h4>
                <p>O porftifolio tem como objetivo de mostrar certas habilidades de programação, modelagem e animação em 3D.
                    Inicialmente montado por 3 alunos mas expandindo com recebimento de mais imagens para diulgação de outros trabalhos de mais colaboradores.
                </p>
                <div className="social">
                    <FaFacebook size={20} style={{color:"#fff", marginRight:"2rem"}}/>
                    <FaInstagram size={20} style={{color:"#fff", marginRight:"2rem"}}/>
                    <FaLinkedin size={20} style={{color:"#fff", marginRight:"2rem"}}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer