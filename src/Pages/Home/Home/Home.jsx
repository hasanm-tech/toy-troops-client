import React from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../Gallary/Gallary';
import Category from '../Cetegory/Category';
import Brand from '../Brand/Brand';
import Services from '../Services/Services';
import Discount from '../Discount/Discount';
import useTitle from '../../../Hooks/useTitle';

const Home = () => {

    useTitle('Home')
    return (
        <>
            <Banner></Banner>
            <Gallery></Gallery>
            <Category></Category>
            <Brand></Brand>
            <Discount></Discount>
            <Services></Services>
        </>
    );
};

export default Home;