import "./style.css";
import { useEffect, useState } from "react";
import { SelectionCard } from "../../../molecules/selectionCard";
import { apiRoutes } from "../../../../api/apiRoutes";
import { useAPI } from "../../../../hooks/useAPI";

export const SellerRegisterProduct = () => {
    const [selectedProduct, setselectedProduct] = useState({
        shirt: false,
        cup: false,
        frame: false,
    });

    const productAPI = useAPI();

    useEffect(() => {
        // getAllproducts
        productAPI.API("GET", apiRoutes.getAllproducts);
    }, []);

    console.log("RESSS", productAPI.data, productAPI.error);

    return (
        <div className="seller-register-product">
            <SelectionCard
                title="t-shirt"
                img="images/tshirt.jpg"
                isActive={selectedProduct.shirt ? "cardSelected" : null}
                onClick={() =>
                    setselectedProduct({
                        ...selectedProduct,
                        shirt: !selectedProduct.shirt,
                    })
                }
            />
            <SelectionCard
                title="Cup"
                img="images/cup.jpeg"
                isActive={selectedProduct.cup ? "cardSelected" : null}
                onClick={() =>
                    setselectedProduct({
                        ...selectedProduct,
                        cup: !selectedProduct.cup,
                    })
                }
            />
            <SelectionCard
                title="frame"
                img="images/frame.jpg"
                isActive={selectedProduct.frame ? "cardSelected" : null}
                onClick={() =>
                    setselectedProduct({
                        ...selectedProduct,
                        frame: !selectedProduct.frame,
                    })
                }
            />
        </div>
    );
};
