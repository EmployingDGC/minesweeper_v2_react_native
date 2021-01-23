import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import AsyncStorage from '@react-native-async-storage/async-storage';

import Menu from "../Screens/Menu";
import Game from "../Screens/Game";
import Records from "../Screens/Records";

const StackComponent = createStackNavigator();
const dataRecordsKey = "@records";

class Stack extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            rows: 10,
            columns: 10,
            qty_mines: 15,
            records: [],
        }
    }

    newGame = (rows, columns, qty_mines) => {
        this.setState({
            rows,
            columns,
            qty_mines,
        });
    }

    componentDidMount = async () => {
        const stringState = await AsyncStorage.getItem(dataRecordsKey);

        const state = JSON.parse(stringState) || this.state.records;

        this.setState({
            records: state.records,
        });
    }

    setRecords = async (records) => {
        AsyncStorage.setItem(dataRecordsKey, JSON.stringify(records));
    }

    render() {
        return (
            <StackComponent.Navigator
                initialRouteName={this.props.initialRouteName}
                screenOptions={{
                    headerShown: false,
                }}
            >
                <StackComponent.Screen name="Menu" component={Menu} />
                <StackComponent.Screen
                    name="Game"
                    component={Game}
                    initialParams={this.state}
                    />
                <StackComponent.Screen
                    name="Records"
                    component={Records}
                    initialParams={this.state}
                />
            </StackComponent.Navigator>
        )
    };
}

export default Stack;
