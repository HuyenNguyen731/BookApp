import React, { useState, useEffect } from "react";
import {useNavigation, useRoute} from "@react-navigation/native";
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    ActivityIndicator,
    Alert, ScrollView,
} from "react-native";
import styles from "./bookdetails.style";
import { getImageUrl } from "../../helpers/image";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const BookDetails = () => {
    const route = useRoute();
    const { id } = route.params;
    const navigation = useNavigation();
    const [expanded, setExpanded] = useState(false);
    const [token, setToken] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios
            .get(`http://192.168.36.1:7135/api/books/${id}`)
            .then((response) => {
                setData(response?.data);
                setIsLoading(false);
            })
            .catch((err) => {
                setError(err);
                setIsLoading(false);
            });
    }, []);

    const toggleExpanded = () => {
        setExpanded(!expanded);
    };
    const line = expanded ? 0 : 2;

    const handleBuyNow = async () => {
        try {
            if (!token) {
                Alert.alert("Please log in to make a purchase.");
                return;
            }
            const res = await axios.post(
                `http://192.168.36.1:7135/api/orders/addtocart/${data?.data?.bookId}/1`,
                null,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            if (res.status === 200) {
                navigation.navigate("Cart");
            }
        } catch (error) {
            console.error("Lỗi mua hàng: ", error);
        }
    };

    const handleAddToCart = async () => {
        try {
            if (!token) {
                Alert.alert("Please log in to make a purchase.");
                return;
            }
            const res = await axios.post(
                `http://192.168.36.1:7135/api/orders/addtocart/${data?.data?.bookId}/1`,
                null,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            if (res.status === 200) {
                Alert.alert("Thêm thành công");
            }
        } catch (error) {
            console.error("Lỗi mua hàng: ", error);
        }
    };

    useEffect(() => {
        AsyncStorage.getItem("TOKEN")
            .then((TOKEN) => {
                if (TOKEN) {
                    setToken(TOKEN);
                } else {
                    console.error("Token does not exist");
                }
            })
            .catch((error) => {
                console.error("Error when getting token from AsyncStorage: ", error);
            });
    }, []);

    const render = () => {
        if(isLoading) {
            return <ActivityIndicator size="large" />
        }

        if(error) {
            return <Text>{error}</Text>
        }

        return (
            <View style={styles.container}>
                <View style={styles.imgContainer}>
                    <Image
                        style={styles.img}
                        source={{uri: getImageUrl(data?.data?.image)}}
                    />
                </View>
                <Text style={styles.nameBook}>{data?.data?.name}</Text>
                <Text style={styles.price}>{data?.data?.price} đ</Text>

                <View style={styles.wraper}>
                    <TouchableOpacity style={styles.buttonBuy} onPress={handleBuyNow}>
                        <Text style={styles.buttonText}>Buy Now</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.buttonAdd}
                        onPress={handleAddToCart}
                    >
                        <Text style={styles.buttonText}>Add to Cart</Text>
                    </TouchableOpacity>
                </View>

                <Text style={styles.title}>Chi tiết sản phẩm</Text>
                <Text style={[styles.description]} numberOfLines={line}>
                    {data?.data?.description}
                </Text>
                <TouchableOpacity onPress={toggleExpanded}>
                    <Text style={styles.btn}>{expanded ? "See less" : "See more"}</Text>
                </TouchableOpacity>

                <View style={styles.textBottom}>
                    <Text style={styles.textDelivery}>Delivery in</Text>
                    <Text style={styles.textTime}>1 within Hour</Text>
                </View>
            </View>
        )
    }

    return (
        <ScrollView>{render()}</ScrollView>
    );
};

export default BookDetails;
