import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

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
                <Text style={[styles.textButtonModal]}>Novo</Text>
                <Text style={[styles.textButtonModal]}>Jogo</Text>
            </TouchableOpacity>

            <TouchableOpacity
                activeOpacity={.8}
                style={[styles.buttonBack]}
                onPress={() => props.onBack("Menu")}
            >
                <Text style={[styles.textButtonBack]}>{"< Voltar"}</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Header;
