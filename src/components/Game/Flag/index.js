import React from "react";
import { View } from "react-native";

import styles from "./styles";

const Flag = (props) => {
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

            <View style={styles.mast} />
            <View style={styles.baseSmall} />
            <View style={styles.baseLarge} />
        </View>
    );
}

export default Flag;
