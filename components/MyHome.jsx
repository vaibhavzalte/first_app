import { View, Text ,Button, TextInput} from 'react-native';
export const Home = (props) => {
    const {name}=props.route.params;
  return (
    <View>
      <Text>welcome home {name}</Text>
    </View>
  );
};