import { StyleSheet } from "react-native";

import { COLORS, SIZES } from "../../constants";

const styles = StyleSheet.create({
    item: {
        display: "flex",
        flexDirection: "row",
        backgroundColor: COLORS.white,
        marginTop: 20,
    },
    imgContainer: {
        width: 130,
        height: 160,
    },
    img: {
        width: 130,
        height: 160,
        resizeMode: "contain",
    },
    name: {
        fontSize: SIZES.lg,
    },
    author: {
        fontSize: SIZES.sm,
        color: COLORS.grayBorder,
    },
    price: {
        marginTop: 10,
        fontSize: SIZES.lg,
        color: COLORS.primary,
    },
    wrapperButton: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 12,
    },
    button: {
        width: 38,
        height: 38,
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.4,
        shadowRadius: 3,
        elevation: 5,
        backgroundColor: COLORS.white,
    },
    count: {
        fontSize: SIZES.xs,
        color: COLORS.grayBorder,
    },
});

export default styles;
