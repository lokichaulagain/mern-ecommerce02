import React from 'react'
import "./login.scss"
import { useState } from 'react'
import { useDispatch ,useSelector} from 'react-redux'
import {loginUser} from '../../redux/apiCalls'




function Login() {

    //LOGIN==============>
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()
    const { isFetching, error } = useSelector(state => state.user);


    const handleLogin = (e) => {
        e.preventDefault()
        loginUser(dispatch, { username, password })
    }







    return (
        <div className='login'>
            <div className="loginWrapper">
                <form className="formContainer" >
                    <label className='labelText'>Username</label>
                    <input className='loginInput' type="text" name='username' required placeholder='Username' onChange={(e) => setUsername(e.target.value)} />

                    <label className='labelText'>Password</label>
                    <input className='loginInput' type="password" name='password' required placeholder='Password' onChange={(e) => setPassword(e.target.value)} />

                    <button className='loginButton  LB1' type='submit' onClick={handleLogin}  disabled={isFetching}  >LOGIN</button>
                    {/* {error && <span className="errorSpan">Something went wrong</span>} */}
                    <span className='dontHaveAccountTxt'>Dont have an account ?</span>

                    <button className='loginButton'>
                        Create an Account
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Login