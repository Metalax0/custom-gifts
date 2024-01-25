export interface FormInputGroupPropsType {
    layout: string;
    type: string;
    placeholder: string;
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
