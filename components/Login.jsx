import React, { useState } from "react";
import { View, Text, Button, TextInput } from "react-native";

function Login(props) {
    const [name,setName] = useState("");
    return (
        <View>
            <TextInput placeholder='enter name' onChangeText={(text)=>setName(text)} />
            <Button title="go to home" onPress={() => props.navigation.navigate("myhome",{name})} />
        </View>
    );
}
export default Login;
