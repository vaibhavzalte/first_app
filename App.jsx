import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { View, Text ,Button} from 'react-native';

const Stack = createNativeStackNavigator();

const Home = () => {
  return (
    <View>
      <Text>Home screen ..........</Text>
    </View>
  );
};

const Login = (props) => {
  return (
    <View>
      <Text>Login screen ..........</Text>
      <Button title="go to home" onPress={()=>props.navigation.navigate("myhome")}/>
    </View>
  );
};

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      // for all position
      screenOptions={{
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
