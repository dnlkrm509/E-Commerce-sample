import React from "react";
import popularProducts from "../../data/popularProducts";
import YouMightLikeThisItem from "./YouMightLikeThisItem";

const YouMightLikeThisList = () => {
    const popularProductsSlices = popularProducts.slice(0, 3);
    return (
        <div className="overflow-x-hidden flex flex-col items-start p-0 self-stretch order-2 mt-[40px] mb-[40px]">
            <div className="flex justify-between items-center p-0 gap-[10px] self-stretch">
                <h3 className="h-[22px] font-[Manrope] not-italic font-bold text-[16px] leading-[22px] text-[#414040]">
                    You might like this too
                </h3>
            </div>
            <ul className="flex mt-[16px] gap-[16px]">
            {popularProductsSlices.map((popularProductsSlice) => (
                <YouMightLikeThisItem 
                    key={popularProductsSlice.title}
                    title={popularProductsSlice.title}
                    image={popularProductsSlice.image}
                    rating={popularProductsSlice.rating}
                    price={popularProductsSlice.price}
                />
            ))}
            </ul>
            <div className="bg-[#eeefef] h-[4px] self-stretch order-0 grow mt-[40px]"></div>
        </div>
    )
};

export default YouMightLikeThisList;