import { ACTIONS } from "../actions/types"

const initialState = {
    pokemons: []
}

function reducer(state = initialState, action) {
    if (action.type === ACTIONS.SET_POKEMON) {
        return {...state, pokemons: action.payload}
    }

    return state
}

export { reducer }