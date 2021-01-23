import React from "react";
import { View } from "react-native";

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

            </View>
        )
    };
}

export default Records;
