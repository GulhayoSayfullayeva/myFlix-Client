import PropTypes from 'prop-types';
import "./movie-view.css"

export const MovieView = ({ movie, onBackClick }) => {
    return (
        <div className="details-page">
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

        </div>
    );

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
    }),
    onBackClick: PropTypes.func.isRequired
};