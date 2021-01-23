import React from "react";
import {
    View,
} from "react-native";

import Header from "../../components/Records/Header";
import Main from "../../components/Records/Main";

import styles from "./styles";

class Records extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            // umaPropriedade: this.props.umaPropriedade,
        }
    }

    render() {
        return (
            <View style={[styles.container]}>
                <Header minWidth={14 * 4} onBack={this.props.navigation.navigate} />

                <Main minWidth={14 * 4} records={this.props.route.params.records} />
            </View>
        )
    };
}

export default Records;
