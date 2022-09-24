import React from "react";
import BottomNav from "../../components/Nav/BottomNav";
import TopNav from '../../components/Nav/TopNav';

const Cart = () => {
    return (
        <div className='felx flex-col justify-between w-full px-[1.5rem]'>
            <TopNav title='Cart' />
            Cart
            <BottomNav iconName='shopping-cart-primary' importType='shoppingCartPrimary' />
        </div>
    )
};

export default Cart;