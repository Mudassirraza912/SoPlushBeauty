import React, { Component } from 'react'
import { Text, View, ImageBackground, Dimensions, Image, TouchableOpacity, BackHandler, Alert, AsyncStorage } from 'react-native'
import { Avatar, Header, Card, Divider, Icon } from 'react-native-elements'
import Navigator from '../../Navigation/navigator'
import UserNavigator from '../../UserNavigator/userNavigator'
import { ScrollView } from 'react-native-gesture-handler'
// import {  } from 'react-native-gesture-handler';
// import registerForPushNotificationsAsync from '../../Constants/DevicePushToken'
const { width, height } = Dimensions.get("window")
import * as Facebook  from 'expo-facebook';
import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions';
import Constants from 'expo-constants';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            role: "",
            profileData: ''
        }
    }


    

    componentDidMount = async () => {
        console.log('componentWillMount componentWillMountcomponentWillMount')
        
        if (Constants.isDevice) {
            const { status: existingStatus } = await Permissions.getAsync(
              Permissions.NOTIFICATIONS
            );
            let finalStatus = existingStatus;
            if (existingStatus !== 'granted') {
              const { status } = await Permissions.askAsync(
                Permissions.NOTIFICATIONS
              );
              finalStatus = status;
            }
            if (finalStatus !== 'granted') {
              alert('Failed to get push token for push notification!');
              return;
            }
            let token = await Notifications.getExpoPushTokenAsync();
            console.log('token token token', token);
            this.props.screenProps.fetchToken(token)
          //   this.setState({expoPushToken: token});
            return token;
          } else {
            alert('Must use physical device for Push Notifications');
          }

        //   this._notificationSubscription = Notifications.addListener(this._handleNotification);
        // try {
        //     const value = await AsyncStorage.getItem('User');
        //     console.log('value value value', value)
        //     if (value !== null) {
        //       // We have data!!
        //     var convertVal = JSON.parse(value)
        //     this.props.screenProps.fetchProfileData(convertVal)
        //     if (convertVal.role_id === '2') {
        //         this.props.navigation.navigate("UserNavigator")
        //     }else {
        //         this.props.navigation.navigate("ProNavigator")
        //     }
        //     console.log('enableButton getting data After JSON in SITEINFO =>',convertVal)
           
        //     }
        //   } catch (error) {
        //         console.log('Errr getting data =>', error)
    
        //   }
        // var user = AsyncStorage.getItem('User')
        // console.log("AsyncStorage.getItem('User') AsyncStorage.getItem('User')", user)
    }

    _handleNotification = notification => {
        console.log("notification notification notification", notification)
        // do whatever you want to do with the notification
        // this.setState({ notification: notification });
      };

    static navigationOptions = () => ({
        // headerBackTitle: null,
        title: "HOME",
        headerTitleStyle: {
            fontFamily: "Poppins-Regular",
            fontSize: 20
        },
        headerMode: 'none',
        headerVisible: false,
        header: null,
        // headerStyle: {
        //     alignContent:"center",
        //     justifyContent:"center",
        //     alignItems:"center",
        //     // alignSelf:"cneter"
        // },
    })


    // 28629
    componentWillMount() {
        // Notifications.addListener((receivedNotification) => {
        //     Alert.alert("Notification", "Hello World")
        //     console.log("receivedNotification", receivedNotification)
        //     // this.setState({
        //     //   receivedNotification,
        //     //   lastNotificationId: receivedNotification.notificationId,
        //     // });
        //   });
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);

    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
    }

    handleBackButton = () => {
        console.log('this.props.isFocused ', this.props.navigation.isFocused())
        if (this.props.navigation.isFocused()) {
            Alert.alert(
                'Exit App',
                'Are you sure you want to exit?',
                [
                    {
                        text: 'Cancel',
                        onPress: () => console.log('Cancel Pressed'),
                        style: 'cancel'
                    },
                    {
                        text: 'OK',
                        onPress: () => BackHandler.exitApp()
                    }
                ],
                {
                    cancelable: false
                }
            );
            return true;
        }
    };




    render() {
        const { role } = this.state
        // if (role === "") {
        return (
            <View style={{ flex: 1, height: '100%', width: '100%', marginTop: -80 }}>
                <ImageBackground source={require('../../../assets/inner.png')} style={{ height: "100%", width: "100%" }}>
                    <Header
                        // leftComponent={<Icon name="arrow-back" color="#000" onPress={this.handleClose} />}
                        containerStyle={{ marginTop: 60, backgroundColor: "#fff" }}
                        placement="left"
                        centerComponent={<Text style={{ alignSelf: 'center', fontSize: 20, fontFamily: "Poppins-Regular" }}>HOME</Text>}
                    />

                    <View style={{ height: '100%', width: '100%', flex: 1  }}>
                        <ScrollView contentContainerStyle={{ height, width: '100%', alignItems: 'center' }}>

                            <View style={{ flex: 1, paddingHorizontal: 10, alignItems: 'center', justifyContent: 'center', alignSelf: 'center', width: '100%', borderRadius: 10}}>

                            <ImageBackground source={require('../../../assets/homeBackground.png')} style={{ height: "90%", width: "100%", borderRadius: 10 }}>
                                <View style={{ alignSelf: "center", alignContent: "center", alignItems: "center", marginTop: "15%", paddingVertical:10 }}>
                                    <Image source={require('../../../assets/text.png')} />
                                    <Text style={{ marginTop: "20%", fontFamily: "Poppins-Regular", fontSize: 20, paddingVertical:'5%' }}>I am a...</Text>
                                </View>

                                {/* <View style={{flex: 1, justifyContent:'center', alignContent:"center"}}> */}

                                <View style={{ display: "flex", flexDirection: "row", width: "100%", justifyContent: "space-around", marginTop: "3%", alignContent:'center', right: 5}}>

                                    <TouchableOpacity style={{width:"55%", left:5}} onPress={() => { this.props.navigation.navigate("UserLogin") }}>
                                        <View style={{ alignContent: "center", alignItems: "center", alignSelf: "center", backgroundColor: "transparent", width: 143, height: 139, borderRadius: 5, borderColor: "#000", borderWidth: 1, justifyContent: "space-evenly" }}>

                                            <Image source={require('../../../assets/userIcon.png')} style={{ height: 55, width: 50, marginTop: "10%" }} />
                                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 15, marginTop: -15 }}>User</Text>

                                        </View>
                                    </TouchableOpacity>

                                    <TouchableOpacity style={{width:"45%", right:5}} onPress={() => { this.props.navigation.navigate("ProLogin") }}>
                                        <View style={{ width: "100%", borderRadius: 10 }}>
                                            <Image source={require('../../../assets/Button.png')} />
                                        </View>
                                    </TouchableOpacity>

                                </View>
                             {/* </View> */}
                            </ImageBackground>
                            </View>
                        </ScrollView>
                    </View>
                </ImageBackground>
            </View>
        )

        // } else {
        //     return (
        //         <View style={{ flex: 1 }}>
        //             {role === "pro" && <Navigator screenProps={{ fetchProfileData: this.fetchProfileData, profileData: this.state.profileData }} />}
        //             {role === "user" && <UserNavigator screenProps={{ fetchProfileData: this.fetchProfileData, profileData: this.state.profileData }} />}

        //         </View>
        //     )
        // }








    }
}