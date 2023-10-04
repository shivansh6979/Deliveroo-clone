import {
  View,
  Text,
  Modal,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { selectRestaurant } from '../redux/features/restaurantSlice';
import { selectBasketItems } from '../redux/features/basketSlice';
import { XCircleIcon } from 'react-native-heroicons/solid';
const BasketScreen = () => {
  const [groupedItemsInBasket, setGroupedItemsInBasket] = useState([]);
  const [modalVisible, setModalVisible] = useState(true);
  const navigation = useNavigation();
  const items = useSelector(selectBasketItems);
  const restaurant = useSelector(selectRestaurant);
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
      <Modal
        animationType="slide"
        transparent={true}
        presentationStyle="fullScreen"
      >
        <View className="bg-white relative flex-col items-center justify-center p-3 mb-10">
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
        <View className="flex-row justify-between bg-white items-center p-3">
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
      </Modal>
    </SafeAreaView>
  );
};

export default BasketScreen;
