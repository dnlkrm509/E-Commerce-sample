import React from "react";
import BottomNav from "../../components/Nav/BottomNav";
import TopNav from '../../components/Nav/TopNav';
import SelectedProducts from "./SelectedProducts";

const Cart = () => {
    return (
        <div className='felx flex-col justify-between w-full px-[1.5rem]'>
            <TopNav title='Cart' />
            <SelectedProducts />
            <BottomNav iconName='shopping-cart-primary' importType='shoppingCartPrimary' />
        </div>
    )
};

export default Cart;