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
          id={123}
          imgUrl="https://links.papareact.com/gn7"
          lat={20}
          dishes={dishes}
          short_description="This is short Description!"
          long={1}
          genre="Indian"
          address="210 Indrapuram Noida"
          rating={4.3}
          title="Yo Chicken!"
        />
        <RestrauntCards
          id={123}
          imgUrl="https://links.papareact.com/gn7"
          lat={20}
          dishes={dishes}
          short_description="This is short Description!"
          long={1}
          genre="Indian"
          address="210 Indrapuram Noida"
          rating={4.3}
          title="Yo Mutton!"
        />
        <RestrauntCards
          id={123}
          imgUrl="https://links.papareact.com/gn7"
          lat={20}
          dishes={dishes}
          short_description="This is short Description!"
          long={1}
          genre="Indian"
          address="210 Indrapuram Noida"
          rating={4.3}
          title="Yo Burger!"
        />
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
