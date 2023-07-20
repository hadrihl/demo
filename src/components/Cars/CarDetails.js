import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import APIService from "../../services/APIService";

function CarDetails(car) {

    const {id} = useParams('');
    const navigate = useNavigate();
    const [model, SetModel] = useState(car.model);
    const [make, SetMake] = useState(car.make);
    const [registration, SetRegistration] = useState(car.registration);
    const [price, SetPrice] = useState(car.price);

    useEffect(() => {
        fetchCar();
    }, []);

    const fetchCar = async() => {
        try {
            const response = await APIService.get(`/api/cars/${id}`);
            SetModel(response.data.model);
            SetMake(response.data.make);
            SetRegistration(response.data.registration);
            SetPrice(response.data.price);
        } catch (err) {
            console.log(err);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const updateCar = {
            make, 
            model,
            registration,
            price
        }

        try {
            const response = APIService.put(`/api/cars/${id}/update`, updateCar);
            console.log("data updated: ", response.data);
            navigate("/cars");
        } catch(error) {
            console.log("Can't update: " + error);
        }
    }


    return(
        <div className="form-box">
            <form onSubmit={handleSubmit}>
                <h2>Car Information: #{car.id}</h2>

                <label>Model:
                    <input type="text" defaultValue={model} onChange={e => SetModel(e.target.value)} />
                </label>
                

                <label>Make:
                    <input type="text" defaultValue={make} onChange={e => SetMake(e.target.value)} />
                </label>
                
                
                <label>Registration</label>
                <input type="text" defaultValue={registration} onChange={e => SetRegistration(e.target.value)} />

                <label>Price (MYR)</label>
                <input type="number" defaultValue={price} onChange={e => SetPrice(e.target.value) }/>

                <button onClick={() => navigate(-1)}>Cancel</button>&nbsp;
                <button type="submit">Update</button>
            </form>
        </div>
    ) 
}

export default CarDetails;