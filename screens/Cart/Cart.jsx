import React, { useState, useEffect } from "react";
import {View, Text, Alert} from "react-native";
import styles from "./cart.style";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {useFocusEffect, useNavigation} from "@react-navigation/native";
import CardOrder from "../../components/CardOrder/CardOrder";
import Button from "../../components/Button";

const Cart = () => {
    const navigation = useNavigation();
    const [data, setData] = useState([]);
    const [token, setToken] = useState(null);

    const fetchData = async () => {
        try {
            const response = await axios.get(
                `http://192.168.36.1:7135/api/orders/cart`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            if (response.status === 200) {
                setData(response.data.data);
            }
        } catch (error) {
            console.error("Error calling API: ", error);
        }
    };

    const handleCheckOut = () => {
        const orderId = data?.orderId;

        if (orderId) {
            navigation.navigate("Checkout", {orderId});
        }
    };

    useFocusEffect(
        React.useCallback(() => {
            fetchData();
        }, [token]) // Fetch data when token changes
    );

    useEffect(() => {
        const fetchToken = async () => {
            try {
                const TOKEN = await AsyncStorage.getItem("TOKEN");
                if (TOKEN) {
                    setToken(TOKEN);
                } else {
                    console.error("Token does not exist");
                }
            } catch (error) {
                console.error("Error when getting token from AsyncStorage: ", error);
            }
        };

        fetchToken();
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.order}>
                {data?.orderItems?.map((item, index) => (
                    <CardOrder
                        {...item}
                        token={token}
                        key={item?.bookId}
                        url={item?.book?.image}
                        name={item?.book?.name}
                        price={item?.book?.price}
                        quantity={item?.quantity}
                        orderItemId={item?.orderItemId}
                        fetchData={fetchData}
                    />
                ))}
            </View>
            <View style={styles.payment}>
                <View style={styles.wrapper}>
                    <Text style={styles.text}>Tổng tiền:</Text>
                    <Text style={styles.total}>{data?.totalAmount} đ</Text>
                </View>
                <Button
                    title="Thanh toán"
                    filled
                    onPress={handleCheckOut}
                    style={{
                        marginTop: 18,
                        marginBottom: 4,
                    }}
                />
            </View>
        </View>
    );
};

export default Cart;
