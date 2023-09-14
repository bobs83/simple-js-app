"use strict";

let pokemonRepository = (function () {
  //empty array
  let pokemonList = [];
  //Create variable for PokeAPI endpoint
  let apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=10";

  //Create variable for the <div> with the id of #modal-container
  let modalContainer = document.querySelector("#modal-container");

  function showModal(pokemon) {
    //Clear all existing modal content
    modalContainer.innerHTML = "";

    //Create div element with class modal
    let modal = document.createElement("div");
    modal.classList.add("modal");

    // added close event function by clicking 'X'
    let closeButton = document.createElement("button");
    closeButton.classList.add("close");
    closeButton.innerText = "X";

    // add the new modal content // button object //
    let closeButtonElement = document.createElement("button");
    closeButtonElement.classList.add("modal-close");
    closeButtonElement.innerText = "Close";
    //event listener to hide the added modal
    closeButtonElement.addEventListener("click", hideModal);
    //added heading
    let titleElement = document.createElement("h1");
    titleElement.innerText = pokemon.name;
    //added body
    let contentElement = document.createElement("p");
    contentElement.innerText =
      "Height: " + pokemon.height + "," + " Weight: " + pokemon.weight;

    //added image
    let imageContainer = document.createElement("img");
    imageContainer.src = pokemon.imageUrl;

    closeButton.addEventListener("click", hideModal);

    modal.appendChild(closeButton);
    //modal.appendChild(closeButtonElement);
    modal.appendChild(titleElement);
    modal.appendChild(contentElement);
    modal.appendChild(imageContainer);

    modalContainer.appendChild(modal);

    modalContainer.classList.add("is-visible");
  }

  function hideModal() {
    let modalContainer = document.querySelector("#modal-container");
    modalContainer.classList.remove("is-visible");
  }

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modalContainer.classList.contains("is-visible")) {
      hideModal();
    }
  });

  // Since this is also triggered when clicking INSIDE the modal
  // We only want to close if the user clicks directly on the overlay
  modalContainer.addEventListener("click", (e) => {
    let target = e.target;
    if (target === modalContainer) {
      hideModal();
    }
  });

  function getAll() {
    return pokemonList;
  }

  //Validate whether a type of the parameter is an object and all expected keys are present in the object
  function add(item) {
    if (typeof item === "object" && "name" in item && "detailsUrl" in item) {
      pokemonList.push(item);
    } else {
      console.log("Please check the inputs");
    }
  }
  //Create public function, where the parameter represent a single Pokémon
  function addListItem(pokemon) {
    //Create a variable for <ul> element
    let pokemonList = document.querySelector(".pokemon-list");
    let listPokemon = document.createElement("li");
    //Create <li> and btn elements
    let button = document.createElement("button");
    //Set the content of btn element and add a class
    button.innerText = pokemon.name;
    button.classList.add("button-class");
    //Append btn to <li> and <li> to <ul>
    listPokemon.appendChild(button);
    pokemonList.appendChild(listPokemon);
    //Add event listener to btn
    button.addEventListener("click", () => showDetails(pokemon));
  }

  //Create public function to fetch data -list of Pokémon- from the API
  function loadList() {
    return fetch(apiUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        json.results.forEach(function (item) {
          let pokemon = {
            name: item.name,
            imageUrl: item.imageUrl,
            detailsUrl: item.url,
          };
          add(pokemon);
        });
      })
      .catch(function (e) {
        console.error(e);
      });
  }

  //Create public function to load details of a Pokémon from the API
  function loadDetails(item) {
    showLoadingMessage();
    let url = item.detailsUrl;
    return fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (details) {
        item.imageUrl = details.sprites.front_default;
        item.weight = details.weight;
        item.height = details.height;
        item.types = details.types;
      })
      .catch(function (e) {
        console.error(e);
      });
  }
  //Create public function to show details "on click" of a Pokémon from the API
  function showDetails(pokemon) {
    loadDetails(pokemon).then(function () {
      showModal(pokemon);
    });
  }

  //  Create public a function show loding messssage while the data is being fetched
  function showLoadingMessage() {
    console.log("Loading...");
  }

  return {
    getAll: getAll,
    add: add,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails,
    showLoadingMessage: showLoadingMessage,
  };
})();

pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});

//Public functions assigned as keys of IIFE
//Create `forEach();` function to iterate over the items in `pokemonList` array in order to display the details of each one as a <li> on index.html
//pokemonRepository.getAll().forEach(function (pokemon) {
//.//  pokemonRepository.addListItem(pokemon);
//});
//Print all `pokemonList` array in console
//console.log(pokemonRepository.getAll());

// adding a pokemon
//pokemonRepository.add({
//  name: 'Gengar',
//  type: ['Ghost, Poison'],
//species: 'Shadow',
//height: 1.5,
//weight: 40,

//});

//practice//
//pokemonRepository.getAll().forEach(function (pokemon){
//  let pokemonList = document.querySelector(".pokemon-list");
//  let listpokemon = document.createElement("li");
//  let button = document.createElement("button");
// button.innerText = pokemon.name;
//  button.classList.add("button-class");
// listpokemon.appendChild(button);
// pokemonList.appendChild(listpokemon);

//});

//pokemonRepository.getAll().forEach(function(pokemon) {
//   pokemonRepository.addListItem(pokemon);
//}
//);
// document.write(`<h3>Pokemon</h3> ${pokemon.name} <br> Type: ${pokemon.type} <br> height: ${pokemon.height} <br> `)

//Part 1: forEach() Loops //
/* 
pokemonList.forEach(function(pokemon){
    document.write(`<h3>Pokemon</h3> ${pokemon.name} <br> Type: ${pokemon.type} <br> height: ${pokemon.height} <br> `)
});
*/

//Part 1.1: forEach() Loops // 2nd way //

//function getAllPokemonsInfo(pokemon){
//  document.write(`<h3>Pokemon</h3> ${pokemon.name} <br> Type: ${pokemon.type} <br> height: ${pokemon.height} <br> `)
//}
// pokemonList.forEach(getAllPokemonsInfo)
