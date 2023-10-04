import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { PlusCircleIcon, MinusCircleIcon } from 'react-native-heroicons/solid';
import { useDispatch, useSelector } from 'react-redux';
import {
  addToBasket,
  removeFromBasktet,
  selectedBasketItemsById,
} from '../redux/features/basketSlice';

const DishRow = ({ id, name, price, description, url }) => {
  const [isPressed, setIsPressed] = useState(false);
  const dispatch = useDispatch();
  const items = useSelector((state) => selectedBasketItemsById(state, id));

  const addItemHandler = () => {
    dispatch(addToBasket({ id, name, price, description, url }));
  };

  const removeItemHandler = () => {
    if (!items.length > 0) return;
    dispatch(removeFromBasktet({ id }));
  };

  return (
    <>
      <TouchableOpacity
        onPress={() => setIsPressed(!isPressed)}
        className={`bg-white border p-4 border-gray-200 ${
          isPressed && 'border-b-0'
        }`}
      >
        <View className="flex-row">
          <View className="flex-1 pr-2">
            <Text className="text-lg mb-1">{name}</Text>
            <Text className="text-gray-400">{description}</Text>
            <Text className="text-gray-400 mt-2">${price}</Text>
          </View>
          <View>
            <Image
              className="h-20 w-20 bg-gray-300 p-4"
              source={{ uri: `${url}` }}
              alt="dishes"
            />
          </View>
        </View>
      </TouchableOpacity>
      {isPressed && (
        <View className="bg-white px-4">
          <View className="flex-row items-center space-x-2 pb-3">
            <TouchableOpacity
              onPress={removeItemHandler}
              disabled={!items.length}
            >
              <MinusCircleIcon
                size={40}
                color={items.length > 0 ? '#00CCBB' : 'gray'}
              />
            </TouchableOpacity>

            <Text className="font-semibold text-base">{items.length}</Text>
            <TouchableOpacity onPress={addItemHandler}>
              <PlusCircleIcon size={40} color={'#00CCBB'} />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
};

export default DishRow;
