import axios from 'axios';

export const getAllEmployees = () => {
    return axios.get('https://reqres.in/api/users?per_page=12')
}


