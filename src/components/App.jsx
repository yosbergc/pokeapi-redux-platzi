/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setPokemon } from '../actions/actionCreators'
import { getPokemons, getSinglePokemon } from '../services/pokemons'
import { PokemonSingle } from './PokemonSingle/PokemonSingle'
import './App.css'
function App() {
  const pokemons = useSelector(state => state.pokemons)
  const dispatch = useDispatch()
  useEffect(() => {
    const obtenerPokemons = async () => {
      try {
        const pokemons = await getPokemons()
        const pokemonDetails = await Promise.all(pokemons.map(pokemon => getSinglePokemon(pokemon.url)))
        dispatch(setPokemon(pokemonDetails))
      } catch(error) {
        console.error(error)
      }
    }

    obtenerPokemons()
  }, [])
  return (
    <>
      <h1>Pokedux</h1>
      <form>
        <input type="text" name="" id="" />
        <button>Search</button>
      </form>
      <section className="pokemons-container">
        {
          pokemons.length > 0 && pokemons.map(pokemon => {
            return <PokemonSingle key={pokemon.name} pokemon={pokemon} />
          })
        }
      </section>

    </>
  )
}

export default App
