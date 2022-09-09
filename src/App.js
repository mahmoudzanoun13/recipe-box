import Category from "./components/Category/Category";
import Pages from "./Pages/Pages";
import Search from "./components/Search/Search";
import { Link } from "react-router-dom";
import { GiKnifeFork } from "react-icons/gi";
import { useEffect, useState } from "react";
import AddRecipe from "./components/AddRecipe/AddRecipe";
import data from "./Data.json";
import EditRecipe from "./components/EditRecipe/EditRecipe";
import { useNavigate } from "react-router-dom";
import ToTop from "./components/ToTop/ToTop";

export function App() {
  const [showAdd, setShowAdd] = useState(false);
  const [recipes, setRecipes] = useState([]);
  const [showEdit, setShowEdit] = useState(false);
  const [currentlyEditing, setCurrentlyEditing] = useState(0);
  const [searchField, setSearchField] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = () => {
    const check = localStorage.getItem("recipes");
    if (check) {
      setRecipes(JSON.parse(check));
    } else {
      localStorage.setItem("recipes", JSON.stringify(data.recipes));
      setRecipes(data.recipes);
    }
  };

  const showAddModal = () => {
    setShowAdd(!showAdd);
  };

  const addRecipe = (recipe) => {
    recipes.push(recipe);
    localStorage.setItem("recipes", JSON.stringify(recipes));
    setRecipes(recipes);
    showAddModal();
  };

  const showEditModal = (index) => {
    setShowEdit(!showEdit);
    setCurrentlyEditing(index);
  };

  const editRecipe = (
    newTitle,
    newInstructions,
    newIngredients,
    newImage,
    currentlyEditing
  ) => {
    recipes[currentlyEditing] = {
      title: newTitle,
      instructions: newInstructions,
      ingredients: newIngredients,
      image: newImage,
    };
    localStorage.setItem("recipes", JSON.stringify(recipes));
    setRecipes(recipes);
    showEditModal(currentlyEditing);
  };

  const deleteRecipe = (index) => {
    const newRecipes = recipes.slice();
    newRecipes.splice(index, 1);
    localStorage.setItem("recipes", JSON.stringify(newRecipes));
    setRecipes(newRecipes);
    alert("Deleted successfully");
    setCurrentlyEditing(0);
  };

  const onSearchChange = (event) => {
    setSearchField(event.target.value);
  };

  const filteredRecipes = recipes.filter((recipe) => {
    return recipe.title.toLowerCase().includes(searchField.toLowerCase());
  });

  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/searched/" + searchField);
    setTimeout(() => {
      setSearchField("");
    }, 600);
  };

  return (
    <>
      <div className="flex items-center py-16">
        <GiKnifeFork />
        <Link
          to={"/"}
          className="text-2xl font-normal no-underline"
          style={{ fontFamily: "Lobster Two, cursive" }}
        >
          Food
        </Link>
      </div>
      <Search
        searchField={searchField}
        onSearchChange={onSearchChange}
        submitHandler={submitHandler}
      />
      <Category />
      <Pages
        recipes={recipes}
        onAddModal={showAddModal}
        showEditModal={showEditModal}
        deleteRecipe={deleteRecipe}
        filteredRecipes={filteredRecipes}
      />
      <AddRecipe onShow={showAdd} onAdd={addRecipe} onAddModal={showAddModal} />
      <EditRecipe
        onShow={showEdit}
        onEdit={editRecipe}
        onEditModal={() => showEditModal(currentlyEditing)}
        currentlyEditing={currentlyEditing}
        recipe={recipes[currentlyEditing]}
      />
      <ToTop />
    </>
  );
}

export default App;
