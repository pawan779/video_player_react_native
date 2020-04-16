import Axios from "axios"

export default Axios.create({
    url:"https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=react&type=video&key=AIzaSyD5Pb00LDUmms8dYvC__2RAD5eDcjdCrhs",
    header:{
        
    }
})