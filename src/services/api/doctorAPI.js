import axios from "axios";

const doctorAPI = axios.create({
    baseURL: 'https://api.allodoc.md/users/',
})

export default doctorAPI;