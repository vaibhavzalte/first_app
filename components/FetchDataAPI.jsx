import { View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';

export default function FetchDataAPI() {
    const [data,setData] = useState(undefined);
    useEffect(()=>{
        fetchData();
    });
    const fetchData = async ()=>{
        const uri ="https://jsonplaceholder.typicode.com/posts/1";
       let response = await fetch(uri);
        const result = await response.json();
        setData(result);
        console.warn(result);
    };
  return (
    <View>
      <Text>FetchData :</Text>
      {
        data ? <View> <Text>Id:  {data.id} </Text>;
        <Text>title: {data.title} </Text>
        <Text>body: {data.body} </Text>
        </View> : null
      }
    </View>
  );
}
