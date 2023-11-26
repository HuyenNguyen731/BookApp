import { Dimensions, StyleSheet } from "react-native";

const WIDTH = Dimensions.get("window").width;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 40,
    },
    wrap: {
        height: 260,
        width: WIDTH,
    },
    wrapDot: {
        position: "absolute",
        bottom: -25,
        flexDirection: "row",
        alignSelf: "center",
    },
    dotActive: {
        margin: 3,
        color: "#FFA3B3",
    },
    dot: {
        margin: 3,
        color: "#DEDBDB",
    },
});

export default styles;
