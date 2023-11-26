import React, { useState, useEffect } from "react";
import {View, Text, ActivityIndicator, ScrollView} from "react-native";

import styles from "./product.style";
import axios from "axios";
import CardProduct from "../../components/CardProduct/CardProduct";

const Product = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios
            .get(`http://192.168.36.1:7135/api/books`)
            .then((response) => {
                setData(response?.data);
                setIsLoading(false);
            })
            .catch((err) => {
                setError(err);
                setIsLoading(false);
            });
    }, []);

    const render = () => {
        if(isLoading) {
            return <ActivityIndicator size="large" />
        }

        if(error) {
            return  <Text>{error}</Text>
        }

        return (
            <View style={styles.row}>
                {data?.data?.map((item, index) => (
                    <View key={index} style={styles.column}>
                        <CardProduct
                            key={item.bookId}
                            id={item.bookId}
                            url={item?.image}
                            name={item?.name}
                            price={item?.price}
                            author={item?.author?.name}
                        />
                    </View>
                ))}
            </View>
        )
    }

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.textSale}>Sách bán chạy</Text>
            {render()}
        </ScrollView >
    );
};

export default Product;
