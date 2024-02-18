import "./style.css";
import { useState } from "react";
import { SelectionCard } from "../../../molecules/selectionCard";

export const SellerRegisterCustomization = () => {
    const [selectedProduct, setselectedProduct] = useState({
        shirt: false,
        cup: false,
        frame: false,
        border: false,
    });

    return (
        <div className="seller-register-product">
            <SelectionCard
                title="color"
                img="images/color.jpg"
                isActive={selectedProduct.shirt ? "cardSelected" : null}
                onClick={() =>
                    setselectedProduct({
                        ...selectedProduct,
                        shirt: !selectedProduct.shirt,
                    })
                }
            />
            <SelectionCard
                title="shape"
                img="images/shape.jpg"
                isActive={selectedProduct.cup ? "cardSelected" : null}
                onClick={() =>
                    setselectedProduct({
                        ...selectedProduct,
                        cup: !selectedProduct.cup,
                    })
                }
            />
            <SelectionCard
                title="size"
                img="images/size.jpg"
                isActive={selectedProduct.frame ? "cardSelected" : null}
                onClick={() =>
                    setselectedProduct({
                        ...selectedProduct,
                        frame: !selectedProduct.frame,
                    })
                }
            />

            <SelectionCard
                title="border"
                img="images/border.jpg"
                isActive={selectedProduct.border ? "cardSelected" : null}
                onClick={() =>
                    setselectedProduct({
                        ...selectedProduct,
                        border: !selectedProduct.border,
                    })
                }
            />
        </div>
    );
};
