import React, { Component } from 'react'
import { Text, View, ImageBackground, Dimensions, Image, Keyboard, Animated, UIManager, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native'
// import { nodeInternals } from 'stack-utils';
import { Container, Header, Content, Item, Input, Icon, Label, Form, Button, List, ListItem, Left, Body } from 'native-base';
import LinearGradient from 'react-native-linear-gradient'


const { State: TextInputState } = TextInput;
const { width, height } = Dimensions.get("window")

export default class UserLogin extends Component {
    constructor(props) {
        super(props)
        this.state = {
            shift: new Animated.Value(0),
            email: "razamudassir912@gmail.com",
            password: "123456"
        }
    }

    componentWillMount() {
        this.keyboardDidShowSub = Keyboard.addListener('keyboardDidShow', this.handleKeyboardDidShow);
        this.keyboardDidHideSub = Keyboard.addListener('keyboardDidHide', this.handleKeyboardDidHide);

    }

    static navigationOptions = () => ({
        headerMode: 'none',
        headerVisible: false,
        header: null,
    })


    login = async () => {
        const { email, password } = this.state
        console.log("FIKHSDJKDFJSN")

        this.props.navigation.navigate("UserHome")
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        // if (reg.test(email) === false) {

        //     Alert.alert("Email is not correct")
        // } else {

        //     // http://192.168.0.120/29-may-2019/rest_api_for_plant_client/login_signup.php?action=login_user


        //     const formData = new FormData();
        //     formData.append("email", email),
        //         formData.append("password", password),


        //         console.log("email, password, address, name, phoneNo, profilePic", email, password)


        //     fetch("http://192.168.1.103/SoPlush/auth/login.php?action=signin", {
        //         method: 'POST',
        //         // dataType: "json",
        //         headers: {
        //             'Accept': 'application/json',
        //             'Content-Type': 'multipart/form-data'
        //         },
        //         body: formData
        //     }).then(res => res.json())
        //         .then(resp => {
        //             console.log(JSON.stringify(resp))
        //             var successData = resp

        //             if (successData.status) {

        //                 if (successData.status === true) {
        //                     // console.log(" After Status SUCCESS USER", successData.data[0].role_id == 2)

        //                     if (successData.data[0].role_id == 2) {
        //                         console.log(" After ROLE ID SUCCESS USER", this.props)
        //                         this.props.screenProps.fetchProfileData(successData.data[0])
        //                         Alert.alert("Login successful")
        //                         this.props.navigation.navigate("UserHome")
        //                     }
        //                 } else {
        //                     Alert.alert("Email Or Password Incorrect")
        //                 }
        //             } else {
        //                 Alert.alert(successData.message)
        //             }
        //             console.log("SUCCESS USER", successData, successData.status, successData.data)
        //         })
        //         .catch(err => console.log("err err err", err));
        // }


    }


    render() {
        const { email, password } = this.state
        console.log(email, password)
        return (
            <View style={{ flex: 1, height, width, marginTop: -80 }}>
                <ImageBackground source={require('../../../assets/opacity100.png')} style={{ height: "100%", width: "100%", }}>
                    <ScrollView>
                        <Animated.View style={[{ justifyContent: 'center', alignItems: "center" }, { transform: [{ translateY: this.state.shift }] }]} >
                            <View style={{ marginTop: 100 }}>
                                <View style={{ alignContent: "center", alignSelf: "center", alignItems: "center" }}>
                                    <Image source={require('../../../assets/text.png')} />
                                </View>

                                <View style={{ marginTop: "10%" }}>
                                    <Text style={{ fontFamily: "MrEavesXLModNarOT-Reg", fontSize: 30, marginLeft: "10%" }}>Sign In</Text>
                                    <Text style={{ fontFamily: "MrEavesXLModNarOT-Reg", marginLeft: "10%", fontSize: 20, marginTop: "4%", opacity: 0.6 }}>Sign in with your email ID and Password</Text>
                                </View>

                                <View style={{ marginTop: "10%", alignContent: "center", alignSelf: "center", alignItems: "center", width: "80%", backgroundColor: "#fff", borderRadius: 10, shadowOpacity: 1, elevation: 4, shadowRadius: 20, shadowOffset: { width: 0, height: 13 }, shadowColor: 'rgba(46, 229, 157, 0.4)', paddingVertical: "8%", overflow: "hidden" }}>
                                    {/* // Text input box with icon aligned to the left */}
                                    <View >
                                        <List>
                                            <ListItem avatar>

                                                <Left style={{ marginBottom: "5%" }}>
                                                    <Icon style={{ fontSize: 20, height: 50 }} active name='email-outline' type="MaterialCommunityIcons" />
                                                </Left>
                                                <Item floatingLabel style={{ marginBottom: "3%", marginLeft: "5%" }}>
                                                    <Label>Email Address</Label>
                                                    <Input value={this.state.email} style onChangeText={(e) => { this.setState({ email: e }) }} />
                                                </Item>
                                            </ListItem>
                                        </List>

                                        {/* // Text input box with icon aligned to the right */}
                                        <List style={{ marginTop: "5%" }}>
                                            <ListItem avatar>

                                                <Left style={{ marginBottom: "5%" }}>
                                                    <Icon style={{ fontSize: 20, height: 50 }} active name='lock-outline' type="MaterialCommunityIcons" />
                                                </Left>
                                                <Item floatingLabel style={{ marginBottom: "3%", marginLeft: "5%" }}>
                                                    <Label>Password</Label>
                                                    <Input value={this.state.password} style onChangeText={(e) => { this.setState({ password: e }) }} secureTextEntry />
                                                </Item>
                                            </ListItem>
                                        </List>

                                    </View>

                                </View>

                                <View style={{ alignContent: "center", alignItems: "center", marginTop: "5%" }}>
                                    <TouchableOpacity onPress={() => { this.props.navigation.navigate("ForgotPassword", { from: "UserLogin" }) }}>
                                        <Text style={{ fontFamily: 'MrEavesXLModNarOT-Reg', fontSize: 20 }}>Forgot Password</Text>
                                    </TouchableOpacity>
                                </View>

                                <View style={{ alignContent: "center", alignItems: "center", marginTop: "5%" }}>
                                    <LinearGradient colors={['#fff', '#fc8b8c', '#fc8b8c']} style={{ width: "90%", borderRadius: 10 }}>
                                        <Button onPress={this.login} style={{ justifyContent: "center", alignContent: "center", alignItems: "center", backgroundColor: "none", opacity: 0.7, borderRadius: 10 }}>
                                            <Text style={{ alignSelf: "center", color: "#fff", fontFamily: "MrEavesXLModNarOT-Reg", fontSize: 20 }}>
                                                Login
                    </Text>
                                        </Button>
                                    </LinearGradient>
                                </View>

                                <View style={{ alignContent: "center", alignItems: "center", marginTop: "5%" }}>
                                    <Text style={{ fontFamily: 'MrEavesXLModNarOT-Reg', fontSize: 20 }}>Or Sign Up Using</Text>
                                </View>


                                <View style={{ display: "flex", flexDirection: "row", alignContent: "center", alignItems: "center", marginTop: "5%", justifyContent: "space-between" }}>

                                    <LinearGradient colors={['#fff', '#883cb6', '#883cb6']} style={{ width: "45%", borderRadius: 10 }}>
                                        <Button style={{ justifyContent: "center", alignContent: "center", alignItems: "center", backgroundColor: "none", borderRadius: 10, opacity: 0.7 }}>
                                            <Icon name="instagram" type="MaterialCommunityIcons" />
                                            <Text style={{ alignSelf: "center", color: "#fff", fontFamily: "MrEavesXLModNarOT-Reg", fontSize: 20, marginRight: "10%" }}>
                                                Instagram
                    </Text>
                                        </Button>
                                    </LinearGradient>

                                    <LinearGradient colors={['#fff', '#fc8b8c', '#fc8b8c']} style={{ width: "45%", borderRadius: 10 }}>
                                        <Button style={{ justifyContent: "center", alignContent: "center", alignItems: "center", backgroundColor: "none", borderRadius: 10, opacity: 0.7 }}>
                                            <Icon name="google" type="FontAwesome" />
                                            <Text style={{ alignSelf: "center", color: "#fff", fontFamily: "MrEavesXLModNarOT-Reg", fontSize: 20, marginRight: "10%" }}>
                                                Gmail
                    </Text>
                                        </Button>
                                    </LinearGradient>
                                </View>

                                <View style={{ display: "flex", flexDirection: "row", alignContent: "center", alignItems: "center", marginTop: "5%", justifyContent: "center" }}>

                                    <Text style={{ alignSelf: "center", fontFamily: "MrEavesXLModNarOT-Reg", fontSize: 20 }}>
                                        New to Soplush Beauty?
                    </Text>
                                    <TouchableOpacity onPress={() => { this.props.navigation.navigate("UserSignUp") }} style={{ marginLeft: "3%" }}>
                                        <Text style={{ alignSelf: "center", color: "#fc8b8c", fontFamily: "MrEavesXLModNarOT-Reg", fontSize: 20, borderBottomWidth: 1, borderBottomColor: "#fc8b8c" }}>Create Account</Text>
                                    </TouchableOpacity>

                                </View>



                            </View>
                        </Animated.View>
                    </ScrollView>
                </ImageBackground>
            </View>
        )
    }

    componentWillUnmount() {
        this.keyboardDidShowSub.remove();
        this.keyboardDidHideSub.remove();
    }

    handleKeyboardDidShow = (event) => {
        const { height: windowHeight } = Dimensions.get('window');
        const keyboardHeight = event.endCoordinates.height;
        const currentlyFocusedField = TextInputState.currentlyFocusedField();
        UIManager.measure(currentlyFocusedField, (originX, originY, width, height, pageX, pageY) => {
            const fieldHeight = height;
            const fieldTop = pageY;
            const gap = (windowHeight - keyboardHeight) - (fieldTop + fieldHeight);
            if (gap >= 0) {
                return;
            }
            Animated.timing(
                this.state.shift,
                {
                    toValue: gap,
                    duration: 1000,
                    useNativeDriver: true,
                }
            ).start();
        });
    }

    handleKeyboardDidHide = () => {
        Animated.timing(
            this.state.shift,
            {
                toValue: 0,
                duration: 1000,
                useNativeDriver: true,
            }
        ).start();
    }
}