import React from 'react';
import {View, Text} from 'react-native';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Ionicons} from "@expo/vector-icons";
import {COLORS} from "../constants/index";
import {Home, Cart, Profile} from "../screens";
import Order from "../screens/Order/Order";

const Tab = createBottomTabNavigator();

const screenOptions = {
    tabBarShowLabel: false,
    tabBarHideOnKeyboard: true,
    headerShown: false,
    tabBarStyle: {
        position: "absolute",
        bottom: 0,
        right: 0,
        left: 0,
        elevation: 0,
        height: 70
    }
}

const BottomTabNavigation = () => {
    return (
        <Tab.Navigator screenOptions={screenOptions}>
            <Tab.Screen name="Home" component={Home} options={{
                tabBarIcon: ({focused}) => {
                    return <Ionicons name={focused ? "home" : "home-outline"} size={24}
                                     color={focused ? COLORS.primary : COLORS.gray}/>
                }
            }}/>
            <Tab.Screen name="Cart" component={Cart} options={{
                tabBarIcon: ({focused}) => {
                    return <Ionicons name={focused ? "cart" : "cart-outline"} size={24}
                                     color={focused ? COLORS.primary : COLORS.gray}/>
                }
            }}/>
            <Tab.Screen name="Order" component={Order} options={{
                tabBarIcon: ({focused}) => {
                    return <Ionicons name={focused ? "list" : "list-outline"} size={24}
                                     color={focused ? COLORS.primary : COLORS.gray}/>
                }
            }}/>
            <Tab.Screen name="Profile" component={Profile} options={{
                tabBarIcon: ({focused}) => {
                    return <Ionicons name={focused ? "person" : "person-outline"} size={24}
                                     color={focused ? COLORS.primary : COLORS.gray}/>
                }
            }}/>
        </Tab.Navigator>
    )
}

export default BottomTabNavigation;
