import React from "react";
import PopularProductsItem from "./PopularProductsItem";
import popularProducts from "../../data/popularProducts";

const PopularProductsList = () => {
    const popularProductsSlices = popularProducts.slice(0, 3);
    return (
        <div className="overflow-x-hidden flex flex-col items-start p-0 self-stretch order-2">
            <div className="flex justify-between items-center p-0 gap-[10px] self-stretch">
                <h3 className="w-[135px] h-[22px] font-[Manrope] not-italic font-bold text-[16px] leading-[22px] text-[#414040]">
                    Popular Products
                </h3>
                <p className="w-[45px] h-[18px] font-[DM-Sans] leading-[18px] text-[12px] text-[#9D44B5] font-medium">
                    View All
                </p>
            </div>
            <ul className="flex mt-[16px] gap-[16px]">
            {popularProductsSlices.map((popularProductsSlice) => (
                <PopularProductsItem 
                    key={popularProductsSlice.title}
                    title={popularProductsSlice.title}
                    image={popularProductsSlice.image}
                    rating={popularProductsSlice.rating}
                    price={popularProductsSlice.price}
                />
            ))}
            </ul>
            <div className="bg-[#eeefef] h-[4px] self-stretch order-0 grow mt-[40px] mb-[40px]"></div>
        </div>
    )
};

export default PopularProductsList;