import React from "react";
import Header from "../UI/Header/Header";
import AddressInformation from "./AddressInformation";
import ProductList from "./ProductList";

const Checkout = () => {
    return (
        <div className="felx flex-col justify-between w-full px-[1.5rem]">
            <Header title='Shipment' backToPage='cart' />
            <AddressInformation />
            <ProductList />
            <div>Purchase Summary</div>
        </div>
    )
};

export default Checkout;