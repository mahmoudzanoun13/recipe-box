import Home from "./Home/Home";
import { Route, Routes, useLocation } from "react-router-dom";
import Cuisine from "./Cuisine/Cuisine";
import Searched from "./Searched/Searched";
import Recipe from "./Recipe/Recipe";
import { AnimatePresence } from "framer-motion";
import CuisineRecipe from "./CuisineRecipe/CuisineRecipe";

export const Pages = ({
  recipes,
  onAddModal,
  showEditModal,
  deleteRecipe,
  filteredRecipes,
}) => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <Home
              recipes={recipes}
              onAddModal={onAddModal}
              showEditModal={showEditModal}
              deleteRecipe={deleteRecipe}
              filteredRecipes={filteredRecipes}
            />
          }
        />
        <Route path="/cuisine/:type" element={<Cuisine />} />
        <Route
          path="/searched/:search"
          element={<Searched filteredRecipes={filteredRecipes} />}
        />
        <Route path="/recipe/:name" element={<Recipe recipes={recipes} />} />
        <Route path="/recipe/search/:title" element={<CuisineRecipe />} />
      </Routes>
    </AnimatePresence>
  );
};

export default Pages;
