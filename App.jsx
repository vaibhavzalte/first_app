import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { View, Text ,Button, TextInput} from 'react-native';
import { Home } from './components/MyHome';
import Login from './components/Login';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FetchDataAPI2 from './components/FetchDataAPI2';
import FetchInEmulator from './components/FetchInEmulator';
import RefComp from './components/RefComp';
// const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Header = () => {
  return (
    <View>
      <TextInput placeholder='enter name'/>
    </View>
  );
};

function App() {
  return (
    <RefComp/>
  );
}
export default App;
