import { useEffect, useState } from "react";
import axios from "axios";

const useFetchDynamic = ({ url, method = "get", body = null, headers = null }) => {
    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const sendRequest = async () => {
        try {
            setIsLoading(true);
            const res = await axios[method](url, JSON.parse(headers), JSON.parse(body))
            setData(res.data);
            setError(null);

        } catch (err) {
            setError(err)
            console.log(err)
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        sendRequest();
    }, [url, headers, body])

    return { data, error, isLoading }
};

export default useFetchDynamic;