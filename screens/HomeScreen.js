import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';
import React, { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  ChevronDownIcon,
  UserIcon,
  SearchIcon,
  AdjustmentsVerticalIcon,
  MagnifyingGlassIcon,
} from 'react-native-heroicons/outline';
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView style={styles.home}>
      <View className="p-1.5 pb-3 pt-2 bg-white">
        <View className="flex-row mb-2 items-center ">
          <Image
            source={{
              uri: 'https://links.papareact.com/wru',
            }}
            className="h-7 w-7 mr-2 bg-gray-300 p-5 rounded-full"
          />
          <View className="flex-1 ">
            <Text className="font-bold text-gray-400 text-sm">
              Deliver Now !
            </Text>
            <Text className="font-bold text-xl">
              Current Location
              <ChevronDownIcon size={20} color="#00CCBB" />
            </Text>
          </View>

          <UserIcon size={36} color="#00CCBB" />
        </View>
        <View className="flex-row items-center justify-between  space-x-2">
          <View className="flex-row bg-gray-200 justify-start items-center rounded-lg flex-1 p-2">
            <MagnifyingGlassIcon size={25} color="gray" className="px-4" />
            <TextInput
              placeholder="Restraunts and Cuisines"
              className="w-80 p-2 h-10"
              keyboardType="default"
              placeholderTextColor={'rgb(151, 149, 149)'}
            />
          </View>
          <AdjustmentsVerticalIcon size={28} color="#00CCBB" />
        </View>
      </View>
      <ScrollView
        className="flex-1 bg-gray-100"
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        {/* categories */}
        <Categories />
        {/* featured-row */}
        <FeaturedRow
          id="123"
          title="Featured"
          description="Discover the heaven of Spices !"
        />
        <FeaturedRow
          id="1234"
          title="Tasty Discounts"
          description="Paid Placements from our partner !"
        />
        <FeaturedRow
          id="12345"
          title="Offers near you"
          description="Why not support Local vendor tonight !"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  home: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});

export default HomeScreen;
