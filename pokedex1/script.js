const pokeCard = document.querySelector('#poke-card');
const pokeName = document.querySelector('#poke-name');
const pokeImg = document.querySelector('#poke-img');
const pokeImgContainer = document.querySelector('#poke-img-container');
const pokeId = document.querySelector('#poke-id');
const pokeTypes = document.querySelector('#poke-types');
const pokeStats = document.querySelector('#poke-stats');

const procurarPokemon = event => {
    event.preventDefault();
    const { value } = event.target.pokemon;
    console.log(value)
    fetch(`https://pokeapi.co/api/v2/pokemon/${value.toLowerCase()}`)
        .then(data => data.json())
        .then(response => renderPokemonData(response))
        .catch(err => alert("Nome/id errado ou inexistente"))
}

const renderPokemonData = data => {
    const sprite = data.sprites.front_default;
    console.log(sprite)
    const { stats } = data;

    pokeName.textContent = data.name;
    pokeImg.setAttribute('src', sprite);
    pokeId.textContent = `Nº Pokemon:  ${data.id}`;
    renderPokemonStats(stats);
}

const renderPokemonStats = stats => {
    pokeStats.innerHTML = '';
    stats.forEach(stat => {
        console.log(stat)
        const statElement = document.createElement("div");
        const statElementName = document.createElement("div");
        const statElementAmount = document.createElement("div");
        statElementName.textContent = stat.stat.name;
        statElementAmount.textContent = stat.base_stat;
        statElement.appendChild(statElementName);
        statElement.appendChild(statElementAmount);
        pokeStats.appendChild(statElement);
    });
}