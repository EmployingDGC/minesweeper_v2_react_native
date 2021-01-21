import React from "react";
import { View, TouchableHighlight } from "react-native";

import Field from "../Field";

import styles from "./styles";

const renderBoard = (board, width, onPress, onLongPress) => {
    const renderedBoard = [];

    const rows = board.length;
    const columns = board[0].length;

    for (let row = 0; row < rows; row++) {
        for (let column = 0; column < columns; column++) {
            renderedBoard.push(
                <TouchableHighlight
                    key={`${row} ${column}`}
                    onPress={() => onPress(row, column)}
                    onLongPress={() => onLongPress(row, column)}
                    disabled={board[row][column].opened}
                >
                    <Field
                        props={board[row][column]}
                        size={width - width * .0001}
                    />
                </TouchableHighlight>
            );
        }
    }

    return renderedBoard;
}

const Board = (props) => {
    return (
        <View style={[styles.container]}>
            {renderBoard(props.board, props.width, props.onPress, props.onLongPress)}
        </View>
    );
}

export default Board;
