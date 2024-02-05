import { setTheme } from "../state-management/slices/uiSlice";

export const toggleTheme = (dispatch: any) => {
    const currentTheme = document.querySelector("html")!.getAttribute("theme");
    changeTheme(currentTheme === "dark" ? "light" : "dark", dispatch);
};

export const changeTheme = (newTheme: string, dispatch: any) => {
    document.querySelector("html")!.setAttribute("theme", newTheme);
    localStorage.setItem("theme", newTheme);
    dispatch(setTheme(newTheme));
};

export const isDarkTheme = () => {
    return localStorage.getItem("theme") === "dark" ? true : false;
};
