import React from "react";
import {
    View,
} from "react-native";

import Bomb from "../../components/Game/Bomb";
import Flag from "../../components/Game/Flag";
import Char from "../../components/Game/Char";
import Field from "../../components/Game/Field";

import styles from "./styles";

class Game extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            // umaPropriedade: this.props.umaPropriedade,
        }
    }

    render() {
        return (
            <View style={[styles.container]}>
                <Bomb size={100} />
                <Flag size={100} />
                <Char size={100} char="1" />
                <Field size={100} char="1" />
            </View>
        )
    };
}

export default Game;
