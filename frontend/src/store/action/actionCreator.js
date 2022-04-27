const baseUrl = "http://localhost:3000"

function getPokemon(){
  return(dispatch) => {
    dispatch(setLoading(true))
    fetch(`${baseUrl}/pokemon`)
    .then((result) => {
      if(!result.ok) throw new Error('error at getPokemon')
      else return result.json()
    })
    .then(data => {
      dispatch(setPokemon(data))
      dispatch(setLoading(false))
    })
    .catch(err => {
      console.log('error')
    })
  }
}

function filterPokemon(query){
  return(dispatch) => {
    dispatch(setLoading(true))
    fetch(`${baseUrl}/pokemon?type=${query}`)
    .then((result) => {
      if(!result.ok) throw new Error('error at getPokemon')
      else return result.json()
    })
    .then(data => {
      dispatch(setPokemon(data))
      dispatch(setLoading(false))
    })
    .catch(err => {
      dispatch(setError(err))
    })
  }
}

function getPokemonById(id){
  return(dispatch) => {
    dispatch(setLoading(true))
    fetch(`${baseUrl}/pokemon/${id}`)
    .then((result) => {
      if(!result.ok) throw new Error('error at getPokemon')
      else return result.json()
    })
    .then(data => {
      dispatch(setDetail(data))
      dispatch(setLoading(false))
    })
    .catch(err => {
      dispatch(setError(err))
    })
  }
}

function setPokemon(payload){
  return {
    type: "SET_POKEMON",
    payload
  }
}

function setDetail(payload){
  return {
    type: "SET_DETAIL",
    payload
  }
}

function setLoading(payload){
  return {
    type: "SET_LOADING",
    payload
  }
}

function setError(payload){
  return {
    type: "SET_ERROR",
    payload
  }
}

function postPokemon(payload){
  return async (dispatch) => {
    try {
      const result = await fetch(`${baseUrl}/pokemon`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(payload)
      })
      if(!result.ok) throw new Error('error at PostPokemon')
      else return Promise.resolve('done')
    } catch (err) {
      dispatch(setError(err))
    }
  }
}


function destroyPokemon(id) {
  return async (dispatch) => {
    try {
      const result = await fetch(`${baseUrl}/pokemon/${id}`, {
        method: "DELETE",
        headers: {"Content-Type": "application/json"}
      })
      if(!result.ok) throw new Error('error at PostPokemon')
      else return Promise.resolve('done')
    } catch (error) {
      console.log(error)
    }
  }
}

export {
  getPokemon,
  postPokemon,
  getPokemonById,
  destroyPokemon,
  filterPokemon
}