import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import { Context } from '../index.js'
import { useDispatch } from 'react-redux'


function MyField() {
  const dispatch = useDispatch()
  useEffect(() => {
    
    fetch("https://google-flights-search.p.rapidapi.com/search?departure_airport_code=SFO&arrival_airport_code=LAX&flight_class=Economy", {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "google-flights-search.p.rapidapi.com",
        "x-rapidapi-key": "56fe016395mshc097d1083226cc2p110289jsn2f839cc3763b"
      }
    })

    
    .then(response => {
      console.log('---------------------------')
      return response.json();
      })
      .then(response => {
        console.log('-------------->>', response);   // here will be dispatch
        dispatch({ type: 'SEND_RESPONSE', payload: response.Places});

      })
      .catch(err => {
        console.error(err);
      });

  }, [])

  return (
    <div className="inputBlock">
      <input className="myInputWhere" placeholder="Откуда"></input>
      <input className="myInputArrival" placeholder="Куда"></input>
      <input className="myInputWhen" placeholder="Когда"></input>
      <input className="myInputBack" placeholder="Обратно"></input>
      <select className="myInputQuantity" aria-label="Default select example">
        <option selected>Количество пассажиров</option>
        <option value="1">1</option>
        <option value="2">1</option>
        <option value="3">3</option>

      </select>
      {/* <input className="myInputQuantity" placeholder="Количество пассажиров"></input> */}
      <Link to="/results" className="myButtonSaveTickets">Найти билеты</Link>

    </div>
  )
}
export default MyField;