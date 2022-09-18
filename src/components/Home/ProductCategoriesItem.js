import React from "react";

const ProductsCategoriesItem = (props) => {
    return (
        <li className="px-[10px] py-[8px]">
            <img src={props.image} className='mx-auto' />
            {props.title}
        </li>
    )
};

export default ProductsCategoriesItem;