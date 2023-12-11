import React, { Component } from 'react';
import { createBottomTabNavigator, BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import HomeView from '../views/home_view';
import { Text, Image, View } from 'react-native';

import { Images } from '../constants/images';
import { scale } from '../constants/functions';
import { Fonts } from '../constants/constants';
import * as Colors from '../constants/colors';

const BottomTab = createBottomTabNavigator();

type BottomTabNavigatorProps = {
  navigation: BottomTabNavigationProp<any>;
};
const tab_title = (focused: boolean, i18n_key: string) => (

    <></>

);

const tab_icon = (focused: boolean, icon: string,i18n_key: string, width: number, height: number) => (

  <View style={{alignItems:"center", justifyContent:"space-between"}}>
    <Image source={focused ? Images[icon + "2"] : Images[icon]} style={{ width: scale(width), height: scale(height), tintColor: Colors.focused_image_color(focused) }} />
  </View>
);
const tabs =
  [
    {
      key: "ホーム",
      component: HomeView,
      icon: ({ focused }) => tab_icon(focused, "tab_home", "", 28, 21)
    },
    {
      key: "探す",
      component: HomeView,
      icon: ({ focused }) => tab_icon(focused, "tab_search", "探す", 86/5,118/5)
    },
    {
      key: "チャンネル",
      component: HomeView,
      icon: ({ focused }) => tab_icon(focused, "tab_channel", "チャンネル", 18.38, 21)
    },
    {
      key: "本棚",
      component: HomeView,
      icon: ({ focused }) => tab_icon(focused, "tab_bookshelf", "本棚", 20, 20)
    },
    {
      key: "マイページ",
      component: HomeView,
      icon: ({ focused }) => tab_icon(focused, "tab_mypage", "マイページ", 20, 20)
    }
  ];

class BottomTabNavigator extends Component {
  render() {
    return (<BottomTab.Navigator>
      {
        tabs.map((item, index) => {
          return <BottomTab.Screen key={index} name={item.key}  component={item.component}

          options={{ tabBarLabel: item.key, tabBarIcon: item.icon, headerShown: false,tabBarStyle:{minHeight:scale(50)} }}
          />
        })
      }
    </BottomTab.Navigator>
    );
  }
}

export default BottomTabNavigator;
