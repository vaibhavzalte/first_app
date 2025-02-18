import { StyleSheet, Text, View } from 'react-native';
import React, { Component } from 'react';

const boxes = [
  'box1', 'box2', 'box3', 'box4', 'box5', 'box6', 'box7', 'box8',
  'box9', 'box10', 'box11', 'box12', 'box13', 'box14', 'box15', 'box16','box17'
];

export default class GridComp extends Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.container}>
          {boxes.map((item, index) => (
            <View key={index} style={styles.box}>
              <Text style={styles.boxText}>{item}</Text>
            </View>
          ))}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingTop: 50,
    alignItems: 'center',
  },
  container: {
    borderWidth: 2,
    borderColor: 'green',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: 300,
    height: 400,
    padding: 10,
  },
  box: {
    width: 70,
    height: 70,
    backgroundColor: 'red',
    margin: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxText: {
    fontSize: 14,
    color: 'white',
  },
});
