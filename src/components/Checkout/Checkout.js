import React from "react";
import { useSelector } from "react-redux";
import Header from "../UI/Header/Header";
import AddressInformation from "./AddressInformation";
import ChooseShipping from "./ChooseShipping";
import ProductList from "./ProductList";
import Promo from "./Promo";
import PurchaseSummary from "./PurchaseSummary";
import TotalPayment from "./TotalPayment";

const Checkout = () => {
    const isShippingModal = useSelector(state => state.ui.isShippingModal);
    
    return (
        <div className="felx flex-col justify-between w-full px-[1.5rem]">
            <Header title='Shipment' backToPage='cart' />
            {isShippingModal && <ChooseShipping />}
            <AddressInformation />
            <ProductList />
            <Promo />
            <PurchaseSummary />
            <TotalPayment />
        </div>
    )
};

export default Checkout;