"use strict";

let pokemonRepository = (function () {
  //empty array
  let pokemonList = [];
  //Create variable for PokeAPI endpoint
  let apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=10";

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
    button.addEventListener("click", function (event) {
      showDetails(pokemon);
    });
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
    let url = item.detailsUrl;
    return fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (details) {
        item.imageUrl = details.sprites.front_default;
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
      console.log(pokemon);
    });
  }
  return {
    getAll: getAll,
    add: add,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails,
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
