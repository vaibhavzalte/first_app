import { View, Text } from 'react-native'
import React, { useEffect } from 'react'

export default function UseEffectSubComp() {
    useEffect(()=>{
     console.log("inside sub");
     return ()=>{
        console.log("unmounting......")
     }
    })
  return (
    <View>
      <Text style={{fontSize:23,color:'red'}}>there are 3 life cycle methods mounting ,updating ,unmounting</Text>
    </View>
  )
}