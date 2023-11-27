import { StyleSheet } from "react-native";

import { COLORS } from "../../constants";

const styles = StyleSheet.create({
    card: {
        padding: 16,
        backgroundColor: COLORS.white,
        borderRadius: 16,
        margin: 10,
        gap: 8,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.08,
        shadowRadius: 3,
        elevation: 2,
    },
    button: {
        border: "1px solid",
        borderRadius: 20,
        padding: 8,
        minWidth: 100,
        backgroundColor: COLORS.grayF3,
    },
    buttonCancel: {
        backgroundColor: COLORS.red,
        padding: 5,
        borderRadius: 20,
        minWidth: 60,
    },
    btnText: {
        textAlign: "center",
    },
    btnTextCancel: {
        color: COLORS.white,
        textAlign: "center",
    },
    flex: {
        display: "flex",
        flexDirection: "row",
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
});

export default styles;
