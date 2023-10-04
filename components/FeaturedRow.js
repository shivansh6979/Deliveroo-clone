import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import { ArrowRightIcon } from 'react-native-heroicons/outline';
import RestrauntCards from './RestrauntCards';
import dishes from '../json/recipes.json';
const FeaturedRow = ({ id, title, description }) => {
  return (
    <View>
      <View className="mt-5 flex-row justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon size={20} color={'#00CCBB'} />
      </View>
      <Text className="text-gray-500 text-xs px-4">{description}</Text>
      <ScrollView
        contentContainerStyle={{ paddingHorizontal: 15 }}
        className="pt-4"
        showsHorizontalScrollIndicator={false}
        horizontal
      >
        <RestrauntCards
          id={1}
          imgUrl="https://links.papareact.com/gn7"
          lat={20}
          dishes={dishes}
          short_description="The authencity of nawabs !"
          long={20}
          genre="Indian"
          address="21-B Peepal Chowk Noida"
          rating={4.3}
          title="Yo Chicken !"
        />
        <RestrauntCards
          id={2}
          imgUrl="https://links.papareact.com/gn7"
          lat={40}
          dishes={dishes}
          short_description="Munchow is a great place for having chinese !"
          long={10}
          genre="Chinese"
          address="210 Indrapuram Noida"
          rating={3.5}
          title="Munchow !"
        />
        <RestrauntCards
          id={3}
          imgUrl="https://links.papareact.com/gn7"
          lat={60}
          dishes={dishes}
          short_description="That's delicious mughalai flavours !"
          long={30}
          genre="Mughlai"
          address="210 Vaishali Ghaziabad"
          rating={4.5}
          title="Kalika hut !"
        />
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
