import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    ActivityIndicator,
    FlatList,
} from "react-native";

import styles from "./category.style";
import { images } from "../../constants";
import CardCategory from "../../components/CardCategory";
// import { API_URL } from "@env";
import axios from "axios";

const categoryImages = [
    images.cate1,
    images.cate2,
    images.cate3,
    images.cate4,
    images.cate1,
];

const Category = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios
            .get(`http://192.168.36.1:7135/api/Categories`)
            .then((response) => {
                const responseData = response.data;
                const modifiedData = responseData.map((item, index) => ({
                    ...item,
                    image: categoryImages[index],
                }));

                setData(modifiedData);
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
            return <Text>Error loading data.</Text>
        }

        return (
            <View>
                <Text style={styles.text}>Top categories</Text>
                <View style={styles.product}>
                    <FlatList
                        data={data}
                        renderItem={({ item, index }) => (
                            <View key={index}>
                                <CardCategory name={item?.name} url={item?.image} />
                            </View>
                        )}
                        horizontal
                        keyExtractor={(item, index) => index.toString()}
                        ItemSeparatorComponent={() => <View style={{ width: 20 }} />}
                    />
                </View>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            {render()}
        </View>
    );
};

export default Category;
