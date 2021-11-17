export function fetchHotels(locationId) {
  fetch(`https://booking-com.p.rapidapi.com/v1/hotels/search?dest_type=city&checkin_date=2022-07-24&room_number=1&checkout_date=2022-07-25&order_by=popularity&dest_id=${locationId}&adults_number=2&units=metric&filter_by_currency=AED&locale=en-gb&children_ages=5%2C0&include_adjacency=true&page_number=0&categories_filter_ids=class%3A%3A2%2Cclass%3A%3A4%2Cfree_cancellation%3A%3A1&children_number=2`, {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "booking-com.p.rapidapi.com",
      "x-rapidapi-key": "56fe016395mshc097d1083226cc2p110289jsn2f839cc3763b"
    }
  })
    .then(response => {
      return response.json()
    })
    .catch(err => {
      console.error(err);
    });
}