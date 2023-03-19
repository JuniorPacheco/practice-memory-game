import React from 'react'

const Card = ({card, handleClickCard}) => {
  return (
    <article onClick={() => handleClickCard(card)} className={`card ${card.active ? "active" : ""}`}>
      <i className={`bx bxl-${card.name}`} ></i>
    </article>
  )
}

export default Card