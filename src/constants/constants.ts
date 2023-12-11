import { StackNavigationProp } from '@react-navigation/stack';
import { StyleSheet } from 'react-native';
import { scale, size } from './functions';

export const AttributeType = { coin_only: "coin_only", free: "free", purchased: "purchased", wait_free_reading: "wait_free_reading", wait_free: "wait_free" }
export const TypeName = { story: "story", book: "book" }

export const Fonts: { shs: string, shs_bold: string } =
{
  shs: "shs",
  shs_bold: "shs-bold"
}

export const GlobalStyles = StyleSheet.create(
  {
    shs_8_000: { fontFamily: Fonts.shs, fontSize: scale(8), includeFontPadding: false, color: "#000" },
    shs_8_fff: { fontFamily: Fonts.shs, fontSize: scale(8), includeFontPadding: false, color: "#fff" },
    shs_8_333: { fontFamily: Fonts.shs, fontSize: scale(8), includeFontPadding: false, color: "#333" },
    shs_10_fff: { fontFamily: Fonts.shs, fontSize: scale(10), includeFontPadding: false, color: "#fff" },
    shs_10_555: { fontFamily: Fonts.shs, fontSize: scale(10), includeFontPadding: false, color: "#555" },
    shs_10_333333: { fontFamily: Fonts.shs, fontSize: scale(10), includeFontPadding: false, color: "#333333" },
    shs_11_333333: { fontFamily: Fonts.shs, fontSize: scale(11), includeFontPadding: false, color: "#333333" },
    shs_12_333333: { fontFamily: Fonts.shs, fontSize: scale(12), includeFontPadding: false, color: "#333333" },
    shs_13_333333: { fontFamily: Fonts.shs, fontSize: scale(13), includeFontPadding: false, color: "#333333" },
    shs_14_333333: { fontFamily: Fonts.shs, fontSize: scale(14), includeFontPadding: false, color: "#333333" },
    shs_13_222222: { fontFamily: Fonts.shs, fontSize: scale(13), includeFontPadding: false, color: "#222222" },
    shs_10_9B9C9C: { fontFamily: Fonts.shs, fontSize: scale(10), includeFontPadding: false, color: "#9B9C9C" },

    shs_bold_8_fff: { fontFamily: Fonts.shs_bold, fontSize: scale(8), includeFontPadding: false, color: "#fff" },
    shs_bold_10_333333: { fontFamily: Fonts.shs_bold, fontSize: scale(10), includeFontPadding: false, color: "#333333" },
    shs_bold_11_333333: { fontFamily: Fonts.shs_bold, fontSize: scale(11), includeFontPadding: false, color: "#333333" },
    shs_bold_12_333333: { fontFamily: Fonts.shs_bold, fontSize: scale(12), includeFontPadding: false, color: "#333333" },
    shs_bold_13_333333: { fontFamily: Fonts.shs_bold, fontSize: scale(13), includeFontPadding: false, color: "#333333" },
    shs_bold_14_333333: { fontFamily: Fonts.shs_bold, fontSize: scale(14), includeFontPadding: false, color: "#333333" },
    shs_bold_15_333333: { fontFamily: Fonts.shs_bold, fontSize: scale(15), includeFontPadding: false, color: "#333333" },
    shs_bold_16_333333: { fontFamily: Fonts.shs_bold, fontSize: scale(16), includeFontPadding: false, color: "#333333" },
    shs_bold_14_ffffff: { fontFamily: Fonts.shs_bold, fontSize: scale(14), includeFontPadding: false, color: "#fff" },
    center_middle: { alignItems: "center", justifyContent: "center" },
    header_button: { justifyContent: "center", alignItems: "center", width: scale(50), height: scale(50) },
    splash_size: { width: scale(size(2016) / 2), height: scale(size(400) / 2) }
  })

export type PageViewProps = {
  navigation: StackNavigationProp<any>;
  route: { params: any };
  dispatch: any;
  state: any;
  extra?: any;
};

export const Views =
{
  About: "AboutView",

  Home: "HomeView",
  Language: "LanguageView",
  Policy: "PolicyView",
  Purchase: "PurchaseView",
  Server: "ServerView",
  Debugger: "DebuggerStackNavigator"
};


export const verticalAnimationNoGesture: any = {

  cardStyleInterpolator: ({ current, layouts }) => {
    return {
      cardStyle: {
        transform: [
          {
            translateY: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [layouts.screen.height, 0],
            }),
          },
        ],
      },
    };
  }
};

export const fadeAnimation: any = {
  cardStyleInterpolator: ({ current }) => {
    return {
      cardStyle: {
        opacity: current.progress,
      }
    };
  }
};


export const DeviceEvents = 
{ 
  CloseProducts: "event.close_products",
  CloseBulk: "event.close_bulk",
  PaymentButton:"payment.event.on_button_clicked",
  ConfirmButton:"message.event.on_button_clicked",
  SystemEvent:"  SystemEvent.OnReceived",
  
  AccessToken: "SystemEvent.UpdateAccessToken", 
}

export const SystemEvents = 
{ 
  Maintenance: "maintenance" ,
  Update: "update" ,
  Exception: "exception" ,
  Authorization: "authorization" ,
  Network: "network", 

}

export const MissionEvents = 
{ 
  Favorite: "mission_favorite",
  Thumb: "Thumb",
}

export const PaymentEvent =
{
  button_clicked:"payment.event.on_button_clicked"
}

export const SaveKeys=
{
  MessagingToken:"messaging_token",
  ViewedInformation:"viewed_information",
  PersonalApiServer:"personal_api_Server",
  SystemEnvironment:"system_environment",
  RefreshToken:"refresh_token",
  UID:"uid",
  FontSize:"font_size",
  SystemLanguage:"system_language",
  SearchKeyword:"search_keyword",
  DisableAutoChangeToCheck:"disable_auto_change_to_check"
  
}

export type Environments = "personal"|"staging"|"release"|"check" ;