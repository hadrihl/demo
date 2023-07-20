import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import UsersList from "./UsersList";
import UserDetails from "./UserDetails";
import UserForm from "./UserForm";

const UsersComponent = () => {

    return(
        <Router>
            <Routes>
                <Route path="/users" element={<UsersList />} />
                <Route path="/users/:id" element={<UserDetails />} />
                <Route path="/users/new" element={<UserForm />} />
            </Routes>
        </Router>
    )

}

export default UsersComponent;