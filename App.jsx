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
import GridComp from './components/GridComp';
import FlatlistComp2 from './components/FlatlistComp2';


function App() {
  return (
    <SafeAreaView>
      <View>
      {/* <Login userName={'vaibhav'} /> */}
      {/* <StyleComp/> */}
      {/* <InputComp/> */}
      {/* <FlatlistComp/> */}
      {/* <MapList/> */}
      {/* <GridComp/> */}
      <FlatlistComp2/>
      </View>
    </SafeAreaView>
  );
}


export default App;
