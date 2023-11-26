import { StyleSheet } from "react-native";

import { COLORS } from "../../constants";

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        paddingLeft: 10,
        paddingRight: 10,
    },
    text: {
        marginBottom: 18,
        fontSize: 18,
    },
    product: {
        paddingRight: 10,
    },
    input: {
        height: 40,
        padding: 10,
        borderWidth: 1,
        marginTop: 10,
        marginBottom: 30,
        fontSize: 14,
        // borderRadius: 10,
        borderColor: COLORS.grayBorder,
        backgroundColor: COLORS.grayF3,
    },
});

export default styles;
