import { useState, useEffect, useRef } from "react";
import axios from "axios";

const useFetch = (api_url) => {
    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        try {
            setIsLoading(true);
            const { data } = await axios.get(api_url);
            setData(data);
            setError(null);
        } catch (err) {
            setError(err);
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchData();
    }, [api_url])

    return { data, isLoading, error };
};


export default useFetch;
