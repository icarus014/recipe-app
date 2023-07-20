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
      }, [userID]);
    
      return (
        <div>
          <h1>Saved Recipes</h1>
          <ul>
            {savedRecipes.map((recipe) => (
              <li key={recipe._id}>
                <div>
                  <h2>{recipe.name}</h2>
                </div>
                <p>{recipe.description}</p>
                <img src={recipe.imageUrl} alt={recipe.name} />
                <p>Cooking Time: {recipe.cookingTime} minutes</p>
              </li>
            ))}
          </ul>
        </div>
      );
    

}