import { View, Text, SafeAreaView } from 'react-native';
import React, { useLayoutEffect } from 'react';
import * as Animatable from 'react-native-animatable';
import * as Progress from 'react-native-progress';
import { useNavigation } from '@react-navigation/native';

const PreparingOrderScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    setTimeout(() => {
      navigation.navigate('DeliveryScreen');
    }, 3000);
  }, []);

  return (
    <SafeAreaView className="bg-[#00CCBB] flex-1 justify-center items-center">
      <Animatable.Image
        source={require('../assets/delivery.gif')}
        iterationCount={1}
        animation="slideInUp"
        className="h-96 w-96"
      />
      <Animatable.Text
        iterationCount={1}
        animation="slideInUp"
        className="my-10 text-white text-lg font-bold text-center"
      >
        Waiting for restaurant to accept your order !
      </Animatable.Text>
      <Progress.Bar
        style={{ backgroundColor: '#00CCBB' }}
        size={60}
        indeterminate={true}
        color="white"
      />
    </SafeAreaView>
  );
};

export default PreparingOrderScreen;
