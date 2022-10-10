import React, { useState } from "react";
import { useSelector } from "react-redux";
import Header from "../UI/Header/Header";
import AddressInformation from "./AddressInformation";
import ChooseShipping from "./ChooseShipping";
import ChooseVoucher from "./ChooseVoucher";
import ProductList from "./ProductList";
import Promo from "./Promo";
import PurchaseSummary from "./PurchaseSummary";
import TotalPayment from "./TotalPayment";

const Checkout = () => {
    const isShippingModal = useSelector(state => state.ui.isShippingModal);
    const isDiscountComponent = useSelector(state => state.ui.isDiscountComponent);
    const [selectedItemId, setSelectedItemId] = useState();

    const selectedItemIdHandler = (itemId) => {
        setSelectedItemId(itemId);
    };    

    return (
        <div className="felx flex-col justify-between w-full px-[1.5rem]">
            {isDiscountComponent && <ChooseVoucher />}
            {!isDiscountComponent && (
                <div>
                    <Header title='Shipment' backToPage='cart' />
                    {isShippingModal && <ChooseShipping selectedItemId={selectedItemId} />}
                    <AddressInformation />
                    <ProductList onSelectedItemId={selectedItemIdHandler} />
                    <Promo />
                    <PurchaseSummary />
                    <TotalPayment />
                </div>
            )}
        </div>
    )
};

export default Checkout;