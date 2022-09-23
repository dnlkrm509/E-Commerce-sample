import React from "react";
import PopularProducts from "../../data/popularProducts";
import WishlistItem from "./WishlistItem";

const WishlistList = (props) => {
    const popularProductsSlices = PopularProducts.slice(1, 3);

    return (
        <ul className="flex flex-col items-start p-0 order-0 gap-[25px] mb-[40px] self-stretch grow-0">
        {popularProductsSlices.map((popularProductsSlice) => (
            <WishlistItem 
                key={popularProductsSlice.id}
                id={popularProductsSlice.id}
                title={popularProductsSlice.title}
                image={popularProductsSlice.image}
                rating={popularProductsSlice.rating}
                price={popularProductsSlice.price}
                brand={popularProductsSlice.brand}
                onSelected={props.onSelected}
            />
        ))}
        </ul>
    )
};

export default WishlistList;