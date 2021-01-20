import React from "react";
import {
    View,
} from "react-native";

import Board from "../../components/Game/Board";

import styles from "./styles";

class Game extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            board: null,
        }
    }

    render() {
        return (
            <View style={[styles.container]}>
                <Board width={5} height={6} />
            </View>
        )
    };
}

export default Game;
