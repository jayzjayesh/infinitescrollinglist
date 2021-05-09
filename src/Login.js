import react from "react";
import {useHistory} from "react-router-dom";
import { useState } from "react/cjs/react.development";


export default function Login(){

    //Login functionality for the user
    // if username = foo and password = bar it will allow user
    // else it will show that password or username is not correct

    const [username,setUser] = useState('');
    const [password,setPass] = useState('');
    const [wrongDetails,setWrongDetails] = useState(false);
    const history = useHistory();

    function setUserName(e){
        setUser(e.target.value);
    }

    
    function setPassword(e){
        setPass(e.target.value);
    }

    function onSubmit(e){
        e.preventDefault();
        if(username === "foo" && password === "bar"){
            setWrongDetails(false);
            localStorage.setItem("isAuth","true");
            history.push("/home");

        }
        else{
            setWrongDetails(true);
        }
        console.log(username + password);
    }

    return(
        <div className="Login">
        <form>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">User Name</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter username" onChange={setUserName}></input>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" onChange={setPassword}></input>
  </div>
  {wrongDetails && <p style={{color : "red"}}>Username or Password is wrong</p>}
  <button type="submit" className="btn btn-primary" onClick={onSubmit}>Submit</button>
  </form></div>
    )
}