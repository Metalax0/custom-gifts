import { useEffect, useState } from "react";
import { Button } from "../../atoms/button";
import "./style.css";
import { SellerRegisterProduct } from "./Product";
import { SellerRegisterCustomization } from "./Customization";
import { apiRoutes } from "../../../api/apiRoutes";
import { useAPI } from "../../../hooks/useAPI";
import { getCookie } from "typescript-cookie";

export const SellerRegister = () => {
    const [sectionPage, setsectionPage] = useState(0);
    const [selectedProducts, setselectedProducts] = useState<number[]>([]);
    const productAPI = useAPI();

    const handlePageChange = (newPage: number) => {
        setsectionPage(newPage);

        const cookieUserInfo = getCookie("userInfo") as string;
        const userID = JSON.parse(cookieUserInfo).id;

        const APIData = {
            user_id: userID,
            product_ids: selectedProducts,
        };

        console.log(cookieUserInfo, APIData);

        if (newPage === 1 && selectedProducts.length !== 0) {
            productAPI.API("POST", apiRoutes.setSellerProducts, APIData);
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
