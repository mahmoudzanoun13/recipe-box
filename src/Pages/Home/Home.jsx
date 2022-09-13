import { motion } from "framer-motion";
import Popular from "../../components/Popular/Popular";
import Vegetarian from "../../components/Vegetarian/Vegetarian";
import { FaPlusCircle } from "react-icons/fa";

export const Home = ({ recipes, onAddModal, showEditModal, deleteRecipe }) => {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <FaPlusCircle
        onClick={() => onAddModal()}
        className="text-blue-500 hover:text-blue-400 text-6xl cursor-pointer transform scale-100 hover:scale-110 duration-500 ease-in-out"
      />
      <Vegetarian
        recipes={recipes}
        showEditModal={showEditModal}
        deleteRecipe={deleteRecipe}
      />
      <Popular
        recipes={recipes}
        showEditModal={showEditModal}
        deleteRecipe={deleteRecipe}
      />
    </motion.div>
  );
};

export default Home;
