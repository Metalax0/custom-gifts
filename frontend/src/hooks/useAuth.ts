// import { useAPI } from "./useAPI";

// export const useAuth = () => {
//     const { data, isLoading, error, ...rest } = useAPI("/api/auth"); // Replace with your authentication API endpoint

//     const login = async (email: string, password: string) => {
//         // Use the useAPI hook for login API call
//         // Customize the URL and options as needed for your login endpoint
//         return await useAPI("/api/login", {
//             method: "POST",
//             data: { email, password },
//         });
//     };

//     const register = async (email: string, password: string) => {
//         // Use the useAPI hook for register API call
//         // Customize the URL and options as needed for your register endpoint
//         return await useAPI("/api/register", {
//             method: "POST",
//             data: { email, password },
//         });
//     };

//     // You can also add other methods related to authentication if needed

//     return { data, isLoading, error, login, register, ...rest };
// };
