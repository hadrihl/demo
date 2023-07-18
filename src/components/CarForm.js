import { useEffect, useState } from "react";
import axios from "axios";

function CarForm() {

    const [car, SetCar] = useState([]);
    const [id] = useState('');

    useEffect(() => {
        FetchCar();
    }, [id]);

    const FetchCar = async() => {
        try {
            const response = await axios.get(`http://localhost:8080/api/posts/${id}`);
            SetCar(response.data);
        } catch (error) {
            console.log("Error fetching car data: ", error);
        }
    }

    // update button handler when submitting car object
    const handlerSubmit = (e) => {
        e.preventDefault();
        
        // update car data object
        CarUpdate(); //TODO
    }

    // rendering 
    return (
        <div>
            <form onSubmit={handlerSubmit}>
                <label>Model</label>
                <input type="text" value={car.model} />

                <label>Make</label>
                <input type="text" value={car.make} />

                <label>Registration</label>
                <input type="text" value={car.registration} />

                <label>Price</label>
                <input type="number" value={car.price} />

                <button type="submit">Update</button>
            </form>
        </div>

    )
}

export default CarForm;