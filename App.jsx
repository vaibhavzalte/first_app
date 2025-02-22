import React, { useState } from 'react';
import { View ,Text, Button, ScrollView} from 'react-native';
import Header from './components/Header';
import Product from './components/Product';
const products=[
  {
      name:"samsung",
      color:"black",
      price:10000,
      image:require("./components/image.png"),
  },
  {
      name:"iphone",
      color:"red",
      price:99999,
      image:require("./components/image.png")
  },
  {
      name:"realme",
      color:"red",
      price:99999,
      image:require("./components/image.png")
  },
  {
      name:"nokia",
      color:"red",
      price:99999,
      image:require("./components/image.png")
  },
]
function App() {

  return (
    <View>
      <Header/>
      <ScrollView>
        {
          products.length > 0 &&
          products.map((item)=><Product item={item}/>)
        }
      </ScrollView>
    </View>
  );
}
export default App;
