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
                <button onClick={onBackClick}>Back</button>
            </div>
            
        </div>
    );

};