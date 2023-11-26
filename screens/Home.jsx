import React from 'react';
import {ScrollView} from "react-native";
import Category from "./Category/Category";
import Slider from "./Slider/Slider";
import Product from "./Product/Product";

const Home = () => {
    return (
        <ScrollView>
            <Slider/>
            <Category/>
            <Product/>
        </ScrollView>
    )
}

export default Home;


