import React from "react";
import { useSelector } from "react-redux";
import Header from "../UI/Header/Header";
import DiscountModal from "./DiscountModal";
import Vouchers from "./Vouchers";

const ChooseVoucher = () => {
    const isDiscountModal = useSelector(state => state.ui.isDiscountModal);

    return (
        <div>
            <Header title='Discount' backToPage='checkout' shadow={true} />
            {isDiscountModal && <DiscountModal />}
            <Vouchers />
        </div>
    )
};

export default ChooseVoucher;