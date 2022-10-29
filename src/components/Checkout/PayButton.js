import React from "react";

const PayButton = () => {
    return (
        <div className="mt-[3px] flex flex-col items-start p-0 gap-[10px] order-4 self-stretch bg-[#fff] pt-[12px] shadow-[0_-5px_25px_-15px_rgba(85,85,85,0.25)]">
            <div className="flex flex-col items-start gap-[10px] order-0 self-stretch grow-0">
                <button className="bg-[#a7a7a7] rounded-[4px] self-stretch order-0 grow-0">
                    <p className="font-[Manrope] not-italic font-bold text-[14px] leading-[19px] items-center text-[#fff] py-[11px]">
                        Pay
                    </p>
                </button>
            </div>
            <div className="order-1 grow-0 h-[5px] bg-[#cccccc] rounded-[100px] w-[134px] mx-auto mt-[11px] mb-[8px]"></div>
        </div>
    )
};

export default PayButton;