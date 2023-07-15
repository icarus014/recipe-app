import { useState } from 'react'

export const Auth = () =>{
    return(
        <div>
            <Login />
            <Register />
        </div>
    )

}

const Login = ( )=>{
    return(
        <div>
            Login
        </div>
    )
}
const Register = ( )=>{
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    return(
        <div>
            <form>
                <h2>Register</h2>
                <div>
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" value={username} onChange={(event) =>setUsername(event.target.value)}/>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="text" id="password" value={password} onChange={(event) => setPassword(event.target.value)}/>
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    )
}