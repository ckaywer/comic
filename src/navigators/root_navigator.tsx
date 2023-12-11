import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from './bottom-tab-navigator';
import { createStackNavigator } from '@react-navigation/stack';
import { Component } from 'react';

const Stack = createStackNavigator();

export class RootNavigator extends Component {

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='BottomTabNavigator' screenOptions={{ headerShown: false, animationEnabled: true }}>
          <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}