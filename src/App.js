import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import RecipeDetails from "./Pages/RecipeDetails";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState("en");

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const toggleLanguage = () => setLanguage(language === "en" ? "fr" : "en");

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <Router>
        <Navbar
          toggleDarkMode={toggleDarkMode}
          darkMode={darkMode}
          language={language}
          toggleLanguage={toggleLanguage}
        />
        <Routes>   
          <Route path="/" element={<Home />} />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
};
export default App