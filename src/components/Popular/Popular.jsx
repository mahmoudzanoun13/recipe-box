import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { Link } from "react-router-dom";

export const Popular = ({ recipes, showEditModal, deleteRecipe }) => {
  return (
    <div className="my-16">
      <h3>Popular picks</h3>
      <Splide
        options={{
          perPage: 4,
          arrows: false,
          pagination: false,
          drag: "free",
          gap: "5rem",
        }}
      >
        {recipes.map((recipe, i) => {
          return (
            <SplideSlide key={i}>
              <div className="min-h-[25rem] rounded-[2rem] overflow-hidden relative">
                <Link to={"/recipe/" + recipe.title}>
                  <p className="w-full absolute left-1/2 bottom-0 transform -translate-x-1/2 text-white text-center text-base font-semibold h-2/5 flex justify-center items-center z-10">
                    {recipe.title}
                  </p>
                  <img
                    className="rounded-[2rem] absolute left-0 w-full h-full object-cover"
                    src={recipe.image}
                    alt={recipe.title}
                  />
                  <div
                    className="w-full h-full absolute z-[3]"
                    style={{
                      background:
                        "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5))",
                    }}
                  />
                </Link>
              </div>
              <div className="flex justify-center">
                <button
                  onClick={() => showEditModal(i)}
                  className="bg-yellow-500 hover:bg-yellow-400 text-white font-bold py-1 px-2 border-b-4 border-yellow-700 hover:border-yellow-500 rounded m-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteRecipe(i)}
                  className="bg-red-500 hover:bg-red-400 text-white font-bold py-1 px-2 border-b-4 border-red-700 hover:border-red-500 rounded m-2"
                >
                  Delete
                </button>
              </div>
            </SplideSlide>
          );
        })}
      </Splide>
    </div>
  );
};

export default Popular;
