import React, {Component} from 'react';import { StyleSheet, Text, View, Button,TouchableOpacity } from 'react-native';
import {vw, vh,} from 'react-native-viewport-units'
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './Home'
import Main from './Main'
import { Provider } from "react-redux";
import store from "./store/index";
const Stack = createStackNavigator();

//

export default class App extends React.Component {
  
 render(){
  return (
    //Provider wraps up your React application and makes it aware of the entire Redux's store.
    <Provider store={store}>  
      <NavigationContainer> 
        <Stack.Navigator screenOptions={{headerShown: false}}> 
        <Stack.Screen
          name="Home"
          component={Home}         
        />
        <Stack.Screen 
            name="Main" 
            component={Main} 
            options={{title: 'Main Page'}} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );

 }
}

