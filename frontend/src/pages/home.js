import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { destroyPokemon, getPokemon } from "../store/action/actionCreator";

export default function Home() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { pokedex, isLoading } = useSelector((state) => state)

  useEffect(() => {
    dispatch(getPokemon())
  }, [])

  const deletePokemon = function(id){
    dispatch(destroyPokemon(id)).then(() => dispatch(getPokemon()))
  }

  if(isLoading){
    return(
      <h1>Loading</h1>
    )
  }

  return (
    <>
      <main>
      <table className="table container table-dark table-striped">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Type</th>
      <th scope="col">Description</th>
      <th scope="col">image</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {pokedex.map((element) => {
      return (
        <tr key={element.id}>
        <th scope="row">{element.name}</th>
        <td>{element.type}</td>
        <td>{element.description}</td>
        <td><img src={element.image} /></td>
        <td>
        <button onClick={function(){deletePokemon(element.id)}}>Delete</button>
          </td>
      </tr>
      )
    })}
  </tbody>
</table>
      </main>
    </>
  );
}

