import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectRestaurant } from '../redux/features/restaurantSlice';
import { useNavigation } from '@react-navigation/native';
import { XMarkIcon } from 'react-native-heroicons/solid';
import * as Progress from 'react-native-progress';
import MapView from 'react-native-maps';

const DeliveryScreen = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);
  return (
    <View className="flex-1  bg-[#00CCBB] pt-10">
      <SafeAreaView className="relative z-50">
        <View className="flex-row p-4 justify-between mb-24 items-center">
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <XMarkIcon color="white" size={30} />
          </TouchableOpacity>
          <Text className="font-light text-lg text-white">Order Help</Text>
        </View>

        <View className="bg-white top-16 absolute mx-5 my-2 rounded-md p-6 z-50 shadow-md">
          <View className="flex-row justify-between">
            <View>
              <Text className="text-lg text-gray-400">Estimated Arrival</Text>
              <Text className="text-4xl font-bold ">45-55 minutes</Text>
            </View>

            <Image
              source={{ uri: 'https://links.papareact.com/fls' }}
              className="h-20 w-20"
            />
          </View>
          <Progress.Bar size={60} indeterminate={true} color="#00CCBB" />
          <Text className="mt-3 text-gray-500">
            Your order at {restaurant.title} is being prepared
          </Text>
        </View>
      </SafeAreaView>
      <MapView
        initialRegion={{
          latitude: restaurant.lat,
          longitude: restaurant.long,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1,
        }}
        className="flex-1  z-0"
        mapType="mutedStandard"
      ></MapView>

      <SafeAreaView className="bg-white px-5 py-3 flex-row justify-between items-center">
        <View className="flex-row gap-x-6">
          <Image
            source={{ uri: 'https://links.papareact.com/wru' }}
            className="h-12 w-12 rounded-full bg-gray-400"
          />
          <View>
            <Text className="font-bold text-base">Shubham Tripathi</Text>
            <Text className="text-gray-400">Your rider</Text>
          </View>
        </View>
        <Text className="font-bold text-lg text-[#00CCBB] mr-2">Call</Text>
      </SafeAreaView>
    </View>
  );
};

export default DeliveryScreen;
