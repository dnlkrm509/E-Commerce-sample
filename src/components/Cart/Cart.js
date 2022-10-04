import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BottomNav from "../../components/UI/Nav/BottomNav";
import TopNav from '../../components/UI/Nav/TopNav';
import { uiActions } from "../../store/ui-slice";
import AddToCart from "./AddToCart";
import SelectedProducts from "./SelectedProducts";
import TotalPrice from "./TotalPrice";
import YourWishlistList from "./YourWishlistList";

const Cart = () => {
    const isVisible = useSelector(state => state.ui.isVisible);
    const dispatch = useDispatch();
    const [selectedItem, setSelectedItem] = useState('');
    const [deleteItem, setDeleteItem] = useState('');

    const hideModalHandler = () => {
        dispatch(uiActions.hideWishlistModal());
    };

    const selectedHandler = (item) => {
        setSelectedItem(item);
    };

    const deleteItemHandler = (itemId) => {
        setDeleteItem(itemId);
    }

    console.log(selectedItem);
    
    return (
        <div className='felx flex-col justify-between w-full px-[1.5rem]'>
            {isVisible && <AddToCart onHideModal={hideModalHandler} selectedItem={selectedItem} deleteItem={deleteItem} />}
            <TopNav title='Cart' />
            <SelectedProducts onDeleteItem={deleteItemHandler} />
            <YourWishlistList onSelected={selectedHandler} onDeleteItem={deleteItemHandler} />
            <TotalPrice />
            <BottomNav iconName='shopping-cart-primary' importType='shoppingCartPrimary' />
        </div>
    )
};

export default Cart;