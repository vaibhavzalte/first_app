import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Button,
  Alert,
  ActivityIndicator,
} from 'react-native';
import Login from './components/Login';
import { StyleComp } from './components/StyleComp';
import { InputComp } from './components/InputComp';
import FlatlistComp from './components/FlatlistComp';
import MapList from './components/MapList';
import GridComp from './components/GridComp';
import FlatlistComp2 from './components/FlatlistComp2';
import SectionListComp from './components/SectionListComp';
import UseEffectComp from './components/UseEffectComp';
import ResponsiveLayoutComp from './components/ResponsiveLayoutComp';
import ButtonsComp from './components/ButtonsComp';
import RadioComp from './components/RadioComp';
import ModelComp from './components/ModelComp';
import PressableComp from './components/PressableComp';
import WebView from 'react-native-webview';


function App() {
  return (
      // <ResponsiveLayoutComp/>
      // <ButtonsComp/>
      // <RadioComp/>
      // <ModelComp/>
      // <PressableComp/>
      <WebView source={{uri:'https://reactnative.dev/docs/libraries'}}></WebView>
  );
}


export default App;
