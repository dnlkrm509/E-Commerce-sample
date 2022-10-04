import React from "react";

const AddressInformation = () => {
    return (
        <div className="mt-[32px] flex flex-col items-start p-[12px] gap-[10px] bg-[#fff] rounded-[8px] shadow-[0_5px_30_-20px_rgba(85,85,85,0.25)] self-stretch order-0 grow-0">
            <div className="flex justify-between items-center p-0 gap-[10px] self-stretch order-0 grow-0">
                <p className="font-[Manrope] not-italic font-bold text-[16px] leading-[22px] text-[#414040] order-0 grow-0">
                    Address Information
                </p>
                <p className="font-[DMSans] not-italic font-bold text-[12px] leading-[16px] text-[#9D44B5] order-1 grow-0">
                    Change
                </p>
            </div>
            <div className="mt-[24px] flex flex-col items-start p-0 gap-[8px] order-1 self-stretch grow-0">
                <p className="font-[DMSans] not-italic font-bold text-[14px] leading-[18px] text-[#555555] self-stretch order-0 grow-0">
                    Liam Henderson
                </p>
                <p className="font-[DMSans] not-italic font-normal text-[12px] leading-[18px] text-[#696969] order-1 self-stretch grow-0">
                    087892536172
                </p>
                <p className="font-[DMSans] not-italic font-normal text-[12px] leading-[18px] text-[#696969] order-2 self-stretch grow-1">
                    JI Jababeka 17-B
                </p>
            </div>
        </div>
    )
};

export default AddressInformation;