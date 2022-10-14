import React from "react";
import discountPrimary from '../../assets/icons/discount-primary.svg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";

const Promo = () => {
    const dispatch = useDispatch();

    const discount = localStorage.getItem('discount') ?
        localStorage.getItem('discount') : '';

    const chooseVoucherHandler = () => {
        dispatch(uiActions.showDiscountComponent())
    };

    return (
        <div className="mt-[40px] flex flex-col items-start p-0 gap-[16px] w-[327px] order-2 self-stretch grow-0">
            <p className="font-[Manrope] not-italic font-bold text-[16px] leading-[22px] text-[#414040] order-0 grow-0">
                {discount ? 'Discount' : 'Promo'}
            </p>
            <button 
                onClick={chooseVoucherHandler}
                className="flex flex-col items-start p-[12px_16px] gap-[10px] w-[327px] bg-[#fff] border-[0.5px] border-[#414040] rounded-[4px] order-1 self-stretch grow-0 box-border">
                <div className="flex justify-between items-center p-0 gap-[10px] w-[295px] order-0 self-stretch grow-0">
                    <div className="flex items-center p-0 gap-[8px] w-[124px] h-[20px] order-0 grow-0">
                        {!discount && (
                            <figure className="w-[20px] h-[20px]">
                                <img src={discountPrimary} />
                            </figure>
                        )}
                        <div className="flex flex-col items-start gap-[8px] p-0 order-0 grow-0">
                            <p className="font-[DMSans] not-italic font-bold text-[12px] leading-[16px] text-[#414040] order-0 grow-0">
                                {discount ? '1 Discount applied' : 'Choose Voucher'}
                            </p>
                            {discount && (
                                <p className="font-[DMSans] not-italic font-normal text-[10px] leading-[13px] text-[#414040] order-1 grow-0">
                                    {discount}
                                </p>
                            )}
                        </div>
                    </div>
                    <figure className="text-[16px] order-1 grow-0">
                        <FontAwesomeIcon icon={faChevronRight} />
                    </figure>
                </div>
            </button>
        </div>
    )
};

export default Promo;