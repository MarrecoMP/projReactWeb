import "./FormStyles.css"

import React from 'react'

const Form = () => {
  return (
    <div className="form">
        <form>
        <label>Seu nome</label>
        <input type="text"></input>
        <label>Seu email</label>
        <input type="email"></input>
        <label>Asssunto</label>
        <input type="text"></input>
        <label>Mensagem</label>
        <textarea rows="6" placeholder="Escreva sua mensagem"/>
        <button className="btn">Enviar</button>
        </form>
    </div>
  )
}

export default Form