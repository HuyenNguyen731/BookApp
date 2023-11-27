import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./profile.style";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const Profile = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const TOKEN = await AsyncStorage.getItem("TOKEN");
                if (TOKEN) {
                    const response = await axios.get(
                        `http://192.168.36.1:7135/api/User/getuserlogged`,
                        {
                            headers: {
                                Authorization: `Bearer ${TOKEN}`,
                            },
                        }
                    );
                    setData(response.data);
                } else {
                    console.error("Token does not exist");
                }
            } catch (error) {
                console.error("Error when fetching user data: ", error);
            }
        };

        fetchUserData();
    }, []);

    return (
        <View style={styles.container}>
            <View>
                <View style={{ marginLeft: "auto", marginRight: "auto"}}>
                    <Image
                        source={require("../../assets/hero1.jpg")}
                        style={{
                            width: 100,
                            height: 100,
                            borderRadius: 20
                        }}
                    />
                </View>
                <Text style={{ textAlign: "center", fontSize: 20 }}>
                    {data?.data?.fullName}
                </Text>
                <Text style={[{ textAlign: "center", fontSize: 18, marginTop: 10 }]}>
                    {data?.data?.email}
                </Text>
                <View>
                    <Text style={[{ fontSize: 16, marginTop: 20 }]}>
                        Tên người dùng: {data?.data?.username}
                    </Text>
                    <Text style={[{ fontSize: 16, marginTop: 8 }]}>
                        Địa chỉ: {data?.data?.address}
                    </Text>
                    <Text style={[{ fontSize: 16, marginTop: 8 }]}>
                        Số điện thoại: {data?.data?.phone}
                    </Text>
                </View>
            </View>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.btnText}>Logout</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Profile;
