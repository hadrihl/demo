import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import APIservice from "../../services/APIService";

const UsersList = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async() => {
        try {
            const response = await APIservice.get('/api/users');
            setUsers(response.data);
        } catch (err) {
            console.log(err);
        }
    }

    const deleteUser = async(id) => {
        try {
            const response = await APIservice.delete(`/api/users/${id}/delete`);
            console.log(response.data);
            fetchUsers();
        } catch(err) {
            console.log(err);
        }
    }

    return(
        <div>
            <h2>List of Users &nbsp;
                <Link to={`/users/new`}>
                    <button>Signup</button>
                </Link>
            </h2>
            <table>
                <thead>
                    <tr>
                        <th>#id</th>
                        <th>username</th>
                        <th>email</th>
                        <th>#action</th>
                    </tr>
                </thead>
                <tbody>
                        {
                            users.map((user) => (
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        <Link to={`/users/${user.id}`}>
                                            <button>Edit</button>
                                        </Link>
                                        &nbsp;<button onClick={() => deleteUser(user.id)}>Delete</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
            </table>
        </div>
    ) 

}

export default UsersList;