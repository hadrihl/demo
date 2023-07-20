import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CarsList from "./CarsList";
import CarDetails from "./CarDetails";
import CarForm from "./CarForm";

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