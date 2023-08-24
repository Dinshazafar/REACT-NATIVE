// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthenticationScreen from './AuthenticationScreen';
import HomeScreen from './HomeScreen';
import flattest from './flattest';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="flat" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Authentication" component={AuthenticationScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="flat" component={flattest} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
