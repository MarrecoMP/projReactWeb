import "./WorkCardStyles.css"

import React from 'react'

import WorkCard from "./WorkCard"
import WorkCardData from "./WorkCardData"

const Work = () => {
  return (
    <div className="work-container">
        <h1 className="proj-heading">Projetos</h1>
        <div className="proj-container">
            {WorkCardData.map((val,ind) => {
                return(
                    <WorkCard 
                    key={ind}
                    imgsrc={val.imgsrc}
                    tittle={val.tittle}
                    text={val.text}
                    view={val.view}
                    />
                )
            })}
        </div>
    </div>
  )
}

export default Work