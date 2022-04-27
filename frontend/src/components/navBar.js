import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { filterPokemon, getPokemon } from "../store/action/actionCreator";

export default function Navbar() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <Link to='/' class="nav-link active" aria-current="page" onClick={dispatch(getPokemon())}>
                Home
              </Link>
              <Link to="/addform" class="nav-link" href="#">
                Add Pokemon
              </Link>
              <button >Fire</button>
              <button>Water</button>
              <button>Grass</button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
