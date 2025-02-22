import { View, Text } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';

export default function Header () {
  const cardData = useSelector((state)=>state.reducer);
  return (
    <View>
      <Text style={{fontSize:30,textAlign:'right',marginRight:20}}>{cardData.length}</Text>
    </View>
  )
}