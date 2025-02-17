import { useState } from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";
export const InputComp = () => {
    const [name, setName] = useState('');
    return (
        <View>
            <Text>Enter text here</Text>
            <Text>your input is: {name}</Text>
            <TextInput
                placeholder="enter text"
                style={styles.textInput}
                value={name}
                onChangeText={(text) => setName(text)}
            />
            <TextInput
                placeholder="enter password"
                style={styles.textInput}
                secureTextEntry={true}
            />
            <Button title="clear input" onPress={() => setName('')}></Button>
        </View>
    );
};

const styles = StyleSheet.create({
    textInput: {
        fontSize: 15,
        borderWidth: 2,
        borderColor: 'red',
        margin: 4,
    },
});
