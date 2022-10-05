import React from "react";

const TotalPayment = () => {
    return (
        <div className="mt-[36px] flex flex-col items-start p-0 gap-[10px] absolute left-0 bg-[#fff] w-full shadow-[0_-5px_25px_-15px_rgba(85,85,85,0.25)]">
            <div className="flex flex-col items-start p-[0_24px] gap-[10px] order-0 self-stretch grow-0 mt-[12px]">
                <div className="flex justify-between items-center p-0 gap-[10px] self-stretch order-0 grow-0">
                    Total Payment
                    <p className="font-[Manrope] not-italic font-bold text-[16px] leading-[22px] text-[#414040] order-1 grow-0">
                        RP 1347000
                    </p>
                </div>
                <button className="bg-[#a7a7a7] rounded-[4px] p-[11px_78px] self-stretch order-1 grow-0">
                    <span className="font-[Manrope] not-italic font-bold text-[14px] leading-[19px] text-center text-[#fff]">
                        Choose Payment Method
                    </span>
                </button>
            </div>
            <div className="w-full h-[24px] order-1 grow-0">
                <div className="w-[134px] h-[5px] bg-[#cccccc] rounded-[100px] mx-auto mt-[12px]"></div>
            </div>
        </div>
    )
};

export default TotalPayment;