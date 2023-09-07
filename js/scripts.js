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

function showDetails(pokemon){
    console.log(pokemon);
  };

return {
    getAll: function getAll() {
      return pokemonList;
    },
    add: function (item) {
      if (typeof item === "object" &&
       'name' in item && 
       'type' in item && 
       'species' in item && 
       'height' in item && 
       'weight' in item) {
        pokemonList.push(item);
      } else {
        console.log("Please check your details");
      }
    },
    addListItem: function addListItem(pokemon) {
      let pokemonList = document.querySelector(".pokemon-list");
      let listPokemon = document.createElement("li");
      let button = document.createElement("button");
        button.innerText = pokemon.name;
        button.classList.add("button-class");
        listPokemon.appendChild(button);
        pokemonList.appendChild(listPokemon);
        button.addEventListener('click', () => showDetails(pokemon));
    },
  };

})();


pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
// Using the get all function
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