import React from "react";
import './CSS/loginsignup.css'

const loginsignup = () =>{
return(
    <div className="logisingup">
        <div className="loginsignup-container">
            <h1> sign-up</h1>
            <div className="loginsignup-fields">
                <input type ="text" placeholder ="your name"/>
                <input type= "email" placeholder="your email"/>
                <input type="password" placeholder ="password"/>
            </div>
            <button> Continue </button>
            <p className="loginsignup-login"> Already have an account? <span>Login</span></p>
            <div className="loginsignup-agree">
                <input type="checkbox" name="" id= ""/>
                <p> By continue i agree to the terms and conditions </p>
            </div>
        </div>
    </div>
)
}

export default loginsignup