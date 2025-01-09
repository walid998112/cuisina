import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchRecipeDetails } from "../utils/api";
import "./RecipeDetails.css"

const RecipeDetails = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      const data = await fetchRecipeDetails(id);
      setRecipe(data);
    };
    fetchDetails();
  }, [id]);

  if (!recipe) return <div>Loading...</div>;

  return (
    <div className="recipe-details">
      <img src={recipe.image} alt={recipe.title} className="recipe-image" />
      <h1>{recipe.title}</h1>
      <h2>Ingredients:</h2>
      <ul>
        {recipe.extendedIngredients.map((ingredient) => (
          <li key={ingredient.id}>{ingredient.original}</li>
        ))}
      </ul>
      <h2>Instructions:</h2>
      <p>{recipe.instructions}</p>
    </div>
  );
};

export default RecipeDetails;