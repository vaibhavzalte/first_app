import { View, Text, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';

export default function FetchDataAPI() {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetchData();
    });
    const fetchData = async () => {
        const uri = "https://jsonplaceholder.typicode.com/posts";
        let response = await fetch(uri);
        const result = await response.json();
        setData(result);
    };
    return (
        <View>
            <Text>FetchData :</Text>
            {
                data.length > 0 ?
                    <FlatList
                        data={data}
                        renderItem={({item}) =>
                            <View style={{ padding: 2, margin: 10, borderWidth: 2 }}>
                                <Text style={{ backgroundColor: "#ddd" }}>Id:  {item.id} </Text>;
                                <Text>title: {item.title} </Text>
                                <Text>body: {item.body} </Text>
                            </View>
                        }
                    />
                    : null
            }
        </View>
    );
}