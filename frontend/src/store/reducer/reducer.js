const initialState = {
  pokedex: [],
  detail: {
    name: '',
    image: '',
    type: 'water',
    weight: '',
    description: ''
  },
  isLoading: false,
  isError: null
}

function reducer(state = initialState, action){
  const { type, payload } = action
  if(type === "SET_POKEMON") {
    return {
      ...state,
      pokedex: payload
    }
  } else if(type === 'SET_DETAIL'){
      return {
        ...state,
        detail: payload
      }
  } if(type === "SET_LOADING"){
    return {
      ...state,
      isLoading: payload
    }
  } if(type === "SET_ERROR"){
    return {
      ...state,
      isError: payload
    }
  }

  return state
}

export default reducer