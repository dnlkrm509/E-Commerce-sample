import React from "react";
import Header from "../UI/Header/Header";
import Vouchers from "./Vouchers";

const ChooseVoucher = () => {
    return (
        <div>
            <Header title='Discount' backToPage='checkout' shadow={true} />
            <Vouchers />
        </div>
    )
};

export default ChooseVoucher;