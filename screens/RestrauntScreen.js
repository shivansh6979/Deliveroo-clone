import {
  View,
  Text,
  StyleSheet,
  Platform,
  StatusBar,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, { useLayoutEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { ArrowLeftIcon, StarIcon } from 'react-native-heroicons/solid';
import {
  ChevronDownIcon,
  UserIcon,
  SearchIcon,
  AdjustmentsVerticalIcon,
  MagnifyingGlassIcon,
  MapPinIcon,
  QuestionMarkCircleIcon,
  ChevronRightIcon,
} from 'react-native-heroicons/outline';

const RestrauntScreen = () => {
  const {
    params: {
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
    },
  } = useRoute();
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <ScrollView>
      <View className="relative">
        <Image
          source={{ uri: imgUrl }}
          className="h-56 w-full bg-gray-300 p-4"
        />
        <TouchableOpacity
          onPress={navigation.goBack}
          className="absolute top-11 rounded-full bg-gray-100 p-1"
        >
          <ArrowLeftIcon size={25} color={'#00CCBB'} />
        </TouchableOpacity>
      </View>
      <View className="bg-white">
        <View className="px-4 pt-4">
          <Text className="font-bold text-3xl">{title}</Text>
          {/* rating */}
          <View className="flex-row space-x-1 my-2">
            <View className="flex-row items-center space-x-1">
              <StarIcon color={'#00CCBB'} opacity={0.5} size={22} />
              <Text className="text-xs text-gray-500">
                <Text className="text-green-500">{rating}</Text> - {genre}
              </Text>
            </View>
            {/* location */}
            <View className="flex-row items-center space-x-1">
              <MapPinIcon color={'gray'} opacity={0.4} size={22} />
              <Text className="text-xs text-gray-500">Nearby - {address}</Text>
            </View>
          </View>
          <Text className="mt-2 pb-4 text-gray-500">{short_description}</Text>
        </View>

        <TouchableOpacity className="flex-row items-center space-x-2 p-4 border-y border-gray-300">
          <QuestionMarkCircleIcon color={'gray'} opacity={0.6} size={20} />
          <Text className="pl-2 flex-1 text-md font-bold">
            Have a Food Allergy ?
          </Text>
          <ChevronRightIcon size={22} color={'#00CCBB'} />
        </TouchableOpacity>
      </View>
      <View>
        <Text className="text-xl font-bold pt-6 px-4 mb-3">Menu</Text>
      </View>
    </ScrollView>
  );
};

// const styles = StyleSheet.create({
//   restraunt: {
//     paddingTop: Platform.OS == 'android' ? StatusBar.currentHeight : 0,
//   },
// });

export default RestrauntScreen;
