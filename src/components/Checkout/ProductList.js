import React from "react";
import PopularProducts from "../../data/popularProducts";
import ProductItem from "./ProductItem";

const ProductList = (props) => {
    const popularProductsSlices = PopularProducts.slice(1, 3);

    return (
        <div className="mt-[40px] flex flex-col items-start p-0 gap-[16px] self-stretch order-1 grow-0">
            <div className="flex items-start p-0 gap-[10px] self-stretch order-0 grow-0">
                <p className="font-[Manrope] not-italic font-bold text-[16px] leading-[22px] text-[#414040] order-0 grow-0">
                    Product List
                </p>
            </div>
            <ul className="flex flex-col items-start p-0 gap-[8px] order-1 self-stretch grow-0">
                {popularProductsSlices.map((popularProductsSlice) => (
                <ProductItem 
                    key={popularProductsSlice.id}
                    id={popularProductsSlice.id}
                    title={popularProductsSlice.title}
                    image={popularProductsSlice.image}
                    rating={popularProductsSlice.rating}
                    price={popularProductsSlice.price}
                    brand={popularProductsSlice.brand}
                    onSelected={props.onSelectedItemId}
                    itemsCount={popularProductsSlices.length}
                />
                ))}
            </ul>
        </div>
    )
};

export default ProductList;