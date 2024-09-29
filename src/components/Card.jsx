import React from 'react'
import './Project.css'

const Card = ({ url, title, desc, code }) => {
  return (
    <div>
      <li>
        <div href="#" className="card">
          <img src={url} className="card__image" alt="" />
          <div className="card__overlay">
            <div className="card__header">
              <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
              <div className="card__header-text">
                <h3 className="card__title">{title}</h3>
              </div>
            </div>
            <p className="card__description">{desc}
            </p>
            <a href={code}><button className="pro-btn">Go to Code</button></a>
          </div>
        </div>
      </li>
    </div>
  )
}

export default Card
