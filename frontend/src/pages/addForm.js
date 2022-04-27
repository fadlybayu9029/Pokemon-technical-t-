import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { postPokemon } from "../store/action/actionCreator";

function AddForm() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [data, setData] = useState({
    name: '',
    image: '',
    type: 'water',
    weight: '',
    description: ''
  })

  const [errorInput, seterrorInput] = useState('')

  const submitPokemon = function(e){
    e.preventDefault()
    if(data.name === '' || data.image === '' || data.weight === '' || data.description === ''){
      seterrorInput(`one of the input is empty please fill it`)
    }
    else {
      dispatch(postPokemon(data)).then(() => navigate('/'))
    } 
  }

  const inputHandle = function(el){
    setData({
      ...data,
      [el.target.name]: el.target.value
    })
  }

  return (
    <>
      <main className="container">
        {errorInput && <AlertNotice message={errorInput} />}
        <form onSubmit={submitPokemon}>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Name
            </label>
            <input 
            type="text" 
            class="form-control" 
            id="exampleInputEmail1"
            name="name"
            value={data.name}
            onChange={inputHandle}
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Weight
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleInputPassword1"
              name="weight"
              value={data.weight}
              onChange={inputHandle}
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword2" class="form-label">
              Image
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleInputPassword2"
              name="image"
              value={data.image}
              onChange={inputHandle}
            />
          </div>
          <div class="form-group">
            <label for="exampleFormControlTextarea1">Description</label>
            <textarea
              class="form-control mb-3"
              id="exampleFormControlTextarea1"
              rows="3"
              name="description"
              value={data.description}
              onChange={inputHandle}
            ></textarea>
          </div>
          <select 
          class="form-select" 
          aria-label="Default select example"
          name="type"
          value={data.type}
          onChange={inputHandle}
          >
            <option value="water">Water</option>
            <option value="grass">Grass</option>
            <option value="fire">Fire</option>
          </select><br></br>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </main>
    </>
  );
}

function AlertNotice({message}){
  return(
    <div class="alert alert-primary" role="alert">
      {message}
      </div>
  )
}

export default AddForm;
