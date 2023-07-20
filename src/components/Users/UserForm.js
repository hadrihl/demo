import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import APIService from "../../services/APIService";

const UserForm = () => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handlerSubmit = (e) => {
        e.preventDefault();

        const newUser = {
            username, 
            email, 
            password
        }

        try {
            const response = APIService.post(`/api/auth/signup/new`, newUser);
            navigate("/users");
        } catch(err) {
            console.log(err);
        }
    }

    return(
        <div>
            <h1>Signup new User</h1>
            <form onSubmit={handlerSubmit}>
                <label>Username:
                    <input type="text" onChange={e => setUsername(e.target.value)} required />
                </label><br></br>

                <label>Email:
                    <input type="text" onChange={e => setEmail(e.target.value)} required />
                </label><br></br>

                <label>Password:
                    <input type="password" onChange={e => setPassword(e.target.value)} required />
                </label><br></br>

                <Link to={"/users"}>
                    <button>Cancel</button>
                </Link>&nbsp;
                <button type="submit">Signup</button>
            </form>
        </div>
    )
}

export default UserForm;