import React from "react";
import PopularProducts from "../../data/popularProducts";
import MoreProductsItem from "./MoreProductsItem";

const MoreProductsList = () => {
    const popularProductsSlices = PopularProducts.slice(1, 3);
    return (
        <div className="flex flex-col items-start p-0 gap-[16px] self-stretch order-5">
            <div className="flex justify-between items-center p-0 gap-[10px] self-stretch">
                <h3 className="h-[22px] font-[Manrope] not-italic font-bold text-[16px] leading-[22px] text-[#414040]">
                    More Products
                </h3>
            </div>
            <ul className="flex flex-col items-start p-0 order-5 gap-[16px]">
            {popularProductsSlices.map((popularProductsSlice) => (
                <MoreProductsItem 
                    key={popularProductsSlice.title}
                    title={popularProductsSlice.title}
                    image={popularProductsSlice.image}
                    rating={popularProductsSlice.rating}
                    price={popularProductsSlice.price}
                    brand={popularProductsSlice.brand}
                />
            ))}
            </ul>
        </div>
    )
};

export default MoreProductsList;