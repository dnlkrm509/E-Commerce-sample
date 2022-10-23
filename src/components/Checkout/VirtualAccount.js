import React from "react";
import BCA from '../../assets/img/payment-method/BCA.png';
import Mandiri from '../../assets/img/payment-method/Mandiri.png';
import BNI from '../../assets/img/payment-method/BNI.png';
import BRIVIA from '../../assets/img/payment-method/BRIVIA.png';

const VirtualAccount = () => {
    return (
        <div className="flex flex-col items-start p-0 gap-[16px] order-1 self-stretch grow-0">
            <div className="flex flex-col p-0 gap-[8px] items-start self-stretch order-0 grow-0">
                <div className="flex items-start p-0 gap-[10px] order-0 grow-0">
                <p className="font-[Manrpe] not-italic font-bold text-[16px] leading-[22px] text-[#414040] order-0 grow-0">
                    Virtual Account
                </p>
                </div>
                <div className="flex justify-center items-center p-[8px] bg-[#f8f8f8] rounded-[4px] order-1 grow-0 self-stretch">
                    <p className="font-[DMSans] not-italic font-normal text-[12px] leading-[18px] text-[#414040] order-0 grow-1">
                        Can be transferred via internet Banking, Mobile Banking, and ATM Transfers.
                    </p>
                </div>
            </div>
            <div className="flex flex-col items-start p-0 gap-[8px] order-1 self-stretch grow-0">
                <div className="flex flex-col items-start p-[4px_0] gap-[10px] order-0 grow-0 self-stretch">
                    <div className="flex items-center p-0 gap-[86px] order-0 grow-0 self-stretch">
                        <div className="flex items-center p-[12px_0] gap-[16px] order-0 grow-0">
                            <figure className="h-[8px]">
                                <img src={BCA} />
                            </figure>
                            <p>
                                BCA Virtual Account
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
                            <p>
                                Mandiri Virtual Account
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
                            <p>
                                BNI Virtual Account
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start p-0 gap-[10px] order-1 grow-0 self-stretch bg-[#bbbbbb] h-[1px]"></div>
                </div>
                <div className="flex flex-col items-start p-[4px_0] gap-[10px] order-0 grow-0 self-stretch">
                    <div className="flex items-center p-0 gap-[86px] order-0 grow-0 self-stretch">
                        <div className="flex items-center p-[12px_0] gap-[16px] order-0 grow-0">
                            <figure>
                                <img src={BRIVIA} />
                            </figure>
                            <p>
                                BRIVA
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start p-0 gap-[10px] order-1 grow-0 self-stretch bg-[#bbbbbb] h-[1px]"></div>
                </div>
            </div>
        </div>
    )
};

export default VirtualAccount;