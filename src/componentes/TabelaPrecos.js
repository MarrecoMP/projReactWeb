import { Link } from "react-router-dom";
import "./TabelaPrecosStyle.css";

import React from 'react'

const TabelaPrecos = () => {
  return (
    <div className="preco">
        <div className="tab-container">
            <div className="tab">
                <h3>- Básico WEB -</h3>
                <span className="bar"></span>
                <p className="btc">R$1000</p>
                <p>- 3 dias -</p>
                <p>- 3 Páginas -</p>
                <p>- Caracterizado -</p>
                <p>- Design Responsivo -</p>
                <Link to="/contato" className="btn">COMPRAR AGORA</Link>
            </div>

            <div className="tab">
                <h3>- Jogo Demo -</h3>
                <span className="bar"></span>
                <p className="btc">R$3000</p>
                <p>- 7 dias -</p>
                <p>- Tematizado a escolha -</p>
                <p>- GameMaker, Unity -</p>
                <p>- Trailer Inlcuido -</p>
                <Link to="/contato" className="btn">COMPRAR AGORA</Link>
            </div>

            <div className="tab">
                <h3>- Modelagem 3D -</h3>
                <span className="bar"></span>
                <p className="btc">R$2000</p>
                <p>- 10 dias -</p>
                <p>- 7 Modelos a escolha -</p>
                <p>- Realismo ou Cartoon -</p>
                <p>- Blender, Unity e Unreal -</p>
                <Link to="/contato" className="btn">COMPRAR AGORA</Link>
            </div>
        </div>
    </div>
  )
}

export default TabelaPrecos