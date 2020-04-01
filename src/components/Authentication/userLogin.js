import React, { Component } from 'react'
import { Text, View, ImageBackground, Dimensions, Image, Keyboard, Animated, UIManager, TextInput, TouchableOpacity, ScrollView, Alert, BackHandler, AsyncStorage } from 'react-native'
// import { nodeInternals } from 'stack-utils';
import { Container, Header, Content, Item, Input, Icon, Label, Form, Button, List, ListItem, Left, Body, Spinner, } from 'native-base';
import { LinearGradient } from 'expo-linear-gradient';

import * as Google from 'expo-google-app-auth';
import * as Facebook  from 'expo-facebook';


const { State: TextInputState } = TextInput;
const { width, height } = Dimensions.get("window")

import userSvg from '../../../assets/a.svg'






export default class UserLogin extends Component {
    constructor(props) {
        super(props)
        this.state = {
            shift: new Animated.Value(0),
            email: "",
            password: "",
            loader: false
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
        this.setState({ loader: true })
        const { email, password } = this.state
        console.log("FIKHSDJKDFJSN")

        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if (reg.test(email) === false) {
            this.setState({ loader: false })

            Alert.alert("Alert", "Please Enter Valid Email Address")
        }
        // 28638
        else if (password == '') {
            this.setState({ loader: false })
            Alert.alert("Alert", "Password is required")
        } else {



            const formData = new FormData();
            formData.append("email", email),
                formData.append("password", password),
                formData.append("noti_token", this.props.screenProps.notiToken),


                console.log("email, password, address, name, phoneNo, profilePic", formData)


            fetch("http://soplush.ingicweb.com/soplush/auth/login.php?action=signin", {
                method: 'POST',
                // dataType: "json",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'multipart/form-data'
                },
                body: formData
            }).then(res => res.json())
                .then(async (resp) => {
                    var successData = resp

                    if (successData.status) {
                        console.log('successData', successData)
                        if (successData.status === true) {
                            // console.log(" After Status SUCCESS USER", successData.data[0].role_id == 2)

                            if (successData.data[0].role_id == 4) {
                                console.log(" After ROLE ID SUCCESS USER", this.props)
                                this.props.screenProps.fetchProfileData(successData.data[0])
                                // AsyncStorage.setItem('User', JSON.stringify(successData.data[0]))
                                try {
                                    await AsyncStorage.setItem('User', JSON.stringify(successData.data[0]));
                                    console.log('enableButton =>')
                                } catch (error) {
                                    console.log('error =>', error)

                                }
                                Alert.alert("Alert", "Login successful")
                                this.setState({ loader: false })
                                this.props.navigation.navigate("UserNavigator")
                            }
                        } else {
                            Alert.alert("Alert", "Email or Password is incorrect")
                            this.setState({ loader: false })

                        }
                    } else {
                        this.setState({ loader: false })
                        Alert.alert("Alert", "Email or Password is incorrect")
                    }
                })
                .catch(err => {
                    console.log("err err err", err)
                    Alert.alert("Alert", "Email Or Password Incorrect")
                    this.setState({ loader: false })
                });
        }


    }

    initUser = (token) => {
        fetch(`https://graph.facebook.com/me?access_token=${token}&fields=email,id,about,picture,name,gender,friends`)
            .then((response) => response.json())
            .then((json) => {
                // Some user object has been set up somewhere, build that user here
                var user = {}
                user.name = json.name
                user.id = json.id
                user.user_friends = json.friends
                user.email = json.email
                user.username = json.name
                user.loading = false
                user.loggedIn = true
                //   user.avatar = setAvatar(json.id)      
                console.log('user user user', user, json)
            },
            )
            .catch((err) => {
                console.log('ERROR GETTING DATA FROM FACEBOOK', err)
            })
    }


