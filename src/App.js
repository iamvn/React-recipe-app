import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "./App.css";
import Axios from "axios";
import { useEffect, useState } from "react";
import Recipiecard from "./recipie-component/recipie-card/RecipieCard";
import Header from "./common-component/Header/Header";
import Aboutus from "./common-component/about-us/AboutUs";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector , useDispatch } from "react-redux";
import { SearchRecipesAction } from './redux/actions/recipiesAction';

function App() {
  const searchRecipeCurrentState = useSelector((state)=>state.searchRecipes.recipes);
  const searchRecipeDispatchAction = useDispatch()
  const [query, setstate] = useState("");

  const YOUR_APP_ID = "3d7c8d7a";
  const YOUR_APP_KEY = "17ac8ceeab2a78407adb250dff94ae94";

  useEffect(()=>{
    fetchRecipe();
  },[])

  var url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&health=alcohol-free`;
  async function fetchRecipe() {
    var result = await Axios({
      method: "get",
      url: url,
    });
    searchRecipeDispatchAction(SearchRecipesAction(result.data.hits))
  }

  const submit = (e) => {
    e.preventDefault();
    fetchRecipe();
  };
  return (
    <BrowserRouter>
      <div className="app">
        <div className="container-fluid">
          <Header />
          <div className="d-flex justify-content-center" id="search-food-div">
            <form className="row g-3 my-3" onSubmit={submit}>
              <div className="col-auto">
                <input
                  className="mx-2 form-control"
                  type="text"
                  placeholder="Enter ingridient"
                  value={query}
                  onChange={(event) => setstate(event.target.value)}
                ></input>
              </div>
              <div className="col-auto">
                <button className="form-control btn btn-primary" type="submit">
                  {" "}
                  Search
                </button>
              </div>
            </form>
          </div>
          <div className="container-fluid">
            <div className="d-flex flex-wrap justify-content-center">
              <Routes>
                <Route
                  path="/"
                  element={searchRecipeCurrentState.map((recipe, index) => {
                    return <Recipiecard key={index} recipe={recipe} />;
                  })}
                ></Route>
                <Route exact path="/about" element={<Aboutus/>}></Route>
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
