import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import { MapPinIcon } from 'react-native-heroicons/outline';
import { StarIcon } from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';

const RestrauntCards = ({
  id,
  imgUrl,
  lat,
  dishes,
  short_description,
  long,
  genre,
  address,
  rating,
  title,
}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Restraunt', {
          id,
          imgUrl,
          lat,
          dishes,
          short_description,
          long,
          genre,
          address,
          rating,
          title,
        });
      }}
      className="mr-3 bg-white shadow"
    >
      <Image source={{ uri: imgUrl }} className="h-36 w-64 rounded-sm" />
      <View className="px-2 pb-1">
        <Text className="font-bold text-lg pt-2">{title}</Text>
      </View>
      <View className="flex-row items-center space-x-1 p-0.5">
        <StarIcon color={'green'} opacity={0.5} size={22} />
        <Text className="text-gray-500 text-xs">
          <Text className="text-green-500">{rating}</Text> - {genre}
        </Text>
      </View>
      <View className="flex-row items-center space-x-1 p-0.5">
        <MapPinIcon color={'gray'} size={22} opacity={0.4} />
        <Text className="text-xs text-gray-500">Nearby - {address}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default RestrauntCards;
