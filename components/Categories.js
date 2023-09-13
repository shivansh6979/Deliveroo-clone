import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import CategoryCard from './CategoryCard';

const Categories = () => {
  return (
    <ScrollView
      horizontal
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 15,
      }}
      showsHorizontalScrollIndicator={false}
    >
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Image 1" />
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Image 2" />
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Image 3" />
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Image 4" />
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Image 4" />
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Image 4" />
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Image 4" />
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Image 4" />
    </ScrollView>
  );
};

export default Categories;
