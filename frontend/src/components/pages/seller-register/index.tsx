import { useEffect, useState } from "react";
import { Button } from "../../atoms/button";
import "./style.css";
import { SellerRegisterProduct } from "./Product";
import { SellerRegisterCustomization } from "./Customization";
import { apiRoutes } from "../../../api/apiRoutes";
import { useAPI } from "../../../hooks/useAPI";

export const SellerRegister = () => {
    const [sectionPage, setsectionPage] = useState(0);
    const [selectedProducts, setselectedProducts] = useState<string[]>([]);
    const productAPI = useAPI();

    const handlePageChange = (newPage: number) => {
        setsectionPage(newPage);
        console.log(selectedProducts);
        if (newPage === 1 && selectedProducts.length !== 0) {
            productAPI.API(
                "POST",
                apiRoutes.setSellerProducts,
                selectedProducts
            );
        }
    };

    return (
        <div className="seller-register ">
            <h3 className="seller-register-txt">
                Choose {sectionPage ? "Customization" : "Product"}
            </h3>

            {sectionPage === 0 ? (
                <SellerRegisterProduct setState={setselectedProducts} />
            ) : (
                <SellerRegisterCustomization />
            )}

            <div className="seller-register-bttn-group">
                <Button
                    disabled={sectionPage ? false : true}
                    text="Prev"
                    handleButtonClick={() => handlePageChange(sectionPage - 1)}
                    type="primary"
                />
                <Button
                    disabled={sectionPage === 3 ? true : false}
                    text="Next"
                    handleButtonClick={() => handlePageChange(sectionPage + 1)}
                    type="primary"
                />
            </div>
        </div>
    );
};
