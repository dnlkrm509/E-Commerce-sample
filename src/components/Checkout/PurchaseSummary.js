import React from "react";
import { useSelector } from "react-redux";

const PurchaseSummary = () => {
    const totalPrice = useSelector(state => state.cart.totalPrice);
    const totalQuantity = useSelector(state => state.cart.totalQuantity);

    return (
        <div className="mt-[40px] flex flex-col items-start p-0 gap-[24px] w-[327px] h-[115px] order-3 self-stretch grow-0">
            <div className="flex items-start p-0 gap-[10px] w-[327px] h-[22px] order-0 self-stretch grow-0">
                <p className="font-[Manrope] not-italic font-bold text-[16px] leading-[22px] text-[#414040] order-0 grow-0">
                    Purchase Summary
                </p>
            </div>
            <div className="flex flex-col items-start p-0 gap-[16px] w-[327px] h-[69px] order-1 grow-0 self-stretch">
                <div className="flex justify-between items-start p-0 gap-[41px] w-[327px] h-[35px] order-0 grow-0 self-stretch">
                    <div className="flex flex-col items-start p-0 gap-[4px] w-[58px] h-[35px] order-0 grow-0">
                        <p className="font-[DMSans] w-[58px] h-[18px] not-italic text-[12px] leading-[18px] text-[#555555] font-normal order-0 grow-0">
                            Total Price
                        </p>
                        <p className="w-[35px] h-[13px] font-[DMSans] not-italic font-normal text-[10px] leading-[13px] text-[#555555] order-1 grow-0">
                            {totalQuantity} items
                        </p>
                    </div>
                    <p className="w-[200px] h-[16px] leading-[16px] text-right text-[12px] font-bold font-[DMSans] not-italic text-[#555555] order-1 grow-0">
                        RP {totalPrice.toFixed(3)}
                    </p>
                </div>
            </div>
        </div>
    )
};

export default PurchaseSummary;