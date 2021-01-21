import { StyleSheet } from "react-native";
import commonStyles from "../../commonStyles";

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    
    containerModal: {
        flex: 1,
        backgroundColor: "#0000007c",
        justifyContent: "center",
        alignItems: "center",
    },

    containerTextInput: {

    },

    textInput: {
        backgroundColor: commonStyles.colors.secundary,
        fontSize: 20,
    },

    contentModal: {
        padding: 20,
        backgroundColor: "#FFF",
        borderRadius: 10,
        width: "90%",
    },

    tittleModal: {
        fontSize: 40,
        fontWeight: "bold",

    },

    buttonContainerModal: {
        flexDirection: "row",
        justifyContent: "flex-end",
    },

    buttonModal: {
        padding: 10,
    },
});

export default styles;
