import React from "react";
import Gopay from '../../assets/img/payment-method/Gopay.png';
import OVO from '../../assets/img/payment-method/OVO.png';

const DigitalWallet = () => {
    return (
        <div className="flex flex-col items-start p-0 gap-[16px] order-3 self-stretch grow-0">
            <div className="flex items-start p-0 gap-[10px] order-0 grow-0">
                <p className="font-[Manrpe] not-italic font-bold text-[16px] leading-[22px] text-[#414040] order-0 grow-0">
                    Digital Wallet
                </p>
            </div>
            <div className="flex flex-col items-start p-0 gap-[8px] order-1 self-stretch grow-0">
                <div className="flex flex-col items-start p-[4px_0] gap-[10px] order-0 grow-0 self-stretch">
                    <div className="flex items-center p-0 gap-[86px] order-0 grow-0 self-stretch">
                        <div className="flex items-center p-[12px_0] gap-[16px] order-0 grow-0">
                            <figure>
                                <img src={Gopay} />
                            </figure>
                            <p className="font-[DMSans] not-italic font-bold text-[12px] leading-[16px] text-[#414040] order-1 grow-0">
                                Gopay
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start p-0 gap-[10px] order-1 grow-0 self-stretch bg-[#bbbbbb] h-[1px]"></div>
                </div>
                <div className="flex flex-col items-start p-[4px_0] gap-[10px] order-0 grow-0 self-stretch">
                    <div className="flex items-center p-0 gap-[86px] order-0 grow-0 self-stretch">
                        <div className="flex items-center p-[12px_0] gap-[16px] order-0 grow-0">
                            <figure>
                                <img src={OVO} />
                            </figure>
                            <p className="font-[DMSans] not-italic font-bold text-[12px] leading-[16px] text-[#414040] order-1 grow-0">
                                OVO
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start p-0 gap-[10px] order-1 grow-0 self-stretch bg-[#bbbbbb] h-[1px]"></div>
                </div>
            </div>
        </div>
    )
};

export default DigitalWallet;