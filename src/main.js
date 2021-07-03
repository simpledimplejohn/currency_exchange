import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ExchangeRate from './js/exchageRate';

function clearFields() {
  $('.showRate').html("");
  $('.showExchange').text("");
  $('.showErrors').text("");
}

function getElements(response, usdInput) {
  if(response.status) {
    $('.showRate').html(`<p>Your conversion rate is: ${response.conversion_rates["USD"]}</P>`)
    let newValue = Math.floor(usdInput / response.conversion_rates["USD"])
    $('.showExchange').text(`That means ${usdInput} dollars is worth ${newValue} in ${response.base_code} currency`)
  } else {
    $('.showErrors').text(`There was an error: ${response}`)
  }
}

async function makeApiCall(choice, usdInput) {
  const response = await ExchangeRate.getCountryRate(choice);
  getElements(response, usdInput);
}

$(document).ready(function() {
  $('#currency-form').submit(function(event) {
    event.preventDefault();
    let choice = $('#countryCode').val();
    let usdInput = $('#usdInput').val();
    clearFields();
    makeApiCall(choice, usdInput);
  })
})

