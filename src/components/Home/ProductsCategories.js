import React from "react";
import productsCategories from '../../data/productCategories';
import ProductsCategoriesItem from "./ProductCategoriesItem";

const ProductsCategories = () => {
    return (
        <div className="overflow-x-hidden mb-[40px] mt-[40px]">
            <h4 className="text-[#144040] text-[14px] font-bold leading-[19px] not-italic w-[141px] h-[19px] mb-[24px] font-[Manrope]">Products Categories</h4>
            <ul className="flex gap-[16px] overflow-x-auto">
            {productsCategories.map((productCategories) => (
                <ProductsCategoriesItem 
                    key={productCategories.title}
                    title={productCategories.title}
                    image={productCategories.image}
                />
            ))}
            </ul>
        </div>
    )
};

export default ProductsCategories;