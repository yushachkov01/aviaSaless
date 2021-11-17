import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {fetchHotels} from '../../utils.js'

function MyField() {
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
        console.log(response)
        const destIds = response.map((item) => {
          return item.dest_id;
        })

        destIds.forEach((destId) => {

          fetchHotels(destId)
            .then(response => {
              console.log(response)
              dispatch({ type: 'SEND_RESPONSE', payload: response.result });
            })
        })
      })
      .catch(err => {
        console.error(err);
      });

  }, [state])




  return (
    <div className="inputBlock">
      <input value={state} onChange={(e) => setState(e.target.value)} className="myCity" style={{ backgroundColor: '#f6f6f6', borderRadius: '10px 0px 0px 10px' }} placeholder='Введите город'></input>
      <input type="date" className="myInputWhen" placeholder="Отъезд"></input>
      <input type="date" className="myInputWhen" placeholder="Приезд" style={{ backgroundColor: '#f6f6f6', borderRadius: '0px 10px 10px 0px' }}></input>


      <Link to="/results" className="myButtonSaveTickets">Найти отель</Link>

    </div>
  )
}

export default MyField;