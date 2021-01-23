import React from "react";
import {
    View,
    ScrollView,
    Text,
    StyleSheet,
} from "react-native";

import commonStyles from "../../../commonStyles";

const Main = (props) => {
    return (
        <ScrollView style={[styles(props).container]}>
            {renderRecords(props.records, props)}
        </ScrollView>
    );
}

const organizeByScore = (records = []) => {
    if (!records[0] || !records[0].name || records.length === 0) {
        return null;
    }

    const auxRecords = [];

    while (records.length != 0) {

        let pos = 0;
        let higher = records[0].score;

        for (let j = 0; j < records.length; j++) {
            const element = records[j];

            if (element.score > higher) {
                higher = element.score;
                pos = j;

                console.log(pos, higher);
            }
        }

        auxRecords.push(records[pos]);
        records.splice(pos, 1);
    }

    return auxRecords;
}

const renderRecords = (records = [], props) => {
    const auxRecords = organizeByScore([...records]);
    const list_records = [];

    if (!auxRecords) {
        return null;
    }

    for (let i = 0; i < auxRecords.length; i++) {
        const element = auxRecords[i];
        
        list_records.push(
            <View
                key={i}
                style={[styles(props).containerRecord]}
            >
                <Text
                    style={[
                        styles(props).text,
                        styles(props).textRP,
                ]}
                >{i + 1}</Text>
                
                <Text
                    style={[styles(props).text, {flex: 1}]}
                >{element.name}</Text>
                
                <Text
                    style={[
                        styles(props).text,
                        styles(props).textRP,
                ]}
                >{(element.score).toFixed(2)}</Text>
            </View>
        );
    }

    return list_records;
}

const styles = (props) => {
    return StyleSheet.create({
        container: {
            flex: 1,
        },

        containerRecord: {
            flexDirection: "row",
        },

        text: {
            borderWidth: .5,
            padding: 10,
            fontFamily: commonStyles.fonts.text,
            backgroundColor: commonStyles.colors.field.background,
            textTransform: "uppercase",
        },

        textRP: {
            minWidth: props.minWidth,
            textAlign: "center",
        },
    });
}

export default Main;
