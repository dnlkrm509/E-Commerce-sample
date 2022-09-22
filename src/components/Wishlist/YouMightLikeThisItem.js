import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from '@fortawesome/free-solid-svg-icons';

const YouMightLikeThisItem = (props) => {
    return (
        <li className="w-[144px] h-[234px] bg-[#ffffff] rounded-[4px] p-0 flex flex-col items-start shadow-[0_5px_25px_-15px_rgba(85,85,85,0.25)]">
            <div className="w-full h-[120px] bg-[#047FB1] order-0 grow-0">
                <img src={props.image} className='mx-auto' />
            </div>
            <div className="relative top-[12px] left-[8px] items-start w-[128px] h-[44px] order-0 self-stretch grow-0 p-0">
                <div className="absolute left-[8.33%] right-[8.33%] top-[8.33%] bottom-[12.42%] text-[#414040]">
                    <span className="text-[10px]">
                        <FontAwesomeIcon icon={faStar} />
                    </span>
                    <span className="w-[29px] ml-[4px] h-[18px] font-[DM-Sans] not-italic font-normal text-[12px] leading-[18px] text-right text-[#414040] order-1 grow-0">
                        {props.rating}/5
                    </span>
                    <span className="ml-[4px] w-[31px] h-[18px] font-[DMSans] not-italic font-normal text-[12px] text-right text-[#A7A7A7] leading-[18px] order-2 grow-0">
                        (999)
                    </span>
                    <div className="mt-[8px] w-[128px] h-[18px] order-1 self-stretch text-[14px] text-[#414040] leading-[18px] font-bold grow-0">
                        {props.title}
                    </div>
                    <div className="mt-[16px] w-[77px] h-[18px] order-1 grow-0 text-[#414040] leading-[18px] text-[14px] not-italic font-bold font-[DMSans]">
                        RP {props.price}
                    </div>
                </div>
            </div>
        </li>
    )
};

export default YouMightLikeThisItem;