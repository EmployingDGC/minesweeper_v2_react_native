import React from "react";
import { View, StyleSheet } from "react-native";

import commonStyles from "../../../commonStyles";

import Bomb from "../Bomb";
import Flag from "../Flag";
import Char from "../Char";

const Field = (props) => {
    return (
        <View style={[
            styles(props).container,
            props.props.opened ? styles(props).containerOpen : null,
            props.props.exploded && props.props.opened ? styles(props).containerExploded : null,
        ]}>
            {renderField(props.size, `${props.props.number}`, props.props)}
        </View>
    );
}

const styles = (props) => {
    return StyleSheet.create({
        container: {
            justifyContent: "center",
            alignItems: "center",
            width: props.size,
            height: props.size,
            borderWidth: props.size * .15,
            backgroundColor: commonStyles.colors.field.background,
            borderTopColor: commonStyles.colors.field.border.light,
            borderLeftColor: commonStyles.colors.field.border.light,
            borderRightColor: commonStyles.colors.field.border.dark,
            borderBottomColor: commonStyles.colors.field.border.dark,
        },

        containerOpen: {
            borderTopColor: commonStyles.colors.field.border.dark,
            borderLeftColor: commonStyles.colors.field.border.dark,
            borderWidth: props.size * .04,
        },
        
        containerExploded: {
            backgroundColor: commonStyles.colors.field.backgroundExploded,
        },
    });
}

const renderField = (size, char, propsField) => {
    const sizeNumber = size - size * .15;
    const sizeFlag = size - size * .40;
    const sizeBomb = size - size * .40;

    if (propsField.flagged && !propsField.opened) {
        if (propsField.flaggedWrong)
            return <Flag size={sizeFlag} wrong />
        
        return <Flag size={sizeFlag} />
    }
    
    if (propsField.mined && propsField.opened) {
        return <Bomb size={sizeBomb} />
    }

    if (propsField.number >= 1 && propsField.number <= 8 && propsField.opened) {
        return <Char size={sizeNumber} char={char} />;
    }

    return null;
}

export default Field;
