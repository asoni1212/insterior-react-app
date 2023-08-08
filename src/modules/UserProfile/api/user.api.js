import axios from "axios";


export const fetchUserData = async () => {
    try {
        const res = await axios.get("http://localhost:8806/user")
        return res;
    } catch (err) {
        return err;
    }
}