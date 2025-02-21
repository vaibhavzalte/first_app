import { View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';

export default function FetchInEmulator() {
    const [data,setData] = useState([]);
    useEffect(()=>{
     fetchDataAPI();
    },[]);
    const fetchDataAPI = async()=>{
        const uri="http://10.0.2.2:3000/users";
        let result = await fetch(uri);
        result = await result.json();
        setData(result);
    };
    return (
        <View>
            <Text>FetchInEmulator</Text>
            {data.length > 0 ? (
                data.map((item, index) => (
                    <View key={index}>  
                        <Text>{item.id}</Text>
                        <Text>{item.name}</Text>
                    </View>
                ))
            ) : null}
        </View>
    );
}
