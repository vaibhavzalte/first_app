import { View, Text,Modal,StyleSheet, Button } from 'react-native';
import React, { useState } from 'react';

export default function ModelComp() {
    const [showModel,setShowModel]=useState(false);
  return (
    <View style={styles.main} >
        <Modal
        visible={showModel}
        transparent={true}
        animationType='slide'
        >
            <View>
                <Text>this is a modal ........</Text>
                <Button title='close modal' onPress={()=>setShowModel(false)}/>
            </View>
        </Modal>
     <View style={styles.button}>
      <Button title="open modal" onPress={()=>{setShowModel(true)}}/>
     </View>
    </View>
  );
}
const styles = StyleSheet.create({
    main:{
        flex:1,
    },
    button: {
     flex:1,
     justifyContent:'flex-end',
    },

});