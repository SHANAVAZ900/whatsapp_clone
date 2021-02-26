import React from 'react';
import {Button} from "@material-ui/core";
import "./Login.css";
import{ auth , provider } from "./firebase"



function Login() {
    const signIn =() =>{
        auth.signInWithPopup(provider)
        .then(result => console.log(result))
        .catch((error) => alert(error.message));
        

    };


    return (
        <div className="login">
            <div className="login__container">
                <img 
              src="https://media.glassdoor.com/sqll/385763/msit-squarelogo-1447831288116.png" alt=""
                />
              <div className="login__text">
                  <h1>Sign in to MSIT Chat app</h1>
              </div>
              <Button  onClick={signIn}>
                    Sign In with Google
              </Button>
            </div>
            
        </div>
    )
}

export default Login
