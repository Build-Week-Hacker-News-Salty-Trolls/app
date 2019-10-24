// Built out Axios with auth for future use once we have the avalible end points 

import axios from 'axios';

export const axiosWithAuth = () => {
    const token = localStorage.getItem('token')
    return axios.create({
        baseURL: 'https://sethnadu-foodie-bw.herokuapp.com',
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        }
    })
}