import React from "react";
import { View, Text } from "react-native";

import styles from "./success.style";
import {useNavigation} from "@react-navigation/native";
import Button from "../../components/Button";

const Success = () => {
    const navigation = useNavigation();

    const handleBack  = () => {
        navigation.navigate("Profile");
    }
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>Success!</Text>
                <Text style={styles.desc}>
                    Your order will be delivered soon.
                    Thank you for choosing our app!
                </Text>
            </View>

            <Button
                title="Trở về"
                filled
                onPress={handleBack}
                style={{
                    marginTop: 18,
                    marginBottom: 4,
                }}
            />
        </View>
    );
};

export default Success;
