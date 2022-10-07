import React from "react";
import discountPrimary from '../../assets/icons/discount-primary.svg';
import discountGrayPrimary from '../../assets/icons/discount-primary-gray.svg';
import { useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";
const Vouchers = () => {
    const dispatch = useDispatch();

    const discountModalHandler = () => {
        dispatch(uiActions.showDiscountModal());
    };

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
                        <div className="flex justify-between items-center p-0 gap-[16px] order-1 self-stretch grow-0">
                            <p className="font-[DMSans] not-italic font-medium text-[12px] leading-[18px] text-[#4494B5] order-0 grow-0">
                                Available until 30 Jun 2021
                            </p>
                            <button 
                                onClick={discountModalHandler}
                                className="flex items-start p-[4px_8px] gap-[10px] bg-[#9D44B5] rounded-[4px] order-1 grow-0">
                                <span className="font-[DMSans] not-italic font-medium text-[12px] leading-[18px] text-center text-[#fff] order-0 self-stretch grow-1">
                                    Apply
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-start p-0 gap-[10px] order-2 self-stretch grow-0">
                <p className="font-[Manrope] not-italic font-bold text-[14px] leading-[19px] text-[#414040] order-0 grow-0">
                    Non-Applicable Vouchers
                </p>
                <div className="flex flex-col items-start p-[16px] gap-[10px] bg-[#fff] border border-[#f8f8f8] rounded-[4px] order-1 grow-0 self-stretch">
                    <div className="flex flex-col items-start p-0 gap-[16px] order-0 grow-0 self-stretch">
                        <div className="flex flex-col items-start p-0 gap-[8px] order-0 self-stretch grow-0">
                            <div className="flex items-start p-0 gap-[8px] order-0 grow-0">
                                <figure className="w-[16px]">
                                    <img src={discountGrayPrimary} />
                                </figure>
                                <p className="font-[Manrope] not-italic font-bold text-[14px] leading-[19px] text-[#a7a7a7] order-1 grow-0">
                                    20k off shipment fee
                                </p>
                            </div>
                            <p className="font-[DMSans] not-italic font-narmal text-[12px] leading-[18px] text-[#a7a7a7] order-1 grow-0">
                                For Men Products
                            </p>
                        </div>
                        <p className="font-[DMSans] not-italic font-medium text-[12px] leading-[18px] text-[#a7a7a7] order-1 self-stretch grow-0">
                            Available until 30 Jun 2021
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Vouchers;