import React, { useEffect, useState } from "react";
import Modal from "../UI/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faCheck, faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/ui-slice";
import { cartActions } from "../../store/cart-slice";

const BuyProduct = (props) => {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.items);
    const cartItem = cartItems.find(item => item.id === props.selectedItem.id);
    const [quantity, setQuantity] = useState(0);

    const { quantity: itemsQuantity } = cartItems;
    useEffect(() => {
        setQuantity(cartItem ? cartItem.quantity : 1);
    }, [itemsQuantity]);
    
    const hideModalHandler = () => {
        dispatch(uiActions.hideWishlistModal());
    };

    const addToCartHandler = () => {
        dispatch(cartActions.addToCart({
            id: props.selectedItem.id,
            title: props.selectedItem.title,
            image: props.selectedItem.image,
            brand: props.selectedItem.brand,
            rating: props.selectedItem.rating,
            price: props.selectedItem.price,
            quantity: quantity
        }))
    };

    const removeOneFromCartHandler = () => {
        dispatch(cartActions.removeOneFromCart(props.selectedItem.id));
    };
    console.table(cartItem)

    return (
        <Modal onHideModal={props.onHideModal}>
            <section className="w-full flex flex-col items-center justify-center p-[40px_24px_24px] gap-[40px] absolute left-0 bottom-0 bg-[#fff] rounded-[12px_12px_0_0]">
                <div className="flex justify-between items-center p-0 order-0 self-stretch grow-0 mb-[40px]">
                    <h2 className="font-[Manrope] not-italic font-bold text-[20px] leading-[27px] text-[#414040] order-0 grow-0">
                        Buy Product
                    </h2>
                    <button className="text-[24px]" onClick={hideModalHandler}>
                        <FontAwesomeIcon icon={faClose} />
                    </button>
                </div>
                <div className="flex flex-col items-start p-0 gap-[24px] order-1 self-stretch grow-0">
                    <div className="flex w-full items-center p-0 gap-[16px] order-0 self-stretch grow-0">
                        <div className="w-[72px] h-[72px] bg-[#047FB1] order-0 grow-0 rounded-[4px]">
                            <img src={props.selectedItem.image} />
                        </div>
                        <div className="flex gap-[16px] items-center justify-between p-0 order-1 grow-1">
                            <div className="flex flex-col items-start p-0 gap-[4px] order-0 grow-0">
                                <h3 className="font-[Manrope] not-italic font-bold text-[16px] leading-[22px] text-[#414040] order-0 grow-0">
                                    {props.selectedItem.title}
                                </h3>
                                <div className="font-[DMSans] not-italic font-normal text-[14px] leading-[18px] text-[#414040] order-1 grow-0">
                                    {props.selectedItem.brand}
                                </div>
                            </div>
                            <div className="font-[DMSans] fixed right-[24px] ml-auto not-italic font-bold text-[12px] leading-[16px] text-[#9D44B5] order-1 grow-0">
                                View All
                            </div>
                        </div>
                    </div>
                    <div className="h-[1px] bg-[#E4E4E4] order-0 self-stretch grow-1 my-[16px]"></div>
                    <div className="flex flex-col items-start p-0 gap-[12px] order-2 grow-0">
                        <h4 className="font-[Manrope] not-italic font-bold text-[14px] leading-[19px] text-[#414040] order-0 grow-0">
                            Variant
                        </h4>
                        <div className="flex items-start gap-[8px] p-0 order-1 grow-0">
                            <div className="flex items-center p-[8px_12px] gap-[8px] bg-[#fff] rounded-[4px] border border-[#4494B5] order-0 grow-0">
                                <span className="font-[DMSans] not-italic font-normal text-[12px] leading-[18px] text-center text-[#4494B5] order-0 grow-0">
                                    100 ml
                                </span>
                                <span className="font-[DMSans] not-italic font-normal text-[12px] leading-[18px] text-center text-[#4494B5] order-0 grow-0">
                                    <FontAwesomeIcon icon={faCheck} />
                                </span>
                            </div>
                            <div className="flex items-center p-[8px_12px] gap-[10px] bg-[#fff] border border-[#555555] rounded-[4px] order-1 grow-0">
                                <p className="font-[DMSans] not-italic font-normal text-[12px] leading-[18px] text-center text-[#4494B5] order-0 grow-0">
                                    220 ml
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-[24px] flex justify-between items-center p-0 gap-[122px] self-stretch order-3 grow-0">
                        <span className="font-[DMSans] not-italic font-bold text-[16px] leading-[21px] text-[#414040] order-0 grow-0">
                            Quantity
                        </span>
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
                    <div className="mt-[40px] flex items-center p-0 gap-[16px] self-stretch grow-0 order-4">
                        <button onClick={addToCartHandler} className="bg-[#fff] w-[50%] border border-[#9D44B5] box-border font-bold font-[Manrope] text-[14px] text-center not-italic p-[11px_39px] text-[#9D44B5] rounded-[4px] grow-1 order-0">
                            Add to Cart
                        </button>
                        <button className="bg-[#9D44B5] w-[50%] font-bold font-[Manrope] box-border text-[14px] text-center not-italic p-[11px_50px] text-[#fff] rounded-[4px] grow-1 order-1">
                            Buy Now
                        </button>
                    </div>
                </div>
            </section>
        </Modal>
    )
};

export default BuyProduct;