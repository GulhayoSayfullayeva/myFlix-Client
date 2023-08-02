import PropTypes from 'prop-types';
import "./movie-card.css";

export const MovieCard = ({ movie, onMovieClick }) => {
    return (<div className="movieCard"  onClick={() => {
        onMovieClick(movie);
    }
    }
    >{movie.title}</div>);
};

MovieCard.propTypes = {
    movie : PropTypes.shape({
        title : PropTypes.string.isRequired
    }).isRequired,
    onMovieClick : PropTypes.func.isRequired
};