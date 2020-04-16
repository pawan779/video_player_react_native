import Axios from "axios";

export default Axios.create({
    baseURL:"http://192.168.1.21:3000",
    header:{
        'Content-Type':"application/json"
    }
})