import React from "react";
import BottomNav from "../Nav/BottomNav";
import TopNav from '../Nav/TopNav';
import MoreProductsList from "./MoreProductsList";
import YouMightLikeThisList from "./YouMightLikeList";

const Whishlist = () => {
    return (
        <div className='felx flex-col justify-between w-full px-[1.5rem]'>
            <TopNav title='Whishlist' />
            <YouMightLikeThisList />
            <MoreProductsList />
            <BottomNav iconName='heart-primary' importType='wishlistPrimary' />
        </div>
    )
};

export default Whishlist;