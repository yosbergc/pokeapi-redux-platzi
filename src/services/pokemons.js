function getPokemons() {
    return fetch('https://pokeapi.co/api/v2/pokemon?limit=10&offset=0')
    .then(response => response.json())
    .then(data => data.results)
    .catch(error => error)
}
function getSinglePokemon(url) {
    return fetch(url)
    .then(response => response.json())
    .then(data => data)
    .catch(error => error)
}
export { getPokemons, getSinglePokemon }