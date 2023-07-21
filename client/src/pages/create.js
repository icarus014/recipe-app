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
        <div className='w-full max-w-xs mb-96'>
            <h2 className="text-stone-100 ml-20 mb-4 font-bold text-2xl">Create Your Recipe</h2>
            <form onSubmit={handleSubmit} className="bg-white text-gray-700 shadow-md rounded-lg font-bold">
                {/* Name */}
                <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                <input 
                    type="text" 
                    id="name" 
                    name="name"
                    value={recipe.name}
                    onChange={handleChange}
                    className="shadow-xl appearance-none border rounded w-full py-1 text-grey-700 leading-tight focus:outline-none mb-3 "
                    />
                <br/>
                {/* INGREDIENTS */}

                </div>
                {/* LABEL FOR INGREDIENTS */}
                <div>                   
                <label htmlFor="ingredients" className="block text-gray-700 mb-3 ">Ingredients</label>
                {recipe.ingredients.map((ingredient, index)=>(
                    <input 
                    key={index} 
                    type="text" 
                    name="ingredients" 
                    value={ingredient}
                    onChange={(event)=>handleIngredientChange(event,index)}
                    className="shadow-xl appearance-none border rounded w-full py-1 px-3 mb-4 text-grey-700 leading-tight focus:outline-none"                    
                    />   
                ))}
                </div>


                <button 
                onClick={handleAddIngredient} 
                type="button"
                className="bg-slate-500 hover:bg-blue-400 rounded-md ml-24 mb-10 font-bold py-1 px-2 text-lg focus:outline-none focus:shadow-outline">
                Add Ingredients
                </button>

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
                <label htmlFor="cookingTime">Cook Time(min)</label>
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
                <button type="submit" className="bg-slate-500 hover:bg-blue-400 rounded-md ml-24 mb-10 font-bold py-1 px-2 text-lg focus:outline-none focus:shadow-outline">
                    Create Recipe
                    </button>
            </form>
        </div>
    )

}