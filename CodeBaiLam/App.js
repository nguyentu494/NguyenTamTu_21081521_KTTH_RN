import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screen1 from './screen/screen1';
import Screen2 from './screen/screen2';
import Screen3 from './screen/screen3';
import { Provider } from 'react-redux';
import store from './store';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Screen2"
            component={Screen2}
            headerShown={false}
          />

          <Stack.Screen
            name="Screen3"
            component={Screen3}
            headerShown={false}
          />

          <Stack.Screen
            name="Screen1"
            component={Screen1}
            headerShown={false}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
