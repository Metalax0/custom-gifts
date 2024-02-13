export interface ButtonPropType {
    text: string;
    type: "primary" | "secondary";
    handleButtonClick: (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => void;
}
