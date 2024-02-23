import "./style.css";
import { useEffect, useState } from "react";
import { SelectionCard } from "../../../molecules/selectionCard";
import { apiRoutes } from "../../../../api/apiRoutes";
import { useAPI } from "../../../../hooks/useAPI";
import { SellerRegisterProductPropsType } from "../../../../types/sellerRegisterProductType";
import { ProductItemType, ProductType } from "../../../../types/productType";

export const SellerRegisterProduct = ({
    setState,
}: SellerRegisterProductPropsType) => {
    const productAPI = useAPI();
    const [selectedProduct, setselectedProduct] = useState<ProductType>({
        shirt: false,
        mug: false,
        frame: false,
        decal: false,
    });

    useEffect(() => {
        productAPI.API("GET", apiRoutes.getAllProducts);
    }, []);

    // is called whenever seller's product selection changes
    useEffect(() => {
        if (productAPI.data) {
            const productData: string[] = productAPI.data
                .map((item: ProductItemType) =>
                    selectedProduct[item.product_name as keyof ProductType]
                        ? item.product_id.toString()
                        : null
                )
                .filter((id: string) => id !== null);
            setState(productData);
        }
    }, [selectedProduct]);

    return (
        <div className="seller-register-product">
            {productAPI.data &&
                productAPI.data.map((item: ProductItemType) => {
                    const prodName = item.product_name as keyof ProductType;
                    return (
                        <SelectionCard
                            key={item.product_name}
                            title={prodName}
                            img={`images/${prodName}.jpg`}
                            isActive={
                                selectedProduct[prodName]
                                    ? "cardSelected"
                                    : null
                            }
                            onClick={() =>
                                setselectedProduct({
                                    ...selectedProduct,
                                    [prodName]: !selectedProduct[prodName],
                                })
                            }
                        />
                    );
                })}
            {!productAPI.data && (
                <h4 className="seller-register-invalid-product">
                    Product Name in Database does not match product name hard
                    coded in front end. Valid products : shirt, mug, frame,
                    decal
                </h4>
            )}
        </div>
    );
};
