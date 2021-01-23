import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import Bomb from "../Bomb";
import Flag from "../Flag";

import styles from "./styles";

const Header = (props) => {
    return (
        <View style={[styles.container]}>
            <TouchableOpacity
                activeOpacity={.8}
                onPress={props.onPress}
            >
                {props.flag ? <Flag size={40} /> : <Bomb size={40} />}
            </TouchableOpacity>

            <Text style={[styles.text]}>{props.qtyFlags}</Text>

            <TouchableOpacity
                activeOpacity={.8}
                style={[styles.buttonModal]}
                onPress={props.onModal}
            >
                <Icon
                    name="bars"
                    size={25}
                    color="#FFF"
                />
            </TouchableOpacity>

            <TouchableOpacity
                activeOpacity={.8}
                style={[styles.buttonBack]}
                onPress={() => props.onBack("Menu")}
            >
                <Icon
                    name="arrow-left"
                    size={25}
                    color="#FFF"
                />
            </TouchableOpacity>
        </View>
    );
}

export default Header;
