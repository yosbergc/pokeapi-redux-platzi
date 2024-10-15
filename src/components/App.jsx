/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setPokemon } from '../actions/actionCreators'
import './App.css'
function App() {
  const pokemons = useSelector(state => state.pokemons)
  const dispatch = useDispatch()
  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=10&offset=0')
      .then(response => response.json())
      .then(data => dispatch(setPokemon(data.results)))
      .catch(error => console.error(error))
  }, [])
  return (
    <>
      <h1>Pokedux</h1>
      <form>
        <input type="text" name="" id="" />
        <button>Search</button>
      </form>
      {
        pokemons.length > 0 && pokemons.map(pokemon => {
          return <article key={pokemon.name}>
            {pokemon.name}
          </article>
        })
      }

    </>
  )
}

export default App
