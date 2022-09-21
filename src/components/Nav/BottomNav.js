import React from "react";
import { Link } from "react-router-dom";
import homeSecondary from '../../assets/icons/home-primary.svg';
import heartSecondary from '../../assets/icons/heart-secondary.svg';
import shoppingCart from '../../assets/icons/shopping-cart.svg';
import userSecondary from '../../assets/icons/user-secondary.svg';

const BottomNav = () => {
    return (
        <div className={`my-auto`}>
            <nav>
                <ul className={`mt-[49px] flex justify-between items-start gap-[10px] shadow-[0_-5px_25px_-15px_rgba(85,85,85,0.25)] pt-[8px] pb-[28px] px-[24px]`}>
                    <li><Link to='/home'>
                        <div className="flex flex-col items-center judtify-center py-[4px] px-[8px] gap-[8px]">
                            <img src={homeSecondary} />
                            <p className="text-[#9D4485] font-bold text-[12px] font-[DMSans] not-italic text-center order-1">
                                Home
                            </p>
                        </div>
                        </Link>
                    </li>
                    <li><Link to='whishlist'>
                        <div className="flex flex-col items-center judtify-center py-[4px] px-[8px] gap-[8px]">
                            <img src={heartSecondary} />
                            <p className="font-bold text-[12px] font-[DMSans] not-italic text-center order-1">
                                Whishlist
                            </p>
                        </div>
                        </Link>
                    </li>
                    <li><Link to='/cart'>
                        <div className="flex flex-col items-center judtify-center py-[4px] px-[8px] gap-[8px]">
                            <img src={shoppingCart} />
                            <p className="font-bold text-[12px] font-[DMSans] not-italic text-center order-1">
                                Cart
                            </p>
                        </div>
                        </Link>
                    </li>
                    <li><Link>
                        <div className="flex flex-col items-center judtify-center py-[4px] px-[8px] gap-[8px]">
                            <img src={userSecondary} />
                            <p className="font-bold text-[12px] font-[DMSans] not-italic text-center order-1">
                                Profile
                            </p>
                        </div>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
};

export default BottomNav;