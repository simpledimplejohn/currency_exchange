import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
//import './css/styles.css';
import ExchangeRate from './js/exchageRate';



//check

//$(".test").html(`${process.env.API_KEY}`)
console.log(`The API key is: ${process.env.API_KEY}`)

function getElements(response) {
  if(response.conversion_rates) {
    $('.showRate').html(`<p>${response.conversion_rates["USD"]}</P>`)
    console.log("sent to DOM", response.conversion_rates["USD"])
  } else {
    $('.showErrors').html(`<p>There was an error: ${response}</p>`)
    console.log("getElements error", response)
  }
}


async function makeApiCall(choice) {

  console.log("choice in makeApiCall: ", choice);
  const response = await ExchangeRate.getCountryRate(choice);
  console.log("makeApiCall sends to getElements:", response);
  getElements(response);

}

$(document).ready(function() {
  $('#currency-form').submit(function(event) {
    event.preventDefault();
    let choice = $('#countryCode').val();
    //console.log("form input: ",choice);
    
    $(".showRate").text(makeApiCall(choice));
    //console.log("what's getting sent from form:", makeApiCall(choice));

  })
})

