import React from 'react'
import "./login.scss"
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../redux/apiCalls';





function Login() {

    //LOGIN ====================================>
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const { isFetching, error } = useSelector(state => state.user);


    const handleLogin = (e) => {
        e.preventDefault();

        //using login function  apiCalls
        loginUser(dispatch, { username, password })
        window.location.replace("/");


    }





    return (
        <div className='loginCon'>
            <form className="loginWrapper">
                <input className='usernameInput' type="text" placeholder="Username " name='username' onChange={(e) => setUsername(e.target.value)} />
                <input className='usernameInput' type="password" name='password' placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                <button className='loginBut' type='submit' onClick={handleLogin} disabled={isFetching} >Login</button>

                {error && <span className="errorSpan">Something went wrong</span>}

                <div className="createAccAndForgotRow">
                    <span className='dontHaveAcc'>Dont have an Account ? Create !</span>
                    <span className='forgotPassword'>Forgot Password ?</span>

                </div>

                <button className='loginBut'>Register</button>


            </form>

        </div>
    )
}

export default Login