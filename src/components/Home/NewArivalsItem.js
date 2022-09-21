import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from '@fortawesome/free-solid-svg-icons';

const NewArivalsItem = (props) => {
    return (
        <li className="relative w-[343px] h-[96px] bg-[#ffffff] rounded-[4px] order-0 grow-0 p-0 flex items-start">
            <div style={{backgroundImage: `url(${props.image})`}} className="w-[120px] bg-no-repeat bg-cover h-[120px]" />
            <div className="flex flex-col items-start py-[12px] px-[16px] gap-[16px] order-1 grow-1 w-[223px] h-[98px]">
                <div className="flex justify-between items-start p-0 gap-[59px] order-0 self-stretch grow-0 w-[191px] h-[40px]">
                    <div className="flex flex-col items-start w-[105px] h-[40px] p-0 gap-[4px] order-0 grow-0">
                        <div className="w-[60px] h-[18px] font-[DMSans] not-italic font-bold text-[14px] leading-[18px] text-[#414040] order-0 grow-0">
                            {props.title}
                        </div>
                        <div className="w-[105px] h-[18px] font-[DMSans] not-italic font-normal text-[12px] leading-[18px] text-[#696969] order-1 grow-0">
                            {props.brand ? props.brand : 'Brand'}
                        </div>
                    </div>
                    <div className="flex items-center p-0 gap-[4px] order-1 grow-0">
                        <span className="relative left-[8.33%] right-[8.33%] top-[8.33%] bottom-[12.42%] text-[10px] text-[#414040]">
                            <FontAwesomeIcon icon={faStar} />
                        </span>
                        <span className="w-[29px] h-[18px] font-[DM-Sans] not-italic font-normal text-[12px] leading-[18px] text-right text-[#414040] order-1 grow-0">
                            {props.rating}/5
                        </span>
                        <span className="w-[31px] h-[18px] font-[DMSans] not-italic font-normal text-[12px] text-right text-[#A7A7A7] leading-[18px] order-2 grow-0">
                            (999)
                        </span>
                    </div>
                </div>
                <div className="mt-[16px] w-[77px] h-[18px] order-1 grow-0 text-[#414040] leading-[18px] text-[14px] not-italic font-bold font-[DMSans]">
                    RP {props.price}
                </div>
            </div>
        </li>
    )
};

export default NewArivalsItem;