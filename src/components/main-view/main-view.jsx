import { useState, useEffect } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import { LoginView } from "../login/login";
import "./main-view.css"
import { Container } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { Button, Row, Col } from "react-bootstrap";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { NavigationBar } from "../navigation-bar/navigation-bar";
import { Register } from "../register/register";
import { ProfileView } from "../profile-view/profile-view.jsx";
import {useSelector, useDispatch} from "react-redux";
import { setMovies } from "../../redux/reducers/movies";
import { Movies_List } from "../movies-list/movies-list";


export const MainView = () => {

  const movies = useSelector((state) => state.movies.list);
  const dispatch = useDispatch();

    /*     {
          "id": "641369d23edd82a71107b1bb",
          "title": "Silence of the Lambs",
          "description": "A young FBI cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer.",
          "genre": { "name": "fantasy", "description": "Thriller film, also known as suspense film or suspense thriller, is a broad film genre that involves excitement and suspense in the audience." },
          "director": { "name": "Jonathan Demme", "bio": "Robert Jonathan Demme was an American director, producer, and screenwriter.", "Birth": "1944", "Death": "2017" },
          "image": "https://upload.wikimedia.org/wikipedia/en/8/86/The_Silence_of_the_Lambs_poster.jpg",
          "featured": true,
          "year": "1999",
          "Actors": []
        },
    
        {
          "id": "64136aa33edd82a71107b1bc",
          "title": "The Lord of the Rings: The Return of the King",
          "description": "Continuing the plot of the previous film, Frodo, Sam and Gollum are making their final way toward Mount Doom in Mordor in order to destroy the One Ring, unaware of Gollum's true intentions, while Merry, Pippin, Gandalf, Aragorn, Legolas, Gimli and the rest are joining forces together against Sauron and his legions in Minas Tirith.",
          "image": "https://upload.wikimedia.org/wikipedia/en/8/8a/The_Lord_of_the_Rings%2C_TFOTR_%282001%29.jpg",
          "year": "2003",
          "featured": true,
          "Actors": [],
          "director": { "name": "Peter Jackson", "bio": "Sir Peter Robert Jackson is a New Zealand film director, screenwriter and producer.", "Birthyear": "1961" },
          "genre": { "name": "fantasy", "description": "Fantasy films are films that belong to the fantasy genre with fantastic themes, usually magic, supernatural events, mythology, folklore, or exotic fantasy worlds." }
        },
        {
          "id": "64136e973edd82a71107b1c4",
          "title": "Star Wars",
          "description": "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth Vader.",
          "image": "https://upload.wikimedia.org/wikipedia/en/7/7f/Star_Wars_The_Last_Jedi.jpg",
          "year": "1977",
          "featured": true,
          "Actors": [],
          "director": { "name": "George Lucas", "bio": "George Walton Lucas Jr. is an American filmmaker. Lucas is best known for creating the Star Wars and Indiana Jones franchises and founding Lucasfilm, LucasArts, Industrial Light & Magic and THX.", "Birthyear": "1944" },
          "genre": { "name": "science fiction", "description": "Science fiction (or sci-fi) is a film genre that uses speculative, fictional science-based depictions of phenomena that are not fully accepted by mainstream science, such as extraterrestrial lifeforms, spacecraft, robots, cyborgs, dinosaurs, interstellar travel, time travel, or other technologies." }
        } */
  const user = useSelector((state) => state.user.userObject);
  const token = useSelector((state) => state.user.token);

  /* const savedUser = JSON.parse(localStorage.getItem("user"));
  const savedToken = localStorage.getItem("token");
  const savedUserObject = JSON.parse(localStorage.getItem("userObject"));
  const [userName, setUserName] = useState(savedUser ? savedUser : null);
  const [token, setToken] = useState(savedToken ? savedToken : null);
  const [userObject, setUserObject] = useState(savedUserObject ? savedUserObject : null); */

  useEffect(() => {
    if (!token) {
      return;
    }
    fetch("https://myflix-h3mr.onrender.com/movies", {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then((response) => response.json())
      .then((data) => {

        const moviesFromApi = data.map((movie) => {
          return {
            id: movie._id,
            title: movie.title,
            description: movie.description,
            director: {
              name: movie.Director.name,
              bio: movie.Director.bio,
              birthday: movie.Director.Birth
            },
            genre: {
              name: movie.Genre.Name,
              description: movie.Genre.description
            },
            Actors: movie.Actors,
            image: movie.imageUrl
          };
        });
        dispatch(setMovies(moviesFromApi));
        console.log(moviesFromApi);
      });
  }, [token]);

  /* Main views of the application */

  return (
    <BrowserRouter>
      <NavigationBar/>
      <Row className="justify-content-md-center">
        <Routes>
          <Route path="/register"
            element={
              <>
                {user ? (
                  <Navigate to="/" />
                ) : (
                  <Col>
                    <Register />
                  </Col>
                )}
              </>
            }
          />
          <Route path="/login"
            element={
              <>
                {user ? (
                  <Navigate to="/" />
                ) : (
                  <Col>
                    <LoginView />
                  </Col>
                )}
              </>
            }
          />

          <Route path="/movies/:movieTitle"
            element={
              <>
                {!user ? (
                  <Navigate to="/login" replace />
                ) : movies.length === 0 ? (
                  <Col>No movies</Col>
                ) : (
                  <Col md={6} className="application">
                    <MovieView />
                  </Col>
                )}
              </>
            }
          />
    {/*  The route for the main page of the app in order to display the list of movies */}
          <Route path="/"
            element={
              <>
                {!user ? (
                  <Navigate to="/login" replace />
                ) : <Movies_List />}
                {/*   movies.length === 0 ? (
                  <Col>No movies</Col>
                ) : (
                  <>
                    {movies.map((movie) => (
                      <Col className="mb-5 d-flex" key={movie.id} xs={12} sm={6} md={4} lg={3}>
                        <MovieCard movie={movie} />
                      </Col>
                    ))} 

                  </>
                )} */}
              </>
            }
          />

      {/*     The route for profile view */}
      <Route path="/profile"
        element={
          <>
            { !user ? (
              <Navigate to="/login" replace />
            ) : (
              <Col>
               <ProfileView />
              </Col>
            )}
          </>
        }
        />


        </Routes>
      </Row>
  </BrowserRouter>

  );

  /*  if (selectedMovie) {
     const similarMovies = movies.filter((movie) => {
       return movie.id !== selectedMovie.id && movie.genre.name === selectedMovie.genre.name;
     });
     return (<div className="application">
 
       <MovieView movie={selectedMovie} onBackClick={() => setSelectedMovie(null)} />
       <hr />
       <h2>Similar Movies</h2>
       {similarMovies.map((movie) => (
         <MovieCard key={movie.id} movie={movie} onMovieClick={(newSelectedMovie) => setSelectedMovie(newSelectedMovie)} />
       ))
       }
 
     </div>
     );
   } */




};