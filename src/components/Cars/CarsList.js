import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import APIService from "../../services/APIService";

function CarsList() {

    const [cars, SetCars] = useState([]);

    useEffect(() => {
        fetchCars();
    }, []);

    const fetchCars = async() => {
        try {
            const response = await APIService.get('/api/cars');
            SetCars(response.data);
        } catch (err) {
            console.log("Error fetching cars data: " + err);
        }
    }

    const deleteCar = async(id) => {
        try {
            const response = await APIService.delete(`/api/cars/${id}/delete`);
            console.log(response.data);
            fetchCars();
        } catch(err) {
            console.log("Error deleting car object: " + err);
        }
    }

    return( 
        <div>
            <h2>List of Cars &nbsp;
                <Link to={'/cars/new'}>
                    <button>Create</button>
                </Link>
            </h2>
            
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
                                <Link to={`/cars/${car.id}`}>
                                    <button>Edit</button>
                                </Link>&nbsp;
                                <button onClick={() => deleteCar(car.id)}>Delete</button>
                            </td>
                           </tr> 
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default CarsList;