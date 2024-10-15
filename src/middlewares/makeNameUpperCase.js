/* eslint-disable no-unused-vars */
const makeNameUpperCase = (store) => (next) => (action) => {
    const modifyNames = action.payload.map(pokemon => {
        return { ...pokemon, name: pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}
    })
    const newActions = {...action, payload: modifyNames}
    next(newActions)
}

export { makeNameUpperCase }