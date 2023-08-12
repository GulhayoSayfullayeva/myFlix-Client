import PropTypes from 'prop-types';
import "./movie-view.css"
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';

export const MovieView = ({ movies, user, token, setuser }) => {
    const {movieTitle} = useParams();
    const movie = movies.find((movie) => movie.title === movieTitle);
    const [isFavourite, setIsFavourite] = useState(false);
       
    useEffect(() => {
    
      if(user.favourite_movies &&  user.favourite_movies.includes(movie.id) ){
        setIsFavourite(true);
      }
    }, []);

    addToFavourite = () => {
        fetch("https://myflix-h3mr.onrender.com/users/" + user.username +"/" + movie.id, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            }
         }).then((response) => {
            if(response.ok){
                return response.json();
            }})
            .then((res) => {
                  setIsFavourite(true);
                  setuser(res);
                  localStorage.setItem("userObject", JSON.stringify(res));
                  alert("Movie is added to favouriteList");
            });
    }
    removeFromFavourite = () => {
        fetch("https://myflix-h3mr.onrender.com/users/" + user.username +"/" + movie.id, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            }
         }).then((response) => {
            if(response.ok){
                return response.json();
            }})
            .then((res) => {
                  setIsFavourite(false);
                  setuser(res);
                  localStorage.setItem("userObject", JSON.stringify(res));
                  alert("Movie is removed from favouriteList");
            });
    };

    return (
        <Card border="primary" className="movieCard">
        <Card.Img height="30%" className="object-fit-cover flex-fill" src={movie.image}/>
        <Card.Body>
            <Card.Title>Title: {movie.title}<br/></Card.Title>
            <Card.Text>
               Description: {movie.description}<br/>
               Director: {movie.director.name}<br/>
               Genre: {movie.genre.name}<br/>
            </Card.Text>
            <Card.Footer className="text-center ">
            { !isFavourite ? (
                  <Button variant="primary" onClick={addToFavourite}>Add to FavouriteList</Button>
                ) : (
                  <Button variant="primary" onClick={removeFromFavourite}>Remove from FavouriteList</Button>
                )}
            </Card.Footer>
            <Link to={"/"}>
            <Button variant="primary" type='link'>Back</Button>
            </Link>
        </Card.Body>
    </Card>);
       /*  <div className="details-page">
            <div>
                <img src={movie.image} />
            </div>
            <div className="details">
                <div className="movie-details">
                    <span className="bold">Title: </span>
                    <span className="normal">{movie.title}</span><br />
                </div>
                <div className="movie-details">
                    <span className="bold">Description: </span>
                    <span className="normal">{movie.description}</span><br />
                </div>
                <div className="movie-details">
                    <span className="bold">Director: </span>
                    <span className="normal">{movie.director.name}</span><br />
                </div>
                <div className="movie-details">
                    <span className="bold">Genre: </span>
                    <span className="normal">{movie.genre.name}</span><br />
                </div>

                <button onClick={onBackClick}>Back</button>
            </div>

        </div> */

};

MovieView.propTypes = {
    movie: PropTypes.shape({
        image: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        director: PropTypes.shape({
            name: PropTypes.string.isRequired,
            bio: PropTypes.string
        }),
        genre: PropTypes.shape({
            name: PropTypes.string.isRequired,
            description: PropTypes.string
        })
    })
};