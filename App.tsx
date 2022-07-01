import React, { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/Home/HomeScreen';
import { Provider } from 'react-redux';
import store from './src/store';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AddNew from './src/screens/AddNew/AddNew';
import UserDetails from './src/screens/UserDetails/UserDetails';

const Stack = createNativeStackNavigator();

const App: FC = () => (
  <SafeAreaProvider>
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="AddNewUser" component={AddNew} />
          <Stack.Screen name="UserDetails" component={UserDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  </SafeAreaProvider>
);

export default App;
