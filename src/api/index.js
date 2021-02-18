import axios from 'axios';

const {
    REACT_APP_API_BASE_URL,
    REACT_APP_API_KEY,
} = process.env;

export default axios.create({
    baseURL: REACT_APP_API_BASE_URL,
    params: {
        appid: REACT_APP_API_KEY ? REACT_APP_API_KEY : null,
    },
    timeout: 5000,
});