import React, { useContext } from 'react';
import './Card.css';
import { useSelector } from "react-redux"


const Card = () => {
  const flightData = useSelector(state => state)
  //Данные со 2 страницы
  
  const filteredFlightData = flightData.filter(Boolean).flat()
  
  console.log('Данные со 2 страницы', filteredFlightData)
  
  return (

    <div className="card">
    <h1>Hello World</h1>
   {filteredFlightData.map()}
      {JSON.stringify(flightData)}
    </div>
  )
};

export default Card;