import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const Recipe = ({ recipes }) => {
  let params = useParams();
  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState("instructions");

  const fetchDetails = () => {
    const recipeDetails = recipes.filter(
      (recipe) => recipe.title === params.name
    );
    setDetails(recipeDetails);
  };

  useEffect(() => {
    fetchDetails();
  }, [params.name]);

  return (
    <div className="mt-40 mb-20 flex">
      <div className="flex-1">
        <h2 className="mb-8">{details[0]?.title}</h2>
        <img src={details[0]?.image} alt={details[0]?.title} />
      </div>
      <div className="ml-3 flex-1">
        <button
          onClick={() => setActiveTab("instructions")}
          className={`${
            activeTab === "instructions"
              ? "bg-[#494949] text-white"
              : "bg-white text-[#494949]"
          } py-4 px-8 border-2 border-solid border-black mr-2 font-semibold`}
        >
          Instructions
        </button>
        <button
          onClick={() => setActiveTab("ingredients")}
          className={`${
            activeTab === "ingredients"
              ? "bg-[#494949] text-white"
              : "bg-white text-[#494949]"
          } py-4 px-8 border-2 border-solid border-black mr-2 font-semibold`}
        >
          Ingredients
        </button>
        {activeTab === "instructions" && (
          <div>
            <h3
              dangerouslySetInnerHTML={{ __html: details[0]?.instructions }}
            />
          </div>
        )}
        {activeTab === "ingredients" && (
          <ul className="mt-8">
            {details[0]?.ingredients.map((ingredient, i) => {
              return (
                <li className="text-xl" key={i}>
                  {ingredient}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Recipe;
