import { combineReducers } from "redux";
import { SearchRecipesReducers } from './searchRecipeReducers';


const rootReducers = combineReducers ({
    searchRecipes:SearchRecipesReducers,
});

export default rootReducers;
