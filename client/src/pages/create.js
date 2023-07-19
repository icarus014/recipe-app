import {useState} from "react"
import axios from "axios"
import { useGetUserID } from "../hooks/useGetUserID.js";


export const Create = () => {
    const [recipe, setRecipe] = useState({
        name:"",
        ingredients:[],
        instructions:"",
        imageUrl:"",
        cookingTime: 0,
        userOwner:0,
    })

    const userID = useGetUserID();
    
    
    // logic for handling change
    const handleChange = (event) =>{
        // getting name and value of input(reason for name property on each input)
        const{name,value} = event.target;
        setRecipe({...recipe, [name]:value})
    }
    // handle change specific for ingredient
    const handleIngredientChange = (event, idx)=>{
        const{value} = event.target;
        const ingredients = recipe.ingredients
        // changing to value of event 
        ingredients[idx] = value;
        setRecipe({...recipe, ingredients})
       
    }
    
    
    // getting all properties from ingredients array
    const addIngredient = () => {
        setRecipe({...recipe, ingredients: [...recipe.ingredients, ""]})
    }
    
    const onSubmit = async (event) =>{
        event.preventDefault();
        try{
            await axios.post("http://localhost:3001/recipes", recipe );
            alert("Recipe Created");
        } catch(err){
            console.log(err)
        }
    }
    return(
        <div classname='create-recipe'>
            <h2>
                Create Your Recipe
            </h2>
            <form onSubmit={onSubmit}>
                {/* Name */}
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" onChange={handleChange}/>
                <br/>
                {/* ingredients */}
                <br/>
                <label htmlFor="description">Ingredients</label>
                <br/>
                {recipe.ingredients.map((ingredient, idx)=>(
                    <input key={idx} type="text" name="ingredients" value={ingredient} onChange={(event)=>handleIngredientChange(event,idx)}/>
                ))}
                <br/>
                <button onClick={addIngredient} type="button">Add Ingredients</button>
                <br/>
                <br/>
                {/* Description */}
                <label htmlFor="description">Description</label>
                <textarea id="description" name="description" onChange={handleChange}></textarea>
                <br/>
                <br/>
                {/* Instructions */}
                <label htmlFor="instructions">Instructions</label>
                <textarea id="instructions" name="instructions" onChange={handleChange}></textarea>
                <br/>
                <br/>
                {/* image URL */}
                <label htmlFor="imageUrl">Image URL</label>
                <input type="text" id="imageUrl"name="imageUrl" onChange={handleChange}/>
                <br/>
                <br/>
                {/* Cooking Time */}
                <label htmlFor="cookingTime">Cook Time(minutes)</label>
                <input type="number" id="cookingTime" name="cookingTime" onChange={handleChange}/>
                    <br/>
                    <br/>
                    <br/>
                <button type="submit">Create Recipe</button>
            </form>
        </div>
    )

}