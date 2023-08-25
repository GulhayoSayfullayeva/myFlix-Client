import "./login.css";
import { Register } from "../register/register.jsx";
import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { setUser, setToken } from "../../redux/reducers/user";


export const LoginView = () => {
   const [userName, setUserName] = useState("");
   const [pass, setPass] = useState("");
   const user = useSelector((state) => state.user.userObject);
   const dispatch = useDispatch();
   const handleSubmit = (e) => {
      e.preventDefault();
      const data = {
         username: userName,
         password: pass
      };
      fetch("https://myflix-h3mr.onrender.com/login", {
         method: "POST",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify(data)
      }).then((response) => response.json())
         .then((data) => {
            console.log(data);
            if (data.user) {
               /* localStorage.setItem("user", JSON.stringify(data.user.username));
               localStorage.setItem("token", data.token);
               localStorage.setItem("userObject", JSON.stringify(data.user));
               onLoginSubmit(data.user.username, data.token, data.user); */

               dispatch(setUser(data.user));
               dispatch(setToken(data.token));

            }
            else {
               alert("Login failed");
            }
         });

   };

   return (<div className="login">

      <Form className="form" onSubmit={handleSubmit}>
         <Form.Text className="text-center mb-3 fs-3 logout-button text-black">Login Page</Form.Text>
         <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Enter username" value={userName} onChange={(e) => setUserName(e.target.value)} required />
            <Form.Text className="text-muted">
               We'll never share your username with anyone else.
            </Form.Text>
         </Form.Group>

         <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" value={pass} onChange={(e) => setPass(e.target.value)} required />
         </Form.Group>
         <Button variant="primary" type="submit">
            Submit
         </Button>
         <Form.Text className="text-muted text-center">Don't have account?<br /></Form.Text>
         <Form.Text className="text-center logout-button" >Register</Form.Text>
      </Form>

      {/*  <h1>Login</h1>
         <form className="form" onSubmit={handleSubmit}>
            <label>Username</label>
            <input type="text" name="username" placeholder="username" value={userName} onChange={(e) => setUserName(e.target.value)} required></input>
            <label>Password</label>
            <input type="password" name="password" placeholder="password" value={pass} onChange={(e) => setPass(e.target.value)} required></input>
            <button type="submit">Submit</button>
            <div className="signup">Don't have account?<br />
               <div onClick={() => {
                  console.log("signup clicked");
                  setClicked(true);
               }}>Signup</div>
            </div>
         </form> */}
   </div>);





}