import { StyleSheet } from "react-native";

import { COLORS, SIZES } from "../../constants";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        maxWidth: 960,
        justifyContent: "space-between",
        padding: 20,
        backgroundColor: COLORS.white,
    },
    headText: {
        fontSize: 48,
        color: COLORS.black,
        marginBottom: 6,
    },
    img: {
        width: 100,
        height: 100,
        resizeMode: "contain",
    },
    button: {
        padding: 16,
        marginTop: 52,
        backgroundColor: COLORS.primary,
        borderRadius: 4,
        marginBottom: 80
    },
    btnText: {
        textAlign: "center",
        color: COLORS.white,
        fontSize: SIZES.xl,
    },
});

export default styles;
