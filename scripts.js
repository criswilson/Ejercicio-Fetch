async function fetchData() {
  const inputValue = document.getElementById("pokemon").value.toLowerCase();
  const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${inputValue}`);
  const json = await data.json();

  document.getElementById("name").innerHTML = json.name;
  document.getElementById("imagen").src = json.sprites.front_default;
  document.getElementById("pokemon").value = "";
}

function enter(e) {
  if (e.keyCode == "13") {
    fetchData();
  }
}
