import React, { useState } from "react";
import Modal from "../UI/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/ui-slice";

const DiscountModal = (props) => {
    const [storedDiscount, setStoredDiscount] = useState(localStorage.getItem('discount'));
    const dispatch = useDispatch();
    const isDiscountModal = useSelector(state => state.ui.isDiscountModal);
    
    const hideModalHandler = () => {
        dispatch(uiActions.hideWishlistModal());
        console.log('Discount: ', storedDiscount);
    };

    return (
        <Modal onHideModal={hideModalHandler}>
            {(isDiscountModal) && (
                <section className="w-full flex flex-col items-center justify-center p-[40px_24px_24px] gap-[40px] absolute left-0 bottom-0 bg-[#fff] rounded-[12px_12px_0_0]">
                <div className="flex justify-between items-center p-0 order-0 self-stretch grow-0 mb-[40px]">
                    <h2 className="font-[Manrope] not-italic font-bold text-[20px] leading-[27px] text-[#414040] order-0 grow-0">
                        Discount
                    </h2>
                    <button className="text-[24px]" onClick={hideModalHandler}>
                        <FontAwesomeIcon icon={faClose} />
                    </button>
                </div>
                    <div className="flex flex-col items-start p-0 gap-[32px] bg-[#fff] order-1 self-stretch grow-0">
                        <div className="flex flex-col w-full items-start p-0 gap-[8px] order-0 self-stretch grow-0">
                            <p className="font-[Manrope] not-italic font-bold text-[20px] leading-[27px] text-[#414040] order-0 grow-0">
                                80% Cashback
                            </p>
                            <p className="font-[DMSans] not-italic font-normal text-[12px] leading-[18px] text-[#414040] order-1 grow-0">
                                Available until <span className="text-[#4494B5]">30 Jun 2021</span>
                            </p>
                        </div>
                        <div className="flex flex-col items-start p-0 gap-[12px] order-1 grow-0 self-stretch">
                            <p className="font-[Manrope] not-italic font-bold text-[16px] leading-[22px] text-[#414040] self-stretch order-0 grow-0">
                                Terms & Condition
                            </p>
                            <div className="flex flex-col items-start p-[8px] gap-[10px] rounded-[4px] bg-[#f8f8f8] order-1 self-stretch grow-0 w-full">
                                <ul className="list list-disc list-inside font-[DMSans] not-italic font-normal text-[12px] leading-[18px] text-[#414040] order-0 grow-1 w-[100% - 20px]">
                                    <li>This voucher is applicable to all kinds of products.</li>
                                    <li>This voucher can only be used for transactions using E-Balance method.</li>
                                    <li>This voucher can only be used once.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="mt-[40px] flex items-center self-stretch grow-0 order-2">
                        <button
                            onClick={() => { 
                                setStoredDiscount('80% Cashback');
                                localStorage.setItem('discount', '80% Cashback');
                                hideModalHandler();
                            }}  
                            className="bg-[#9D44B5] w-full box-border font-bold font-[Manrope] text-[14px] text-center not-italic p-[11px_29px] text-[#fff] rounded-[4px]"
                        >
                            Confirm
                        </button>
                    </div>
                
            </section>
            )}
        </Modal>
    )
};

export default DiscountModal;