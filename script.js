/**
 * [x] 1. Initialize an XMLHttpRequest constructor
 * [x] 2. Open a GET request, set the headers and response type
 * [x] 3. Output successful response
 * [x] 4. Output error state
 * [x] 5. Combine with an event listener (button)
 * [x] 6. Adjust UI states accordingly
 * [x] 7. Bonus: change button CTA to indicate if it's the first joke or a "next" one
 */

const API_ENDPOINT = 'https://icanhazdadjoke.com/';
const XHR = new XMLHttpRequest();

const buttonSelector = document.getElementById('button');
const jokeSelector = document.getElementById('joke');
const errorSelector = document.getElementById('error-message');
const errorContainerSelector = document.getElementById('error-container');
const loaderSelector = document.getElementById('loader');
const buttonTextSelector = document.getElementById('cta');

function setDisabledUiState(isDisabled) {
  setLoaderState(isDisabled);
  setButtonState(isDisabled);
}

function showData(joke) {
  setDisabledUiState(false)
  jokeSelector.innerHTML = joke;
}

function showError(error) {
  setDisabledUiState(false)
  errorSelector.innerHTML = error;
  errorContainerSelector.style.display = 'block';
}

function setLoaderState(isVisible) {
  const displayState = isVisible ? 'block' : 'none';
  loaderSelector.style.display = displayState;
}

function setButtonState(isDisabled) {
  if (isDisabled) {
      buttonSelector.setAttribute('disabled', 'disabled');
  } else {
      buttonSelector.removeAttribute('disabled');
  }

  const buttonCtaState = isDisabled ? 'none' : 'block';
  buttonTextSelector.style.display = buttonCtaState;
}

function setButtonCta(isError) {
  const buttonCta = isError ? "Let's try again.." : 'Make another funny!';
  buttonTextSelector.innerHTML = buttonCta;
}

const fetchData = () => {
  XHR.open('GET', API_ENDPOINT);
  XHR.setRequestHeader('Accept', 'application/json');
  XHR.responseType = 'json';
  // console.log(XHR);
  XHR.onload = function() {
    showData(XHR.response.joke)
    setButtonCta(false);
  }
  XHR.onerror = function() {
    showError('Sad No Go, Again You Try');
    setButtonCta(true);
  } 
  XHR.send();
} 

buttonSelector.addEventListener('click', function() {
  setDisabledUiState(true)
  fetchData();
});