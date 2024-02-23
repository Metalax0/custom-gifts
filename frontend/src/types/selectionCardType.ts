export interface SelectionCardPropsType {
    title: string;
    img: string;
    isActive: "cardSelected" | null;
    onClick: () => void;
}
