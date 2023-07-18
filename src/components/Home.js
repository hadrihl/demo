import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Home() {

    const [cars, setCars] = useState([]);
    const {status} = useParams('');

    useEffect(() => {
        // api calls
        FetchCars();
    }, []);

    const FetchCars = async() => {
        try {
            // call api using axios
            const response = await axios.get("http://localhost:8080/api/posts");
            setCars(response.data);

            const status = response.status;
            console.log(status);

        } catch (error) {
            console.log("Error fetching car data: ", error);
        }
    }

    const DeleteCars = async() => {
        try {
            const response = await axios.delete("http://localhost:8080/posts/:id/delete");
            console.log(response.status);
            console.log(response.headers);
            console.log(response);
        } catch(error) {
            console.log("Error deleting car data: ", error);
        }
    }

    return(
        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Model</th>
                    <th>Make</th>
                    <th>Registration</th>
                    <th>Price</th>
                    <th>#Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    cars.map(item => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.model}</td>
                            <td>{item.make}</td>
                            <td>{item.registration}</td>
                            <td>{item.price}</td>
                            <td>
                                <Link to='`http://localhost:8080/api/posts/${item.id}`'>Edit</Link>&nbsp;
                                <button onSubmit={handlerDelete}>Delete</button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    );
}

export default Home;