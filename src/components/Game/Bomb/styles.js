import { StyleSheet } from "react-native";

import commonStyles from "../../../commonStyles";

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
    },

    stem: {
        width: "10%",
        height: "100%",
        backgroundColor: commonStyles.colors.bomb.background,
        position: "absolute",
        borderRadius: 10,
    },

    stem45: {
        transform: [{ rotate: "45deg" }],
    },

    stem90: {
        transform: [{ rotate: "90deg" }],
    },

    stem135: {
        transform: [{ rotate: "135deg" }],
    },

    core: {
        width: "80%",
        height: "80%",
        backgroundColor: commonStyles.colors.bomb.background,
    },

    point: {
        width: "15%",
        height: "15%",
        position: "absolute",
        backgroundColor: commonStyles.colors.bomb.point,
        zIndex: 1,
    },
});

export default styles;
