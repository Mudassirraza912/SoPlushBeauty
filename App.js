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
// import NetInfo from '@react-native-community/netinfo '
import Splash from './src/components/Splash/splash' 

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      profileData: ''
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false })
    }, 3000);

    // NetInfo.addEventListener(state => {
    //   if(!state.isConnected){
    //     Alert.alert("Internet connection seems to be offline")
    //   }
    //   console.log("Connection type", state.type);
    //   console.log("Is connected?", state.isConnected);
    // })
  }

  fetchProfileData = (data) => {
    this.setState({
      profileData: data
    })
  }

  render() {
    // if (this.state.isLoading) {
    //   return <Splash />
    // } else {
      return (
        <View style={{ flex: 1 }}>
          <Navigator screenProps={{ fetchProfileData: this.fetchProfileData, profileData: this.state.profileData }} />
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
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
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