    fbLogin = async () => {

        await Facebook.initializeAsync('791243921732395')

        try {
            const {
              type,
              token,
              expires,
              permissions,
              declinedPermissions,
            } = await Facebook.logInWithReadPermissionsAsync('791243921732395', {
              permissions: ['public_profile', 'email'],
            });
             console.log("FB AUTH CALLED TOKEN", token)
            if (type === 'success') {
              // Get the user's name using Facebook's Graph API
              const response = await fetch(`https://graph.facebook.com/me?access_token=${token}&fields=email,id,about,picture,name,gender,friends`);
              var result = await response.json()
              console.log("await response.json()",result)
              this.connectFacebookAuthWithDb(result)
            //   response &&   this.props.fbLogin(result, token)
            //   Alert.alert('Logged in!', `Hi ${result.name}! \n`);
            } else {
              // type === 'cancel'
              console.log("type ===", type)
            }
          } catch ({ message }) {
           console.log("FB AUTH DESTROY", message)
            Alert.alert(`Facebook Login Error: ${message}`);
          }


     
    }


    

    google = async () => {
          try {
            const result = await Google.logInAsync({
            behavior:'web',

            clientId:'612630214885-0cneksc73cgktjka50f7t1dvirv5gqfa.apps.googleusercontent.com',
            androidStandaloneAppClientId:'612630214885-0cneksc73cgktjka50f7t1dvirv5gqfa.apps.googleusercontent.com',
            androidClientId:'612630214885-0cneksc73cgktjka50f7t1dvirv5gqfa.apps.googleusercontent.com',
            webClientId:'612630214885-0cneksc73cgktjka50f7t1dvirv5gqfa.apps.googleusercontent.com',

           

            // redirectUrl:'https://soplushexpo.firebaseapp.com/oauthclient/612630214885-9osb3c2tfb1ntontse3317h3cgnfbtmk.apps.googleusercontent.com?project=612630214885',
            // androidClientId:'612630214885-dup10mkvjvan0gq5qtf3o5r7nf9bhcgh.apps.googleusercontent.com',
            // androidStandaloneAppClientId:'612630214885-dup10mkvjvan0gq5qtf3o5r7nf9bhcgh.apps.googleusercontent.com',
            
            // androidClientId: '612630214885-9osb3c2tfb1ntontse3317h3cgnfbtmk.apps.googleusercontent.com',
            // iosClientId: '612630214885-9osb3c2tfb1ntontse3317h3cgnfbtmk.apps.googleusercontent.com',

            // androidClientId: '612630214885-dup10mkvjvan0gq5qtf3o5r7nf9bhcgh.apps.googleusercontent.com',
            // iosClientId: '612630214885-vg4uo5j1dhbpijmbgooslfh4ob9mali5.apps.googleusercontent.com',
            // androidStandaloneAppClientId: '612630214885-dup10mkvjvan0gq5qtf3o5r7nf9bhcgh.apps.googleusercontent.com',
            // iosStandaloneAppClientId: '612630214885-vg4uo5j1dhbpijmbgooslfh4ob9mali5.apps.googleusercontent.com',
            // clientId:'612630214885-dup10mkvjvan0gq5qtf3o5r7nf9bhcgh.apps.googleusercontent.com',
              scopes: ['profile', 'email'],
            });
        
            if (result.type === 'success') {
              console.log("RESULT RESULT", result)
              this.connectGoogleAuthWithDb(result.user)
            //   Alert.alert("RESULT", result.user.name)
              return result.accessToken;
            } else {
              return { cancelled: true };
            }
          } catch (e) {
            return { error: true };
          }
    }



