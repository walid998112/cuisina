import React from "react";
import { Link } from "react-router-dom";
import "./RecipeCard.css"

const RecipeCard = ({ recipe }) => {
  return (
   
    <div className="recipe-card">
      <img src={recipe.image} alt={recipe.title} className="recipe-image" />
      <h3>{recipe.title}</h3>
      <Link to={`/recipe/${recipe.id}`} className="details-link">View Details</Link>
    </div>
    
  );
};

export default RecipeCard;