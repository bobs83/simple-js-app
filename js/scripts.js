var pokemonRepository = (function () {

let pokemonList = [
    
    {
        name: 'Kadabra',
        type: ['Psychic'],
        species: 'Telekinesis',
        height: 1.3,
        weight: 56.5,
 
    },
    {
        name: 'Flareon',
        type: ['Fire'],
        species: 'Flame',
        height: 0.9,
        weight: 25,

    },
    {
        name: 'Pikachu',
        type: ['Electric'],
        species: 'Mouse',
        height: 0.4,
        weight: 6,

    },
    {
        name: 'Psyduck',
        type: ['Water'],
        species: 'Duck',
        height: 0.8,
        weight: 19.6,

    },
    {
        name: 'Mewtwo',
        type: ['Psychic'],
        species: 'Genetic',
        height: 2,
        weight: 122,

    }
];

// added the ajax with fetch.
fetch('https://pokeapi.co/api/v2/pokemon/')
.then(response => response.json()) 
.catch(response => response ())
.then(pokemonList => {
    console.log(pokemonList)
      });

function showDetails(pokemon){
    console.log(pokemon);
  };

return {
    getAll: function getAll() {
      return pokemonList;
    },
    // Validate whether all expected keys are present in the object using forEach loop
    add: function (item) {
      if (typeof item === "object" &&
       'name' in item && 
       'type' in item && 
       'species' in item && 
       'height' in item && 
       'weight' in item) {
        pokemonList.push(item);
      } else {
        console.log("Invalid Pokemon");
      }
    },
    //Create public function, where the parameter represent a single Pokémon
    addListItem: function addListItem(pokemon) {
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
        button.addEventListener('click', () => showDetails(pokemon));
    },
  };

})();

//Public functions assigned as keys of IIFE
//Create `forEach();` function to iterate over the items in `pokemonList` array in order to display the details of each one as a <li> on index.html 
pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
//Print all `pokemonList` array in console
console.log(pokemonRepository.getAll());

// adding a pokemon
pokemonRepository.add({
    name: 'Gengar',
    type: ['Ghost, Poison'],
    species: 'Shadow',
    height: 1.5,
    weight: 40,

});

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