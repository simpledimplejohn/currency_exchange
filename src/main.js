import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
//import './css/styles.css';
import ExchangeRate from './js/exchageRate';


$(".test").html(`${process.env.API_KEY}`)
console.log(`The API key is: ${process.env.API_KEY}`)



async function makeApiCall(choice) {
  try{
    console.log("choice in makeApiCall: ", choice);
    const response = await ExchangeRate(choice);
    console.log("makeApiCall response: ", response);
    
  }
  catch(err) {
    console.log("await failed error: ", err);
  }
}

$(document).ready(function() {
  console.log("document.read works!");
  let choice = "AUD"
  console.log("calling makeApiCall with choice: ", makeApiCall(choice));
})

