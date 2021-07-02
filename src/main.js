import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
//import './css/styles.css';

import ExchangeRate froom './js/exchangerate'

$(".test").html(`${process.env.API_KEY}`)
console.log(`The API key is: ${process.env.API_KEY}`)



