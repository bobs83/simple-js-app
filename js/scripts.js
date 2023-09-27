"use strict";

let pokemonRepository = (function () {
  //empty array
  let pokemonList = [];
  //Create variable for PokeAPI endpoint
  let apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=50";

  function getAll() {
    return pokemonList;
  }
  //Create public function to show details "on click" of a Pokémon from the API
  function showDetails(pokemon) {
    loadDetails(pokemon).then(function () {
      showModal(pokemon);
    });
  }
  //Validate whether a type of the parameter is an object and all expected keys are present in the object
  function add(item) {
    if (typeof item === "object" && "name" in item && "detailsUrl" in item) {
      pokemonList.push(item);
    } else {
      console.log("Please check the inputs");
    }
  }

  // Added function for search bar but dont know how to connect it with the loadlist function. Please help me!
  let searchBar = document.getElementById("form1");
  searchBar.addEventListener("keyup", (e) => {
    let searchString = e.target.value;
    let filterdPokemon = pokemonList.filter((pokemon) => {
      return pokemon.name.includes(searchString);
    });
    console.log(filterdPokemon);
    // showModal(filterdPokemon);
  });

  //Create public function, where the parameter represent a single Pokémon
  function addListItem(pokemon) {
    let pokemonList = document.querySelector(".list-group");
    let listItem = document.createElement("li");
    listItem.classList.add("list__item", "list-group-item");
    let listItemButton = document.createElement("button");
    listItemButton.classList.add("pokemon-block", "btn", "btn-primary");
    listItemButton.setAttribute("data-toggle", "modal");
    listItemButton.setAttribute("data-target", "#pokemonModal");
    let listItemButtonLabel = document.createElement("div");
    listItemButtonLabel.innerText = pokemon.name;

    listItemButton.addEventListener("click", function () {
      showDetails(pokemon);
    });

    let previewImageUrl = document.createElement("img");
    previewImageUrl.classList.add("pokemon-block__image");
    previewImageUrl.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${pokemon.id}.gif`;
    listItemButton.setAttribute("id", pokemon.id);

    listItemButton.appendChild(listItemButtonLabel);
    listItem.appendChild(listItemButton);
    pokemonList.appendChild(listItem);
    listItemButton.appendChild(previewImageUrl);
  }

  function showModal(pokemon) {
    let modalBody = $(".modal-body");
    let modalTitle = $(".modal-title");

    modalTitle.empty();
    modalBody.empty();

    //Create element for name in modal content
    let nameElement = $("<h1>" + pokemon.name + "</h1>");

    //Create element for image in modal content
    let imgElementFront = $('<img class="modal-img">');
    imgElementFront.attr("src", pokemon.imageUrl);

    let heightElement = $("<p>" + "Height : " + pokemon.height + "</p>");
    let weightElement = $("<p>" + "Weight : " + pokemon.weight + "</p>");
    let typesElement = $("<p>" + "Types : " + pokemon.types + "</p>");

    modalTitle.append(nameElement);
    modalBody.append(imgElementFront);
    modalBody.append(heightElement);
    modalBody.append(weightElement);
    modalBody.append(typesElement);
  }

  //Create public function to load details of a Pokémon from the API
  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (details) {
        item.imageUrl = details.sprites.other["official-artwork"].front_default;
        item.weight = details.weight;
        item.height = details.height;
        item.types = [];
        for (var i = 0; i < details.types.length; i++) {
          item.types.push(details.types[i].type.name);
        }
      })
      .catch(function (e) {
        console.error(e);
      });
  }

  //Create public function to fetch data -list of Pokémon- from the API
  function loadList() {
    return (
      fetch(apiUrl)
        //  showmodal(pokemonList); ???
        .then(function (response) {
          return response.json();
        })
        .then(function (json) {
          json.results.forEach(function (item, index) {
            let pokemon = {
              id: index + 1,
              name: item.name,
              imageUrl: item.imageUrl,
              detailsUrl: item.url,
            };
            add(pokemon);
          });
        })
        .catch(function (e) {
          console.error(e);
        })
    );
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
