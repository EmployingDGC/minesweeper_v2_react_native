import { StyleSheet } from "react-native";

import commonStyles from "../../commonStyles";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },

    containerMenu: {
        padding: 50,
        borderRadius: 25,
        backgroundColor: "#FFFFFF9C",
    },

    tittle: {
        fontFamily: commonStyles.fonts.tittle,
        fontSize: 30,
        marginBottom: 50,
    },

    subtittle: {
        textAlign: "center",
        fontFamily: commonStyles.fonts.subtittle,
        fontSize: 20,
        padding: 10,
        borderRadius: 15,
        marginBottom: 5,
        backgroundColor: "#000000AF",
        color: commonStyles.colors.secundary,
    },
});

export default styles;
