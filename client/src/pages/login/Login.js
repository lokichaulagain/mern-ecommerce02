import React from 'react'
import "./login.scss"

function Login() {
    return (
        <div className='loginCon'>
            <div className="loginWrapper">
                <input className='usernameInput' type="text" placeholder="Username " />
                <input className='usernameInput' type="password" placeholder="Password" />
                <button className='loginBut'>Login</button>

                <div className="createAccAndForgotRow">
                    <span className='dontHaveAcc'>Dont have an Account ? Create !</span>
                    <span className='forgotPassword'>Forgot Password ?</span>

                </div>

                <button className='loginBut'>Register</button>


            </div>

        </div>
    )
}

export default Login