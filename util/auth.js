import axios from 'axios';
import config from './config';

const createUser = () => {
    axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${config.apiKey}`);
};