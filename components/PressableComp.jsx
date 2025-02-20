import { View, Text, Pressable,StatusBar } from 'react-native'
import React from 'react'

export default function PressableComp() {
    return (
        <View>
            <StatusBar backgroundColor="red" barStyle="default"/>
            <Text>PressableComp</Text>
            <Pressable
                onPress={() => console.log("on press")}
                onLongPress={() => console.log("long pressed")}
                onPressIn={() => console.log("on press in")}
                onPressOut={() => console.log("on press out")}
            >
                <Text style={{ backgroundColor: 'blue', color: 'white', fontSize: 30, margin: 40, textAlign: 'center' }}>click Me</Text>
            </Pressable>
        </View>
    )
}