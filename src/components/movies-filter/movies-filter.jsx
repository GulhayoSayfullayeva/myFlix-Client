import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../redux/reducers/movies";
import { Form } from "react-bootstrap";



export const Movies_Filter = () => {
    const filter = useSelector((state) => state.movies.filter);
    const dispatch = useDispatch();


    return (
        <Form.Control
            type="text"
            placeholder="Search..."
            value={filter}
            onChange={(e) => dispatch(setFilter(e.target.value))}
        />

    );

};