import { StyleSheet } from "react-native";

import commonStyles from "../../../commonStyles";

const styles = StyleSheet.create({
    container: {
        justifyContent: "flex-end",
        alignItems: "center",
    },

    flag: {
        position: "absolute",
        top: 0,
        zIndex: 1,
        backgroundColor: "transparent",
        borderStyle: "solid",
        borderLeftColor: "transparent",
        borderRightColor: "transparent",
        borderBottomColor: commonStyles.colors.flag.flag,
        transform: [{ rotate: "-90deg" }],
    },

    mast: {
        width: "10%",
        height: "60%",
        backgroundColor: commonStyles.colors.flag.mast,
    },

    baseSmall: {
        width: "50%",
        height: "10%",
        backgroundColor: commonStyles.colors.flag.base,
    },

    baseLarge: {
        width: "100%",
        height: "10%",
        backgroundColor: commonStyles.colors.flag.base,
    },
});

export default styles;
