import React, { useState } from 'react'
import './Login.css'
import {Link , useNavigate} from "react-router-dom"
import { auth } from './firebase';



function Login() {
    const navigate = useNavigate()
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();
        //firebase login

        auth
            .signInWithEmailAndPassword (email , password) 
            .then ((auth) => {
                navigate('/')
                
            })
            .catch (error => alert(error.message))
    }
    const register = e => {
        e.preventDefault();
        //Firebase login
        auth
            .createUserWithEmailAndPassword (email , password) 
            .then((auth) => {
                //Successfully created  a new user with email & password
                if (auth) {
                    navigate ('/')
                }
            })
            .catch (error => alert(error.message))
            

    }

  return (
    <div className='login'>
    <Link to='/'>

    <img className='login_logo'
     src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"  />

    </Link>

    <div className='login_container'>
    <h1>Sign-in</h1>

    <form>
        <h5>E-mail</h5>
        <input type='email' value={email} onChange = {
            e => setEmail (e.target.value)
        }/>

        <h5>Password</h5>
        <input type="password" value={password} onChange = {
        e => setPassword (e.target.value)}/>

        <button type='submit' className = 'login_signInButton' onChange={signIn}>Continue</button>
    </form>

    <p className='terms'>By signing-in you agree to Amazon's Terms And Conditions and Privacy Policies</p>
    <p className="amazon_register">New to Amazon ?</p>

    <button className='login_registerButton' onClick={register}>Create New Account</button>

    </div>
    
      
    </div>
  )
}

export default Login
