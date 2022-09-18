import React from 'react';
import ProductsCategories from './ProductsCategories';

const Home = () => {
    return (
        <div className='felx flex-col justify-between w-full px-[1.5rem]'>
            Ad
            <ProductsCategories />
            <p>Popular Products</p>
            Promotion
            <p>New Arivals</p>
        </div>
    )
};

export default Home;