import { View, Text, Image, Button } from 'react-native';

import React from 'react';


export default function Product({item}) {
  return (
    <View>
      {
        <View style={{alignItems:'center',borderWidth:2,margin:5,padding:10}}>
            <Image source={item.image} style={{width:200,height:200} }/>
            <View >
            <Text style={{color:'red',fontSize:20}}>{item.name}</Text>
            <Text>{item.color}</Text>
            <Text>{item.price}</Text>
            <Button title="Add to Cart" />
            </View>
        </View>
      }
    </View>
  )
}