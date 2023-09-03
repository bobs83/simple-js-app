let pokemonList = [];

pokemonList=[
    
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
        name: 'Mewtwo',
        type: ['Psychic'],
        species: 'Genetic',
        height: 2,
        weight: 122,

    }
];

//console.log(pokemonList);

//Part 1: forEach() Loops //
/* 
pokemonList.forEach(function(pokemon){
    document.write(`<h3>Pokemon</h3> ${pokemon.name} <br> Type: ${pokemon.type} <br> height: ${pokemon.height} <br> `)
});
*/

//Part 1.1: forEach() Loops // 

function getAllPokemonsInfo(pokemon){
    document.write(`<h3>Pokemon</h3> ${pokemon.name} <br> Type: ${pokemon.type} <br> height: ${pokemon.height} <br> `)
}
 pokemonList.forEach(getAllPokemonsInfo)
  