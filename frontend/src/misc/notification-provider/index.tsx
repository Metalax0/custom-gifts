import React, { createContext, useCallback, useMemo, ReactNode } from "react";
import { notification } from "antd";

interface NotificationProviderProps {
    children: ReactNode;
}

export const NotificationContext = createContext<{
    openNotification: (
        title: string,
        message: string,
        type: "success" | "info" | "warning" | "error"
    ) => void;
}>({
    openNotification: () => {},
});

const NotificationProvider: React.FC<NotificationProviderProps> = ({
    children,
}) => {
    const [api, contextHolder] = notification.useNotification();

    const openNotification = useCallback(
        (
            title: string,
            message: string,
            type: "success" | "info" | "warning" | "error"
        ) => {
            api[type]({
                message: `${title}`,
                description: (
                    <NotificationContext.Consumer>
                        {() => `${message}!`}
                    </NotificationContext.Consumer>
                ),
                type,
            });
        },
        [api]
    );

    const contextValue = useMemo(
        () => ({
            openNotification,
        }),
        [openNotification]
    );

    return (
        <NotificationContext.Provider value={contextValue}>
            {contextHolder}
            {children}
        </NotificationContext.Provider>
    );
};

export default NotificationProvider;
