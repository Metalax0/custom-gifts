import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { useEffect, useState } from "react";

export const useAPI = <T>(
    url: string,
    options?: AxiosRequestConfig,
    token?: string
) => {
    const [data, setData] = useState<T | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<unknown>(null);

    const fetchData = async () => {
        setIsLoading(true);

        try {
            // If token provided, make API requests, attaching the token
            if (token) {
                options = {
                    ...options,
                    headers: {
                        ...options?.headers,
                        Authorization: `Bearer ${token}`,
                    },
                };
            }
            const response: AxiosResponse<T> = await axios(url, options);
            setData(response.data);
        } catch (err) {
            setError(err);
        }

        setIsLoading(false);
    };

    useEffect(() => {
        fetchData();
    }, []);

    return { data, isLoading, error };
};
