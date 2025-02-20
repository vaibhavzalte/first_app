import { View, Text, TouchableHighlight, TouchableOpacity, StyleSheet } from 'react-native';
import React, { useState } from 'react';

export default function RadioComp() {
    const [radio, setRadio] = useState(1);
    return (
        <View style={styles.main}>
            <TouchableOpacity onPress={() => setRadio(1)}>
                <View style={styles.container}>
                    <View style={styles.radio}>
                        {
                            radio === 1 &&
                            <View style={styles.bgRadio}></View>
                        }
                    </View>
                    <Text style={styles.text}>Option 1</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setRadio(2)}>
                <View style={styles.container}>
                    <View style={styles.radio}>
                        {
                            radio == 2 &&
                            <View style={styles.bgRadio}></View>
                        }
                    </View>
                    <Text style={styles.text}>Option 2</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    main: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 5,
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
    },
    radio: {
        borderWidth: 2,
        width: 40,
        height: 40,
        borderRadius: 20,
    },
    text: {
        color: 'blue',
        font: 20,
    },
    bgRadio: {
        backgroundColor: 'red',
        height: 30,
        width: 30,
        borderRadius: 20,
        margin: 3,
    },
});
