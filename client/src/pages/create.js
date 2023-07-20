import {useState} from "react"
import axios from "axios"
import { useGetUserID } from "../hooks/useGetUserID.js";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";


export const Create = () => {
    const userID = useGetUserID();
    const [cookies, _] = useCookies(["access_token"]);
    const [recipe, setRecipe] = useState({
        name:"",
        description:"",
        ingredients:[],
        instructions:"",
        imageUrl:"",
        cookingTime: 0,
        userOwner:userID,
    })

    const navigate = useNavigate()
    
    
    // logic for handling change
    const handleChange = (event) =>{
        // getting name and value of input(reason for name property on each input)
        const{ name, value } = event.target;
        setRecipe({...recipe, [name]: value})
    }
    // handle change specific for ingredient
    const handleIngredientChange = (event, index)=>{
        const{value} = event.target;
        const ingredients = recipe.ingredients
        // changing to value of event 
        ingredients[index] = value;
        setRecipe({...recipe, ingredients})
       
    }
    
    
    // getting all properties from ingredients array
    const handleAddIngredient = () => {
        setRecipe({...recipe, ingredients: [...recipe.ingredients, ""]})
    }
    
    const handleSubmit = async (event) =>{
        event.preventDefault();
        try{
            await axios.post("http://localhost:3001/recipes", 
            {...recipe},
            {header:{authorization: cookies.access_token}
        
            }
        );
            alert("Recipe Created");
            navigate("/")
        } catch(err){
            console.error(err)
        }
    }
    return(
        <div className='create-recipe'>
            <h2>   Create Your Recipe</h2>
            <form onSubmit={handleSubmit}>
                {/* Name */}
                <label htmlFor="name">Name</label>
                <input 
                    type="text" 
                    id="name" 
                    name="name"
                    value={recipe.name}
                    onChange={handleChange}
                    />
                <br/>
                {/* INGREDIENTS */}
                <br/>
                <label htmlFor="ingredients">Ingredients</label>
                <br/>
                {recipe.ingredients.map((ingredient, index)=>(
                    <input 
                    key={index} 
                    type="text" 
                    name="ingredients" 
                    value={ingredient}
                    onChange={(event)=>handleIngredientChange(event,index)}/>
                ))}
                <br/>

                <button 
                onClick={handleAddIngredient} 
                type="button">
                    Add Ingredients
                </button>

                <br/>
                {/* Description */}
                <label htmlFor="description">Description</label>
                <textarea 
                id="description" 
                name="description" 
                value={recipe.description} 
                onChange={handleChange}>
                </textarea>
                <br/>
                {/* INSTRUCTIONS */}
                <label htmlFor="instructions">Instructions</label>
                <textarea 
                id="instructions" 
                name="instructions" 
                value={recipe.instructions} 
                onChange={handleChange}>
                </textarea>
                <br/>
                <br/>
                {/* IMAGE URL */}
                <label htmlFor="imageUrl">Image URL</label>
                <input type="text" id="imageUrl"name="imageUrl" onChange={handleChange}/>
                <br/>
                <br/>
                {/* Cooking Time */}
                <label htmlFor="cookingTime">Cook Time(minutes)</label>
                <input 
                type="number" 
                id="cookingTime" 
                name="cookingTime" 
                value={recipe.cookingTime} 
                onChange={handleChange}
                />
                    <br/>
                    <br/>
                    <br/>
                <button type="submit">Create Recipe</button>
            </form>
        </div>
    )

}