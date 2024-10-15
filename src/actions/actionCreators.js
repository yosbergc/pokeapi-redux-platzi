import { ACTIONS } from "./types"
function setPokemon(payload) {
    return {
        type: ACTIONS.SET_POKEMON,
        payload
    }
}

export { setPokemon }