export const Create = () => {
    return(
        <div classname='create-recipe'>
            <h2>
                Create Your Recipe
            </h2>
            <form>
                <label htmlFor="name">Name</label>
                <input type="text" id="name"/>
                <br/>
                <label htmlFor="description">Ingredients</label>
                <br/>
                <label htmlFor="description">Description</label>
                <textarea id="description" name="description"></textarea>
                <br/>
                <br/>
                <label htmlFor="instructions">Instructions</label>
                <textarea id="instructions" name="instructions"></textarea>
                <br/>
                <br/>
                <label htmlFor="imageUrl">Image URL</label>
                <input type="text" id="imageUrl"name="imageUrl"/>
                <br/>
                <br/>
                <label htmlFor="cookingTime">Cook Time(minutes)</label>
                <input type="number" id="cookingTime" name="cookingTime"/>
            </form>
        </div>
    )

}