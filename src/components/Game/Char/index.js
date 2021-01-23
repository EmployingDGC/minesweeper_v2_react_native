import React from "react";
import {
    View,
    Text,
} from "react-native";

import commonStyles from "../../../commonStyles";

import styles from "./styles";

const setColor = (char) => {
    if (char === "1") {
        return commonStyles.colors.numbers.one;
    }

    if (char === "2") {
        return commonStyles.colors.numbers.two;
    }
    
    if (char === "3") {
        return commonStyles.colors.numbers.three;
    }
    
    if (char === "4") {
        return commonStyles.colors.numbers.four;
    }
    
    if (char === "5") {
        return commonStyles.colors.numbers.five;
    }
    
    if (char === "6") {
        return commonStyles.colors.numbers.six;
    }
    
    if (char === "7") {
        return commonStyles.colors.numbers.seven;
    }
    
    return commonStyles.colors.numbers.eight;
}

const Char = (props) => {
    return (
        <View style={[
            styles.container,
            {
                width: props.size,
                height: props.size,
            }
        ]}>
            <Text style={[
                {
                    fontFamily: commonStyles.fonts.subtittle,
                    color: setColor(props.char),
                    fontSize: props.size,
                }
            ]}>
                {props.char}
            </Text>
        </View>
    );
}

export default Char;
