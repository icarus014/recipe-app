import React from "react"
import{Link, useNavigate} from 'react-router-dom'
import { useCookies } from 'react-cookie'




export const Navbar = () =>{
    const [cookies, setCookies]=useCookies(["access_token"]);
    const navigate = useNavigate()
    
    const logout = () =>{
        setCookies("access_token", "");
        window.localStorage.clear()
        navigate("/auth")
    }
    return(
        <nav className=" w-full bg-slate-400 ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 ">
            <ul className="flex flex-col mx-auto font-medium p-4 md:p-0 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0  md:dark:bg-slate-90 dark:border-gray-00">
                <li className="block py-2 pl-3 pr-4 text-grey-800 rounded text-xl hover:bg-slate-500 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-stone-300 md:dark:hover:text-slate-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                <Link to={"/"}>Home</Link>
                </li>
                <li className="block py-2 pl-3 pr-4 text-gray-900 rounded text-xl hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-stone-300 md:dark:hover:text-slate-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                <Link to={"/create"}>Create Recipe</Link>
                </li>
                <li className="block py-2 pl-3 pr-4 text-gray-900 rounded text-xl hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-stone-300 md:dark:hover:text-slate-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                <Link to={"/saved-recipes"}>Saved Recipes</Link>
                </li>
                <li className=" bg-slate-600 block py-2 pl-4 pr-4 text-gray-900 rounded text-xl hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-stone-300 md:dark:hover:text-slate-900 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                {!cookies.access_token ? (<Link to={"/auth"}>Login / Register</Link>) :(<button onClick={logout} className="px-4">Logout</button>)}
                </li>
            </ul>
        </div>
        </nav>
    )
}