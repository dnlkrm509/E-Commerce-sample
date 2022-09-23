import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/ui-slice";
import BottomNav from "../Nav/BottomNav";
import TopNav from '../Nav/TopNav';
import BuyProduct from "./BuyProduct";
import MoreProductsList from "./MoreProductsList";
import WishlistList from "./WishlistList";
import YouMightLikeThisList from "./YouMightLikeList";

const Whishlist = () => {
    const isVisible = useSelector(state => state.ui.isVisible);
    const dispatch = useDispatch();
    const [selectedItem, setSelectedItem] = useState('');

    const hideModalHandler = () => {
        dispatch(uiActions.hideWishlistModal());
    };

    const selectedHandler = (item) => {
        setSelectedItem(item);
    };
    
    return (
        <div className='felx flex-col justify-between w-full px-[1.5rem]'>
            {isVisible && <BuyProduct onHideModal={hideModalHandler} selectedItem={selectedItem} />}
            <TopNav title='Whishlist' />
            <WishlistList onSelected={selectedHandler} />
            <YouMightLikeThisList />
            <MoreProductsList />
            <BottomNav iconName='heart-primary' importType='wishlistPrimary' />
        </div>
    )
};

export default Whishlist;