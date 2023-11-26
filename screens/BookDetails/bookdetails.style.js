import { StyleSheet } from "react-native";

import { COLORS } from "../../constants";

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1,
    },
    imgContainer: {
        width: "100%",
        height: 266,
        alignItems: "center",
        backgroundColor: COLORS.lightGray,
    },
    img: {
        width: "100%",
        height: "100%",
        resizeMode: "contain",
    },
    nameBook: {
        marginTop: 16,
        marginBottom: 6,
        fontSize: 24,
    },
    price: {
        marginBottom: 12,
        fontSize: 18,
        color: COLORS.primary,
    },
    title: {
        fontSize: 20,
        marginBottom: 6,
        marginTop: 20,
    },
    description: {
        marginBottom: 8,
        fontSize: 18,
    },
    btn: {
        marginBottom: 30,
        color: COLORS.primary,
    },
    wraper: {
        display: "flex",
        flexDirection: "row",
        gap: 8,
    },
    buttonBuy: {
        flex: 1,
        padding: 16,
        marginTop: 20,
        borderRadius: 8,
        marginBottom: 20,
        color: COLORS.white,
        backgroundColor: "#3179DF",
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
    },
    buttonAdd: {
        flex: 1,
        padding: 16,
        marginTop: 20,
        borderRadius: 8,
        marginBottom: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.4,
        shadowRadius: 3,
        elevation: 5,
        color: COLORS.white,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: COLORS.primary,
    },
    buttonText: {
        color: COLORS.white,
        fontSize: 20,
    },
    textBottom: {
        marginTop: 20,
        padding: 20,
        color: COLORS.black,
        backgroundColor: "#FFCCD5",
        borderRadius: 8,
    },
    textDelivery: {
        fontSize: 16,
    },
    textTime: {
        marginTop: 4,
        fontSize: 20,
    },
});

export default styles;
