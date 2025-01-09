import React, { useState, useEffect } from "react";
import { fetchRecipes } from "../utils/api";
import RecipeCard from "../Components/RecipeCard";
import Pagination from "../Components/Pagination";
import "./Home.css";

const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false); // State to track loading status

  const handleSearch = async () => {
    setLoading(true); // Set loading to true before fetching data
    const data = await fetchRecipes(query, (currentPage - 1) * 10);
    setRecipes(data.results);
    setTotalPages(Math.ceil(data.totalResults / 14));
    setLoading(false); // Set loading to false after data is fetched
  };

  useEffect(() => {
    handleSearch();
  }, [currentPage]);

  return (
    <div className="home">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search recipes..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {/* Display the loading spinner when data is being fetched */}
      {loading ? (
        <div className="spinner">Loading...</div>
      ) : (
        <div className="recipe-grid">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      )}

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default Home;
