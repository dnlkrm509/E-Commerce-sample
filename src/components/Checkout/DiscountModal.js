import React, { useState } from "react";
import Modal from "../UI/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/ui-slice";

const DiscountModal = (props) => {
    const [shippingCompany, setShippingCompany] = useState(localStorage.getItem('company'));
    const [shippingService, setShippingService] = useState({
        type: localStorage.getItem('type'),
        duration: localStorage.getItem('duration'),
        price: localStorage.getItem('price')
    });
    const dispatch = useDispatch();
    const [shipping, setShipping] = useState('Company');
    const isDiscountModal = useSelector(state => state.ui.isDiscountModal);

    const shippingCompanyHandler = () => {
        setShipping('Company');
    };

    const shippingServiceHandler = () => {
        setShipping('Service');
    };
    
    const hideModalHandler = () => {
        dispatch(uiActions.hideWishlistModal());
        console.log('Company: ', shippingCompany);
        console.table('Service: ', shippingService);
    };

    return (
        <Modal onHideModal={hideModalHandler}>
            {(isDiscountModal) && (
                <section className="w-full flex flex-col items-center justify-center p-[40px_24px_24px] gap-[40px] absolute left-0 bottom-0 bg-[#fff] rounded-[12px_12px_0_0]">
                <div className="flex justify-between items-center p-0 order-0 self-stretch grow-0 mb-[40px]">
                    <h2 className="font-[Manrope] not-italic font-bold text-[20px] leading-[27px] text-[#414040] order-0 grow-0">
                        Choose Shipping {shipping}
                    </h2>
                    <button className="text-[24px]" onClick={hideModalHandler}>
                        <FontAwesomeIcon icon={faClose} />
                    </button>
                </div>
                    {shipping === 'Company' && (
                    <div className="flex flex-col items-start p-0 gap-[12px] order-1 self-stretch grow-0">
                        <button 
                            onClick={() => { setShippingCompany('JN Express'); localStorage.setItem('company', 'JN Express') }}
                            className="flex w-full items-start p-[10px_12px] gap-[10px] bg-[#fff] rounded-[4px] order-0 self-stretch grow-0">
                            <p className="font-[Manrope] not-italic font-medium text-[14px] leading-[19px] text-[#414040] order-0 grow-1">
                                JN Express
                            </p>
                        </button>
                        <div className="flex items-start w-full p-0 gap-[10px] h-[1px] order-1 bg-[#cfcfcf] grow-0"></div>
                        <button 
                            onClick={() => { setShippingCompany('Fastest Express'); localStorage.setItem('company', 'Fastest Express') }}
                            className="flex items-start p-[10px_12px] gap-[10px] bg-[#fff] rounded-[4px] order-2 self-stretch grow-0">
                            <p className="font-[Manrope] not-italic font-medium text-[14px] leading-[19px] text-[#414040] order-0 grow-1">
                                Fastest Express
                            </p>
                        </button>
                        <div className="flex items-start w-full p-0 gap-[10px] h-[1px] order-3 bg-[#cfcfcf] grow-0"></div>
                        <button 
                            onClick={() => { setShippingCompany('Flying Express'); localStorage.setItem('company', 'Flying Express') }} 
                            className="flex items-start p-[10px_12px] gap-[10px] bg-[#fff] rounded-[4px] order-4 self-stretch grow-0">
                            <p className="font-[Manrope] not-italic font-medium text-[14px] leading-[19px] text-[#414040] order-0 grow-1">
                                Flying Express
                            </p>
                        </button>
                    </div>
                    )}
                    {shipping === 'Service' && (
                        <div className="flex flex-col items-start p-0 gap-[12px] order-1 self-stretch grow-0">
                            <button 
                                onClick={() => {
                                    setShippingService({type: 'Same Day', duration: '1 Day', price: 56000});
                                    localStorage.setItem('type', 'Same Day');
                                    localStorage.setItem('duration', '1 Day');
                                    localStorage.setItem('price', 56000) }}
                                className="flex items-center p-[10px_12px] gap-[10px] bg-[#fff] rounded-[4px] order-0 self-stretch grow-0">
                                <div className="flex flex-col items-start p-0 gap-[4px] order-0 self-stretch grow-1">
                                    <p className="font-[Manrope] not-italic font-medium text-[14px] leading-[19px] text-[#414040] order-0 grow-0">
                                        Same Day
                                    </p>
                                    <p className="font-[DMSans] not-italic font-normal text-[12px] leading-[18px] text-[#696969] order-1 self-stretch grow-0">
                                        EST. 1 Day
                                    </p>
                                </div>
                                <p className="font-[Manrope] not-italic font-bold text-[14px] leading-[19px] text-right w-[170.5px] text-[#414040] order-1 grow-0">
                                    RP  56000
                                </p>
                            </button>
                            <div className="flex items-start self-stretch p-0 gap-[10px] h-[1px] order-1 bg-[#cfcfcf] grow-0"></div>
                            <button 
                                onClick={() => {
                                    setShippingService({type: 'Express', duration: '2-3 Day', price: 40000});
                                    localStorage.setItem('type', 'Express');
                                    localStorage.setItem('duration', '2-3 Day');
                                    localStorage.setItem('price', 40000) }}
                                className="flex items-center p-[10px_12px] gap-[10px] bg-[#fff] rounded-[4px] order-2 self-stretch grow-0">
                                <div className="flex flex-col items-start p-0 gap-[4px] order-0 self-stretch grow-1">
                                    <p className="font-[Manrope] not-italic font-medium text-[14px] leading-[19px] text-[#414040] order-0 grow-0">
                                        Express
                                    </p>
                                    <p className="font-[DMSans] not-italic font-normal text-[12px] leading-[18px] text-[#696969] order-1 self-stretch grow-0">
                                        EST. 2-3 Day
                                    </p>
                                </div>
                                <p className="font-[Manrope] not-italic font-bold text-[14px] leading-[19px] text-right w-[170.5px] text-[#414040] order-1 grow-0">
                                    RP  40000
                                </p>
                            </button>
                            <div className="flex items-start self-stretch p-0 gap-[10px] h-[1px] order-3 bg-[#cfcfcf] grow-0"></div>
                            <button 
                                onClick={() => {
                                    setShippingService({type: 'Regular', duration: '5-14 Day', price: 27000});
                                    localStorage.setItem('type', 'Regular');
                                    localStorage.setItem('duration', '5-14 Day');
                                    localStorage.setItem('price', 27000) }}
                                className="flex items-center p-[10px_12px] gap-[10px] bg-[#fff] rounded-[4px] order-4 self-stretch grow-0">
                                <div className="flex flex-col items-start p-0 gap-[4px] order-0 grow-1">
                                    <p className="font-[Manrope] not-italic font-medium text-[14px] leading-[19px] text-[#414040] order-0 grow-0">
                                        Regular
                                    </p>
                                    <p className="font-[DMSans] not-italic font-normal text-[12px] leading-[18px] text-[#696969] order-1 self-stretch grow-0">
                                        EST. 5-14 Day
                                    </p>
                                </div>
                                <p className="font-[Manrope] not-italic font-bold text-[14px] leading-[19px] text-right w-[170.5px] text-[#414040] order-1 grow-0">
                                    RP 27000
                                </p>
                            </button>
                        </div>
                    )}
                    <div className="mt-[40px] flex items-center p-0 gap-[16px] self-stretch grow-0 order-4">
                        <button  
                            onClick={shippingServiceHandler}
                            className="bg-[#9D44B5] w-[50%] box-border font-bold font-[Manrope] text-[14px] text-center not-italic p-[11px_29px] text-[#fff] rounded-[4px] grow-1 order-1"
                        >
                            Shipping Service
                        </button>
                        <button
                            onClick={shippingCompanyHandler} 
                            className="bg-[#fff] w-[50%] border border-[#9D44B5] font-bold font-[Manrope] box-border text-[14px] text-center not-italic p-[11px_20px] text-[#9D44B5] rounded-[4px] grow-1 order-0"
                        >
                            Shipping Company
                        </button>
                    </div>
                
            </section>
            )}
        </Modal>
    )
};

export default DiscountModal;