import React from "react";
import Header from "../UI/Header/Header";
import AddressInformation from "./AddressInformation";
import ProductList from "./ProductList";
import Promo from "./Promo";
import PurchaseSummary from "./PurchaseSummary";

const Checkout = () => {
    return (
        <div className="felx flex-col justify-between w-full px-[1.5rem]">
            <Header title='Shipment' backToPage='cart' />
            <AddressInformation />
            <ProductList />
            <Promo />
            <PurchaseSummary />
        </div>
    )
};

export default Checkout;