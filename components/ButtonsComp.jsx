import { View, Text ,TouchableHighlight ,StyleSheet} from 'react-native';
import React from 'react';

export default function ButtonsComp() {
  return (
    <View>
        <TouchableHighlight>
            <Text style={styles.button}>Button</Text>
        </TouchableHighlight>
        <TouchableHighlight>
            <Text style={[styles.button,styles.primary]}>Primary</Text>
        </TouchableHighlight>
        <TouchableHighlight>
            <Text style={[styles.button,styles.error]}>Error</Text>
        </TouchableHighlight>
    </View>
  );
}
const styles = StyleSheet.create({
    button:{
        backgroundColor:'blue',
        fontSize:20,
        textAlign:'center',
        padding:10,
        margin:10,
        color:'white',
    },
    primary:{
        backgroundColor:'green',
    },
    error:{
        backgroundColor:'red',
    },
});
