import React, { Component } from 'react';

import { Platform, Image, Dimensions, StyleSheet, View, TouchableOpacity, ScrollView, Animated,SafeAreaView } from 'react-native';
import { Button, Text } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
import { Images } from '../constants/images';
import Home_MainPage from './HomeView_component/home_mainpage';
import Home_Comic from './HomeView_component/home_comic';
import Home_Smartoon from './HomeView_component/home_smartoon';
import Home_Label from './HomeView_component/home_smartoon';
import SegmentTabBar from './HomeView_component/sement';
import Swiper from 'react-native-swiper'
import { scale } from '../constants/functions';
import * as Colors from '../constants/colors';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

const { width, height } = Dimensions.get("window");

export default class HomeView extends React.Component {
    render() {
  
      return (
        <>
            <Tab.Navigator>
            <Tab.Screen name="Home" component={Home_MainPage}/>
            <Tab.Screen name="マンガ" component={Home_Comic}/>
            <Tab.Screen name="SMARTOON" component={Home_Smartoon} />
            <Tab.Screen name="ノベル" component={Home_Label} />
            <Tab.Screen name="カテゴリ" component={SegmentTabBar} />
            </Tab.Navigator> 
        </>
      );
    }
  
}

//スタイル定義
const styles = StyleSheet.create({
  flex:{
    flex:1,
    marginTop:30
  },
  btn:{
    width:'100%',
    height:'70%',
    backgroundColor:'#c9c9c9',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:0.08*width,
  }
});



  

