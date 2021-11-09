import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'


function MyField() {
  const dispatch = useDispatch()

  const [state, setState] = useState('')

  useEffect(() => {

    fetch(`https://booking-com.p.rapidapi.com/v1/hotels/locations?locale=en-gb&name=${state}`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "booking-com.p.rapidapi.com",
        "x-rapidapi-key": "043d5b9b8cmshc35d016732b9c2ep1e797ajsne4c65f7355b0"
      }
    })
      .then(response => {
        return response.json();
      })
      .then(response => {
        const destIds = response.map((item) => {

          return item.dest_id;
        })

        destIds.forEach((destId) => {

          fetch(`https://booking-com.p.rapidapi.com/v1/hotels/search?dest_type=city&checkin_date=2022-07-24&room_number=1&checkout_date=2022-07-25&order_by=popularity&dest_id=${destId}&adults_number=2&units=metric&filter_by_currency=AED&locale=en-gb&children_ages=5%2C0&include_adjacency=true&page_number=0&categories_filter_ids=class%3A%3A2%2Cclass%3A%3A4%2Cfree_cancellation%3A%3A1&children_number=2`, {
            "method": "GET",
            "headers": {
              "x-rapidapi-host": "booking-com.p.rapidapi.com",
              "x-rapidapi-key": "043d5b9b8cmshc35d016732b9c2ep1e797ajsne4c65f7355b0"
            }
          })
          .then(response => {
            return response.json()
          })
            .then(response => {
              console.log(response)
              dispatch({ type: 'SEND_RESPONSE', payload: response.result});
              
            })    
            .catch(err => {
              console.error(err);
            });

        })

      })
      .catch(err => {
        console.error(err);
      });

  }, [state])




  return (
    <div className="inputBlock">
      <input value={state} onChange={(e) => setState(e.target.value)} className="myCity" placeholder="Введите город"></input>
      <input className="myInputWhen" placeholder="Когда"></input>

      <Link to="/results" className="myButtonSaveTickets">Найти отель</Link>

    </div>
  )
}
export default MyField;