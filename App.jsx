import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Button,
  Alert,
} from 'react-native';
import Login from './components/Login';
import { StyleComp } from './components/StyleComp';
import { InputComp } from './components/InputComp';
import FlatlistComp from './components/FlatlistComp';

const myFun = () => {
  console.warn('function called');
};

const printNumber = (num) => {
  console.warn('number is :', num);
};

function App() {
  const [count, setCount] = useState(0);
  return (
    <SafeAreaView>
      <View>
        <Text>hello sdf </Text>
      </View>
      {/* direct call */}
      <Button onPress={myFun} title="Button 1" color={'green'} />
      {/* pass parameter */}
      <Button onPress={() => printNumber(4)} title="Button 2" color={'red'} />
      <Button onPress={() => setCount(count + 1)} title={`${count}`} color={'black'} />
      <Login userName={'vaibhav'} />
      <StyleComp/>
      <InputComp/>
      <FlatlistComp/>
    </SafeAreaView>
  );
}


export default App;
