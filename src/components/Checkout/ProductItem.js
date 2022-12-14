import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/ui-slice";

const ProductItem= (props) => {
    const dispatch = useDispatch();

    const type = (localStorage.getItem(`type_${props.id}`)) ?
    localStorage.getItem(`type_${props.id}`) : '';
    const duration = (localStorage.getItem(`type_${props.id}`)) ?
    localStorage.getItem(`duration_${props.id}`) : '';
    const price = (localStorage.getItem(`type_${props.id}`)) ?
    localStorage.getItem(`price_${props.id}`) : '';

    const service = {
        type: type,
        duration: duration,
        price: price
    };

    const company = localStorage.getItem(`company_${props.id}`) ?
    localStorage.getItem(`company_${props.id}`) : '';

    const itemCount = useSelector(state => state.ui.itemCount);
    console.log(itemCount)

    try {
        if (service.type && company && itemCount === props.itemsCount) {
            dispatch(uiActions.enablePaymentMethodButton());
        }    
    } catch (err) {
        dispatch(uiActions.disablePaymentMethodButton());
    }


    const chooseShippingModalHandler = () => {
        dispatch(uiActions.showShippingModal());
        props.onSelected(props.id);
    };

    return (
        <li className="w-[327px] bg-[#ffffff] self-stretch rounded-[8px] order-0 grow-0 flex flex-col p-[12px_8px] items-start gap-[16px] shadow-[0_5px_30px_-20px_rgba(85,85,85,0.25)]">
            <div className="flex flex-col items-center p-0 gap-[12px] w-[311px] self-stretch order-0 grow-0">
                <div className="relative flex items-start p-0 gap-[12px] w-[311px] h-[56px] order-0 self-stretch grow-0">
                    <div style={{backgroundImage: `url(${props.image})`}} className="absolute left-0 right-0 top-0 w-[56px] h-[56px] bg-green-200 bottom-0 bg-no-repeat bg-cover order-0 grow-0" />
                    <div className="flex flex-col items-start p-0 gap-[4px] order-1 grow-1">
                        <div className="flex justify-between items-center p-0 gap-[78px] order-0 self-stretch grow-0 w-[243px] h-[21px]">
                            <div className="ml-[68px] font-[DMSans] not-italic font-bold text-[16px] leading-[21px] text-[#414040] order-0 grow-0">
                                {props.title}
                            </div>
                            <span className="font-[DMSans] not-italic font-bold text-[12px] leading-[16px] text-[#9D44B5] order-1 grow-0">
                                Remove
                            </span>
                        </div>
                        <div className="ml-[68px] h-[18px] font-[DMSans] not-italic font-normal text-[10px] leading-[13px] text-[#696969] order-0 grow-0">
                            Variants: 100 ml
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center p-[8px] gap-[4px] bg-[#f8f8f8] w-[311px] h-[56px] rounded-[4px] self-stretch order-1 grow-0">
                    <div className="flex justify-between items-start p-0 gap-[4px] w-[295px] h-[40px] order-0 grow-1">
                        <div className="flex-flex-col items-start p-0 gap-[4px] w-[119px] h-[40px] order-0 grow-0">
                            <p className="font-[DMSans] font-normal not-italic text-[12px] leading-[18px] text-[#414040] grow-0 order-0">
                                Name :
                            </p>
                            <p className="font-[DMSans] not-italic font-normal text-[12px] leading-[18px] text-[#414040] order-1 grow-0">
                                None
                            </p>
                        </div>
                        <p className="font-[DMSans] not-italic font-bold text-[12px] leading-[16px] text-[#414040] order-1 grow-0 w-[24px] h-[16px]">
                            Edit
                        </p>
                    </div>
                </div>
                {!(company && service.type && service.duration && service.price) && (
                    <button 
                    onClick={chooseShippingModalHandler}
                    className="flex flex-col items-start p-[12px_16px] gap-[10px] w-[311px] h-[44px] bg-[#fff] border-[0.5px] border-[#414040] rounded-[4px] order-2 self-stretch grow-0">
                        <div className="flex justify-between items-center p-0 gap-[10px] w-[279px] h-[20px] order-0 self-stretch grow-0">
                            <div className="flex items-center p-0 gap-[8px] w-[126px] h-[20px] order-0 grow-0">
                                <p className="text-[20px] text-[#9D44B5]"> 
                                    <FontAwesomeIcon icon={faTruck} />
                                </p>
                                <p className="text-[12px] font-[DMSans] not-italic font-bold leading-[16px] text-[#414040] order-1 grow-0">
                                    Choose Shipping
                                </p>
                            </div>
                            <p className="text-[16px] order-1">
                                <FontAwesomeIcon icon={faChevronRight} />
                            </p>
                        </div>
                    </button>
                )}  
                {(service.type && service.duration && service.price) && company && (
                    <div className="flex flex-col items-start p-0 gap-[4px] order-2 self-stretch grow-0">
                        <button 
                        onClick={chooseShippingModalHandler}
                        className="flex flex-col items-start p-[12px_16px] gap-[10px] w-[311px] h-[44px] bg-[#fff] border-[0.5px] border-[#414040] rounded-[4px] order-0 self-stretch grow-0">
                            <div className="flex justify-between items-center p-0 gap-[10px] w-[279px] h-[20px] order-0 self-stretch grow-0">
                                <p className="text-[12px] font-[DMSans] not-italic font-bold leading-[16px] text-[#414040] order-0 grow-0">
                                    {company}
                                </p>
                                <p className="text-[16px] order-1">
                                    <FontAwesomeIcon icon={faChevronRight} />
                                </p>
                            </div>
                        </button>
                        <button 
                        onClick={chooseShippingModalHandler}
                        className="flex flex-col items-start p-[12px_16px] gap-[10px] w-[311px] bg-[#fff] border-[0.5px] border-[#414040] rounded-[4px] order-1 self-stretch grow-0">
                            <div className="flex justify-between items-center p-0 gap-[10px] w-[279px] order-0 self-stretch grow-0">
                                <div className="flex flex-col items-start p-0 gap-[8px] order-0 grow-0">
                                    <p className="text-[12px] font-[DMSans] not-italic font-bold leading-[16px] text-[#414040] order-0 grow-0">
                                        {service.type} (RP {service.price})
                                    </p>
                                    <p className="font-[DMSans] not-italic font-normal text-[10px] leading-[13px] text-[#414040] order-1 grow-0">
                                        {service.duration}
                                    </p>
                                </div>
                                <p className="text-[16px] order-1">
                                    <FontAwesomeIcon icon={faChevronRight} />
                                </p>
                            </div>
                        </button>
                    </div>
                )}
            </div>
            <div className="flex justify-between items-start p-0 gap-[41px] w-[311px] h-[18px] order-1 self-stretch grow-0">
                <p className="font-[DMSans] not-italic font-normal text-[14px] leading-[18px] text-[#555555] order-0 grow-0">
                    Price
                </p>
                <p className="font-[DMSans] not-italic font-bold text-[14px] leading-[18px] text-right text-[#555555] order-1 grow-0">
                    RP {props.price}
                </p>
            </div>
        </li>
    )
};

export default ProductItem;