import React from "react";
import BCA from '../../assets/img/payment-method/BCA.png';
import Mandiri from '../../assets/img/payment-method/Mandiri.png';
import BNI from '../../assets/img/payment-method/BNI.png';

const BankTransfer = () => {
    return (
        <div className="flex flex-col items-start p-0 gap-[16px] order-2 self-stretch grow-0">
            <div className="flex flex-col p-0 gap-[8px] items-start self-stretch order-0 grow-0">
                <div className="flex items-start p-0 gap-[10px] order-0 grow-0">
                <p className="font-[Manrpe] not-italic font-bold text-[16px] leading-[22px] text-[#414040] order-0 grow-0">
                    Bank Transfer
                </p>
                </div>
                <div className="flex justify-center items-center p-[8px] bg-[#f8f8f8] rounded-[4px] order-1 grow-0 self-stretch">
                    <p className="font-[DMSans] not-italic font-normal text-[12px] leading-[18px] text-[#414040] order-0 grow-1">
                        We will manually verify your payment.
                    </p>
                </div>
            </div>
            <div className="flex flex-col items-start p-0 gap-[8px] order-1 self-stretch grow-0">
                <div className="flex flex-col items-start p-[4px_0] gap-[10px] order-0 grow-0 self-stretch">
                    <div className="flex items-center p-0 gap-[86px] order-0 grow-0 self-stretch">
                        <div className="flex items-center p-[12px_0] gap-[16px] order-0 grow-0">
                            <figure>
                                <img src={BCA} />
                            </figure>
                            <p className="font-[DMSans] not-italic font-bold text-[12px] leading-[16px] text-[#414040] order-1 grow-0">
                                Transfer Bank BCA
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start p-0 gap-[10px] order-1 grow-0 self-stretch bg-[#bbbbbb] h-[1px]"></div>
                </div>
                <div className="flex flex-col items-start p-[4px_0] gap-[10px] order-0 grow-0 self-stretch">
                    <div className="flex items-center p-0 gap-[86px] order-0 grow-0 self-stretch">
                        <div className="flex items-center p-[12px_0] gap-[16px] order-0 grow-0">
                            <figure>
                                <img src={Mandiri} />
                            </figure>
                            <p className="font-[DMSans] not-italic font-bold text-[12px] leading-[16px] text-[#414040] order-1 grow-0">
                                Transfer Bank Mandiri
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start p-0 gap-[10px] order-1 grow-0 self-stretch bg-[#bbbbbb] h-[1px]"></div>
                </div>
                <div className="flex flex-col items-start p-[4px_0] gap-[10px] order-0 grow-0 self-stretch">
                    <div className="flex items-center p-0 gap-[86px] order-0 grow-0 self-stretch">
                        <div className="flex items-center p-[12px_0] gap-[16px] order-0 grow-0">
                            <figure>
                                <img src={BNI} />
                            </figure>
                            <p className="font-[DMSans] not-italic font-bold text-[12px] leading-[16px] text-[#414040] order-1 grow-0">
                                Transfer Bank BNI
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start p-0 gap-[10px] order-1 grow-0 self-stretch bg-[#bbbbbb] h-[1px]"></div>
                </div>
            </div>
        </div>
    )
};

export default BankTransfer;