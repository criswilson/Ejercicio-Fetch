async function fetchData() {
  try {
    const inputValue = document.getElementById("pokemon").value.toLowerCase();
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${inputValue}`);
    const json = await data.json();

    document.getElementById("name").innerHTML = json.name;
    document.getElementById("imagen").src = json.sprites.front_default;
    document.getElementById("pokemon").value = "";
  } catch (error) {
    console.log("Error");
    document.getElementById("name").innerHTML = "Pokemon inválido";
    document.getElementById("imagen").src = " ";
  }
}

function enter(e) {
  if (e.keyCode == "13") {
    fetchData();
  }
}
