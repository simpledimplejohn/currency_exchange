import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
//import './css/styles.css';
import ExchangeRate from './js/exchageRate';



//check

//$(".test").html(`${process.env.API_KEY}`)
console.log(`The API key is: ${process.env.API_KEY}`)

function getElements(response) {
  if(response) {
    $('.showRate').html(`<p>${response}</P>`)
    console.log("getElements works", response)
  } else {
    $('.showErrors').text(`"There was an error: ${response}`)
    console.log("getElements error ", response)
  }
}


async function makeApiCall(choice) {

  console.log("choice in makeApiCall: ", choice);
  const response = await ExchangeRate.getCountryRate(choice);
  console.log("conversion rate =", response.conversion_rates["USD"]);
  getElements(response.conversion_rates["USD"]);

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

