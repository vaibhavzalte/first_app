import { View, Text,StyleSheet } from 'react-native';
import React from 'react'

export default function RenderData({item}) {
  return (
    <View>
         <View style={styles.box}>
                    <Text style={styles.item}>{item.name}</Text>
                    <Text style={styles.item}>{item.email}</Text>
                </View>
    </View>
  )
}
const styles = StyleSheet.create({
    box:{
        backgroundColor:'red',
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        borderWidth:2,
        margin:2,
    },
    item:{
        fontSize:23,
        margin:10,
    }
})