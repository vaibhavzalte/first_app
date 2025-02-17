import React from "react";
import { View,Text } from "react-native";

function Login({userName}){
    return(
        <View>
            <Text>hey ,{userName}</Text>
            <Text>login here</Text>
            <Text>input</Text>
        </View>
   );
}
export default Login;