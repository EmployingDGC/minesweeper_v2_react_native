import React from "react";
import { View } from "react-native";

import styles from "./styles";

const Bomb = (props) => {
    return (
        <View style={[
            styles.container,
            {
                width: props.size,
                height: props.size,
            }
        ]}>
            <View style={[
                styles.core,
                {
                    borderRadius: props.size / 2,
                }
            ]}/>

            <View style={[
                styles.point,
                {
                    borderRadius: props.size / 2,
                    top: props.size / 4,
                    left: props.size / 4,
                }
            ]} />

            <View style={[styles.stem]} />
            <View style={[styles.stem, styles.stem45]} />
            <View style={[styles.stem, styles.stem135]} />
            <View style={[styles.stem, styles.stem90]} />
        </View>
    );
}

export default Bomb;
