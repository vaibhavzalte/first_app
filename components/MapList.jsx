import { Text, View,StyleSheet, ScrollView } from 'react-native';
import React, { Component } from 'react';

const users=[
    {
        id:1,
        name:'vaibhav',
    },
    {
        id:2,
        name:'ram',
    },
    {
        id:3,
        name:'sai',
    },
    {
        id:4,
        name:'four',
    },
    {
        id:5,
        name:'five',
    },
    {
        id:6,
        name:'six',
    },
    {
        id:7,
        name:'seven',
    },
    {
        id:8,
        name:'eight',
    },
    {
        id:9,
        name:'nine',
    },
    {
        id:2,
        name:'ram',
    },
    {
        id:3,
        name:'sai',
    },
    {
        id:4,
        name:'four',
    },
    {
        id:5,
        name:'five',
    },
];
export default class MapList extends Component {
  render() {
    return (
      <View>
        <Text>MapList :</Text>
        <ScrollView>
        {
            users.map((item)=><Text style={styles.c1}>{item.name}</Text>)
        }
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
    c1:{
        color:'red',
        borderWidth:3,
        margin:10,
        fontSize:24,
        height:90,
        textAlign:'center',
    },
});
