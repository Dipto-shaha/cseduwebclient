import { useEffect, useState } from 'react';
import useAxiosPrivate from '../useAxiosPrivate';

export default function useGetSingleNews(id) {  
    const [news, setNewsList] = useState({}); 
    const axios = useAxiosPrivate();
    console.log("Whats wrong")
    async function getSingleNews(id) {
        try {
            console.log("whats wrong")
            const res = await axios.get(`/news/${id}`);
            setNewsList(res?.data?.data);
            console.log(res)
            return true;
        } catch (error) {
            console.log("Error fetching News",error);
        }
    }
    useEffect(() => {
        getSingleNews(id);
    }, []);


    return  [news,setNewsList] ;
}