import { useState } from "react";

export const Register = ({ afterRegis }) => {
    const [email, setEmail] = useState("");
    const [birthdate, setBirthdate] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();
         const data = {
            username: username,
            password: password,
            email: email,
            birthday: birthdate
        };
        fetch("https://myflix-h3mr.onrender.com/users", {
            method: "POST",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify(data)
            
        }).then((response) => {
            if(response.ok){
                alert("Signup successfull!!!!");
                afterRegis();
                window.location.reload();
            }
            else{
                alert("Signup failed!");
            }

        });
    };
    return (
        <div className="login">
           <h1>Register</h1>
           <form className="form" onSubmit={handleSubmit}>
            <label>Email</label>
            <input placeholder="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required></input>
            <label >Birthdate</label>
            <input type="date" value={birthdate} onChange={(e) => setBirthdate(e.target.value)}></input>
            <label >Username</label>
            <input placeholder="username" type="text" value={username} onChange={(e) => setUsername(e.target.value)} required></input>
            <label >Password</label>
            <input placeholder="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required></input>
            <label >Password repeat</label>
            <input placeholder="password" type="password" required></input>
            <button type="submit" >Register</button>
            </form> 
            
        </div>
    );
}

