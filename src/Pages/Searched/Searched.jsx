import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export const Searched = ({ filteredRecipes }) => {
  const [searchedRecipes, setSearchedRecipes] = useState([]);
  let params = useParams();

  const getSearched = () => {
    setSearchedRecipes(filteredRecipes);
  };

  useEffect(() => {
    getSearched(params.search);
  }, [params.search]);

  return (
    <div
      className="grid gap-12"
      style={{ gridTemplateColumns: "repeat(auto-fit, minmax(20rem, 1fr))" }}
    >
      {searchedRecipes.map((item) => {
        return (
          <div key={item.id}>
            <Link to={"/recipe/" + item.title}>
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
    </div>
  );
};

export default Searched;
