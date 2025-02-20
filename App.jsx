import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { View, Text ,Button, TextInput} from 'react-native';
import { Home } from './components/MyHome';
import Login from './components/Login';
const Stack = createNativeStackNavigator();

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
      <Stack.Navigator
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
