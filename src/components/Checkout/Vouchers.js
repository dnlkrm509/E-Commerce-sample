import React from "react";
import discountPrimary from '../../assets/icons/discount-primary.svg';

const Vouchers = () => {
    return (
        <div className="mt-[32px] flex flex-col items-start p-[0_24px] gap-[32px]">
            <div className="flex flex-col items-start p-0 gap-[8px] order-0 self-stretch grow-0">
                <p className="font-[Manrope] not-italic font-bold text-[16px] leading-[22px] text-[#414040] order-0 grow-0">
                    Vouchers
                </p>
                <p className="font-[DMSans] not-italic font-normal text-[12px] leading-[18px] text-[#929292] order-1 grow-0">
                    you have 5 vouchers
                </p>
            </div>
            <div className="flex flex-col items-start p-0 gap-[10px] order-1 self-stretch grow-0">
                <p className="font-[Manrope] not-italic font-bold text-[14px] leading-[19px] text-[#414040] order-0 grow-0">
                    Applicable Vouchers
                </p>
                <div className="flex flex-col items-start p-[16px] gap-[10px] bg-[#fff] shadow-[0_5px_30px_-20px_rgba(85,85,85,0.25)] rounded-[4px] order-1 self-stretch grow-0">
                    <div className="flex flex-col items-start p-0 gap-[16px] order-0 self-stretch grow-0">
                        <div className="flex flex-col items-start p-0 gap-[8px] order-0 self-stretch grow-0">
                            <div className="flex items-start p-0 gap-[8px] order-0 grow-0">
                                <figure className="w-[16px]">
                                    <img src={discountPrimary} />
                                </figure>
                                <p className="font-[Manrope] not-italic font-bold text-[14px] leading-[19px] text-[#414040] order-1 grow-0">
                                    80% Cashback
                                </p>
                            </div>
                            <p className="font-[Manrope] not-italic font-normal text-[12px] leading-[18px] text-[#7e7e7e] order-1 grow-0">
                                for all products
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Vouchers;