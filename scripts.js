const pokemonName = document.getElementById("name");
const pokemonImage = document.getElementById("imagen");
const input = document.getElementById("pokemon");
const containerImage = document.getElementById("containerImage");

async function fetchData() {
  try {
    if (containerImage) {
      containerImage.innerHTML = "";
    }
    const inputValue = input.value.toLowerCase();
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${inputValue}`);
    const json = await data.json();

    pokemonName.innerHTML = json.name;

    const newImage = document.createElement("img");
    newImage.classList.add("image");
    newImage.src = json.sprites.front_default;
    containerImage.appendChild(newImage);
    input.value = "";
  } catch (error) {
    pokemonName.innerHTML = "Pokemon inválido";
  }
}

function enter(e) {
  if (e.keyCode == "13") {
    fetchData();
  }
}
