import React from "react";
import Header from "../UI/Header/Header";
import BankTransfer from "./BankTransfer";
import DigitalWallet from "./DigitalWallet";
import InstantPayment from "./InstantPayment";
import PayButton from "./PayButton";
import VirtualAccount from "./VirtualAccount";

const PaymentMethod = () => {
    return (
        <div>
            <Header title='Payment Method' backToPage='checkout' />
            <div className="mt-[32px] flex flex-col items-start p-0 gap-[40px]">
                <InstantPayment />
                <VirtualAccount />
                <BankTransfer />
                <DigitalWallet />
                <PayButton />
            </div>
        </div>
    )
}

export default PaymentMethod;