    connectGoogleAuthWithDb = (e) => {

        const formData = new FormData();
    formData.append('auth_type','google')
    formData.append("email", e.email),
    formData.append("name", e.name),
    formData.append("auth_id", e.id)
    formData.append("role_id", 4)

     if (e.photo) {
        formData.append("profile_pic", e.photo)
     }

    // console.log("BEFORE SUCCSSS", `https://churppy.com/api/v1/google-login?provider_email=${e.email}&provider_name=${e.name}&id=${e.id}&token=${token}&avtar_origional=${e.photo}`)

    fetch("http://soplush.ingicweb.com/soplush/auth/login.php?action=signin", {
    method: 'POST',
    // dataType: "json",
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'multipart/form-data'
    },
    body: formData
}).then(res => res.json())
    .then(async (response) => {
      // console.log('responseresponse ',response)
      if (response.status === true) {
        // Alert.alert(response.data.status, response.data.message )
        if (response.data[0].role_id == 4) {
            console.log(" After ROLE ID SUCCESS USER", this.props)
            this.props.screenProps.fetchProfileData(response.data[0])
            // AsyncStorage.setItem('User', JSON.stringify(successData.data[0]))
            try {
                await AsyncStorage.setItem('User', JSON.stringify(response.data[0]));
                console.log('enableButton =>')
            } catch (error) {
                console.log('error =>', error)

            }
            Alert.alert("Alert", "Login successful")
            this.setState({ loader: false })
            this.props.navigation.navigate("UserNavigator")
        }else {
        Alert.alert("Alert", "Something went wrong")
        this.setState({ loader: false })

        }

      } else {
        Alert.alert(response.status, response.message)
      }
    }).catch((err) => {
      console.log(err)
    })
  

    }












    
    connectFacebookAuthWithDb = (e) => {

        const formData = new FormData();
    formData.append('auth_type','facebook')
    formData.append("name", e.name),
    formData.append("auth_id", e.id)
    formData.append("role_id", 4)

     if (e.picture) {
        formData.append("profile_pic", e.picture.data.url)
     }

    // console.log("BEFORE SUCCSSS", `https://churppy.com/api/v1/google-login?provider_email=${e.email}&provider_name=${e.name}&id=${e.id}&token=${token}&avtar_origional=${e.photo}`)

    console.log('connectFacebookAuthWithDb formData', formData)

    fetch("http://soplush.ingicweb.com/soplush/auth/login.php?action=signin", {
    method: 'POST',
    // dataType: "json",
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'multipart/form-data'
    },
    body: formData
}).then(res => res.json())
    .then(async (response) => {
      console.log('responseresponse ',response)
      if (response.status === true) {
        // Alert.alert(response.data.status, response.data.message )
        if (response.data[0].role_id == 4) {
            console.log(" After ROLE ID SUCCESS USER", this.props)
            this.props.screenProps.fetchProfileData(response.data[0])
            // AsyncStorage.setItem('User', JSON.stringify(successData.data[0]))
            try {
                await AsyncStorage.setItem('User', JSON.stringify(response.data[0]));
                console.log('enableButton =>')
            } catch (error) {
                console.log('error =>', error)

            }
            Alert.alert("Alert", "Login successful")
            this.setState({ loader: false })
            this.props.navigation.navigate("UserNavigator")
        }else {
        Alert.alert("Alert", "Something went wrong")
        this.setState({ loader: false })

        }

      } else {
        Alert.alert(response.status, response.message)
      }
    }).catch((err) => {
      console.log(err)
    })
  

    }






    render() {
        const { email, password, loader } = this.state
        console.log(email, password)
        return (
            <View style={{ flex: 1, height: "100%", width: '100%', marginTop: -80 }}>
                <ImageBackground source={require('../../../assets/login.png')} style={{ height: "100%", width: "100%" }}>
                    <View style={{ width: '100%', height: '100%' }}>
                        <ScrollView keyboardShouldPersistTaps='always'>
                        <Animated.View style={[{ justifyContent: 'center', alignItems: "center" }, { transform: [{ translateY: this.state.shift }] }]} >
                            <View style={{ justifyContent: 'center', alignItems: "center", width: '100%', height: "100%" }}>
                                <View style={{ marginTop: 100 }}>
                                    <View style={{ alignContent: "center", alignSelf: "center", alignItems: "center" }}>
                                        <Image source={require('../../../assets/text.png')} />
                                    </View>

                                    <View style={{ marginTop: "10%", width: '80%', padding: 5 }}>
                                        <Text style={{ fontFamily: "Poppins-Regular", fontSize: 20, fontWeight: '600', }}>Sign In</Text>
                                        <Text style={{ fontFamily: "Poppins-Regular", marginTop: "4%", opacity: 0.6 }}>Sign in with your email ID and Password</Text>
                                    </View>

                                    <View style={{ marginTop: "5%", alignContent: "center", alignSelf: "center", alignItems: "center", width: "80%", backgroundColor: "#fff", borderRadius: 10, shadowOpacity: 1, elevation: 4, shadowRadius: 20, shadowOffset: { width: 0, height: 13 }, shadowColor: 'rgba(46, 229, 157, 0.4)', paddingVertical: "1%", overflow: "hidden" }}>
                                        {/* // Text input box with icon aligned to the left */}
                                        <View >
                                            

                                            <View style={{ display: 'flex', flexDirection: 'row', borderBottomColor: '#bdbdbd', borderBottomWidth: 0.5, width: '100%', paddingVertical: 10 }} >
                                                <View style={{ width: '20%', alignItems: 'center', justifyContent: 'center', alignContent: 'center' }}>
                                                    <Image source={require("../../../assets/envelope1.png")} style={{ height: 15, width: 20 }} />
                                                    {/* <Image source={require('../../../assets/a.svg')} style={{ height: 20, width: 20 }}  /> */}
                                                </View>
                                                <Item floatingLabel style={{ width: '80%', borderBottomWidth: 0 }}>
                                                    <Label style={{ marginLeft: 3, color: 'lightgray', fontSize: 15, bottom: 5 }}>Email Address</Label>
                                                    <Input onBlur={() => Keyboard.dismiss()} value={this.state.email} placeholderTextColor="gray" style={{ color: 'gray', width: '100%', marginBottom: 5 }} onChangeText={(e) => {
                                                        if (e.includes(' ')) {
                                                            let text = e.replace(" ", "")
                                                            this.setState({ email: text })
                                                            // Alert.alert("Alert!", "Please don't type space in email")
                                                        } else {
                                                            this.setState({ email: e })
                                                        }
                                                    }} />
                                                </Item>
                                            </View>

                                           





                                            <View style={{ display: 'flex', flexDirection: 'row', width: '100%', paddingVertical: 12 }} >
                                                <View style={{ width: '20%', alignItems: 'center', justifyContent: 'center', alignContent: 'center' }}>
                                                    <Image source={require("../../../assets/lockopen.png")} style={{ height: 20, width: 15 }} />
                                                </View>
                                                <Item floatingLabel style={{ width: '80%', borderBottomWidth: 0 }}>
                                                    <Label style={{ marginLeft: 3, color: 'lightgray', fontSize: 15, bottom: 5}}>Password</Label>
                                                    <Input secureTextEntry value={this.state.password} placeholder="*******" style={{ color: 'gray', width: '100%', marginBottom: 5 }} onChangeText={(e) => { this.setState({ password: e }) }} />
                                                </Item>
                                            </View>


                                            

                                        </View>

                                    </View>

                                    <View style={{ alignContent: "center", alignItems: "center", marginTop: "5%", paddingVertical: 10 }}>
                                        <TouchableOpacity onPress={() => { this.props.navigation.navigate("ForgotPassword", { from: "UserLogin" }) }}>
                                            <Text style={{ fontFamily: 'Poppins-Regular', opacity: 0.6 }}>Forgot Password?</Text>
                                        </TouchableOpacity>
                                    </View>

                                    {!loader ? <View style={{ alignContent: "center", alignItems: "center", marginTop: "5%" }}>
                                     

                                        <LinearGradient start={{ x: 0.0, y: 0.25 }} end={{ x: 0.0, y: 1.0 }} colors={['#F9B1B0', '#FD8788', '#FF7173']} style={{ width: "95%", borderRadius: 5 }}>
                                            <TouchableOpacity onPress={this.login} style={{ justifyContent: "center", alignContent: "center", alignItems: "center", backgroundColor: "none", opacity: 0.7, borderRadius: 10 }} style={{ flexDirection: "column", justifyContent: "center", alignContent: "center", alignItems: "center", backgroundColor: "transparent", opacity: 0.7, borderRadius: 10 }}>
                                                <Text style={{ alignSelf: "center", textAlignVertical: "center", color: "#fff", fontFamily: "Poppins-Regular", paddingVertical: 15, fontWeight: 'bold' }}>
                                                    LOGIN
                    </Text>
                                            </TouchableOpacity>
                                        </LinearGradient>
                                    </View> :
                                        <Spinner color='#fc8b8c' />
                                    }

                                    <View style={{ alignContent: "center", alignItems: "center", paddingVertical: 10 }}>
                                        <Text style={{ fontFamily: 'Poppins-Regular', opacity: 0.6 }}>Or Sign Up Using</Text>
                                    </View>


                                    <View style={{ display: "flex", flexDirection: "row", alignContent: "center", alignItems: "center", marginTop: "5%", justifyContent: "space-between", width: '80%', alignSelf: 'center' }}>


                                        <LinearGradient start={{ x: 0.0, y: 0.25 }} end={{ x: 0.0, y: 1.0 }} colors={['#c79de0', '#883cb6', '#883cb6']} style={{ width: "48%", borderRadius: 5 }}>
                                            <TouchableOpacity 
                                            // onPress={this.fbLogin}
                                            onPress={() => {
                                                this.fbLogin()
                                                // Alert.alert("Alert", "Will be implemented")
                                            }}
                                            style={{ justifyContent: "center", alignContent: "center", alignItems: "center", backgroundColor: "none", opacity: 0.7, borderRadius: 10 }} style={{ justifyContent: "center", alignContent: "center", alignItems: "center", backgroundColor: "transparent", opacity: 0.7, borderRadius: 10, flexDirection: 'row' }}>
                                                <Icon style={{ color: "#fff" }} name="instagram" type="MaterialCommunityIcons" />
                                                <Text style={{ alignSelf: "center", textAlignVertical: "center", color: "#fff", fontFamily: "Poppins-Regular", paddingVertical: 10, paddingHorizontal: 5, fontWeight: 'bold' }}>
                                                    Instagram
</Text>
                                            </TouchableOpacity>
                                        </LinearGradient>


                                        <LinearGradient start={{ x: 0.0, y: 0.25 }} end={{ x: 0.0, y: 1.0 }} colors={['#F9B1B0', '#FD8788', '#FF7173']} style={{ width: "48%", borderRadius: 5 }}>
                                            <TouchableOpacity onPress={() => {
                                                this.google()
                                                // this.signInAsync()
                                                // Alert.alert("Alert", "Will be implemented")
                                                // this.signIn()
                                            }} style={{ justifyContent: "center", alignContent: "center", alignItems: "center", backgroundColor: "none", opacity: 0.7, borderRadius: 10 }} style={{ justifyContent: "center", alignContent: "center", alignItems: "center", backgroundColor: "transparent", opacity: 0.7, borderRadius: 10, flexDirection: 'row' }}>
                                                <Icon style={{ color: "#fff" }} name="google" type="FontAwesome" />
                                                <Text style={{ alignSelf: "center", textAlignVertical: "center", color: "#fff", fontFamily: "Poppins-Regular", paddingVertical: 10, paddingHorizontal: 5, fontWeight: 'bold' }}>
                                                    Gmail
</Text>
                                            </TouchableOpacity>
                                        </LinearGradient>
                                    </View>

                                    <View style={{ display: "flex", flexDirection: "row", alignContent: "center", alignItems: "center", marginTop: "5%", justifyContent: "center", paddingVertical: 10 }}>

                                        <Text style={{ alignSelf: "center", fontFamily: "Poppins-Regular", opacity: 0.6 }}>
                                            New to Soplush Beauty?
                    </Text>
                                        <TouchableOpacity onPress={() => { this.props.navigation.navigate("UserSignUp") }} style={{ marginLeft: "3%" }}>
                                            <Text style={{ alignSelf: "center", color: "#fc8b8c", fontFamily: "Poppins-Regular", borderBottomWidth: 1, borderBottomColor: "#fc8b8c" }}>Create Account</Text>
                                        </TouchableOpacity>

                                        

                                    </View>



                                </View>
                            </View>
                            </Animated.View>
                        </ScrollView>
                        <Text></Text>
                    </View>
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
                    duration: 100,
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
                duration: 100,
                useNativeDriver: true,
            }
        ).start();
    }
}