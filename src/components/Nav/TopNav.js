import React from "react";
import notifiedDotSecondary from '../../assets/icons/notified-dot-secondary.svg';

const Nav = (props) => {

    return (
        <header className="flex w-full pb-[0.75rem] mb-[2rem]">
            <span className="text-[1rem] text-[#414040] font-bold not-italic w-[40px] h-[21px] leading-[21px] font-[DM-Sans]">
                {props.title}
            </span>
            <div className={`flex gap-[1rem] ml-auto text-right`}>
                <img src={notifiedDotSecondary} />
            </div>
        </header>
    )
};

export default Nav;