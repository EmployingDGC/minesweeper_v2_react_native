import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";

import commonStyles from "../../../commonStyles";

const Records = (props) => {
    return (
        <View style={[styles(props).container]}>
            <View style={[styles(props).containerHeader]}>
                <TouchableOpacity
                    activeOpacity={.8}
                    style={[styles(props).buttonBack]}
                    onPress={() => props.onBack("Menu")}
                >
                    <Icon
                        name="arrow-left"
                        size={25}
                        color="#FFF"
                    />
                </TouchableOpacity>
            </View>
            <View style={[styles(props).containerTable]}>
                <Text
                    style={[
                        styles(props).text,
                        styles(props).textRP,
                    ]}
                >{"R"}</Text>
                
                <Text
                    style={[styles(props).text, {flex: 1}]}
                >{"NOME"}</Text>
                
                <Text
                    style={[
                        styles(props).text,
                        styles(props).textRP,
                    ]}
                >{"P"}</Text>
            </View>
        </View>
    );
}

const styles = (props) => {
    return StyleSheet.create({
        container: {
        },
        
        containerHeader: {
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 10,
        },
        
        containerTable: {
            flexDirection: "row",
        },
        
        buttonBack: {
            backgroundColor: "#0000007C",
            borderRadius: 10,
            padding: 10,
        },

        text: {
            borderWidth: 1,
            textAlign: "center",
            padding: 10,
            fontFamily: commonStyles.fonts.tittle,
            backgroundColor: commonStyles.colors.field.background,
        },

        textRP: {
            minWidth: props.minWidth,
            textAlign: "center",
        },
    });
}

export default Records;
