import React, { useState } from "react";
import { View, Image, Text, SafeAreaView, ScrollView } from "react-native";

import styles from "./slider.style"
import {images} from "../../constants";

const data = [images.banner1, images.banner2, images.banner3];

const Slider = () => {
    const [imgActive, setimgActive] = useState(0);

    onchange = (nativeEvent) => {
        if (nativeEvent) {
            const slide = Math.ceil(
                nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width
            );
            if (slide != imgActive) {
                setimgActive(slide);
            }
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.wrap}>
                <ScrollView
                    onScroll={({ nativeEvent }) => onchange(nativeEvent)}
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
                    horizontal
                    style={styles.wrap}
                >
                    {data?.map((e, index) => (
                        <Image
                            key={e}
                            resizeMode="stretch"
                            style={styles.wrap}
                            source={e}
                        />
                    ))}
                </ScrollView>
                <View style={styles.wrapDot}>
                    {data?.map((e, index) => (
                        <Text
                            key={e}
                            style={imgActive == index ? styles.dotActive : styles.dot}
                        >
                            ●
                        </Text>
                    ))}
                </View>
            </View>
        </SafeAreaView>
    );
};

export default Slider;
