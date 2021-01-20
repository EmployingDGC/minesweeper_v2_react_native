import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Menu from "../Screens/Menu";

const StackComponent = createStackNavigator();

class Stack extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            // umaPropriedade: this.props.umaPropriedade,
        }
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
            </StackComponent.Navigator>
        )
    };
}

export default Stack;
