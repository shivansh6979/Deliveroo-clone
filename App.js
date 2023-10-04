import { TailwindProvider } from 'tailwindcss-react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import RestrauntScreen from './screens/RestrauntScreen';
import { Provider } from 'react-redux';
import store from './redux/store';
import BasketScreen from './screens/BasketScreen';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <TailwindProvider>
        <Provider store={store}>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Restraunt" component={RestrauntScreen} />
            <Stack.Screen
              name="Basket"
              component={BasketScreen}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </Provider>
      </TailwindProvider>
    </NavigationContainer>
  );
}
