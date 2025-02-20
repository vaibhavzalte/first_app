import { View, StyleSheet } from 'react-native';
import React from 'react';

export default function ResponsiveLayoutComp() {
    return (
        <View style={styles.main}>
            <View style={styles.box1}>
                <View style={styles.innerBox1}></View>
                <View style={styles.innerBox2}></View>
                <View style={styles.innerBox3}></View>
            </View>
            <View style={styles.box2}></View>
            <View style={styles.box3}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        backgroundColor: 'red',
        flex: 1,
        padding: 5,
    },
    box1: {
        backgroundColor: 'violet',
        flex: 2,
        padding:4,
        flexDirection:'row',
    },
    box2: {
        backgroundColor: 'yellow',
        flex: 1,
    },
    box3: {
        backgroundColor: 'blue',
        flex: 1,
    },
    innerBox1:{
        backgroundColor:'orange',
        flex:1,
    },
    innerBox2:{
        backgroundColor:'white',
        flex:1,
    },
    innerBox3:{
        backgroundColor:'black',
        flex:1,
    },
});
