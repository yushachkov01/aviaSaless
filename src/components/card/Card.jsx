import React, { useContext } from 'react';
import './Card.css';
import { useSelector } from "react-redux"


const Card = () => {
  const flightData = useSelector(state => state)
  //Данные со 2 страницы
  
  const filteredFlightData = flightData.filter(Boolean).flat()
  
  console.log('Данные со 2 страницы', filteredFlightData)
  
  return (
    <div className="hotel-card">
    
   {filteredFlightData.map((item) =>{
      return(
        <div className="card">
        {(`The name of the hotel: ${item.hotel_name}`)}
        <p>
        {(`Address: ${item.address}`)}
        </p>
        <p>
          {(`Price: ${item.price_breakdown.all_inclusive_price}, ${item.price_breakdown.currency}`)}
        </p>
        <p className="photo_url">
        <img src={item.main_photo_url}></img>
        </p>
        </div>
      ) 
   })}
      {/* {JSON.stringify(flightData)} */}
    </div>
  )
};

export default Card;