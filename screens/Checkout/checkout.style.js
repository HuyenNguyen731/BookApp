import { StyleSheet, StatusBar } from "react-native";

import { COLORS, SIZES } from "../../constants";

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: COLORS.white,
        marginTop: StatusBar.currentHeight || 0,
        flex: 1,
        maxWidth: 960,
    },
    formContainer: {
        flexGrow: 1,
    },
    inputLabel: {
        marginBottom: 20,
    },
    input: {
        height: 55,
        padding: 10,
        borderWidth: 1,
        fontSize: SIZES.md,
        borderRadius: 10,
        borderColor: COLORS.grayBorder,
        backgroundColor: COLORS.grayF3,
    },
    label: {
        fontSize: SIZES.lg,
        marginBottom: 8,
    },
    button: {
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
    btnText: {
        color: COLORS.white,
        fontSize: SIZES.xl,
    },
    errorText: {
        color: COLORS.red,
        textAlign: "center",
    },
});

export default styles;
