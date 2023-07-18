import axios from "axios";

class APIService {

    // GET: cars
    getCars() {
        return axios.get("http://localhost:8080/api/posts");
    }
}

export default new APIService;