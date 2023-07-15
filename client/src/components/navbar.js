import{Link} from 'react-router-dom'

export const Navbar = () =>{
    return(
        <div>
            <Link to={"/home"}>Home</Link>
            <Link to={"/create"}>Create Recipe</Link>
            <Link to={"/saved-recipes"}>Saved Recipes</Link>
            <Link to={"/auth"}>Login / Register</Link>
        </div>
    )
}