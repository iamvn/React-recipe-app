import { ActionType } from "../constants/action-type"

const intialState = {
    recipes:[]
};

export const SearchRecipesReducers = (state = intialState, action)=>{
switch(action.type){
    case ActionType.SEARCH_RECIPE: 
        return {state, recipes:action.payload};
    default:
        return state;
    }
};
