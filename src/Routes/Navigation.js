import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Menu from "../Screens/Menu";
import Game from "../Screens/Game";

const StackComponent = createStackNavigator();

class Stack extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            // umaPropriedade: this.props.umaPropriedade,
        }
    }

    newGame = () => {
        return ({
            rows: 30,
            columns: 10,
            qty_mines: 10,
        });
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
                    initialParams={this.newGame()}
                />
            </StackComponent.Navigator>
        )
    };
}

export default Stack;
