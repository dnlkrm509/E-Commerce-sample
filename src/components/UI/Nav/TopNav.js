import React from "react";
import notifiedDotSecondary from '../../../assets/icons/notified-dot-secondary.svg';

const Nav = (props) => {

    return (
        <header className="flex flex-col w-full pb-[0.75rem] mb-[2rem] shadow-[0_5px_30px_-20px_rgba(85,85,85,0.25)]">
            <div className="text-center">{new Date().getHours()}:{new Date().getMinutes()}</div>
            <div className="flex">
                <span className="text-[1rem] text-[#414040] font-bold not-italic w-[40px] h-[21px] leading-[21px] font-[DM-Sans]">
                    {props.title}
                </span>
                <div className={`flex gap-[1rem] ml-auto text-right`}>
                    {props.notification && <img src={notifiedDotSecondary} /> }
                </div>
            </div>
        </header>
    )
};

export default Nav;