import axios from 'axios';

const apiKey = '547ac6529bcbee0a5b1e5de4d129b8cc'

export default axios.create({
    // baseURL: 'http://localhost:1234',
    baseURL: `http://api.openweathermap.org/data/2.5/weather`,
    params: {
        appid: apiKey,
    },
    timeout: 5000,
});