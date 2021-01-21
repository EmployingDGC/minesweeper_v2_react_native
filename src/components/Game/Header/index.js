import React from "react";
import { View, Text } from "react-native";

import Flag from "../Flag";

import styles from "./styles";

const Header = (props) => {
    return (
        <View style={[styles.container]}>
            <Flag size={40} />
            <Text style={[styles.text]}>{props.qtyFlags}</Text>
        </View>
    );
}

export default Header;
