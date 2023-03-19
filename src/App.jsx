import { useState } from 'react'
import './App.css'
import Card from './components/Card'

const arrayCards = [
  {
    id: 1,
    name: "react",
    active: false
  },
  {
    id: 2,
    name: "react",
    active: false
  },
  {
    id: 3,
    name: "javascript",
    active: false
  },
  {
    id: 4,
    name: "javascript",
    active: false
  },
  {
    id: 5,
    name: "redux",
    active: false
  },
  {
    id: 6,
    name: "redux",
    active: false
  },
  {
    id: 7,
    name: "tailwind-css",
    active: false
  },
  {
    id: 8,
    name: "tailwind-css",
    active: false
  },
  {
    id: 9,
    name: "typescript",
    active: false
  },
  {
    id: 10,
    name: "typescript",
    active: false
  },
  {
    id: 11,
    name: "css3",
    active: false
  },
  {
    id: 12,
    name: "css3",
    active: false
  },
]

const randomazerArray = (arrayCards) => {
  return arrayCards.sort(() => Math.random() - 0.5)
}

function App() {

  const [cards, setCards] = useState(randomazerArray(arrayCards))
  const [cardsVerification, setCardsVerification] = useState([])
  const [points, setPoints] = useState(0)

  const handleClickCard = (cardClick) => {
    let reset = false
    let newPoint = false
    const newCards = cards.map(card => {
      if(!(card.id === cardClick.id)) return card

      const newCardState = {...card, active: true}

      if(cardsVerification.length === 0) {
        setCardsVerification([...cardsVerification, newCardState])
      }
      if(cardsVerification.length === 1) {
        if(cardsVerification[0].name === cardClick.name){
          newPoint = true;
        }else {
          reset = true;
        }
      }
      return newCardState
    })
    if(reset){
      const cardsReset = cards.map(card => {
        if(card.name === cardsVerification[0].name){
          return {...card, active: false}
        }else {
          return card
        }
      })
      setCardsVerification([])
      setCards(cardsReset)
    }else {

      if(newPoint) {
        setPoints(points + 1)
        setCardsVerification([])
      }
      setCards(newCards)
      
    }
  }

  if(points === 6) {
    setCards(randomazerArray(arrayCards))
    setPoints(0)
    alert("Congratulations you win")
  }

  return (
    <div className="App">
      <h1>{points}</h1>
      <section className='cards-container'>
        <Card card={cards[0]} handleClickCard={handleClickCard}/>
        <Card card={cards[1]} handleClickCard={handleClickCard}/>
        <Card card={cards[2]} handleClickCard={handleClickCard}/>
        <Card card={cards[3]} handleClickCard={handleClickCard}/>
        <Card card={cards[4]} handleClickCard={handleClickCard}/>
        <Card card={cards[5]} handleClickCard={handleClickCard}/>
        <Card card={cards[6]} handleClickCard={handleClickCard}/>
        <Card card={cards[7]} handleClickCard={handleClickCard}/>
        <Card card={cards[8]} handleClickCard={handleClickCard}/>
        <Card card={cards[9]} handleClickCard={handleClickCard}/>
        <Card card={cards[10]} handleClickCard={handleClickCard}/>
        <Card card={cards[11]} handleClickCard={handleClickCard}/>
      </section>
    </div>
  )
}

export default App
