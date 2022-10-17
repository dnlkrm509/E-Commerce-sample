import React from "react";
import Header from "../UI/Header/Header";
import InstantPayment from "./InstantPayment";

const PaymentMethod = () => {
    return (
        <div>
            <Header title='Payment Method' backToPage='checkout' />
            <div className="mt-[32px] flex flex-col items-start p-0 gap-[40px]">
                <InstantPayment />
            </div>
        </div>
    )
}

export default PaymentMethod;