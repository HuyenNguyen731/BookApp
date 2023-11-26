import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "./cardproduct.style";
import {getImageUrl} from "../../helpers/image";

const CardProduct = ({ id, name, price, url, author }) => {
    const navigation = useNavigation();

    const handlePress = () => {
        navigation.navigate("BookDetails", { id });
    };

    return (
        <TouchableOpacity onPress={handlePress} style={styles.container}>
            <View style={styles.item}>
                <View style={styles.imgContainer}>
                    <Image style={styles.img} source={{ uri: getImageUrl(url) }} />
                </View>
                <Text style={styles.name} numberOfLines={2}>
                    {name}
                </Text>
                <Text style={styles.author}>{author}</Text>
                <Text style={styles.price}>{price} đ</Text>
            </View>
        </TouchableOpacity>
    );
};

export default CardProduct;
