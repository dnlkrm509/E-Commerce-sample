import React, { useState } from "react";
import { Link } from "react-router-dom";
import notifiedDotSecondary from '../../assets/icons/notified-dot-secondary.svg';
import classes from './Nav.module.css';

const Nav = (props) => {
    const [isShow, setIsShow] = useState(false);

    const isShowHandler = () => {
        setIsShow((prevState) => !prevState);
    };

    return (
        <header className="flex w-full pb-[0.75rem]">
            <span className="text-[1rem] text-[#414040] font-bold not-italic w-[40px] h-[21px] leading-[21px] font-[DM-Sans]">
                {props.title}
            </span>
            <div className={`flex gap-[1rem] ml-auto text-right`}>
                <img src={notifiedDotSecondary} />
                <div className={`${classes.links} my-auto hidden md:inline lg:inline ${isShow ? classes.active : ''}`}>
                    <nav>
                        <ul className={`flex gap-[1rem] ${isShow ? 'flex-col' : ''}`}>
                            <li><Link to='/home'>Home</Link></li>
                            <li><Link to='whishlist'>Whishlist</Link></li>
                            <li><Link to='/cart'>Cart</Link></li>
                            <li><Link>Profile</Link></li>
                        </ul>
                    </nav>
                </div>
                <div className={`my-auto cursor-pointer z-10 inline md:hidden lg:hidden ${isShow ? classes.active : ''}`} onClick={isShowHandler}>
                    <div className={classes.top}></div>
                    <div className={classes.middle}></div>
                    <div className={classes.bottom}></div>
                </div>
            </div>
        </header>
    )
};

export default Nav;