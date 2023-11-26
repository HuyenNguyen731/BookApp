import { StyleSheet, StatusBar } from "react-native";

import { COLORS, SIZES } from "../../constants";

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: COLORS.white,
        marginTop: StatusBar.currentHeight || 0,
        flex: 1,
        justifyContent: "center"
    },
    imgContainer: {
        height: 208,
        width: 213,
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: 50,
        marginBottom: 20,
    },
    img: {
        height: 208,
        width: 213,
        objectFit: "cover",
    },
    title: {
        marginTop: 12,
        marginBottom: 12,
        fontSize: SIZES.xxl,
        textAlign: "center",
    },
    desc: {
        textAlign: "center",
    },
    button: {
        padding: 16,
        marginTop: 100,
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
    btnText: {
        color: COLORS.white,
        fontSize: SIZES.xl,
    },
});

export default styles;
