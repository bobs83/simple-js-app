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

//Write the list //
/*
for (let i = 0; i < pokemonList.length; i++) {
    document.write(`<h3>Pokemone</h3> ${pokemonList[i].name} <br> Type: ${pokemonList[i].type} <br> height: ${pokemonList[i].height} <br> `)
}
*/

//Conditional to print “Wow, that’s big!” //

for (let i=0; i<pokemonList.length; i++) {
if (pokemonList[i].height >= 1) {
    document.write(`<h3> Bigger Pokemon</h3> ${pokemonList[i].name} <br> Type: ${pokemonList[i].type} <br> Height: ${pokemonList[i].height} - Wow, that's big! <br> `)
}
    else {
        document.write(`<h3> Normal Pokemon</h3> ${pokemonList[i].name} <br> Type: ${pokemonList[i].type} <br> Height: ${pokemonList[i].height} <br> `)
    }
}