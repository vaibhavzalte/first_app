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
import MapList from './components/MapList';

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
      {/* <Login userName={'vaibhav'} /> */}
      {/* <StyleComp/> */}
      {/* <InputComp/> */}
      {/* <FlatlistComp/> */}
      <MapList/>
      </View>
    </SafeAreaView>
  );
}


export default App;
