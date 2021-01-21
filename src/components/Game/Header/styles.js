import { StyleSheet } from "react-native";

import commonStyles from "../../../commonStyles";

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        backgroundColor: commonStyles.colors.field.background,
        padding: 10,
        justifyContent: "center",
        alignItems: "center",
    },

    text: {
        fontSize: 45,
        marginLeft: 10,
        fontWeight: "bold",
    },
});

export default styles;
