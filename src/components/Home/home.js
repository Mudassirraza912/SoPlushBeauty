import React, { Component } from 'react'
import { Text, View, ImageBackground, Dimensions, Image, TouchableOpacity, BackHandler, Alert } from 'react-native'
import { Avatar, Header, Card, Divider, Icon } from 'react-native-elements'
import Navigator from '../../Navigation/navigator'
import UserNavigator from '../../UserNavigator/userNavigator'
import { ScrollView } from 'react-native-gesture-handler'
// import {  } from 'react-native-gesture-handler';

const { width, height } = Dimensions.get("window")

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            role: "",
            profileData: ''
        }
    }

    static navigationOptions = () => ({
        // headerBackTitle: null,
        title: "HOME",
        headerTitleStyle: {
            fontFamily: "Poppins-Regular_0",
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
    handleClose = () => {
        Alert.alert(
            'Exit App',
            'Exiting the application?',
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
    }




    render() {
        const { role } = this.state
        // if (role === "") {
        return (
            <View style={{ flex: 1, height: '100%', width: '100%', marginTop: -80 }}>
                <ImageBackground source={require('../../../assets/inner.png')} style={{ height: "100%", width: "100%" }}>
                    <Header
                        leftComponent={<Icon name="arrow-back" color="#000" onPress={this.handleClose} />}
                        containerStyle={{ marginTop: 60, backgroundColor: "#fff" }}
                        placement="left"
                        centerComponent={<Text style={{ alignSelf: 'center', fontSize: 20, fontFamily: "Poppins-Regular_0" }}>HOME</Text>}
                    />

                    <View style={{ height: '100%', width: '100%', flex: 1 }}>
                        <ScrollView contentContainerStyle={{ height, width: '100%', alignItems: 'center' }}>

                            <View style={{ flex: 1, paddingHorizontal: 10, alignItems: 'center', justifyContent: 'center', alignSelf: 'center', width: '100%', borderRadius: 10 }}>
                            <ImageBackground source={require('../../../assets/homeBackground.png')} style={{ height: "85%", width: "100%", borderRadius: 10 }}>
                                <View style={{ alignSelf: "center", alignContent: "center", alignItems: "center", marginTop: "15%" }}>
                                    <Image source={require('../../../assets/text.png')} style={{ opacity: 2 }} />
                                    <Text style={{ marginTop: "12%", fontFamily: "Poppins-Regular_0", fontSize: 20 }}>I am a...</Text>
                                </View>

                                <View style={{ display: "flex", flexDirection: "row", width: "100%", justifyContent: "space-around", marginTop: "3%" }}>

                                    <TouchableOpacity onPress={() => { this.props.navigation.navigate("UserLogin") }}>
                                        <View style={{ alignContent: "center", alignItems: "center", alignSelf: "center", backgroundColor: "transparent", width: 143, height: 139, borderRadius: 5, borderColor: "#000", borderWidth: 1, justifyContent: "space-evenly" }}>

                                            <Image source={require('../../../assets/userIcon.png')} style={{ height: 55, width: 50, marginTop: "10%" }} />
                                            <Text style={{ fontFamily: 'Poppins-Regular_0', fontSize: 15 }}>User</Text>

                                        </View>
                                    </TouchableOpacity>

                                    <TouchableOpacity onPress={() => { this.props.navigation.navigate("ProLogin") }}>
                                        <View style={{ width: "40%", borderRadius: 10 }}>
                                            <Image source={require('../../../assets/Button.png')} />
                                        </View>
                                    </TouchableOpacity>

                                </View>
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