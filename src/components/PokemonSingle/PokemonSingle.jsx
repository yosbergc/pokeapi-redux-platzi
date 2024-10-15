import './pokemonsingle.css'
function PokemonSingle({ pokemon }) {
    return <article className="pokemonSingle">
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        <strong>{pokemon.name}</strong>
    </article>
}
export { PokemonSingle }