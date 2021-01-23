import { StyleSheet } from "react-native";
import commonStyles from "../../commonStyles";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: commonStyles.colors.field.background,
    },
    
    containerModal: {
        flex: 1,
        backgroundColor: "#0000007c",
        justifyContent: "center",
        alignItems: "center",
    },

    containerTextInput: {
        marginBottom: 10,
    },
    
    textInput: {
        fontFamily: commonStyles.fonts.subtittle,
        fontSize: 20,
        width: "100%",
        backgroundColor: "#EEE",
        borderRadius: 15,
        paddingHorizontal: 15,
    },

    contentModal: {
        padding: 20,
        backgroundColor: "#FFF",
        borderRadius: 10,
        width: "90%",
    },

    tittleModal: {
        fontFamily: commonStyles.fonts.tittle,
        marginBottom: 20,
        textAlign: "center",
        fontSize: 40,
        fontWeight: "bold",
    },

    buttonContainerModal: {
        flexDirection: "row",
        justifyContent: "flex-end",
    },

    buttonModal: {
        padding: 10,
        fontSize: 20,
    },
});

export default styles;
