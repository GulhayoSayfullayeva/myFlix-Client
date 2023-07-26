import PropTypes from 'prop-types';

export const MovieView = ({movie, onBackClick}) => {
    return(
        <div>
            <div>
                <img src={movie.image}/>
            </div>
            <div>
                <span>Title:</span>
                <span>{movie.title}</span>
            </div>
            <div>
                <span>Description:</span>
                <span>{movie.description}</span>
            </div>
            <div>
                <span>Director:</span>
                <span>{movie.director.name}</span>
            </div>
            <div>
                <span>Genre:</span>
                <span>{movie.genre.name}</span>
            </div>
            <div>
                <button onClick={onBackClick}>Back</button>
            </div>
            
        </div>
    );

};

MovieView.propTypes = {
    movie : PropTypes.shape({
       image : PropTypes.string.isRequired,
       title : PropTypes.string.isRequired,
       description : PropTypes.string.isRequired,
       director : PropTypes.shape({
          name : PropTypes.string.isRequired,
          bio : PropTypes.string
       }),
       genre : PropTypes.shape({
          name : PropTypes.string.isRequired,
          description : PropTypes.string
       })
    }),
    onBackClick : PropTypes.func.isRequired
};