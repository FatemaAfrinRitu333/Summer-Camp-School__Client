import axios from 'axios';
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../Providers/AuthProvider';

const axiosSecure = axios.create({
    baseURL: `https://chorus-camp-server.onrender.com`
});

const useAxiosSecure = () => {

    // const { LogOut } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(()=>{
        axiosSecure.interceptors.request.use((config)=>{
            const token = localStorage.getItem('access-token');
            if(token){
                config.headers.Authorization = `Bearer ${token}`;
            }
            return config;
        });

        axiosSecure.interceptors.response.use(
            (response)=> response,
            (error)=>{
                if(error.response && (error.response.status === 401 || error.response.status === 403)){
                    // await LogOut();
                    navigate('/');
                }
                return Promise.reject(error);
            }
        );
    },[navigate])

    return [axiosSecure]
};

export default useAxiosSecure;