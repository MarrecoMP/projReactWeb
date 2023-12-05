import "./WorkCardStyles.css"

import React from 'react'
import { NavLink } from "react-router-dom"

const WorkCard = (props) => {
  return (
    <div className="proj-card">

                <img src={props.imgsrc} alt="image"/>

                <h2 className="proj-tittle">{props.tittle}</h2>

                <div className="proj-details">
                    <p>{props.text}</p>
                    <div className="proj-btns">
                    <NavLink className="btn">View</NavLink>
                    <NavLink className="btn">Source</NavLink>
                    </div>
                </div>

            </div>
  )
}

export default WorkCard