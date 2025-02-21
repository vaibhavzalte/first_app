import React, { useState } from 'react';
import RefComp from './components/RefComp';
import { View ,Text, Button} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

function App() {
  const [name,setName] = useState('');
  const setData = async ()=>{
    await AsyncStorage.setItem('name','vaibhav');
  };
  const getData = async ()=>{
  const data = await AsyncStorage.getItem('name');
  setName(data);
  };
  const removeData = async ()=>{
  await AsyncStorage.removeItem('name');
  setName('');
  };
  return (
    <View>
      <Text style={{textAlign:'center',fontSize:20}}>Tutorial of Async storage</Text>
      <Button title='Set Data' onPress={setData}/>
      <Text>Data will be set in async storage  name : vaibhav </Text>
      <Button title='Get Data' onPress={getData}/>
      <Button title='Remove Data' onPress={removeData}/>
      <Text>data :{name}</Text>
    </View>
  );
}
export default App;
