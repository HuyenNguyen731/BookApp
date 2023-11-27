import React, { useState, useEffect } from "react";
import {View, Text, TouchableOpacity, Alert} from "react-native";

import styles from "./cardstatus.style";
import dayjs from "dayjs";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import Button from "../Button";
import {useNavigation} from "@react-navigation/native";

const CardStatus = ({ status, item, onCancelOrder }) => {
    const navigation = useNavigation();
    const [token, setToken] = useState(null);
    const { orderId, orderDate, totalAmount } = item;

    const handleCancel = async () => {
        try {
            if (!token) {
                Alert.alert("Please log in to make a purchase.");
                return;
            }
            const res = await axios.put(
                `http://192.168.36.1:7135/api/orders/cancel/${orderId}`,
                {},
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            if (res.status === 200) {
                onCancelOrder();
            }
        } catch (error) {
            console.error(`Error when calling API for status ${status}: `, error);
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

    const handleDetails = () => {
        navigation.navigate("OrderDetails", orderId);
    }

    return (
        <View style={styles.card}>
            <View style={[styles.flex, { justifyContent: "space-between" }]}>
                <Text>Mã №0000{orderId}</Text>
                {(status === "1" || status === "2") && (
                    <TouchableOpacity style={styles.buttonCancel} onPress={handleCancel}>
                        <Text style={styles.btnTextCancel}>Hủy</Text>
                    </TouchableOpacity>
                )}
            </View>
            <View style={styles.flex}>
                <Text style={styles.textGray}>Ngày: </Text>
                <Text>{dayjs(orderDate).format("DD/MM/YYYY, h:mm A")}</Text>
            </View>
            <View style={styles.flex}>
                <Text style={styles.textGray}>Tổng tiền: </Text>
                <Text>{totalAmount} đ</Text>
            </View>
            <View
                style={[
                    styles.flex,
                    {
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginTop: 16,
                    },
                ]}
            >
                <View
                    style={[
                        styles.flex,
                        {
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginTop: 16,
                            gap: 4,
                        },
                    ]}
                >
                    <TouchableOpacity style={styles.button} onPress={handleDetails}>
                        <Text style={styles.btnText}>Details</Text>
                    </TouchableOpacity>

                </View>
                {status === "1" && <Text style={styles.textOrange}>Chờ xác nhận</Text>}
                {status === "2" && <Text style={styles.textOrange}>Đã xác nhận</Text>}
                {status === "3" && <Text style={styles.textGreen}>Đã giao</Text>}
                {status === "4" && <Text style={styles.textRed}>Đã hủy</Text>}
            </View>
        </View>
    );
};

export default CardStatus;
