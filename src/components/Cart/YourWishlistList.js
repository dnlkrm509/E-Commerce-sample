import React from "react";
import popularProducts from "../../data/popularProducts";
import YourWishlistItem from "./YourWishlistItem";

const YourWishlistList = (props) => {
    const popularProductsSlices = popularProducts.slice(0, 3);
    return (
        <div className="overflow-x-hidden flex flex-col items-start p-[0_24px] gap-[16px] self-stretch order-1 grow-0 mt-[40px] mb-[40px]">
            <div className="flex items-start p-0 gap-[10px] self-stretch order-0 grow-0">
                <h3 className="h-[22px] font-[Manrope] not-italic font-bold text-[16px] leading-[22px] text-[#414040] order-0 grow-0">
                    Your Wishlist
                </h3>
            </div>
            <ul className="flex mt-[16px] gap-[16px] items-start p-0 order-1 grow-0">
            {popularProductsSlices.map((popularProductsSlice) => (
                <YourWishlistItem 
                    key={popularProductsSlice.id}
                    id={popularProductsSlice.id}
                    title={popularProductsSlice.title}
                    image={popularProductsSlice.image}
                    rating={popularProductsSlice.rating}
                    price={popularProductsSlice.price}
                    onSelected={props.onSelected}
                />
            ))}
            </ul>
            <div className="order-2"></div>
        </div>
    )
};

export default YourWishlistList;