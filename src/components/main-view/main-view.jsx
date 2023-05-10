import { useState } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";

export const MainView = () => {
    const [movies, setMovies] = useState([
        {
            "id":"641369d23edd82a71107b1bb",
            "title":"Silence of the Lambs",
            "description":"A young FBI cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer.",
            "genre":{"name":"Thriller","description":"Thriller film, also known as suspense film or suspense thriller, is a broad film genre that involves excitement and suspense in the audience."},
            "director":{"name":"Jonathan Demme","bio":"Robert Jonathan Demme was an American director, producer, and screenwriter.","Birth":"1944","Death":"2017"},
            "image":"https://upload.wikimedia.org/wikipedia/en/8/86/The_Silence_of_the_Lambs_poster.jpg",
            "featured":true,
            "year": "1999",
            "Actors":[]
        },

        {
            "id":"64136aa33edd82a71107b1bc",
            "title":"The Lord of the Rings: The Return of the King",
            "description":"Continuing the plot of the previous film, Frodo, Sam and Gollum are making their final way toward Mount Doom in Mordor in order to destroy the One Ring, unaware of Gollum's true intentions, while Merry, Pippin, Gandalf, Aragorn, Legolas, Gimli and the rest are joining forces together against Sauron and his legions in Minas Tirith.",
            "image":"https://upload.wikimedia.org/wikipedia/en/8/8a/The_Lord_of_the_Rings%2C_TFOTR_%282001%29.jpg",
            "year":"2003",
            "featured":true,
            "Actors":[],
            "director":{"name":"Peter Jackson","bio":"Sir Peter Robert Jackson is a New Zealand film director, screenwriter and producer.","Birthyear":"1961"},
            "genre":{"name":"fantasy","description":"Fantasy films are films that belong to the fantasy genre with fantastic themes, usually magic, supernatural events, mythology, folklore, or exotic fantasy worlds."}
        },
        {
            "id":"64136e973edd82a71107b1c4",
            "title":"Star Wars",
            "description":"Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth Vader.",
            "image":"https://upload.wikimedia.org/wikipedia/en/7/7f/Star_Wars_The_Last_Jedi.jpg",
            "year":"1977",
            "featured":true,
            "Actors":[],
            "director":{"name":"George Lucas","bio":"George Walton Lucas Jr. is an American filmmaker. Lucas is best known for creating the Star Wars and Indiana Jones franchises and founding Lucasfilm, LucasArts, Industrial Light & Magic and THX.","Birthyear":"1944"},
            "genre":{"name":"science fiction","description":"Science fiction (or sci-fi) is a film genre that uses speculative, fictional science-based depictions of phenomena that are not fully accepted by mainstream science, such as extraterrestrial lifeforms, spacecraft, robots, cyborgs, dinosaurs, interstellar travel, time travel, or other technologies."}
        }

    ]);
   
    const [selectedMovie, setSelectedMovie] = useState(null);

    if(selectedMovie){
        return <MovieView movie={selectedMovie} onBackClick={() => setSelectedMovie(null)}/>;
    }

    if( movies.length === 0){
        return <div>No movies</div>
    }

    return (
        <div>
          { movies.map((movie) => (
             <MovieCard key={movie.id} movie={movie} onMovieClick={(newSelectedMovie) => setSelectedMovie(newSelectedMovie)}/>
          )) }
        </div>
       
    );
}