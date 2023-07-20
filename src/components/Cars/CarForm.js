import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import APIService from "../../services/APIService";

const CarForm = () => {
    const [make, setMake] = useState('');
    const [model, setModel] = useState('');
    const [registration, setRegistration] = useState('');
    const [price, setPrice] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const newCar = {
            make, 
            model, 
            registration, 
            price
        }

        try {
            const response = APIService.post("/api/cars", newCar);
            console.log("data created: ", response.data);
            navigate("/cars");
        } catch(error) {
            console.log(error);
        }
    }

    return(
        <div className="form-box">
            <h2>Add Car</h2>
            <form onSubmit={handleSubmit}>
                <label>Model: 
                    <input type="text" onChange={e => setModel(e.target.value)} />
                </label>

                <label>Make: 
                    <input type="text" onChange={e => setMake(e.target.value)} />
                </label>

                <label>Registration: 
                    <input type="text" onChange={e => setRegistration(e.target.value)} />
                </label>

                <label>Price: 
                    <input type="number" onChange={e => setPrice(e.target.value)} />
                </label>

                <button onClick={() => {navigate("/cars")}}>Cancel</button>&nbsp;
                <button type="submit">Create</button>
            </form>
        </div>
    ) 

}

export default CarForm;