import React, { useState, useEffect } from "react";
import { useRoute } from "@react-navigation/native";
import {View, Text, Image, ActivityIndicator} from "react-native";
import styles from "./orderdetails.style";
import { getImageUrl } from "../../helpers/image";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import dayjs from "dayjs";

const OrderDetails = () => {
    const route = useRoute();
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        AsyncStorage.getItem("TOKEN")
            .then((TOKEN) => {
                if (TOKEN) {
                    try {
                        axios
                            .get(`http://192.168.36.1:7135/api/orders/${route.params}`, {
                                headers: {
                                    Authorization: `Bearer ${TOKEN}`,
                                },
                            })
                            .then((response) => {
                                setData(response?.data?.data);
                                setIsLoading(false);
                            })
                            .catch((error) => {
                                console.error(`Error when calling API for status:`, error);
                                setError("Error fetching data");
                                setIsLoading(false);
                            });
                    } catch (error) {
                        console.error(`Error when calling API for status:`, error);
                        setError("Error fetching data");
                        setIsLoading(false);
                    }
                } else {
                    console.error("Token does not exist");
                    setIsLoading(false);
                }
            })
            .catch((error) => {
                console.error("Error when getting token from AsyncStorage: ", error);
                setError("Error fetching data");
                setIsLoading(false);
            });
    }, []);

    const render = () => {
        if(isLoading) {
            return <ActivityIndicator size="large"/>
        }

        if(error) {
            return (
                <>
                    <Text style={{marginTop: 20}}>{error} hii</Text>
                    <Text style={{marginTop: 20}}></Text>
                </>
            )
        }

        return (
            <View style={styles.container}>
                <View style={styles.flex}>
                    <Text>Mã №0000{data?.orderId}</Text>
                    <Text style={styles.textGray}>
                        {dayjs(data?.orderDate).format("DD-MM-YYYY")}
                    </Text>
                </View>
                <View style={styles.flex}>
                    <Text>
                        <Text style={styles.textGray}>Tổng tiền:</Text>{" "}
                        {data?.totalAmount} đ
                    </Text>
                    {data?.orderStatus === 1 && (
                        <Text style={styles.textOrange}>Chờ xác nhận</Text>
                    )}
                    {data?.orderStatus === 2 && (
                        <Text style={styles.textOrange}>Đã xác nhận</Text>
                    )}
                    {data?.orderStatus === 3 && (
                        <Text style={styles.textGreen}>Đã giao</Text>
                    )}
                    {data?.orderStatus === 4 && (
                        <Text style={styles.textRed}>Đã hủy</Text>
                    )}
                </View>
                <Text style={styles.quantity}>{data?.orderItems?.length} sản phầm</Text>

                {data?.orderItems?.map((item, index) => (
                    <View style={styles.card} key={index}>
                        <View style={styles.imgContainer}>
                            <Image
                                style={styles.img}
                                source={{ uri: getImageUrl(item?.book?.image) }}
                            />
                        </View>
                        <View>
                            <Text style={{
                                flexWrap: "wrap",
                                maxWidth: 230,
                            }}>{item?.book?.name}</Text>
                            <Text>X{item?.quantity}</Text>
                        </View>
                    </View>
                ))}
            </View>
        )

    }

    return (
        <>{render()}</>
    );
};

export default OrderDetails;
