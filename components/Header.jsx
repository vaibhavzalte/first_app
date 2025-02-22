import { View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

export default function Header() {
  const cardData = useSelector((state) => state.reducer);
  const [cardItems, setCardItems] = useState(0);
  useEffect(() => {
    setCardItems(cardData.length);
  }, [cardData]);
  return (
    <View>
      <Text style={{ fontSize: 30, textAlign: 'right', marginRight: 20 }}>{cardItems}</Text>
    </View>
  )
}