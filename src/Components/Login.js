import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { auth } from '../Firebase'
import './Login.css'


function Login() {
    const history = useHistory()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const signIn = (e) => {
        e.preventDefault()

        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/')
            })
            .catch(error => alert(error.message))
    }

    const register = (e) => {
        e.preventDefault()

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                console.log(auth);
                if (auth) (
                    history.push('/')
                )
            })
            .catch(error => alert(error.message))
    }
    return (
        <div className='login'>
            <Link to='/'>
                <img className='login__logo' src='https://www.freepnglogos.com/uploads/amazon-png-logo-vector/amazon-png-logo-vector-1.png'></img>
            </Link>
            <div className='login__container'>
                <h1>Sign-in</h1>
                <form>
                    <h5>Email</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)}></input>
                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)}></input>
                    <button className='login__signinbutton' type='submit' onClick={signIn}>Sign in</button>
                </form>
                <p>
                    By creating an account, you agree to Amazon's Conditions of Use and Privacy Notice.
                </p>
                <button onClick={register} className='login__registerbutton'>Create your Amazon acount</button>
            </div>
        </div>
    )
}

export default Login
