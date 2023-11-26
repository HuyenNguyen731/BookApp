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
        navigation.navigate("Home", orderId);
    }

    return (
        <View style={styles.card}>
            <View style={[styles.flex, { justifyContent: "space-between" }]}>
                <Text>Order №0000{orderId}</Text>
                {(status === "1" || status === "2") && (
                    <TouchableOpacity style={styles.buttonCancel} onPress={handleCancel}>
                        <Text style={styles.btnTextCancel}>Cancel</Text>
                    </TouchableOpacity>
                )}
            </View>
            <View style={styles.flex}>
                <Text style={styles.textGray}>Date: </Text>
                <Text>{dayjs(orderDate).format("DD/MM/YYYY, h:mm A")}</Text>
            </View>
            <View style={styles.flex}>
                <Text style={styles.textGray}>Total Amount: </Text>
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
                    {/*<TouchableOpacity style={styles.button}>*/}
                    {/*    <Link*/}
                    {/*        href={{*/}
                    {/*            pathname: "/order-details/[id]",*/}
                    {/*            params: { id: orderId },*/}
                    {/*        }}*/}
                    {/*        style={styles.btnText}*/}
                    {/*    >*/}
                    {/*        Details*/}
                    {/*    </Link>*/}
                    {/*</TouchableOpacity>*/}
                    <Button
                        title="Chi tiết"
                        filled
                        onPress={handleDetails}
                        style={{
                            marginTop: 18,
                            marginBottom: 4,
                        }}
                    />
                </View>
                {status === "1" && <Text style={styles.textOrange}>Pending</Text>}
                {status === "2" && <Text style={styles.textOrange}>Confirmed</Text>}
                {status === "3" && <Text style={styles.textGreen}>Delivered</Text>}
                {status === "4" && <Text style={styles.textRed}>Cancelled</Text>}
            </View>
        </View>
    );
};

export default CardStatus;
