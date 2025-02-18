import { View, Text, FlatList } from "react-native";
import RenderData from "./RenderData";

export const FlatlistComp2 = () => {
    const users = [
        { id: 1, name: 'Vaibhav', email: 'v@gmail.com' },
        { id: 2, name: 'Ram', email: 'e@email.com' },
        { id: 3, name: 'Ravi', email: 'ravi@example.com' },
        { id: 4, name: 'Sita', email: 'sita@example.com' },
        { id: 5, name: 'Ajay', email: 'ajay@example.com' },
        { id: 6, name: 'Priya', email: 'priya@example.com' },
        { id: 7, name: 'Mohan', email: 'mohan@example.com' },
        { id: 8, name: 'Pooja', email: 'pooja@example.com' },
        { id: 9, name: 'Neha', email: 'neha@example.com' },
        { id: 10, name: 'Kunal', email: 'kunal@example.com' },
        { id: 11, name: 'Kur', email: 'kunal@example.com' },
        { id: 12, name: 'ram', email: 'kunal@example.com' },
        { id: 13, name: 'Ksl', email: 'kunal@example.com' },
    ];
    return (
        <View>
            <Text>Flat List is:</Text>
            <FlatList
                data={users}
                renderItem={({ item }) =>
                    <RenderData item={item}/>
               }
                keyExtractor={item => item.id}
            />
        </View>

    );
};

export default FlatlistComp2;
