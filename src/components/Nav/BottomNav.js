import React, { Suspense } from "react";
import { Link } from "react-router-dom";
import homeSecondary from '../../assets/icons/home-secondary.svg';
import heartSecondary from '../../assets/icons/heart-secondary.svg';
import shoppingCartSecondary from '../../assets/icons/shopping-cart-secondary.svg';
import userSecondary from '../../assets/icons/user-secondary.svg';

function loadIcons(iconName) {
    const primaryIcon = require(`../../assets/icons/${iconName}.svg`)
    return primaryIcon;
}

const BottomNav = (props) => {
    const importedIcon = {icon: loadIcons(props.iconName), importType: props.importType};

    return (
        <Suspense
            fallback={<div className="text-center font-bold">Loading...</div>}
        >
            <div className={`my-auto`}>
                <nav>
                    <ul className={`mt-[49px] flex justify-between items-start gap-[10px] shadow-[0_-5px_25px_-15px_rgba(85,85,85,0.25)] pt-[8px] pb-[28px] px-[24px]`}>
                        <li><Link to='/home'>
                            <div className="flex flex-col items-center judtify-center py-[4px] px-[8px] gap-[8px]">
                                <img 
                                    src={importedIcon.importType === 'homePrimary' ? 
                                        importedIcon.icon : homeSecondary} />
                                <p className={`${importedIcon.importType === 'homePrimary' ? 'text-[#9D4485]' : ''} font-bold text-[12px] font-[DMSans] not-italic text-center order-1`}>
                                    Home
                                </p>
                            </div>
                            </Link>
                        </li>
                        <li><Link to='whishlist'>
                            <div className="flex flex-col items-center judtify-center py-[4px] px-[8px] gap-[8px]">
                            <img 
                                src={importedIcon.importType === 'wishlistPrimary' ? 
                                    importedIcon.icon : heartSecondary} />
                                <p className={`${importedIcon.importType === 'wishlistPrimary' ? 'text-[#9D4485]' : ''} font-bold text-[12px] font-[DMSans] not-italic text-center order-1`}>
                                    Wishlist
                                </p>
                            </div>
                            </Link>
                        </li>
                        <li><Link to='/cart'>
                            <div className="flex flex-col items-center judtify-center py-[4px] px-[8px] gap-[8px]">
                            <img 
                                src={importedIcon.importType === 'shoppingCartPrimary' ? 
                                    importedIcon.icon : shoppingCartSecondary} />
                                <p className={`${importedIcon.importType === 'shoppingCartPrimary' ? 'text-[#9D4485]' : ''} font-bold text-[12px] font-[DMSans] not-italic text-center order-1`}>
                                    Cart
                                </p>
                            </div>
                            </Link>
                        </li>
                        <li><Link>
                            <div className="flex flex-col items-center judtify-center py-[4px] px-[8px] gap-[8px]">
                                <img src={userSecondary} />
                                <p className={`${importedIcon.importType === 'profilePrimary' ? 'text-[#9D4485]' : ''} font-bold text-[12px] font-[DMSans] not-italic text-center order-1`}>
                                    Profile
                                </p>
                            </div>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </Suspense>
    )
};

export default BottomNav;