import { View, Text, TextInput, Button } from 'react-native';
import React, { useRef } from 'react';

export default function RefComp() {
    const inputFocus = useRef();
  return (
    <View>
      <Text>RefComp</Text>
      <TextInput ref={inputFocus} placeholder='enter name' style={{borderWidth:3,margin:4,fontSize:20}}/>
      <TextInput placeholder='enter age' style={{borderWidth:3,margin:4,fontSize:20}}/>
      <Button title='Change Focus' onPress={()=>{
        inputFocus.current.focus();
        inputFocus.current.setNativeProps({
            fontSize:30,
        })
      }}/>
    </View>
  )
}