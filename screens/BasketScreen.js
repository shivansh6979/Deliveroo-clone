import {
  View,
  Text,
  Modal,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
  Button,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { selectRestaurant } from '../redux/features/restaurantSlice';
import {
  SelectBasketTotal,
  removeFromBasktet,
  selectBasketItems,
} from '../redux/features/basketSlice';
import { XCircleIcon } from 'react-native-heroicons/solid';

const BasketScreen = () => {
  const [groupedItemsInBasket, setGroupedItemsInBasket] = useState([]);
  const navigation = useNavigation();
  const items = useSelector(selectBasketItems);
  const restaurant = useSelector(selectRestaurant);
  const basketTotal = useSelector(SelectBasketTotal);
  const dispatch = useDispatch();

  useEffect(() => {
    const groupedItems = items.reduce((results, item) => {
      (results[item.id] = results[item.id] || []).push(item);
      return results;
    }, {});
    setGroupedItemsInBasket(groupedItems);
  }, [items]);

  return (
    <SafeAreaView>
      <Modal animationType="slide" presentationStyle="fullScreen">
        <View className="bg-white relative border-b border-[#00CCBB] flex-col items-center justify-center p-3 mb-8 shadow-xl">
          <Text className="font-bold text-2xl">Basket</Text>
          <Text className="text-gray-400">Nando's</Text>
          <TouchableOpacity className="absolute right-5">
            <XCircleIcon
              color={'#00CCBB'}
              size={42}
              onPress={() => navigation.goBack()}
            />
          </TouchableOpacity>
        </View>
        <View className="flex-row justify-between  bg-white items-center p-3 mb-8">
          <View className="flex-row justify-between items-center gap-x-3">
            <Image
              className="rounded-full bg-gray-200"
              source={{ uri: 'https://links.papareact.com/wru' }}
              height={32}
              width={32}
            />
            <Text>Deliver in 45-50 minutes</Text>
          </View>
          <Text className="text-[#00CCBB]">Change</Text>
        </View>

        <ScrollView
          contentContainerStyle={{ flex: 1 }}
          className="divide-y divide-gray-300"
        >
          {Object.entries(groupedItemsInBasket).map(([key, items]) => {
            return (
              <View
                className="flex-row space-x-3 bg-white items-center py-2 px-5"
                key={key}
              >
                <Text className="text-[#00CCBB]">{items.length} X</Text>
                <Image
                  source={{ uri: `${items[0].url}` }}
                  className="h-12 w-12 rounded-full"
                />
                <Text className="flex-1">{items[0].name}</Text>
                <Text className="text-gray-500">${items[0].price}</Text>
                <TouchableOpacity
                  onPress={() => dispatch(removeFromBasktet({ id: key }))}
                >
                  <Text className="text-[#00CCBB] text-xs">remove</Text>
                </TouchableOpacity>
              </View>
            );
          })}
        </ScrollView>

        <View className="p-5 bg-white mt-5 space-y-4">
          <View className="flex-row justify-between">
            <Text className="text-gray-400">Subtotal</Text>
            <Text className="text-gray-400">${basketTotal}</Text>
          </View>
          <View className="flex-row justify-between">
            <Text className="text-gray-400">Delivery</Text>
            <Text className="text-gray-400">$5.99</Text>
          </View>
          <View className="flex-row justify-between">
            <Text className="font-semibold">Order Total</Text>
            <Text className="font-extrabold">
              ${(basketTotal + 5.99).toFixed(2)}
            </Text>
          </View>

          <TouchableOpacity
            onPress={() => navigation.navigate('PreparingOrderScreen')}
            className="bg-[#00CCBB] flex-row justify-center py-3 rounded-lg"
          >
            <Text className="text-white text-lg font-bold">Place Order</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default BasketScreen;
