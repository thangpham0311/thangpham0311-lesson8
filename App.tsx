import React, { createContext, useEffect, useState } from 'react';
import { Dimensions, Image, SafeAreaView, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from './src/screen1/Login';
import Explore from './src/screen1/Explore';
import Profile from './src/screen1/Profile';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


const ScreenTab = () => (
  <Tab.Navigator>
    <Tab.Screen name="Explore" component={Explore} />
    <Tab.Screen name="Profile" component={Profile} />

  </Tab.Navigator>
);

const AuthStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="ScreenTab" component={ScreenTab} />

  </Stack.Navigator>
);

const initialValue = {
  email: '',
  password: '',
  isLogin: false

}

export const MyContext = createContext({
  infor: {},
  setInfor: (data: any) => { }

});

const App = () => {

  const [infor, setInfor] = useState(initialValue);
  return (
    <MyContext.Provider value={{ infor, setInfor }}>
      <NavigationContainer>
        {!infor.isLogin ? AuthStack() : ScreenTab()}
      </NavigationContainer>
    </MyContext.Provider>
  );




}
export default App;