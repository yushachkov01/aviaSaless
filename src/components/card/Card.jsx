import React, { useContext } from 'react';
import './Card.css';
import { useSelector } from "react-redux"


const Card = () => {
  const flightData = useSelector(state => state)
  return (

    <div className="card">
    <h1>Hello World</h1>
      {JSON.stringify(flightData)}
    </div>
  )
};

export default Card;