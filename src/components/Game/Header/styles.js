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
        fontFamily: commonStyles.fonts.tittle,
        fontSize: 45,
        marginLeft: 10,
    },

    buttonModal: {
        position: "absolute",
        right: 0,
        padding: 10,
        borderRadius: 10,
        marginRight: 20,
        backgroundColor: "#0000007C",
    },

    buttonBack: {
        position: "absolute",
        left: 0,
        padding: 10,
        borderRadius: 10,
        marginLeft: 20,
        backgroundColor: "#0000007C",
    },

    textButton: {
        fontFamily: commonStyles.fonts.subtittle,
        fontSize: 15,
        color: commonStyles.colors.secundary,
    },
});

export default styles;
