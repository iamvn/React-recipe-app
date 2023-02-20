import { ActionType } from "../constants/action-type";

export const SearchRecipesAction = (searchedRecipe) => {
    return {
        type: ActionType.SEARCH_RECIPE,
        payload: searchedRecipe,
    };
};
