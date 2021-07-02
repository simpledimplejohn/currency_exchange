import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
//import './css/styles.css';
import ExchangeRate from './js/exchageRate';



//check

$(".test").html(`${process.env.API_KEY}`)
console.log(`The API key is: ${process.env.API_KEY}`)

function getElements(response) {
  if(response) {
    console.log("getElements works", response)
  } else {
    console.log("getElements error ", response)
  }
}


async function makeApiCall(choice) {
  try{
    console.log("choice in makeApiCall: ", choice);
    const response = await ExchangeRate.getCountryRate(choice);
    console.log("makeApiCall response: ", response);
    getElements(response);
  }
  catch(err) {
    console.log("await failed error: ", err);
  }
}

$(document).ready(function() {
  $('currency-form').submit(function(event) {
    event.preventDefault();
    let choice = $('#countryCode').val();
    console.log(choice)
    console.log("calling makeApiCall with choice: ", makeApiCall(choice));
    $(".showRate").text(makeApiCall(choice));
  })
})

