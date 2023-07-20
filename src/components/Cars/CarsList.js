import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function CarsList() {

    const [cars, SetCars] = useState([]);

    useEffect(() => {
        fetchCars();
    }, []);

    const fetchCars = async() => {
        try {
            const response = await axios.get("http://localhost:8080/api/cars");
            SetCars(response.data);
        } catch (err) {
            console.log("Error fetching cars data: " + err);
        }
    }

    const deleteCar = async(id) => {
        try {
            await axios.delete(`http://localhost:8080/api/cars/${id}/delete`);
            fetchCars();
        } catch(err) {
            console.log("Error deleting car object: " + err);
        }
    }

    return( 
        <div>
            <h2>List of Cars</h2>
            
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Model</th>
                        <th>Make</th>
                        <th>Registration</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cars.map((car) => (
                           <tr key={car.id}>
                            <td>{car.id}</td>
                            <td>{car.model}</td>
                            <td>{car.make}</td>
                            <td>{car.registration}</td>
                            <td>{car.price}</td>
                            <td>
                                <Link to={`/cars/${car.id}`}>Edit</Link>&nbsp;
                                <button onClick={() => deleteCar(car.id)}>Delete</button>
                            </td>
                           </tr> 
                        ))
                    }
                </tbody>
            </table>

            <Link to={'/cars/new'}>Create</Link>
        </div>
    );
}

export default CarsList;