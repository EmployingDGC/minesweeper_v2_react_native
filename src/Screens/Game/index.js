import React from "react";
import {
    View,
    Dimensions,
    ScrollView,
    Alert,
} from "react-native";

import Board from "../../components/Game/Board";
import Header from "../../components/Game/Header";

import { newBoard, showAllMines } from "../../components/Game/Board/functions";

import styles from "./styles";

class Game extends React.Component {

    constructor(props) {
        super(props);

        this.initialState = {
            board: null,
            rows: 30,
            columns: 10,
            qty_mines: 10,
            qty_flags_used: 0,
        };

        this.state = {
            ...this.initialState,
        }

        const maxMines = this.state.rows * this.state.columns * 75 / 100;

        if (this.state.qty_mines > maxMines) {
            this.state.qty_mines = Math.floor(maxMines);
        }

        this.state.board = newBoard(this.state.rows, this.state.columns, this.state.qty_mines);
    }

    resetState = () => {
        const state = {...this.initialState};
        const maxMines = state.rows * state.columns * 75 / 100;

        if (state.qty_mines > maxMines) {
            state.qty_mines = Math.floor(maxMines);
        }

        state.board = newBoard(state.rows, state.columns, state.qty_mines),

        this.setState(state);
    }

    youWon = () => {
        const board = this.state.board;
        const rows = board.length;
        const columns = board[0].length;
        const board_length = rows * columns;

        let qty_mines_flagged = 0;
        let qty_field_opened = 0;

        for (let row = 0; row < rows; row++) {
            for (let column = 0; column < columns; column++) {
                const field = board[row][column];
                
                if (field.mined && field.flagged) {
                    qty_mines_flagged += 1;
                }
                else if (field.opened) {
                    qty_field_opened += 1;
                }
            }
        }

        if (qty_field_opened === board_length - qty_mines_flagged) {
            return true;
        }

        return false;
    }

    onPressField = (row, column) => {
        const isNotPosValid = (row < 0 || column < 0 || row >= this.state.rows || column >= this.state.columns);

        if (isNotPosValid || this.state.board[row][column].opened || this.state.board[row][column].flagged) {
            return;
        }

        const board = this.state.board;
        const field = board[row][column];
        
        field.opened = true;

        if (field.mined) {
            field.exploded = true;
            showAllMines(board);
            Alert.alert("Você perdeu", "animal!", [
                {
                    text: "Reiniciar",
                    onPress: () => this.resetState(),
                },
                {
                    text: "Ir para o Menu",
                    onPress: () => console.log("Ask me later pressed"),
                }
            ]);
        }

        else if (field.number === 0) {
            this.onPressField(row - 1, column - 1);
            this.onPressField(row - 1, column);
            this.onPressField(row - 1, column + 1);
            this.onPressField(row, column - 1);
            this.onPressField(row, column + 1);
            this.onPressField(row + 1, column - 1);
            this.onPressField(row + 1, column);
            this.onPressField(row + 1, column + 1);
        }

        this.setState({
            board,
        });
    }

    onLongPressField = (row, column) => {
        const board = this.state.board;
        const field = board[row][column];

        let qty_flags_used = this.state.qty_flags_used;
        
        if (qty_flags_used === this.state.qty_mines && !field.flagged) {
            return;
        }

        if (qty_flags_used < this.state.qty_mines && !field.flagged) {
            qty_flags_used += 1;
        }
        
        else {
            qty_flags_used -= 1;
        }

        field.flagged = !field.flagged;

        this.setState({
            board,
            qty_flags_used,
        });

        if (qty_flags_used === this.state.qty_mines) {
            if (this.youWon()) {
                Alert.alert("Você ganhou", "parabéns!", [
                    {
                        text: "Reiniciar",
                        onPress: () => this.resetState(),
                    },
                    {
                        text: "Ir para o Menu",
                        onPress: () => console.log("Ask me later pressed"),
                    }
                ]);
            }
        }
    }

    render() {
        return (
            <View style={[styles.container]}>
                <Header qtyFlags={this.state.qty_mines - this.state.qty_flags_used} />
                <ScrollView>
                    <Board
                        width={Dimensions.get("window").width / this.state.columns}
                        board={this.state.board}
                        onPress={this.onPressField}
                        onLongPress={this.onLongPressField}
                    />
                </ScrollView>
            </View>
        )
    };
}

export default Game;
