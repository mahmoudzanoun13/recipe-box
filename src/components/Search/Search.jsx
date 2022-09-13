import { FaSearch } from "react-icons/fa";

export const Search = ({ searchField, onSearchChange, submitHandler }) => {
  return (
    <form onSubmit={submitHandler} className="mx-0 md:mx-80">
      <div className="w-full relative">
        <FaSearch className="absolute top-1/2 left-0 transform translate-x-full -translate-y-1/2 text-white" />
        <input
          onChange={onSearchChange}
          className="border-none bg-[#494949] text-2xl text-white py-4 px-12 rounded-2xl outline-none w-full"
          type="text"
          value={searchField}
        />
      </div>
    </form>
  );
};

export default Search;
