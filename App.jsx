import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Button,
  Alert,
} from 'react-native';
import Login from './components/Login';

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
      <Button onPress={myFun} title="Learn More" color={'green'} />
      {/* pass parameter */}
      <Button onPress={() => printNumber(4)} title="Learn More" color={'red'} />
      <Button onPress={() => setCount(count + 1)} title={`${count}`} color={'black'} />
      <Login />
    </SafeAreaView>
  );
}


export default App;
