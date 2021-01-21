import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import Flag from "../Flag";

import styles from "./styles";

const Header = (props) => {
    return (
        <View style={[styles.container]}>
            <TouchableOpacity
                onPress={props.onPress}
            >
                <Flag size={40} />
            </TouchableOpacity>
            <Text style={[styles.text]}>{props.qtyFlags}</Text>
        </View>
    );
}

export default Header;
