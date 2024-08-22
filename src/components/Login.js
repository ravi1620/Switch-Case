import React, { useEffect, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Signup from './Signup'



function Login() {

  let emailRegEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  let passwordRegEx = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+=[\]{};':"\\|,.<>?/~`])[A-Za-z0-9!@#$%^&*()_+=[\]{};':"\\|,.<>?/~`]{1,8}$/;
 
let emailInputRef=useRef();
let passwordInputRef=useRef();
let msgInputRef=useRef();

let emailResultRef=useRef();
let passwordResultRef=useRef();
let msgResultRef=useRef();

  let validateEmail=(emailstr,resultRef)=>{
let result = emailRegEx.test(emailstr);
if(result == true){
resultRef.current.innerHTML="Valid";
resultRef.current.style.color="green";
}else{
  resultRef.current.innerHTML="Invalid";
  resultRef.current.style.color="red";
}
  }

let validatePassword=(passwordStr)=>{
  let result = passwordRegEx.test(passwordStr);

  if(result== true){
passwordResultRef.current.innerHTML="Valid";
passwordResultRef.current.style.color="green"
  }else{
passwordResultRef.current.innerHTML="Inavlid";
passwordResultRef.current.style.color="red";
  }
}

useEffect(()=>{
  emailInputRef.current.value=localStorage.getItem("email");
  passwordInputRef.current.value=localStorage.getItem("password");
if(localStorage.getItem("email")&&localStorage.getItem("password")){
  onLoginClick();
}

},[]);

let onLoginClick= ()=>{
  let typedEmail=emailInputRef.current.value;
  let typedPassword=passwordInputRef.current.value;
  
  if(typedEmail=="ravi@gmail.com" && 
    typedPassword=="Ravi@123") {
sessionStorage.setItem("email",emailInputRef.current.value);
sessionStorage.setItem("password",passwordInputRef.current.value);
  
    navigate("/home");
  }else{
    alert("email/password is inavalid");
  }
}

let navigate=useNavigate();
  return (
    <div className='App'>
  
        <form className='form'>
            <div>

              <h1 style={{backgroundColor:"green",color:"white",fontStyle:"italic",borderRadius:"20px",boxShadow:"0px 0px 10px grey"}}>Login Component</h1>
               
                <label className='label'>Email</label>
                <input type='text' ref={emailInputRef}
                onChange={()=>{
                  validateEmail(emailInputRef.current.value,emailResultRef);
                }}></input>
                <span className='span' ref={emailResultRef}></span>
            </div>
          
            <div>
                <label className='label'>Password</label>
                <input type='text' ref={passwordInputRef}
                onChange={()=>{
                validatePassword(passwordInputRef.current.value,passwordResultRef);
                }} minLength="8" maxLength="8"></input>
                <span className='span' ref={passwordResultRef}></span>
                
            </div>
           
<br></br>
<br></br>
            <button type='button'
            onClick={()=>{
              onLoginClick();
        
}}>Login </button>
            <br></br>
            <br></br>
            <h3>Don't have the account ? <Link to="/Signup" element={<Signup></Signup>}><u>Signup</u></Link></h3>
             
        </form>
    </div>
  )
}

export default Login;
