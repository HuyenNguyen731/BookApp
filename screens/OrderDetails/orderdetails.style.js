import { StyleSheet } from "react-native";
import { COLORS } from "../../constants";

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.white,
        maxWidth: 960,
        flex: 1,
        padding: 20,
        marginTop: 20
    },
    imgContainer: {
        width: 100,
        height: 100,
        alignItems: "center",
    },
    img: {
        width: "100%",
        height: "100%",
        resizeMode: "contain",
    },
    flex: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 4,
    },
    textGray: {
        color: COLORS.grayBorder,
    },
    textGreen: {
        color: COLORS.green,
    },
    textRed: {
        color: COLORS.red,
    },
    textOrange: {
        color: COLORS.orange,
    },
    quantity: {
        marginTop: 12,
    },
    card: {
        display: "flex",
        flexDirection: "row",
        backgroundColor: COLORS.lightGray,
        marginTop: 12,
        width: "100%",
    },
    info: {
        justifyContent: "space-between",
        paddingTop: 10,
        paddingBottom: 10,
    },
    button: {
        bgColor: COLORS.primary,
    }
});

export default styles;
