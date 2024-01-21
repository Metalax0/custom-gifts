export const toggleTheme = (setState: any) => {
    const currentTheme = document.querySelector("html")!.getAttribute("theme");
    changeTheme(currentTheme === "dark" ? "light" : "dark", setState);
};

export const changeTheme = (theme: string, setState: any) => {
    document.querySelector("html")!.setAttribute("theme", theme);
    localStorage.setItem("theme", theme);
    setState(theme);
};
