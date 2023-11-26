import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, Alert } from "react-native";
import { getImageUrl } from "../../helpers/image";
import styles from "./cardorder.style";
import axios from "axios";

const CardOrder = ({
                       url,
                       name,
                       price,
                       quantity,
                       token,
                       orderItemId,
                       fetchData,
                   }) => {
    const [count, setCount] = useState(quantity);

    const handleIncrease = async () => {
        try {
            if (!token) {
                Alert.alert("Please log in to make a purchase.");
                return;
            }

            const newCount = count + 1;
            const res = await axios.put(
                `http://192.168.36.1:7135/api/orders/changecartitem/${orderItemId}/${newCount}`,
                null,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            if (res.status === 200) {
                setCount(newCount);
                fetchData();
            }
        } catch (error) {
            console.error("Lỗi mua hàng: ", error);
        }
    };

    const handleDecrement = async () => {
        try {
            if (!token) {
                Alert.alert("Please log in to make a purchase.");
                return;
            }

            const newCount = count - 1;
            if (newCount <= 0) {
                const deleteRes = await axios.delete(
                    `http://192.168.36.1:7135/api/orders/removeitemtocart/${orderItemId}`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );

                if (deleteRes.status === 200) {
                    fetchData();
                }
            } else {
                const res = await axios.put(
                    `http://192.168.36.1:7135/api/orders/changecartitem/${orderItemId}/${newCount}`,
                    null,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );

                if (res.status === 200) {
                    setCount(newCount);
                    // fetchData();
                }
            }
        } catch (error) {
            console.error("Lỗi mua hàng: ", error);
        }
    };

    return (
        <View style={styles.item}>
            <View style={styles.imgContainer}>
                <Image style={styles.img} source={{ uri: getImageUrl(url) }} />
            </View>
            <View
                style={{
                    display: "flex",
                    flex: 1,
                    padding: 8,
                    justifyContent: "space-between",
                }}
            >
                <View>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.author}>By Jake Knapp</Text>
                    <Text style={styles.price}>{price}</Text>
                </View>
                <View
                    style={{
                        display: "flex",
                        alignItems: "center",
                        flexDirection: "row",
                        justifyContent: "space-between",
                    }}
                >
                    <Text style={styles.count}>Số lượng</Text>
                    <View style={styles.wrapperButton}>
                        <TouchableOpacity style={styles.button} onPress={handleDecrement}>
                            <Text style={styles.btnText}>-</Text>
                        </TouchableOpacity>
                        <Text>{count}</Text>
                        <TouchableOpacity style={styles.button} onPress={handleIncrease}>
                            <Text style={styles.btnText}>+</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default CardOrder;
