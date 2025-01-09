import axios from "axios";

const API_KEY = "4617a8492c23404e9b5cfb4377a58540";
const BASE_URL = "https://api.spoonacular.com/recipes";

export const fetchRecipes = async (query, offset = 0) => {
  const response = await axios.get(
    `${BASE_URL}/complexSearch`,
    {
      params: {
        query,
        number: 10,
        offset,
        apiKey: API_KEY,
      },
    }
  );
  return response.data;
};

export const fetchRecipeDetails = async (id) => {
  const response = await axios.get(`${BASE_URL}/${id}/information`, {
    params: { apiKey: API_KEY },
  });
  return response.data;
};
