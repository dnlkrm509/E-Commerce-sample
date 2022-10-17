import React from "react";
import walletSecondary from '../../assets/icons/wallet-secondary.svg';

const InstantPayment = () => {
    return (
        <div className="flex flex-col items-start p-0 gap-[16px] order-0 self-stretch grow-0">
            <div className="flex flex-col items-start p-0 gap-[8px] self-stretch order-0 grow-0">
                <p className="font-[Manrope] not-italic font-bold text-[16px] leading-[22px] text-[#414040] order-0 grow-0">
                    Instant Payment
                </p>
            </div>
            <div className="flex flex-col items-start p-0 gap-[10px] self-stretch order-1 grow-0">
                <div className="flex items-center p-0 gap-[86px] order-0 self-stretch grow-0">
                    <div className="flex items-center p-[8px_0] gap-[16px] order-0 grow-0">
                        <figure className="w-[24px] h-[24px]">
                            <img src={walletSecondary} />
                        </figure>
                        <p className="font-[DMSans] not-italic font-bold text-[12px] leading-[16px] text-[#414040] order-1 order-0">
                            E-Balance
                        </p>
                    </div>
                </div>
                <div className="self-stretch h-[1px] gap-[10px] bg-[#BBBBBB]"></div>
            </div>
        </div>
    )
};

export default InstantPayment;