import { Row , Col} from "react-bootstrap";
import { useSelector } from "react-redux";
import { Movies_Filter } from "../movies-filter/movies-filter";
import { MovieCard } from "../movie-card/movie-card";
import "../movies-filter/movies-filter.css";



export const Movies_List = () => {
      const movies = useSelector((state) => state.movies.list);
      const filter = useSelector((state) => state.movies.filter).trim().toLowerCase();
      const filteredMovies = (filter=== "") ? movies : (movies.filter((movie) => 
        movie.title.toLowerCase().includes(filter)
      ));
      console.log(filteredMovies);

      return (
        <>
          <Row className="search">
            <Col className="mx-auto mt-5" xs={12} sm={6} md={4} lg={3}>
            <Movies_Filter />
            </Col>
            
          </Row>
          <Row>
            { movies.length===0 ? (
                <Col>MoviesList is empty</Col>
            ) : (
                filteredMovies.map((movie) => (
                    <Col className="mb-5 d-flex" key={movie.id} xs={12} sm={6} md={4} lg={3}>
                       <MovieCard movie={movie}/> 
                    </Col>
                ))
            )}
          </Row>
        </>
      );

};