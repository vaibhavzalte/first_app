import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Button,
  Alert,
} from 'react-native';
import Login from './components/Login';

const myFun = ()=>{
  console.warn('function called');
};

const printNumber = (num)=>{
  console.warn('number is :',num);
};

function App() {

  return (
    <SafeAreaView>
      <View>
        <Text>hello sdf </Text>
      </View>
      {/* direct call */}
      <Button onPress={myFun} title="Learn More" color={'green'}/>
      {/* pass parameter */}
      <Button onPress={()=>printNumber(4)} title="Learn More" color={'red'}/>

      <Login />
    </SafeAreaView>
  );
}


export default App;
