import React from "react";
import { View, StyleSheet } from "react-native";

import styles from "./styles";

const Flag = (props) => {
    
    const styles2 = StyleSheet.create({
        top: {
            top: props.size / 2,
            opacity: props.wrong ? 1 : 0,
        },
    });

    return (
        <View style={[
            styles.container,
            {
                width: props.size,
                height: props.size,
            }
        ]}>
            <View style={[
                styles.flag,
                {
                    borderLeftWidth: props.size * .2,
                    borderRightWidth: props.size * .2,
                    borderBottomWidth: props.size * .5,
                    left: props.size % 10 ? props.size / 10 : props.size / 10 + .5,
                }
            ]}/>

            <View style={[styles.mast]} />
            <View style={[styles.baseSmall]} />
            <View style={[styles.baseLarge]} />
            <View style={[styles.stem, styles.rotete45, styles2.top]} />
            <View style={[styles.stem, styles.rotete135, styles2.top]} />
        </View>
    );
}

export default Flag;
