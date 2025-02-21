import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { View, Text ,Button, TextInput} from 'react-native';
import { Home } from './components/MyHome';
import Login from './components/Login';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FetchDataAPI2 from './components/FetchDataAPI2';
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
    <NavigationContainer>
      {/* <Stack.Navigator
      // for all position
      screenOptions={{
        headerRight:()=><Header/>,
        headerStyle:{
          backgroundColor:'red',
        },
        headerTitleStyle:{
          fontSize:30,
        },
      }}
      >
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="myhome" component={Home} 
        // particular
        options={{
          headerStyle:{
            backgroundColor:'blue',
          }
        }}/>
      </Stack.Navigator> */}
      <Tab.Navigator>
        {/* <Tab.Screen name='Login' component={Login}/> */}
        <Tab.Screen name='Comp2' component={FetchDataAPI2}/>
      </Tab.Navigator>

    </NavigationContainer>
  );
}
const Comp2=()=>{
  return (<View> <Text>This is comp222</Text></View>);
}
export default App;
