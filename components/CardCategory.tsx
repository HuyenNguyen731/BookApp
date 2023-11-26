import React from "react";
import { View, Text, Image } from "react-native";

const CardCategory = ({ name, url }) => {
    return (
        <View>
            <View style={{ height: 64, width: 64}}>
                <Image
                    style={{
                        width: 64,
                        height: 64,
                        borderRadius: 50,
                        resizeMode:"cover"
                    }}
                    source={url} />
            </View>
            <Text style={{ marginTop: 12, marginBottom: 12}}>{name}</Text>
        </View>
    );
};

export default CardCategory;
