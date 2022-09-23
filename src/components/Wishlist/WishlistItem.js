import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";

const WishlistItem= (props) => {
    const dispatch = useDispatch();

    const isVisibleHandler = () => {
        dispatch(uiActions.showWishlistModal());
        const selectedItem = {
            title: props.title,
            image: props.image,
            brand: props.brand,
            price: props.price,
            rating: props.rating,
            id: props.id
        };
        props.onSelected(selectedItem);
    };


    return (
        <li className="relative w-[327px] h-[89px] bg-[#ffffff] rounded-[8px] order-0 grow-0 p-0 flex flex-col p-[8px] items-start gap-[10px] shadow-[0_5px_30px_-20px_rgba(85,85,85,0.25)]">
            <div style={{backgroundImage: `url(${props.image})`}} className="absolute left-0 right-0 top-0 w-[85px] h-[85px] bottom-0 bg-no-repeat bg-cover order-0 grow-0" />
            <div className="flex flex-col items-start ml-[121px] p-0 gap-[12px] order-1 grow-1">
                <div className="flex justify-between items-start p-0 gap-[8px] order-0 self-stretch grow-0 w-[223px] h-[35px]">
                    <div className="flex flex-col items-start p-0 gap-[4px] order-0 grow-0">
                        <div className="w-[60px] h-[18px] font-[DMSans] not-italic font-bold text-[14px] leading-[18px] text-[#414040] order-0 grow-0">
                            {props.title}
                        </div>
                        <div className="h-[13px] font-[DMSans] not-italic font-normal text-[10px] leading-[13px] text-[#696969] order-1 grow-0">
                            {props.brand ? props.brand : 'Brand'}
                        </div>
                    </div>
                    <div className="flex items-center p-0 gap-[4px] order-1 grow-0">
                        <span className="relative left-[6.46%] right-[8.45%] top-[12.49%] bottom-[11.54%] text-[#414040]">
                            <FontAwesomeIcon icon={faHeart} />
                        </span>
                    </div>
                </div>
                <div className="h-[26px] flex justify-between items-center p-0 gap-[128px] order-1 self-stretch grow-0">
                    <div className="font-[DMSans] text-medium text-[12px] leading-[18px] text-[#555555] order-0 grow-0">
                        RP {props.price}
                    </div>
                    <button onClick={isVisibleHandler} className="flex items-start text-[#fff] py-[4px] px-[8px] gap-[10px] bg-[#9D44B5] rounded-[4px] order-1 grow-0 w-[64px] h-[26px]">
                        <span className="mx-auto -translate-y-[4px]">Buy</span>
                    </button>
                </div>
            </div>
        </li>
    )
};

export default WishlistItem;