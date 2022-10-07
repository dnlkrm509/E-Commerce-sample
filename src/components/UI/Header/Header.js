import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../../store/ui-slice";

const Header = (props) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const isDiscountComponent = useSelector(state => state.ui.isDiscountComponent);

    const backToCartHandler = () => {
        history.push(`/${props.backToPage}`);
        if (isDiscountComponent) {
            dispatch(uiActions.hideDiscountComponent());
        }
    };

    return (
        <div className={`flex flex-col items-start p-[0_0_12px] gap-[15px] bg-[#fff] ${props.shadow ? 'shadow-[0_5px_30px_-20px_rgba(85,85,85,0.25)]' : ''}`}>
            <div></div>
            <div className="flex items-start p-0 gap-[12px] order-0 grow-1">
                <button 
                    onClick={backToCartHandler}
                    className="text-[20px] translate-y-[4px]">
                    <FontAwesomeIcon icon={faArrowLeft} />
                </button>
                <span className="font-[DMSans] translate-y-[8px] not-italic font-bold text-[16px] leading-[21px] text-[#414040] order-1 grow-0">
                    {props.title}
                </span>
            </div>
        </div>
    )
};

export default Header;