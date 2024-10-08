/*
////////////////////////////////////
  GET JOKE API
////////////////////////////////////
*/

function getJoke(){
  // fetch a joke from the API URL
  fetch("https://v2.jokeapi.dev/joke/Pun")
  // it then converts the response to JSON 
  .then(response => response.json())
  .then(data => {
    const setupElement = document.getElementById('setup');
    const deliveryElement = document.getElementById('delivery');
    
    if(data.type === "single"){
      setupElement.innerHTML = data.joke
      deliveryElement.innerHTML = "";
    }else{
      setupElement.innerHTML = data.setup;
      deliveryElement.innerHTML = data.delivery;
    }
  })
  .catch(error => console.error("Error fetching joke", error));
}

const anotherJoke = document.getElementById('another-joke');

anotherJoke.addEventListener('click', getJoke);

getJoke();