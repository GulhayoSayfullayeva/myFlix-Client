import PropTypes from 'prop-types';
import "./movie-card.css";
import { Button, Card } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { setUser } from '../../redux/reducers/user';

export const MovieCard = ({ movie }) => {

    const user = useSelector((state) => state.user.userObject);
    const token = useSelector((state) => state.user.token);
    const dispatch = useDispatch();
    const [isFavourite, setIsFavourite] = useState(false);

    useEffect(() => {
        console.log(user);
        if (user.favourite_movies && user.favourite_movies.includes(movie.id)) {
            setIsFavourite(true);
        }
    }, []);

    addToFavourite = () => {
        fetch("https://myflix-h3mr.onrender.com/users/" + user.username + "/" + movie.id, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            }
        }).then((response) => {
            if (response.ok) {
                return response.json();
            }
        })
            .then((res) => {
                setIsFavourite(true);
                /* setuser(res);
                localStorage.setItem("userObject", JSON.stringify(res)); */
                dispatch(setUser(res));
                alert("Movie is added to favouriteList");
            });
    };
    removeFromFavourite = () => {
        fetch("https://myflix-h3mr.onrender.com/users/" + user.username + "/" + movie.id, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            }
        }).then((response) => {
            if (response.ok) {
                return response.json();
            }
        })
            .then((res) => {
                setIsFavourite(false);
                /* setuser(res);
                localStorage.setItem("userObject", JSON.stringify(res)); */
                dispatch(setUser(res));
                alert("Movie is removed from favouriteList");
            });
    };

    return (
        <Card className=" movieCard">
            <Card.Img height="30%" className="object-fit-cover flex-fill" src={movie.image} />
            <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
                <Card.Text>
                    {movie.description}
                </Card.Text>
                <Link to={"/movies/" + movie.title}>
                    <Button variant="link">Details</Button>
                </Link>

            </Card.Body>
            <Card.Footer className="text-center mb-3">
                {!isFavourite ? (
                    <Button variant="primary" onClick={() => addToFavourite()}>Add to FavouriteList</Button>
                ) : (
                    <Button variant="primary" onClick={() => removeFromFavourite()}>Remove from FavouriteList</Button>
                )}
            </Card.Footer>
        </Card>);
};

MovieCard.propTypes = {
    movie: PropTypes.shape({
        title: PropTypes.string.isRequired
    }).isRequired

};