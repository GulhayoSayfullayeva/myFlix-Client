import PropTypes from 'prop-types';
import "./movie-card.css";
import { Button, Card } from 'react-bootstrap';

export const MovieCard = ({ movie, onMovieClick }) => {
    return (
    <Card className=" movieCard">
        <Card.Img height="30%" className="object-fit-cover flex-fill" src={movie.image}/>
        <Card.Body>
            <Card.Title>{movie.title}</Card.Title>
            <Card.Text>
                {movie.description}
            </Card.Text>
            <Button variant='primary' onClick={() => {
                onMovieClick(movie);
            }}>Details</Button>
        </Card.Body>
    </Card>);
};

MovieCard.propTypes = {
    movie : PropTypes.shape({
        title : PropTypes.string.isRequired
    }).isRequired,
    onMovieClick : PropTypes.func.isRequired
};