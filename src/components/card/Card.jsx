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
    <p>
   {filteredFlightData.map((item) =>{
      return(JSON.stringify(item.hotel_name))
   })}
   </p>
      {/* {JSON.stringify(flightData)} */}
    </div>
  )
};

export default Card;