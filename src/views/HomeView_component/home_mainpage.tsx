import React, { Component } from 'react';
import { Platform, Image, Dimensions, StyleSheet, View, TouchableOpacity, ScrollView, Animated,SafeAreaView } from 'react-native';
import { Text } from 'react-native-elements';
import { Images } from '../../constants/images';
import Swiper from 'react-native-swiper'
const { width, height } = Dimensions.get("window");

const tabsButton =
[
  {
    key: "独占先行",
    image: Images.button_ExclusivePrecedent,
  },
  {
    key: "曜日連載",
    image: Images.button_DayofWeek,
  },
  {
    key: "新着",
    image: Images.button_New,
  },
  {
    key: "ランキング",
    image: Images.button_Ranking,
  },
  {
    key: "単行本",
    image: Images.button_Separate,
  }
];

const ScollImages =
[
  {
    image: Images.home_Scroll1,
  },
  {
    image: Images.home_Scroll2,
  },
  {
    image: Images.home_Scroll3,
  },
  {
    image: Images.home_Scroll4,
  },
  {
    image: Images.home_Scroll5,
  }
];

export default class Home_MainPage extends React.Component{
    
    renderImages(item, index){
        return(<>     
                <View style={{width: '100%',height: '100%'}}>
                    <Image source = {item.image} style={{width: '100%',height: '100%'}} resizeMode={"contain"}></Image></View>
                </>
            );   
        }
        
    renderScrollImages() {
        return ScollImages.map((item, index) => {
            
                return this.renderImages(item, index);
                
        });
        }
        
    renderButton(item, index){
        return(<>
            <TouchableOpacity style={{width: 0.2*width, alignItems: 'center'}}>
            <View style={styles.btn}>
                <Image resizeMode='contain' source={item.image} style={{ width: width * 0.08, height: height * 0.08 }} ></Image>
            </View>
            <Text style={{fontSize:12,alignItems: 'center'}} >{item.key} </Text>
            </TouchableOpacity></>
            );   
        }
    rendertabsButton() {
        return tabsButton.map((item, index) => {
            return this.renderButton(item,index);
        });
        }

  render() {

    return (
    <ScrollView style={{width: width,marginTop: 5}}>       
      <View style={{borderWidth:1,borderRadius:5,width: width,height: 0.3*height}}>
        <Swiper >
          {this.renderScrollImages()}             
        </Swiper>
      </View>

      <View style={{borderWidth:1,borderRadius:5,width: width,height: 0.13*height,flexDirection:'row'}}>        
        <View style={{width: width,height: '100%',flexDirection:'row'}}>
          {this.rendertabsButton()}
        </View>
      </View>

      <View style={{borderWidth:1,borderRadius:5,width: width,height: 0.5*height}}>
        <View style={{width: width,height: 0.05*height,flexDirection:'row'}}>        
            <Text style={{fontSize:14,textAlign: 'left',fontWeight:'bold',width: 0.5*width}} >{"みんなが読んでいる話題作！"} </Text>
            <Text style={{fontSize:12,textAlign: 'right',width: 0.5*width}} >{"もっと見る>"} </Text>
        </View>
  
        <View style={{width: width,height: '100%',flexDirection:'row'}}>
          {this.rendertabsButton()}
        </View>
      </View>

    </ScrollView>
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