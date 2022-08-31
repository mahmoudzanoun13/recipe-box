import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import { NavLink } from "react-router-dom";

export const Category = () => {
  return (
    <div className="flex justify-center my-8">
      <NavLink
        className="flex flex-col justify-center items-center bg-[#494949] rounded-[50%] mr-8 no-underline w-24 h-24 cursor-pointer transform scale-90"
        to={"/cuisine/Italian"}
      >
        <FaPizzaSlice className="text-white text-2xl" />
        <h4 className="text-white text-sm">Italian</h4>
      </NavLink>
      <NavLink
        className="flex flex-col justify-center items-center bg-[#494949] rounded-[50%] mr-8 no-underline w-24 h-24 cursor-pointer transform scale-90"
        to={"/cuisine/American"}
      >
        <FaHamburger className="text-white text-2xl" />
        <h4 className="text-white text-sm">American</h4>
      </NavLink>
      <NavLink
        className="flex flex-col justify-center items-center bg-[#494949] rounded-[50%] mr-8 no-underline w-24 h-24 cursor-pointer transform scale-90"
        to={"/cuisine/Thai"}
      >
        <GiNoodles className="text-white text-2xl" />
        <h4 className="text-white text-sm">Thai</h4>
      </NavLink>
      <NavLink
        className="flex flex-col justify-center items-center bg-[#494949] rounded-[50%] mr-8 no-underline w-24 h-24 cursor-pointer transform scale-90"
        to={"/cuisine/Japanese"}
      >
        <GiChopsticks className="text-white text-2xl" />
        <h4 className="text-white text-sm">Japanese</h4>
      </NavLink>
    </div>
  );
};

export default Category;
