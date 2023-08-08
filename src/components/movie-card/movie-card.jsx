import PropTypes from 'prop-types';
import "./movie-card.css";
import { Button, Card } from 'react-bootstrap';
import { Link } from "react-router-dom";

export const MovieCard = ({ movie }) => {
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
        </Card>);
};

MovieCard.propTypes = {
    movie: PropTypes.shape({
        title: PropTypes.string.isRequired
    }).isRequired

};