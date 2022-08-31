import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const CuisineRecipe = () => {
  let params = useParams();
  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState("instructions");

  const fetchDetails = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.title}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    );
    const detailData = await data.json();
    setDetails(detailData);
  };

  useEffect(() => {
    fetchDetails();
  }, [params.title]);

  return (
    <div className="mt-40 mb-20 flex">
      <div className="flex-1">
        <h2 className="mb-8">{details.title}</h2>
        <img src={details.image} alt={details.title} />
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
            <h3 dangerouslySetInnerHTML={{ __html: details.summary }} />
            <h3 dangerouslySetInnerHTML={{ __html: details.instructions }} />
          </div>
        )}
        {activeTab === "ingredients" && (
          <ul className="mt-8">
            {details.extendedIngredients.map((ingredient) => {
              return (
                <li className="text-xl" key={ingredient.id}>
                  {ingredient.original}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
};

export default CuisineRecipe;
