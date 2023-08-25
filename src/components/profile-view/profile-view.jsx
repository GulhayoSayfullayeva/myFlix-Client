import { useEffect, useState } from "react";
import { Card, Button, Row, Col, Modal, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../movie-card/movie-card.css";
import { MovieCard } from "../movie-card/movie-card.jsx";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../../redux/reducers/user";


export const ProfileView = () => {

    const movies = useSelector((state) => state.movies.list);
    const user = useSelector((state) => state.user.userObject);
    const token = useSelector((state) => state.user.token);
    const dispatch = useDispatch();


    const [username, setUsername] = useState(user.username);
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState(user.email);
    const [birthday, setBirthday] = useState(user.birthday);
    const [show, setShow] = useState(false);
    const [deregister, setDeregister] = useState(false);
    const favourite_movies = movies.filter((movie) => user.favourite_movies.includes(movie.id));


    handleShow = () => setShow(true);
    handleClose = () => setShow(false);
    updateUser = () => {


        const data = {
            username: username,
            password: password,
            email: email,
            birthday: birthday
        };
        fetch("https://myflix-h3mr.onrender.com/users/" + user.username, {
            method: "PUT",
            headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
            body: JSON.stringify(data)
        }).then((response) => response.json())
            .then((res) => {
                if (res.username) {
                    /* localStorage.setItem("user", JSON.stringify(res.username));
                    localStorage.setItem("userObject", JSON.stringify(res));
                    updateUsername(res); */
                    dispatch(setUser(res));
                    alert("Your account is updated");
                }
                else {
                    alert("Update failed");
                }
            });
        setShow(false);

    };
    deleteUser = () => {
        fetch("https://myflix-h3mr.onrender.com/users/" + username, {
            method: "DELETE",
            headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` }
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
            })
            .then((data) => {
                console.log(data);
                alert("Your account is deleted successfully!");
                /* updateUsername(null);
                localStorage.clear(); */
                dispatch(setUser(null));
                window.location.reload();


            });
    };
    handleDeregister = () => setDeregister(true);
    handleCloseDeregister = () => setDeregister(false);

        return (<>
            <Row>
                <Col md={6} className="mx-auto">
                    <Card border="primary" className="movieCard">
                        <Card.Img className="card-image" src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png?20170328184010" />
                        <Card.Body>
                            <Card.Title className="text-center fs-4">Profile<br /></Card.Title>
                            <Card.Text>
                                Username: {username}<br />
                                Email: {email}<br />
                                Birthday: {birthday}<br />
                            </Card.Text>

                            <Button variant="primary" data-inline="true" className="m-4 float-end" onClick={handleShow}>Update profile</Button>
                            <Button variant="primary" data-inline="true" className="m-4 float-end" onClick={handleDeregister}>Deregister your account</Button>


                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <h2 className="text-center mb-5 mt-5">Favourite Movies</h2>
                {favourite_movies.map((movie) => (
                    <Col className="mb-5 d-flex" key={movie.id} xs={12} sm={6} md={4} lg={3}>
                        <MovieCard movie={movie} />
                    </Col>
                ))}
            </Row>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title className="ms-auto">Update Profile</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="email" placeholder={username} value={username} onChange={(e) => setUsername(e.target.value)} required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Enter your new password" onChange={(e) => setPassword(e.target.value)} required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicUsername">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder={email} value={email} onChange={(e) => setEmail(e.target.value)} required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicBirthday">
                            <Form.Label>Birthday</Form.Label>
                            <Form.Control type="date" value={birthday} onChange={(e) => setBirthday(e.target.value)} required />
                        </Form.Group>


                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={updateUser}>
                        Update User
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={deregister} onHide={handleCloseDeregister}>
                <Modal.Header closeButton>
                    <Modal.Title className="ms-auto">Deregister</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Do you want to delete your account?</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseDeregister}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={deleteUser}>
                        Delete account
                    </Button>
                </Modal.Footer>
            </Modal>

        </>

        );


};