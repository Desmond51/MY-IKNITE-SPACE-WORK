import React from "react";
import { GoogleOutlined, FacebookOutlined } from "@ant-design/icons";
import firebase from "firebase/app";
import { FacebookAuthProvider, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import {auth} from "./firebase";


const googleProvider = new GoogleAuthProvider();
const Login = () => {

  const googleSignIn = async  (e) => {
    e.preventDefault();
    console.log("This has been click");
    signInWithPopup(auth, googleProvider).then((results)=>{
    const credential = GoogleAuthProvider.credentialFromResult(results)
    const token = credential.accessToken;
    
    const user = results.user;
    
    console.log('feedback ', credential, token, user)
    }).catch((error)=>{
    console.log('error ', error)
    const credential = GoogleAuthProvider.credentialFromError(error)})
    
  }
   
     //Signin authentication with Facebook
  const facebookSignIn = async (e) => {
    e.preventDefault();
   const provider = new FacebookAuthProvider();
    console.log("This has been click");
    signInWithPopup(auth, provider).then((results)=>{
    const credential = FacebookAuthProvider.credentialFromResult(results)
    const token = credential.accessToken;
    
    const user = results.user;
    
    console.log('feedback ', credential, token, user)
    }).catch((error)=>{
    console.log('error ', error)
    const credential = FacebookAuthProvider.credentialFromError(error)})
    } 
  return (
    <div id="login-page">
      <div id="login-card">
        <h2>Welcome to betalook</h2>
        <div
          className="login-button google"
          onClick={
            googleSignIn
           
          }
        >
          <GoogleOutlined /> Sign In With Google
        </div>
        <br /> <br />
        <div
          className="login-button facebook"
         onClick={ facebookSignIn}
        >
          <FacebookOutlined /> Sign In With Facebook
        </div>
      </div>
    </div>
  );
};
export default Login;
