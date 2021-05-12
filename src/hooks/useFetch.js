import { useEffect, useState } from 'react'

const useFetch = (change , url)=>{
    const [isLoading , setLoading] = useState(false);
    const [error , setError] = useState(false);
    const [data , setData] = useState(null);

    useEffect(()=>{
        fetch(url)
        .then((res) => {
            setLoading(true)
            return res.json();
        })
        .then((data)=>{
            setData(data);
            setLoading(false)
        })
        .catch((err) => {
            setLoading(false)
            setError(err);
        });
    }, [change])

    return {error , isLoading , data }
}

export default useFetch;