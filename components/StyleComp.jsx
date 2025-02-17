import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ExStyles from './externalStyle';
export const StyleComp = () => {
    return (
        <View>
            <Text style={{ color: 'red', fontSize: 30 }}>inline css</Text>
            <Text style={styles.textBox}>internal style</Text>
            <Text style={ExStyles.textBox}>External style</Text>
            <Text style={[ExStyles.textBox, styles.textBox, { fontSize: 20 }]}>multiple style = external ,internal,inline style</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    textBox: {
        color: 'pink',
        fontSize: 30,
        backgroundColor: 'green',
    },
});

