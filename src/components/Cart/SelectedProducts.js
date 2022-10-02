import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faClose } from "@fortawesome/free-solid-svg-icons";
import PopularProducts from "../../data/popularProducts";
import SelectedProductsItem from "./SelectedProductsItem";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/ui-slice";

const SelectedProducts = (props) => {
    const dispatch = useDispatch();
    const revealedDeleteConfirmation = useSelector(state => state.ui.deleteConfirmation);
    const popularProductsSlices = PopularProducts.slice(1, 3);

    const hideDeleteConfirmationHandler = () => {
        dispatch(uiActions.hideDeleteConfirmation());
    }

    return (
        <div className="flex flex-col items-start gap-[16px] p-0 order-1 grow-0 mb-[40px]">
            {revealedDeleteConfirmation && (
                <React.Fragment>
                    <div className="flex gap-[87px] items-start text-[12px] font-medium font-[DMSans] text-[#fff] p-[9px_12px] absolute left-[49px] top-[88px] right-[49px] bg-[#16C79A] rounded-[4px] w-[100% - 25px] h-[36px] z-10">
                        <div className="flex gap-[8px]">
                            <p>
                                <FontAwesomeIcon icon={faCheck} />
                            </p>
                            <p>
                                Item deleted from your wishlist
                            </p>
                        </div>
                        <button 
                            onClick={hideDeleteConfirmationHandler} 
                            className="text-[16px] -translate-y-[3px]">
                            <FontAwesomeIcon icon={faClose} />
                        </button>
                    </div>
                </React.Fragment>
            )}
            <div className="flex items-center p-[0_16px] gap-[12px] order-0 grow-0">
                <p className="text-[14px] text-[#fff] bg-[#4494B5] p-[1px_3px] rounded-[4px]">
                    <FontAwesomeIcon icon={faCheck} />
                </p>
                <p className="translate-y-[2px] font-[DMSans] ont-italic font-normal text-[14px] leading-[18px] text-[#414040] order-1">
                    Select All
                </p>
            </div>
            <div className="mt-[16px] h-[2px] self-stretch bg-[#bbbbbb] order-0 grow-1"></div>
            <ul className="mt-[16px] flex flex-col items-start gap-[16px] p-[0_24px] order-2 grow-0">
            {popularProductsSlices.map((popularProductsSlice) => (
            <SelectedProductsItem 
                key={popularProductsSlice.id}
                id={popularProductsSlice.id}
                title={popularProductsSlice.title}
                image={popularProductsSlice.image}
                rating={popularProductsSlice.rating}
                price={popularProductsSlice.price}
                brand={popularProductsSlice.brand}
                onDeleteItem={props.onDeleteItem}
            />
        ))}
            </ul>
            <div className="mt-[16px] h-[2px] self-stretch bg-[#bbbbbb] order-2 grow-1"></div>
        </div>
    )
};

export default SelectedProducts;