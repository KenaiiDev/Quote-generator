import { useState, useEffect } from "react";


const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    
    const fetchData = async () => {
        setLoading(true);
        try {
            const response = await fetch(url);
            const json = await response.json();
            setData(json);
        } catch (error) {
            setError(error);
        }
        setLoading(false);
    }
    
    useEffect(() => {
        fetchData();
    }, [url]);
    
    return { data, loading, error };
}

export default useFetch;