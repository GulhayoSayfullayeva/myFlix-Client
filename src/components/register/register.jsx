import { useState } from "react";
import { Form, Button } from "react-bootstrap";

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
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)

        }).then((response) => {
            if (response.ok) {
                alert("Signup successfull!!!!");
                afterRegis();
                window.location.reload();
            }
            else {
                alert("Signup failed!");
            }

        });
    };
    return (
        <div className="login">

            <Form className="form" onSubmit={handleSubmit}>
                <Form.Text className="text-center mb-3 fs-3 logout-button text-black">Register Page</Form.Text>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Enter username" value={username} onChange={(e) => setUsername(e.target.value)} required />
                    <Form.Text className="text-muted">
                        We'll never share your username with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email address" value={email} onChange={(e) => setEmail(e.target.value)} required />

                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Birthday</Form.Label>
                    <Form.Control type="date" placeholder="Enter birthdate" value={birthdate} onChange={(e) => setBirthdate(e.target.value)} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>

            </Form>
            {/* <form className="form" onSubmit={handleSubmit}>
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
 */}
        </div>
    );
}

