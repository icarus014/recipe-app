import React, { useEffect, useState } from "react";
import { useGetUserID } from "../hooks/useGetUserID";
import axios from "axios";

export const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [savedRecipes, setSavedRecipes] = useState([]);

  const userID = useGetUserID();

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get("http://localhost:3001/recipes");
        setRecipes(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    const fetchSavedRecipes = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/recipes/saved-recipes/ids/${userID}`
        );
        setSavedRecipes(response.data.savedRecipes);
      } catch (err) {
        console.log(err);
      }
    };

    fetchRecipes();
    fetchSavedRecipes();
  }, []);

  const saveRecipe = async (recipeID) => {
    try {
      const response = await axios.put("http://localhost:3001/recipes", {
        recipeID,
        userID,
      });
      setSavedRecipes(response.data.savedRecipes);
    } catch (err) {
      console.log(err);
    }
  };

  const isRecipeSaved = (id) => savedRecipes.includes(id);

  return (
    <div className="flex flex-col">
        <h1 className="font-bold text-white mx-auto mb-5 text-4xl">Recipes</h1>
      <div className="max-w-md rounded overflow-hidden shadow-xl">
        {recipes.map((recipe) => (
          <ul key={recipe._id}>
            <div className="bg-white px-14 pb-7 rounded-xl ">
              <h2 className="font-bold text-stone-500 mx-auto mb-5 text-2xl">{recipe.name}</h2>
              <button 
              onClick={() => saveRecipe(recipe._id)}
              disabled={isRecipeSaved(recipe._id)}
              className="bg-slate-500 hover:bg-blue-400 rounded-md mx-2 mb-10 font-bold py-1 px-2 text-lg focus:outline-none focus:shadow-outline">
              
                {isRecipeSaved(recipe._id)? "Saved": "Save"}
              </button>
            <img src={recipe.imageUrl} alt={recipe.name}  className="rounded-xl max-w-xs mx-auto"/>
            </div>
            <div className="text-gray-400">
              <ul>
                <li className="font-bold">
                Ingredients: 
                 <p className="text-md">
                  {recipe.ingredients}
                  </p>
                </li>
                <li>{recipe.instructions}</li>
                <li className="mb-6">Cook Time: {recipe.cookingTime} minutes</li>
              </ul>
            </div>
          </ul>
        ))}
      </div>
    </div>
  );
};