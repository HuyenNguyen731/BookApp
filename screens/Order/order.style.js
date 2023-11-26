import { StyleSheet, StatusBar } from "react-native";

import { COLORS} from "../../constants";

const styles = StyleSheet.create({
    container: {
        marginTop: StatusBar.currentHeight,
    },
    scene: {
        flex: 1,
    },
    tabBar: {
        textTransform: "capitalize",
        backgroundColor: COLORS.primary,
    },
});

export default styles;
