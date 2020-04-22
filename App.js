/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
console.disableYellowBox = true
import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  BackHandler,
  Alert, 
  ToastAndroid,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import WalkThrough from './src/components/Walk through/walkthrogh';
import Navigator from './src/Navigation/navigator';
import NetInfo from  '@react-native-community/netinfo'
import Splash from './src/components/Splash/splash' 
// import { GoogleSignin } from '@react-native-community/google-signin'; 
import 'react-native-gesture-handler';
import * as Font from 'expo-font';
// import PushNotification from 'react-native-push-notification';
import { PushNotificationIOS } from 'react-native';
import Payment from './src/components/User/payment'
// import {Font} from 'expo'


export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      profileData: '',
      notiToken:'',
      loading: true

    }
  }

  // async componentWillMount () {

    
  //     await Font.loadAsync({
  //       'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
  //       'Poppins-Bold_0': require('./assets/fonts/Poppins-Bold_0.ttf'),
  //     });
  
  //     this.setState({ loading: false });

  // }

 componentDidMount = async () => {

    await Font.loadAsync({
      'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
      'Poppins-Bold_0': require('./assets/fonts/Poppins-Bold_0.ttf'),
    });


    this.setState({ loading: false });

    setTimeout(() => {
      this.setState({ isLoading: false })
    }, 3000);

    NetInfo.addEventListener(state => {
      if (!state.isConnected) {
        ToastAndroid.show("Internet connection seems to be offline", ToastAndroid.SHORT)
      }else {
        ToastAndroid.show("Internet connection seems to be online", ToastAndroid.SHORT)
      }
    })



  //   PushNotification.localNotification({
  //     autoCancel: true,
  //     largeIcon: "ic_launcher",
  //     smallIcon: "ic_notification",
  //     bigText: "My big text that will be shown when notification is expanded",
  //     subText: "This is a subText",
  //     color: "#F9B1B0",
  //     vibrate: true,
  //     vibration: 300,
  //     title: "Notification Title",
  //     message: "Notification Message",
  //     playSound: true,
  //     soundName: 'default',
  //     // actions: '["Accept", "Reject"]',
  //   });
  }

  fetchProfileData = (data) => {
    this.setState({
      profileData: data
    })
  }

  fetchToken = (token) => {
    this.setState({
      notiToken: token
    })
  }

  render() {
    console.log('this.state.loading', this.state.loading)
    // if (this.state.isLoading) {
    //   return <Splash />
    // } else {
      return (
        <View style={{ flex: 1 }}>
          <StatusBar backgroundColor="#bdbdbd" barStyle="light-content" />
          {/* {this.state.loading === false && <Text>{this.state.loading} dsjfn</Text>} */}
        {this.state.loading === false &&  <Navigator screenProps={{ fetchProfileData: this.fetchProfileData, profileData: this.state.profileData, fetchToken: this.fetchToken, notiToken: this.state.notiToken  }} />}
        {/* {this.state.loading === false &&  <Payment />} */}
        </View>
      );
    // }
  }
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    // fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    // fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    // fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

// export default App;


/**
 * Attaches an event listener that handles the android-only hardware
 * back button
 * @param  {Function} callback The function to call on click
 */
const handleAndroidBackButton = callback => {
  BackHandler.addEventListener('hardwareBackPress', () => {
    callback();
    return true;
  });
};
const exitAlert = () => {
  Alert.alert(
    'Confirm exit',
    'Do you want to quit the app?'
    [
    { text: 'CANCEL', style: 'cancel' },
    { text: 'OK', onPress: () => BackHandler.exitApp() }
    ]
  );
};
/**
 * Removes the event listener in order not to add a new one
 * every time the view component re-mounts
 */
const removeAndroidBackButtonHandler = () => {
  BackHandler.removeEventListener('hardwareBackPress', () => { });
}