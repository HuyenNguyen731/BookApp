import React, { useState, useEffect } from "react";
import {View, Dimensions, ScrollView} from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";

import styles from "./order.style";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import CardStatus from "../../components/CardStatus/CardStatus";

const fetchDataForStatus = async (status, token) => {
    try {
        const response = await axios.get(`http://192.168.36.1:7135/api/orders/status/${status}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response?.data?.data;
    } catch (error) {
        console.error(`Error when calling API for status ${status}: `, error);
        return [];
    }
};

const TabContent = ({ status }) => {
    const [data, setData] = useState([]);
    const [token, setToken] = useState(null);

    useEffect(() => {
        AsyncStorage.getItem("TOKEN")
            .then((TOKEN) => {
                if (TOKEN) {
                    fetchDataForStatus(status, TOKEN).then((statusData) => {
                        setData(statusData);
                    });
                    setToken(TOKEN);
                } else {
                    console.error("Token does not exist");
                }
            })
            .catch((error) => {
                console.error("Error when getting token from AsyncStorage: ", error);
            });
    }, [status]);

    const onCancelOrder = () => {
        try {
            fetchDataForStatus(status, token).then((statusData) => {
                setData(statusData);
            });
        } catch (error) {
            console.error(`Error when calling API for status ${status}: `, error);
            return [];
        }
    };

    return (
        <ScrollView>
            <View style={styles.scene}>
                {data?.map((item, index) => (
                    <CardStatus
                        key={index}
                        status={status}
                        item={item}
                        onCancelOrder={onCancelOrder}
                    />
                ))}
            </View>
        </ScrollView>
    );
};

const renderTabBar = (props) => (
    <TabBar
        {...props}
        indicatorStyle={{ backgroundColor: "white" }}
        style={styles.tabBar}
    />
);

export default class Order extends React.Component {
    state = {
        index: 0,
        routes: [
            { key: "1", title: "Chờ xác nhận" },
            { key: "2", title: "Đã xác nhận" },
            { key: "3", title: "Đã giao hàng" },
            { key: "4", title: "Đã hủy đơn hàng" },
        ],
    };

    render() {
        return (
            <TabView
                navigationState={this.state}
                renderTabBar={renderTabBar}
                renderScene={SceneMap({
                    1: () => <TabContent status="1" />,
                    2: () => <TabContent status="2" />,
                    3: () => <TabContent status="3" />,
                    4: () => <TabContent status="4" />,
                })}
                onIndexChange={(index) => this.setState({ index })}
                initialLayout={{ width: Dimensions.get("window").width }}
                style={styles.container}
            />
        );
    }
}
