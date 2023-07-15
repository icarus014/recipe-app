import{Link, useNavigate} from 'react-router-dom'
import { useCookies } from 'react-cookie'
import { Navigate } from 'react-router-dom';


export const Navbar = () =>{
    const [cookies, setCookies]=useCookies(["acess_token"]);
    const navigate = useNavigate()
    const logout = () =>{
        setCookies("access_token", "");
        window.localStorage.removeItem("userID")
        navigate("/auth")
    }
    return(
        <div>
            <Link to={"/home"}>Home</Link>
            <Link to={"/create"}>Create Recipe</Link>
            <Link to={"/saved-recipes"}>Saved Recipes</Link>
            {!cookies.access_token ? (<Link to={"/auth"}>Login / Register</Link>) :(<button onClick={logout}>Logout</button>)}
        </div>
    )
}