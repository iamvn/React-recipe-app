import React from "react";
import "./RecipieCard.css";
const Recipiecard = ({ recipe }) => {
  return (
    <div className="d-flex flex-column px-1 flex-wrap card shadow-sm" id={recipe["recipe"]["label"]}>
        <img className="recipe_card_img" src={recipe["recipe"]["image"]}></img>
        <small className="h6 text-wrap recipe-label">{recipe["recipe"]["label"]}</small>
        <a href={recipe["recipe"]["url"]} className="btn btn-primary m-3" target="_blank">Read More</a>
    </div>
  );
};

export default Recipiecard;
