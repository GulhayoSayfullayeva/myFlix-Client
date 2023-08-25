import "../main-view/main-view.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import {Link, Router} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import { setUser, setToken } from "../../redux/reducers/user";

export const NavigationBar = () => {
    const user = useSelector((state) => state.user.userObject);
    const dispatch = useDispatch();

    return (
        <Navbar bg="primary" data-bs-theme="dark" expand="lg">
            <Container>
                <Navbar.Brand className="fs-3" as={Link} to="/">MovieList App</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav className="text-white fs-4">

                        {!user && (
                            <>

                                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                                <Nav.Link as={Link} to="/register">Register</Nav.Link>
                            </>
                        )}
                        {user && (
                            <>
                                <Nav.Link as={Link} to="/">Home</Nav.Link>
                                <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
                                <Nav.Link onClick={() => {
                                    dispatch(setUser(null));
                                    dispatch(setToken(null));
                                    /* setUserName(null);
                                    setToken(null);
                                    localStorage.clear(); */
                                }}>Logout</Nav.Link>
                            </>
                        )

                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}