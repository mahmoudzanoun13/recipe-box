import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const Cuisine = () => {
  const [cuisine, setCuisine] = useState([]);
  let params = useParams();

  const getCuisine = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`
    );
    const recipes = await data.json();
    setCuisine(recipes.results);
  };

  useEffect(() => {
    getCuisine(params.type);
  }, [params.type]);

  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="grid gap-12"
      style={{ gridTemplateColumns: "repeat(auto-fit, minmax(20rem, 1fr))" }}
    >
      {cuisine.map((item) => {
        return (
          <div key={item.id}>
            <Link to={"/recipe/search/" + item.id}>
              <img
                className="w-full rounded-[2rem]"
                src={item.image}
                alt={item.title}
              />
              <h4 className="text-center p-4">{item.title}</h4>
            </Link>
          </div>
        );
      })}
    </motion.div>
  );
};

export default Cuisine;
