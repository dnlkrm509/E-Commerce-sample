import React from "react";
import { Link } from "react-router-dom";

const BottomNav = () => {
    return (
        <div className={`my-auto`}>
            <nav>
                <ul className={`grid grid-cols-4 gap-[1rem]`}>
                    <li><Link to='/home'>Home</Link></li>
                    <li><Link to='whishlist'>Whishlist</Link></li>
                    <li><Link to='/cart'>Cart</Link></li>
                    <li><Link>Profile</Link></li>
                </ul>
            </nav>
        </div>
    )
};

export default BottomNav;