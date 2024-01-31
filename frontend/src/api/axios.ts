import axios, {
    AxiosRequestConfig,
    AxiosResponse,
    InternalAxiosRequestConfig,
} from "axios";
import { getCookie } from "typescript-cookie";

// Create an Axios instance with default configuration
const api = axios.create({
    baseURL: "http://localhost:8000",
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
    },
});

// REQUEST INTERCEPTORS
api.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        // console.log("Request Interceptor:", config);
        const token = getCookie("token");
        if (token) config.headers.Authorization = `Bearer ${token ?? null}`;
        return config;
    },
    (error) => {
        // Navigate to Error page and send error message
        console.error("Request Error Interceptor:", error);
        return Promise.reject(error);
    }
);

// RESPONSE INTERCEPTORS
api.interceptors.response.use(
    (response: AxiosResponse) => {
        // console.log("Response Interceptor:", response);
        return response;
    },
    (error) => {
        // Navigate to Error page and send error message
        console.error("Response Error Interceptor:", error);
        return Promise.reject(error);
    }
);

// Fn that calls api
export const callAPI = async (
    method: "GET" | "POST",
    url: string,
    data: any = null,
    params: AxiosRequestConfig["params"] = null
) => {
    try {
        const response = await api({
            method,
            url,
            data,
            params,
        });
        return response.data; // Return the response data
    } catch (error) {
        // Handle errors (e.g., network issues, server errors)
        if (axios.isAxiosError(error)) {
            // Axios Errors
            console.error(
                "Request Error:",
                error.message,
                error.response?.data
            );
        } else {
            // Non Axios Errors
            console.error("Request Error:", (error as Error).message);
        }
        throw error;
    }
};
