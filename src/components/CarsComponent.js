import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CarsList from "./Cars/CarsList";
import CarDetails from "./Cars/CarDetails";
import CarForm from "./Cars/CarForm";

function CarsComponent() {
    return(
        <Router>
            <Routes>
                <Route path="/cars" element={<CarsList />} />
                <Route path="/cars/:id" element={<CarDetails />} />
                <Route path="/cars/new" element={<CarForm />} />
            </Routes>
        </Router>
    )
}

export default CarsComponent;