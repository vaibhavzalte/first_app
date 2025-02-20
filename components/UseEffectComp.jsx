import { View, Text, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import UseEffectSubComp from './UseEffectSubComp';
export default function UseEffectComp() {
    const [count,setCount] = useState(0);
    const [hide,setHide] = useState(false);
    useEffect(()=>{
        console.log('call updating - at the starting all comp updated once(every time)');
    });
    useEffect(()=>{
        console.log('call only once- mounting(executing)');
    },[]);
  return (
    <View>
      <Text>UseEffectComp{count}</Text>
        <Button title="click me" onPress={()=>setCount(count+1)}></Button>
        <Button title={`${hide ?'show me':'hide me'}`} onPress={()=>setHide(!hide)}></Button>
      { !hide &&
      <UseEffectSubComp/>}
    </View>
  )
}