import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import trashSecondary from '../../assets/icons/trash-secondary.svg';
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/cart-slice";

const SelectedProductsItem = (props) => {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.items);
    const cartItem = cartItems.find(item => item.id === props.id);
    const [quantity, setQuantity] = useState(0);

    const { quantity: itemsQuantity } = cartItems;
    useEffect(() => {
        setQuantity(cartItem ? cartItem.quantity : 1);
    }, [itemsQuantity]);

    const addToCartHandler = () => {
        dispatch(cartActions.addToCart({
            id: props.id,
            title: props.title,
            image: props.image,
            brand: props.brand,
            rating: props.rating,
            price: props.price,
            quantity: quantity
        }))
    };

    const removeOneFromCartHandler = () => {
        dispatch(cartActions.removeOneFromCart(props.id));
    };

    const removeFromCartHandler = () => {
        dispatch(cartActions.removeFromCart(props.id));
    };

    console.table(cartItems)

    return (
        <li className="relative w-[327px] h-[88px] bg-[#ffffff] rounded-[8px] order-0 grow-0 p-[8px_0] flex flex-col items-start gap-[10px] shadow-[0_5px_30px_-20px_rgba(85,85,85,0.25)]">
            <div className="flex items-center p-0 gap-[10px] self-stretch order-0 grow-0">
                    <p className="text-[14px] text-[#fff] bg-[#4494B5] p-[1px_3px] rounded-[4px]">
                        <FontAwesomeIcon icon={faCheck} />
                    </p>
                    <div className="flex items-center p-0 gap-[16px] order-1 grow-1">
                        
                        
                        
                        <div style={{backgroundImage: `url(${props.image})`}} className="absolute left-0 right-0 top-0 w-[85px] h-[85px] bottom-0 bg-no-repeat bg-cover drop-shadow-[0_16px_24px_rgba(0,0,0,0.04)]" />
                        <div className="flex flex-col items-start ml-[85px] p-0 gap-[12px] order-1 grow-1">
                            <div className="flex justify-between items-start p-0 gap-[8px] order-0 self-stretch grow-0 w-[213px] h-[35px]">
                                <div className="flex flex-col items-start p-0 gap-[4px] order-0 grow-0">
                                    <div className="font-[DMSans] not-italic font-bold text-[14px] leading-[18px] text-[#414040] order-0 grow-0">
                                        {props.title}
                                    </div>
                                    <div className="h-[13px] font-[DMSans] not-italic font-normal text-[10px] leading-[13px] text-[#696969] order-1 grow-0">
                                        {props.brand ? props.brand : 'Brand'}
                                    </div>
                                </div>
                                <div className="flex items-center p-0 gap-[4px] order-1 grow-0">
                                    <button onClick={removeFromCartHandler} className="relative left-[20.83%] right-[20.83%] top-[8.33%] bottom-[8.33%] text-[#ff5252]">
                                        <img src={trashSecondary} />
                                    </button>
                                </div>
                            </div>
                            <div className="h-[26px] flex justify-between items-center p-0 gap-[128px] order-1 self-stretch grow-0">
                                <div className="font-[DMSans] text-medium text-[12px] leading-[18px] text-[#555555] order-0 grow-0">
                                    RP {props.price}
                                </div>
                                <div className="flex justify-between items-center p-0 gap-[12px] order-1 grow-0">
                            <button onClick={removeOneFromCartHandler} className="flex items-start p-[4px] gap-[10px] bg-[#fff] rounded-[4px] border border-[#A7A7A7] order-0 grow-0">
                                <FontAwesomeIcon icon={faMinus} />
                            </button>
                            <span className="font-[DMSans] not-italic font-normal text-[16px] leading-[21px] text-[#414040] order-1 grow-0">
                                {cartItem ? cartItem.quantity : 0}
                            </span>
                            <button onClick={addToCartHandler} className="flex items-start p-[4px] gap-[10px] bg-[#fff] rounded-[4px] border border-[#9D44B5] order-2 grow-0">
                                <FontAwesomeIcon icon={faPlus} />
                            </button>
                        </div>
                            </div>
                        </div>




                    </div>
            </div>
        </li>
    )
};

export default SelectedProductsItem;