export function fetchHotels(locationId) {
  fetch(`https://booking-com.p.rapidapi.com/v1/hotels/search?dest_type=city&checkin_date=2022-07-24&room_number=1&checkout_date=2022-07-25&order_by=popularity&dest_id=${locationId}&adults_number=2&units=metric&filter_by_currency=AED&locale=en-gb&children_ages=5%2C0&include_adjacency=true&page_number=0&categories_filter_ids=class%3A%3A2%2Cclass%3A%3A4%2Cfree_cancellation%3A%3A1&children_number=2`, {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "booking-com.p.rapidapi.com",
      "x-rapidapi-key": "13ffdc2ed2msh8f75a8db64107c9p1dc280jsn35c024b76365"
    }
  })
    .then(response => {
      return response.json()
    })
    .catch(err => {
      console.error(err);
    });
}

export function fetchLocatons(hotelsId) {
  fetch(`https://booking-com.p.rapidapi.com/v1/hotels/locations?locale=en-gb&name=${hotelsId}`, {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "booking-com.p.rapidapi.com",
      "x-rapidapi-key": "13ffdc2ed2msh8f75a8db64107c9p1dc280jsn35c024b76365"
    }
  })
    .then(response => {
      return response.json();
    })

}