import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { SelectBasketTotal } from '../redux/features/basketSlice';

const BasketIcons = () => {
  const items = useSelector((state) => state.basket.items);
  const navigation = useNavigation();
  const totalValue = useSelector(SelectBasketTotal);

  if (items.length < 1) return null;
  return (
    <View className="absolute bottom-10 w-full z-50">
      <TouchableOpacity
        onPress={() => navigation.navigate('Basket')}
        className="mx-3 rounded-lg py-3 flex-row bg-[#00CCBB] justify-around items-center "
      >
        <Text className="px-3 py-0.5 text-lg text-gray-50 bg-[#00998c] rounded-sm">
          {items.length}
        </Text>
        <Text className="text-gray-50 font-bold text-lg">View Basket</Text>
        <Text className="text-gray-50 font-bold text-lg">$ {totalValue}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BasketIcons;
