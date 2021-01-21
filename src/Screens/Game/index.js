import React from "react";
import {
    View,
    Dimensions,
    ScrollView,
    Alert,
    Modal,
    Text,
    TouchableOpacity,
    TextInput,
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
            rows: props.route.params.rows,
            columns: props.route.params.columns,
            qty_mines: props.route.params.qty_mines,
            qty_flags_used: 0,
            modal_open: false,
            descriptionRows: "",
            descriptionColumns: "",
            descriptionMines: "",
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

    restartState = () => {
        const state = {
            ...this.state,
            qty_flags_used: 0,
        };

        const maxMines = state.rows * state.columns * 75 / 100;

        if (state.qty_mines > maxMines) {
            state.qty_mines = Math.floor(maxMines);
        }

        state.board = newBoard(state.rows, state.columns, state.qty_mines),

        this.setState(state);
    }

    resetState = (rows = this.initialState.rows, columns = this.initialState.columns, qty_mines = this.initialState.qty_mines) => {
        const state = {
            ...this.initialState,
            rows,
            columns,
            qty_mines,
        };

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
            Alert.alert("Você ganhou", "parabéns!", [
                {
                    text: "Reiniciar",
                    onPress: () => this.restartState(),
                },
                {
                    text: "Ir para o Menu",
                    onPress: () => this.props.navigation.navigate("Menu"),
                }
            ]);
        }
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
                    onPress: () => this.restartState(),
                },
                {
                    text: "Ir para o Menu",
                    onPress: () => this.props.navigation.navigate("Menu"),
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

        if (this.state.qty_flags_used === this.state.qty_mines) {
            this.youWon();
        }
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
            this.youWon();
        }
    }

    onPressFlag = () => {
        const modal_open = !this.state.modal_open;

        this.setState({
            modal_open,
        });
    }

    onSetRowsDescription = (description) => {
        this.setState({
            descriptionRows: description,
        });
    }

    onSetColumnsDescription = (description) => {
        this.setState({
            descriptionColumns: description,
        });
    }

    onSetMinesDescription = (description) => {
        this.setState({
            descriptionMines: description,
        });
    }

    onCloseModal = () => {
        this.setState({
            modal_open: false,
            descriptionRows: "",
            descriptionColumns: "",
            descriptionMines: "",
        });
    }

    render() {
        return (
            <View style={[styles.container]}>
                <Modal
                    visible={this.state.modal_open}
                    transparent={true}
                    animationType="slide"
                >
                    <View style={[styles.containerModal]}>
                        <View style={[styles.contentModal]}>
                            <Text style={[styles.tittleModal]}>Tittle</Text>
                            <View style={[styles.containerTextInput]}>
                                <TextInput
                                    key="0"
                                    style={[styles.textInput]}
                                    placeholder={`Linhas: ${this.state.rows}`}
                                    value={this.state.descriptionRows}
                                    onChangeText={(description) => this.onSetRowsDescription(description)}
                                    keyboardType="numeric"
                                />
                                <TextInput
                                    key="1"
                                    style={[styles.textInput]}
                                    placeholder={`Colunas: ${this.state.columns}`}
                                    value={this.state.descriptionColumns}
                                    onChangeText={(description) => this.onSetColumnsDescription(description)}
                                    keyboardType="numeric"
                                />
                                <TextInput
                                    key="2"
                                    style={[styles.textInput]}
                                    placeholder={`Minas: ${this.state.qty_mines}`}
                                    value={this.state.descriptionMines}
                                    onChangeText={(description) => this.onSetMinesDescription(description)}
                                    keyboardType="numeric"
                                />
                            </View>
                            <View style={[styles.buttonContainerModal]}>
                                <TouchableOpacity
                                    onPress={() => this.onCloseModal()}
                                >
                                    <Text style={[styles.buttonModal]}>Cancelar</Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    onPress={() => this.resetState(
                                        parseInt(this.state.descriptionRows) || this.state.rows,
                                        parseInt(this.state.descriptionColumns) || this.state.columns,
                                        parseInt(this.state.descriptionMines) || this.state.qty_mines)}
                                >
                                    <Text style={[styles.buttonModal]}>OK</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>

                <Header
                    qtyFlags={this.state.qty_mines - this.state.qty_flags_used}
                    onPress={this.onPressFlag}
                />
                
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
