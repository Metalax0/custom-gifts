import { useState } from "react";
import { callAPI } from "../api/axios";

export const useAPI = () => {
    const [data, setData] = useState<any>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<unknown>(null);

    const API = async (
        method: "GET" | "POST",
        url: string,
        data: any = null
    ) => {
        setIsLoading(true);
        try {
            const response = await callAPI(method, url, data);
            setData(response);
        } catch (err) {
            setError(err);
            // change a global state of error. Give a notification on top right.
        }
        setIsLoading(false);
    };

    return { API, data, isLoading, error };
};
