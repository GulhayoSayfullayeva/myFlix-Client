import PropTypes from 'prop-types';
import "./movie-view.css"
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export const MovieView = ({ movies }) => {
    const {movieTitle} = useParams();
    const movie = movies.find((movie) => movie.title === movieTitle);
    console.log(movieTitle);
    console.log(movie);

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