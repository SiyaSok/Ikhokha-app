import React, { useContext } from 'react';
import { BlogContext } from '../../context/BlogContext';
import { ProductContext } from '../../context/ProductContext';

import Loading from '../util/Loading';
import Slider from '../util/Slider';
import BlogSection from './LandingPage/BlogSection';
import CoverSection from './LandingPage/CoverSection';
import ProductSection from './LandingPage/ProductSection';


const Home = () => {
    const { loadingData } = useContext(BlogContext);
    const { productsData } = useContext(ProductContext);


    return (
        <div>

            {loadingData && productsData ? <div>
                <CoverSection />
                <ProductSection />
                <Slider />
                <BlogSection />
            </div> : <Loading />}


        </div>
    );
}

export default Home;

