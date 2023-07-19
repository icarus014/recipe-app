import {useState} from "react"

export const Create = () => {
    const [recipe, setRecipe] = useState({
        name:"",
        ingredients:[],
        instructions:"",
        imageUrl:"",
        cookingTime: 0,
        userOwner:0
    })
    // logic for handling change
    const handleChange = (event) =>{
        // getting name and value of input(reason for name property on each input)
        const{name,value} = event.target;
        setRecipe({...recipe, [name]:value})
    }
    return(
        <div classname='create-recipe'>
            <h2>
                Create Your Recipe
            </h2>
            <form>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" onChange={handleChange}/>
                <br/>
                <label htmlFor="description">Ingredients</label>
                <br/>
                <label htmlFor="description">Description</label>
                <textarea id="description" name="description" onChange={handleChange}></textarea>
                <br/>
                <br/>
                <label htmlFor="instructions">Instructions</label>
                <textarea id="instructions" name="instructions" onChange={handleChange}></textarea>
                <br/>
                <br/>
                <label htmlFor="imageUrl">Image URL</label>
                <input type="text" id="imageUrl"name="imageUrl" onChange={handleChange}/>
                <br/>
                <br/>
                <label htmlFor="cookingTime">Cook Time(minutes)</label>
                <input type="number" id="cookingTime" name="cookingTime" onChange={handleChange}/>
            </form>
        </div>
    )

}