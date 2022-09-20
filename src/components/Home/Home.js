import React from 'react';
import BottomNav from '../Nav/BottomNav';
import TopNav from '../Nav/TopNav';
import ProductsCategories from './ProductsCategories';
import Ad1 from '../../assets/img/Ad/Ad1.png';
import Ad2 from '../../assets/img/Ad/Ad2.png';
import PopularProductsList from './PopularProducts';

const Home = () => {
    return (
        <div className='felx flex-col justify-between w-full px-[1.5rem]'>
            <TopNav title='Home' />
            <div><img src={Ad1} className='w-full' /></div>
            <ProductsCategories />
            <PopularProductsList />
            <div className='mb-[40px]'><img src={Ad2} className='w-full' /></div>
            <p>New Arivals</p>
            <BottomNav />
        </div>
    )
};

export default Home;