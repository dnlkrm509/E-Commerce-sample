import React from "react";
import NewArivalsItem from "./NewArivalsItem";
import PopularProducts from "../../data/popularProducts";

const NewArivalsList = () => {
    const popularProductsSlices = PopularProducts.slice(1, 3);
    return (
        <div className="flex flex-col items-start p-0 gap-[16px] self-stretch order-5">
            <div className="flex justify-between items-center p-0 gap-[10px] self-stretch">
                <h3 className="w-[96px] h-[22px] font-[Manrope] not-italic font-bold text-[16px] leading-[22px] text-[#414040]">
                    New Arivals
                </h3>
                <p className="w-[45px] h-[18px] font-[DM-Sans] leading-[18px] text-[12px] text-[#9D44B5] font-medium order-1">
                    View All
                </p>
            </div>
            <ul className="flex flex-col items-start p-0 order-5 gap-[16px]">
            {popularProductsSlices.map((popularProductsSlice) => (
                <NewArivalsItem 
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

export default NewArivalsList;