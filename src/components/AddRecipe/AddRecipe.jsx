import { useState } from "react";

export const AddRecipe = ({ onShow, onAdd, onAddModal }) => {
  const [title, setTitle] = useState("");
  const [instructions, setInstructions] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [image, setImage] = useState(null);

  const onImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const RegExp = /\s*, \s*/;
    let newRecipe = {
      title: title,
      instructions: instructions,
      ingredients: ingredients.split(RegExp),
      image: image,
    };
    onAdd(newRecipe);
    alert("Added successfully");
    setTitle("");
    setInstructions("");
    setIngredients("");
    setImage(null);
  };

  const handleCancel = () => {
    setTitle("");
    setInstructions("");
    setIngredients("");
    setImage(null);
    onAddModal();
  };

  return (
    <>
      {onShow && (
        <div
          className="relative z-10"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

          <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
              <div className="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full">
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <form className="flex flex-col">
                    <div className="my-2 flex flex-col">
                      <label htmlFor="name">Recipe Name</label>
                      <input
                        onChange={(e) => setTitle(e.target.value)}
                        type="text"
                        required
                        id="title"
                        className="border-2 p-2"
                        placeholder="Enter Name"
                        value={title}
                      />
                    </div>
                    <div className="my-2 flex flex-col">
                      <label htmlFor="instructions">Recipe Instructions</label>
                      <input
                        onChange={(e) => setInstructions(e.target.value)}
                        type="textarea"
                        id="instructions"
                        className="border-2 p-2"
                        placeholder="Enter Instructions"
                        value={instructions}
                      />
                    </div>
                    <div className="my-2 flex flex-col">
                      <label htmlFor="ingredients">Recipe Ingredients</label>
                      <input
                        onChange={(e) => setIngredients(e.target.value)}
                        type="textarea"
                        required
                        id="ingredients"
                        className="border-2 p-2"
                        placeholder="Enter Ingredients (separate by commas)"
                        value={ingredients}
                      />
                    </div>
                    <input type="file" onChange={onImageChange} id="image" />
                  </form>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button
                    onClick={handleSubmit}
                    type="button"
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    Save Recipe
                  </button>
                  <button
                    onClick={() => handleCancel()}
                    type="button"
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AddRecipe;
