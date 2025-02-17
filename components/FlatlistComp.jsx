import { View, Text, FlatList } from "react-native";

export const FlatlistComp = () => {
    const users = [
        {
            id: 1,
            name: 'vaibhav',
        },
        {
            id: 2,
            name: 'ram',
        },
        {
            id: 3,
            name: 'shame',
        },
    ];
    const lists=['mango','watermalon','gehu'];
    return (
        <View>
            <Text>Flat List is:</Text>
            <FlatList
                data={users}
                renderItem={({ item }) => <Text>{item.name}</Text>}
                keyExtractor={item => item.id}
            />
            <Text>2nd Flat List is:</Text>
            <FlatList
                data={lists}
                renderItem={({ item }) => <Text>{item}</Text>}
                key={(index)=>index}
            />

        </View>

    );
};

export default FlatlistComp;
