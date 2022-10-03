import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const TotalPrice = () => {
    const totalPrice = useSelector(state => state.cart.totalPrice);
    const totalQuantity = useSelector(state => state.cart.totalQuantity);
    const history = useHistory();

    const linkToCheckoutHandler = () => {
        history.push('/checkout');
    };

    return (
        <div className="flex flex-col items-start p-[16px_24px] gap-[10px] bg-[#fff] order-0 self-stretch grow-0">
            <div className="flex justify-between items-center p-0 gap-[68px] order-0 grow-0 self-stretch">
                <div className="flex flex-col items-start p-0 gap-[2px] order-0 grow-0">
                    <p className="font-[DMSans] not-italic font-normal text-[12px] leading-[18px] text-[#000000] order-0 grow-0">
                        Price Total
                    </p>
                    <p className="font-[DMSans] not-italic font-bold text-[12px] leading-[16px] text-center text-[#000000] order-0 grow-0">
                        RP {totalPrice.toFixed(3)}
                        <span className="ml-[4px] font-[DMSans] not-italic font-normal text-[10px] leading-[13px] items-center text-[#696969] order-1 grow-0">
                            ({totalQuantity} items)
                        </span>
                    </p>
                </div>
                <button 
                    onClick={linkToCheckoutHandler}
                    className="w-[80px] h-[32px] flex items-center p-[4px_8px] gap-[10px] bg-[#9D44B5] rounded-[4px] order-1 grow-0">
                    <span className="w-[64px] h-[18px] font-[DMSans] not-italic font-medium text-[12px] leading-[18px] text-center text-[#fff] order-0 grow-1">
                        Buy
                    </span>
                </button>
            </div>
        </div>
    )
};

export default TotalPrice;