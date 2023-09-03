let pokemonRepository = (function () {

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
]

function getAll() {
    return pokemonList;
}
function add (item) {
    pokemonList.push(item);
}

return {
    getAll: function(){
        return pokemonList;
    },
    add: function(item){
        return pokemonList.push(item);
    },
    return: {
        add: add,
        getAll: getAll
    }

  };  

})()

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