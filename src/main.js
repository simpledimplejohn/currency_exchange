import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
//import './css/styles.css';
import ExchangeRate from './js/exchageRate';



//check

//$(".test").html(`${process.env.API_KEY}`)
console.log(`The API key is: ${process.env.API_KEY}`)

function getElements(response, usdInput, choice) {
  if(response) {
    $('.showRate').html(`<p>Your conversion rate is: ${response.conversion_rates["USD"]}</P>`)
    console.log("sent to DOM", response.conversion_rates["USD"])
    let newValue = Math.floor(usdInput / response.conversion_rates["USD"])
    $('.showExchange').text(`That means ${usdInput} dollars is worth ${newValue} in ${choice} currency`)
    console.log("dollars moved",usdInput)
    console.log("converted", newValue)
  } else {
    $('.showErrors').text(`There was an error: ${response}`)
    console.log("getElements error:", response)

  }
}


async function makeApiCall(choice, usdInput) {

  console.log("choice in makeApiCall: ", choice);
  const response = await ExchangeRate.getCountryRate(choice);
  console.log("makeApiCall sends to getElements:", response);
  getElements(response, usdInput, choice);

}

$(document).ready(function() {
  $('#currency-form').submit(function(event) {
    event.preventDefault();
    let choice = $('#countryCode').val();
    let usdInput = $('#usdInput').val();
    console.log("usdInput:",usdInput)
    //console.log("form input: ",choice);
    makeApiCall(choice, usdInput);
    //$(".showRate").text(makeApiCall(choice));
    //console.log("what's getting sent from form:", makeApiCall(choice, usdInput));

  })
})

