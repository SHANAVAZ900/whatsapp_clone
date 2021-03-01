import React from 'react';
import {Button} from "@material-ui/core";
import "./Login.css";
import{ auth , provider } from "./firebase";
import {actionTypes} from "./reducer";
import { useStateValue } from './StateProvider';



function Login() {
    
    const [{}, dispatch] = useStateValue();
    const signIn = () => {
        auth
            .signInWithPopup(provider)
            .then((result) => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                })
            })
            .catch((error) => alert(error.message));
    }


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
