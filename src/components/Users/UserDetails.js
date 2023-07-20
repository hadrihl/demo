import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import APIService from "../../services/APIService";

const UserDetails = () => {
    
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const { id } = useParams('id');
    const navigate = useNavigate();

    const handlerSubmit = (e) => {
        e.preventDefault();

        const newUser = {
            username,
            email
        }

        // CALL API: PUT
        try {
            const response = APIService.put(`/api/users/${id}/update`, newUser);
            console.log("data updated: " + response.data);
            navigate("/users");
        } catch(err) {
            console.log(err);
        }
    }

    useEffect(() => {
        fetchUser();
    }, []);

    const fetchUser = async() => {
        try {
            const response = await APIService.get(`/api/users/${id}`);
            setUsername(response.data.username);
            setEmail(response.data.email);
        } catch(err) {
            console.log(err);
        }
    }

    return(
        <div>
            <h2>#id: {id}</h2>
            <form onSubmit={handlerSubmit}>
                <label>Username:
                    <input type="text" defaultValue={username} onChange={e => setUsername(e.target.value)} />
                </label><br></br>

                <label>Email:
                    <input type="text" defaultValue={email} onChange={e => setEmail(e.target.value)} />
                </label><br></br>

                <Link to={"/users"}><button>Cancel</button></Link>&nbsp;
                <button type="submit">Update</button>
            </form>
        </div>
    )
}

export default UserDetails;