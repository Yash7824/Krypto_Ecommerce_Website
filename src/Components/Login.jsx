import React from 'react'
import '../CSS/Login.css'

export default function login() {
    return (
        <div className="wholeLoginPage">
            <div className="Login">
                <h3>Login</h3>
                <input className="Login_inputs" type="text" placeholder="Email Address" />
                <input className="Login_inputs" type="text" placeholder="Password" />
                <div className="Login_account">
                    <a href="/">New user?</a>
                    <a href="/">Create an account</a>
                </div>

                <input id="Login_button" type="button" value="Login" />
            </div>
        </div>

    )
}
