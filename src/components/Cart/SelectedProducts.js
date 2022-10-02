import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import PopularProducts from "../../data/popularProducts";
import SelectedProductsItem from "./SelectedProductsItem";

const SelectedProducts = (props) => {
    const popularProductsSlices = PopularProducts.slice(1, 3);

    return (
        <div className="flex flex-col items-start gap-[16px] p-0 order-1 grow-0 mb-[40px]">
            <div className="flex items-center p-[0_16px] gap-[12px] order-0 grow-0">
                <p className="text-[14px] text-[#fff] bg-[#4494B5] p-[1px_3px] rounded-[4px]">
                    <FontAwesomeIcon icon={faCheck} />
                </p>
                <p className="translate-y-[2px] font-[DMSans] ont-italic font-normal text-[14px] leading-[18px] text-[#414040] order-1">
                    Select All
                </p>
            </div>
            <div className="mt-[16px] h-[2px] self-stretch bg-[#bbbbbb] order-0 grow-1"></div>
            <ul className="mt-[16px] flex flex-col items-start gap-[16px] p-[0_24px] order-2 grow-0">
            {popularProductsSlices.map((popularProductsSlice) => (
            <SelectedProductsItem 
                key={popularProductsSlice.id}
                id={popularProductsSlice.id}
                title={popularProductsSlice.title}
                image={popularProductsSlice.image}
                rating={popularProductsSlice.rating}
                price={popularProductsSlice.price}
                brand={popularProductsSlice.brand}
                onDeleteItem={props.onDeleteItem}
            />
        ))}
            </ul>
            <div className="mt-[16px] h-[2px] self-stretch bg-[#bbbbbb] order-2 grow-1"></div>
        </div>
    )
};

export default SelectedProducts;