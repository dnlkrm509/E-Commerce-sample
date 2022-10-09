import React, { useEffect } from 'react';
import BottomNav from '../UI/Nav/BottomNav';
import TopNav from '../UI/Nav/TopNav';
import ProductsCategories from './ProductsCategories';
import Ad1 from '../../assets/img/Ad/Ad1.png';
import Ad2 from '../../assets/img/Ad/Ad2.png';
import PopularProductsList from './PopularProducts';
import NewArivalsList from './NewArivalsList';

let isFirstTime = true;

const Home = () => {
    useEffect(() => {
        if (isFirstTime) {
            localStorage.clear();
            isFirstTime = false;
        }
    }, [isFirstTime])
    return (
        <div className='felx flex-col justify-between w-full px-[1.5rem]'>
            <TopNav title='Home' notification={true} />
            <div><img src={Ad1} className='w-full' /></div>
            <ProductsCategories />
            <PopularProductsList />
            <div className='mb-[40px]'><img src={Ad2} className='w-full' /></div>
            <NewArivalsList />
            <BottomNav iconName='home-primary' importType='homePrimary' />
        </div>
    )
};

export default Home;