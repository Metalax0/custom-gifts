export interface ButtonPropType {
    text: string;
    isSubmit?: boolean;
    handleButtonClick: (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => void;
}
