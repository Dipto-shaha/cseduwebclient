import { useEffect, useState } from 'react';
import useAxiosPrivate from './useAxiosPrivate';

export default function useGetUserInfo() {  
    const [user, setUserInfo] = useState({}); 
    const axios = useAxiosPrivate();
    async function getUserInfo() {
        try {
            const id = localStorage.getItem("id")
            const res = await axios.get(`/user/${id}`);
            setUserInfo(res?.data?.data);
            console.log(res.data.data)

            return true;
        } catch (error) {
            setUserInfo(null);
            console.log("Error fetching user Inof",error);
        }
    }
    useEffect(() => {
        getUserInfo();
    }, []);


    return  [user,setUserInfo] ;
}