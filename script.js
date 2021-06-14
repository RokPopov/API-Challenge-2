/**
 * [x] 1. Initialize an XMLHttpRequest constructor
 * [x] 2. Open a GET request, set the headers and response type
 * [x] 3. Output successful response
 * [x] 4. Output error state
 * [x] 5. Combine with an event listener (button)
 * [] 6. Adjust UI states accordingly
 * [] 7. Bonus: change button CTA to indicate if it's the first joke or a "next" one
 */

const API_ENDPOINT = 'https://icanhazdadjoke.com/';
const XHR = new XMLHttpRequest();

const buttonSelector = document.getElementById('button');


const fetchData = () => {
  XHR.open('GET', API_ENDPOINT);
  XHR.setRequestHeader('Accept', 'application/json');
  XHR.responseType = 'json';
  // console.log(XHR);
  XHR.onload = function() {
    console.log('Great Success!!!: ', XHR.response.joke);
  }
  XHR.onerror = function() {
    console.error('Sad No Go');
  } 
  XHR.send();
}

buttonSelector.addEventListener('click', function() {
  fetchData();
})


fetchData();