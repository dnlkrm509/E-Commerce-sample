import React from "react";
import productsCategories from '../../data/productCategories';
import ProductsCategoriesItem from "./ProductCategoriesItem";

const ProductsCategories = () => {
    return (
        <div className="overflow-x-hidden">
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