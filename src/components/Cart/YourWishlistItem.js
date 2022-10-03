import React from "react";
import { useDispatch } from "react-redux";
import trashSecondary from '../../assets/icons/trash-secondary-red.svg';
import { cartActions } from "../../store/cart-slice";
import { uiActions } from "../../store/ui-slice";

const YourWishlistItem = (props) => {
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
    
    const removeFromCartHandler = () => {
        dispatch(uiActions.showWishlistModal());
        dispatch(uiActions.showDeleteWishlistModal());
        props.onDeleteItem(props.id);
    };

    return (
        <li className="w-[144px] bg-[#ffffff] rounded-[4px] p-0 flex flex-col items-start shadow-[0_5px_25px_-15px_rgba(85,85,85,0.25)] order-0 grow-0">
            <div className="w-full h-[120px] bg-[#047FB1] order-0 grow-0">
                <img src={props.image} className='mx-auto' />
            </div>
            <div className="flex flex-col items-start p-[12px_8px] pt-[24px] gap-[12px] order-1 self-stretch grow-0">
                <div className="font-[DMSans] not-italic font-bold text-[14px] leading-[18px] text-[#414040] order-0 grow-0 self-stretch">
                    {props.title}
                </div>
                <div className="order-1 grow-0 text-[#414040] leading-[16px] text-[12px] not-italic font-bold font-[DMSans]">
                    RP {props.price}
                </div>
                <div className="flex justify-between items-center p-0 gap-[31px] order-2 grow-0">
                    <button onClick={removeFromCartHandler} className="text-[#ff5252]">
                        <img src={trashSecondary} />
                    </button>
                    <button onClick={isVisibleHandler} className="flex items-start p-[4px_8px] gap[10px] text-[12px] font-[DMSans] not-italic font-medium text-center text-[#fff] bg-[#9D44B5] rounded-[4px] order-1 grow-0 h-[26px]">
                        Add to Cart
                    </button>
                </div>
            </div>
        </li>
    )
};

export default YourWishlistItem;