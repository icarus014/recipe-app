import React, {useEffect, useState} from "react"
import { useGetUserID } from "../hooks/useGetUserID";
import axios from "axios";


export const Saved = () =>{
    const [savedRecipes, setSavedRecipes] = useState([]);
    const userID = useGetUserID();
    
    useEffect(() => {
        const fetchSavedRecipes = async () => {
          try {
            const response = await axios.get(
              `http://localhost:3001/recipes/saved-recipes/${userID}`
            );
            setSavedRecipes(response.data.savedRecipes);
          } catch (err) {
            console.log(err);
          }
        };
    
        fetchSavedRecipes();
      }, []);
    
      return (
        <div className="flex flex-col">
      <h1 className="font-bold text-white mx-auto mb-96 text-4xl">Saved Recipes</h1>
      <div className="max-w-md rounded overflow-hidden shadow-xl">
        {savedRecipes.map((recipe) => (
          <ul key={recipe._id}>
            <div className="bg-white px-14 pb-7 rounded-xl">
              {/* RECIPE NAME */}
              <div className="flex">
                <h2 className="font-bold text-stone-500 mx-auto mb-5 text-2xl">{recipe.name}</h2>
              </div>
              <div className="flex ">
              </div>
              {/* IMAGE */}
              <div className="flex-col flex">
                <img src={recipe.imageUrl} alt={recipe.name}  className="rounded-xl max-w-sm mb-4 border "/>
              </div>
            </div>
            <div className="text-gray-400 font-bold w-">
              <ul className="bg-gray-700 rounded-xl mt-5 px-5">
                {/* DESCRIPTION */}
                <li className="mb-3">
                  Description: 
                  <p>{recipe.description}</p>
                </li>
                {/* INGREDIENTS */}
                <li className="font-bold text-md mb-4">
                Ingredients: 
                <p>
                  {recipe.ingredients}
                </p>
                </li>
                {/* COOK TIME */}
                <li className="mb-6 font-bold text-md">Cook Time: {recipe.cookingTime} minutes</li>
                {/* INSTRUCTIONS */}
                <li className="mb-4 font-bold text-md">
                  Instructions:
                  <p> {recipe.instructions}</p>
                </li>
              </ul>
            </div>
          </ul>
        ))}
      </div>
    </div>
      );
    

}