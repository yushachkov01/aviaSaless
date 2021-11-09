import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import { Context } from '../index.js'
import { useDispatch } from 'react-redux'


function MyField() {
  const dispatch = useDispatch()
  useEffect(() => {

    fetch("https://booking-com.p.rapidapi.com/v1/hotels/locations?locale=en-gb&name=Berlin", {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "booking-com.p.rapidapi.com",
        "x-rapidapi-key": "043d5b9b8cmshc35d016732b9c2ep1e797ajsne4c65f7355b0"
      }
    })
      .then(response => {
        console.log('---------------------------')
        return response.json();
      })
      .then(response => {
        console.log('-------------->>', response);   // here will be dispatch
        dispatch({ type: 'SEND_RESPONSE', payload: response });

      })
      .catch(err => {
        console.error(err);
      });

  }, [])

  return (

    <div className="inputBlock">

      <h1 className="aviaSales">авиасэйлс</h1>
      <a className="registracion "> Зарегистрироваться</a>
      <a className="entrance"> Войти</a>
      <h1 className="title">Поиск дешёвых авиабилетов</h1>

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


