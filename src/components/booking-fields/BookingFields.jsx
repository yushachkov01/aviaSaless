import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'


function MyField() {

  export function fetchLocations() {
  const dispatch = useDispatch()

  const [state, setState] = useState('')

  useEffect(() => {


    fetch(`https://booking-com.p.rapidapi.com/v1/hotels/locations?locale=en-gb&name=${state}`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "booking-com.p.rapidapi.com",
        "x-rapidapi-key": "56fe016395mshc097d1083226cc2p110289jsn2f839cc3763b"
      }
    })
      .then(response => {
        return response.json();
      })
      .then(response => {
        const destIds = response.map((item) => {

          return item.dest_id;
        })
        
        function fetchHotels(){
        destIds.forEach((destId) => {

          fetch(`https://booking-com.p.rapidapi.com/v1/hotels/search?dest_type=city&checkin_date=2022-07-24&room_number=1&checkout_date=2022-07-25&order_by=popularity&dest_id=${destId}&adults_number=2&units=metric&filter_by_currency=AED&locale=en-gb&children_ages=5%2C0&include_adjacency=true&page_number=0&categories_filter_ids=class%3A%3A2%2Cclass%3A%3A4%2Cfree_cancellation%3A%3A1&children_number=2`, {
            "method": "GET",
            "headers": {
              "x-rapidapi-host": "booking-com.p.rapidapi.com",
              "x-rapidapi-key": "56fe016395mshc097d1083226cc2p110289jsn2f839cc3763b"
            }
          })

            .then(response => {
              return response.json()
            })
            .then(response => {
              console.log(response)
              dispatch({ type: 'SEND_RESPONSE', payload: response.result });

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
      <input value={state} onChange={(e) => setState(e.target.value)} className="myCity" style={{backgroundColor: '#f6f6f6', borderRadius:'10px 0px 0px 10px'}} placeholder='Введите город'></input>
      <input type="date" className="myInputWhen" placeholder="Отъезд"></input>
      <input type="date" className="myInputWhen" placeholder="Приезд" style={{backgroundColor: '#f6f6f6', borderRadius:'0px 10px 10px 0px'}}></input>


      <Link to="/results" className="myButtonSaveTickets">Найти отель</Link>

    </div>
  )
}
}
}
export default {MyField, FetchLocatons};