import { StyleSheet, StatusBar } from "react-native";

const styles = StyleSheet.create({
    container: {
        marginTop: StatusBar.currentHeight || 0,
        padding: 10,
        height: "100%",
    },
    imgContainer: {
        marginTop: 16,
    },
    row: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        margin: -10,
    },
    column: {
        width: "50%",
        maxWidth: "50%",
        padding: 10,
    },
    textSale: {
        fontSize: 18,
        marginLeft: 10,
        marginBottom: 12,
        marginTop: 20,
    },
});

export default styles;
