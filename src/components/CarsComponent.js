import { useEffect, useState } from "react";
import APIService from "../services/APIService";

function CarsComponent() {

    const [cars, SetCars] = useState([]);

    useEffect(() => {
        // call APIService to get cars objects
        APIService.getCars().then(response => {
            SetCars(response.data);

        }).catch(error => {
            console.log(error);
        })
    }, []);

    return(
        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Model</th>
                    <th>Make</th>
                    <th>Registration</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {
                    cars.map(car => (
                        <tr key={car.id}>
                            <td>{car.id}</td>
                            <td>{car.model}</td>
                            <td>{car.make}</td>
                            <td>{car.registration}</td>
                            <td>{car.price}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}

export default CarsComponent;