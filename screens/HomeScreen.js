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

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView style={styles.home}>
      <View className="flex-row pb-3 items-center p-0.5">
        <Image
          source={{
            uri: 'https://links.papareact.com/wru',
          }}
          className="h-7 w-7 mr-2 bg-gray-300 p-5 rounded-full"
        />
        <View className="flex-1 ">
          <Text className="font-bold text-gray-400 text-sm">Deliver Now !</Text>
          <Text className="font-bold text-xl">
            Current Location
            <ChevronDownIcon size={20} color="#00CCBB" />
          </Text>
        </View>

        <UserIcon size={36} color="#00CCBB" />
      </View>
      <View className="flex-row items-center justify-between pb-3 p-0.5 space-x-2 rounded-3xl">
        <View className="flex-row bg-gray-200 justify-start flex-1 p-3">
          <MagnifyingGlassIcon size={25} color="gray" className="px-4" />
          <TextInput
            placeholder="Restraunts and Cuisines"
            className="w-80"
            keyboardType="default"
            placeholderTextColor={'rgb(151, 149, 149)'}
          />
        </View>
        <AdjustmentsVerticalIcon size={28} color="#00CCBB" />
      </View>

      <ScrollView>
        {/* categories */}

        {/* featured-row */}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  home: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    paddingLeft: 6,
    backgroundColor: 'white',
  },
  headflex: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 30,
  },
});

export default HomeScreen;
