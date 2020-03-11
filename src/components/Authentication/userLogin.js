// import React, { Component } from 'react'
// import { Text, View, ImageBackground, Dimensions, Image, Keyboard, Animated, UIManager, TextInput, TouchableOpacity, ScrollView, Alert, } from 'react-native'
// // import { nodeInternals } from 'stack-utils';
// import { Container, Header, Content, Item, Input, Icon, Label, Form, Button, List, ListItem, Left, Body, Spinner, } from 'native-base';
// import { LinearGradient } from 'expo-linear-gradient';

// import { LoginButton, AccessToken, LoginManager, GraphRequest, GraphRequestManager } from 'react-native-fbsdk';
// import {
//     GoogleSignin,
//     GoogleSigninButton,
//     statusCodes,
//   } from '@react-native-community/google-signin';
// const { State: TextInputState } = TextInput;
// const { width, height } = Dimensions.get("window")

// export default class UserLogin extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             shift: new Animated.Value(0),
//             email: "John@gmail.com",
//             password: "123456",
//             loader: false
//         }
//     }

//     componentWillMount() {
//         LoginManager.logOut()
//         this.keyboardDidShowSub = Keyboard.addListener('keyboardDidShow', this.handleKeyboardDidShow);
//         this.keyboardDidHideSub = Keyboard.addListener('keyboardDidHide', this.handleKeyboardDidHide);

//     }

//     static navigationOptions = () => ({
//         headerMode: 'none',
//         headerVisible: false,
//         header: null,
//     })


//     login = async () => {
//         this.setState({loader: true})
//         const { email, password } = this.state
//         console.log("FIKHSDJKDFJSN")

//         // this.props.navigation.navigate("UserHome")
//         let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

//         if (reg.test(email) === false) {
//             this.setState({loader: false})

//             Alert.alert("Email is not correct")
//         } else {

//             // http://192.168.0.120/29-may-2019/rest_api_for_plant_client/login_signup.php?action=login_user


//             const formData = new FormData();
//             formData.append("email", email),
//                 formData.append("password", password),


//                 console.log("email, password, address, name, phoneNo, profilePic", email, password)


//             fetch("http://soplush.ingicweb.com/soplush/auth/login.php?action=signin", {
//                 method: 'POST',
//                 // dataType: "json",
//                 headers: {
//                     'Accept': 'application/json',
//                     'Content-Type': 'multipart/form-data'
//                 },
//                 body: formData
//             }).then(res => res.json())
//                 .then(resp => {
//                     // console.log(JSON.stringify(resp))
//                     var successData = resp

//                     if (successData.status) {
//                             console.log('successData',successData)
//                         if (successData.status === true) {
//                             // console.log(" After Status SUCCESS USER", successData.data[0].role_id == 2)

//                             if (successData.data[0].role_id == 2) {
//                                 console.log(" After ROLE ID SUCCESS USER", this.props)
//                                 this.props.screenProps.fetchProfileData(successData.data[0])
//                                 Alert.alert("Login successful")
//                                 this.setState({loader: false})
//                                 this.props.navigation.navigate("UserHome")
//                             }
//                         } else {
//                             Alert.alert("Email or Password is incorrect")
//                             this.setState({loader: false})

//                         }
//                     } else {
//                         this.setState({loader: false})
//                         Alert.alert(successData.message)
//                     }
//                 })
//                 .catch(err => {console.log("err err err", err)
//                 this.setState({loader: false})
//                  });
//         }


//     }

//     // initUser = (token) => {
//     //     fetch(`https://graph.facebook.com/me?access_token=${token}&fields=email,id,about,picture,name,gender,friends`)
//     //     .then((response) => response.json())
//     //     .then((json) => {
//     //       // Some user object has been set up somewhere, build that user here
//     //       var user = {}
//     //       user.name = json.name
//     //       user.id = json.id
//     //       user.user_friends = json.friends
//     //       user.email = json.email
//     //       user.username = json.name
//     //       user.loading = false
//     //       user.loggedIn = true
//     //     //   user.avatar = setAvatar(json.id)      
//     //       console.log('user user user', user, json)
//     //     },
//     //     )
//     //     .catch((err) => {
//     //       console.log('ERROR GETTING DATA FROM FACEBOOK', err)
//     //     })
//     //   }


//     fbLogin = () => {

//         // LoginManager.logInWithPermissions(["public_profile"]).then(
//         //     function(result) {
//         //       if (result.isCancelled) {
//         //         console.log("Login cancelled");
//         //       } else {
//         //         console.log(
//         //           "Login success with permissions: ",
//         //             JSON.stringify(result)
//         //         );
//         //       }
//         //     },
//         //     function(error) {
//         //       console.log("Login fail with error: " + error);
//         //     }
//         //   );




//         LoginManager.logInWithPermissions(["public_profile"]).then((result) => {
//               if (result.isCancelled) {
//                 console.log("Login cancelled");
//               } else {
//                 console.log(
//                   "Login success with permissions: " +
//                     result.grantedPermissions.toString()
//                 );
//                 AccessToken.getCurrentAccessToken().then((accessTokenData ) => {
//                     const infoRequest = new GraphRequest(
//                       '/me?fields=name,picture',
//                       null,
//                       this._responseInfoCallback
//                     );
//                     // Start the graph request.
//                     new GraphRequestManager().addRequest(infoRequest).start();

//                     //   this.initUser(accessTokenData)
//                     console.log(accessTokenData, 'access')
//                   })
//               }
//             },
//             function(error) {
//               console.log("Login fail with error: " + error);
//             }
//           );
//     }


//     _responseInfoCallback = (error, result) => {
//         if (error) {
//           alert('Error fetching data: ' + error.toString());
//         } else {
//           alert('Result Name: ' + result.name);
//           console.log('Result ', result)
//         }
//       }





//     render() {
//         const { email, password, loader } = this.state
//         console.log(email, password)
//         return (
//             <View style={{ flex: 1, height, width, marginTop: -80 }}>
//                 <ImageBackground source={require('../../../assets/opacity100.png')} style={{ height: "100%", width: "100%", }}>
//                     <ScrollView>
//                         <Animated.View style={[{ justifyContent: 'center', alignItems: "center" }, { transform: [{ translateY: this.state.shift }] }]} >
//                             <View style={{ marginTop: 100 }}>
//                                 <View style={{ alignContent: "center", alignSelf: "center", alignItems: "center" }}>
//                                     <Image source={require('../../../assets/text.png')} />
//                                 </View>

//                                 <View style={{ marginTop: "10%" }}>
//                                     <Text style={{ fontFamily: "Poppins-Regular", fontSize: 30, marginLeft: "10%" }}>Sign In</Text>
//                                     <Text style={{ fontFamily: "Poppins-Regular", marginLeft: "10%", fontSize: 20, marginTop: "4%", opacity: 0.6 }}>Sign in with your email ID and Password</Text>
//                                 </View>

//                                 <View style={{ marginTop: "10%", alignContent: "center", alignSelf: "center", alignItems: "center", width: "80%", backgroundColor: "#fff", borderRadius: 10, shadowOpacity: 1, elevation: 4, shadowRadius: 20, shadowOffset: { width: 0, height: 13 }, shadowColor: 'rgba(46, 229, 157, 0.4)', paddingVertical: "1%", overflow: "hidden" }}>
//                                     {/* // Text input box with icon aligned to the left */}
//                                     <View >
//                                         <List style={{ paddingVertical: "2%", borderBottomColor:'lightgray', borderBottomWidth:0.5 }}>
//                                             <ListItem avatar>

//                                                 <Left style={{ marginBottom: "5%" }}>
//                                                     <Icon style={{ fontSize: 20, height: 50 }} active name='email-outline' type="MaterialCommunityIcons" />
//                                                 </Left>
//                                                 <Item floatingLabel style={{  marginLeft: "5%",borderBottomWidth: 0 }}>
//                                                     <Label>Email Address</Label>
//                                                     <Input value={this.state.email} style onChangeText={(e) => { this.setState({ email: e }) }} />
//                                                 </Item>
//                                             </ListItem>
//                                         </List>

//                                         {/* // Text input box with icon aligned to the right */}
//                                         <List style={{ marginTop: "5%" }}>
//                                             <ListItem avatar>

//                                                 <Left>
//                                                     <Icon style={{ fontSize: 20, height: 50 }} active name='lock-outline' type="MaterialCommunityIcons" />
//                                                 </Left>
//                                                 <Item floatingLabel style={{ marginLeft: "5%", borderBottomWidth: 0 }}>
//                                                     <Label>Password</Label>
//                                                     <Input value={this.state.password} style onChangeText={(e) => { this.setState({ password: e }) }} secureTextEntry />
//                                                 </Item>
//                                             </ListItem>
//                                         </List>

//                                     </View>

//                                 </View>

//                                 <View style={{ alignContent: "center", alignItems: "center", marginTop: "5%" }}>
//                                     <TouchableOpacity onPress={() => { this.props.navigation.navigate("ForgotPassword", { from: "UserLogin" }) }}>
//                                         <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 20 }}>Forgot Password</Text>
//                                     </TouchableOpacity>
//                                 </View>

//                              {!loader ?   <View style={{ alignContent: "center", alignItems: "center", marginTop: "5%" }}>
//                                     <LinearGradient colors={['#fff', '#fc8b8c', '#fc8b8c']} style={{ width: "90%", borderRadius: 10 }}>
//                                         <Button onPress={this.login} style={{ justifyContent: "center", alignContent: "center", alignItems: "center", backgroundColor: "none", opacity: 0.7, borderRadius: 10 }}>
//                                             <Text style={{ alignSelf: "center", color: "#fff", fontFamily: "Poppins-Regular", fontSize: 20 }}>
//                                                 Login
//                     </Text>
//                                         </Button>
//                                     </LinearGradient>
//                                 </View> : 
//                                 <Spinner color='#fc8b8c' />
//                                  }

//                                 <View style={{ alignContent: "center", alignItems: "center", marginTop: "5%" }}>
//                                     <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 20 }}>Or Sign Up Using</Text>
//                                 </View>


//                                 <View style={{ display: "flex", flexDirection: "row", alignContent: "center", alignItems: "center", marginTop: "5%", justifyContent: "space-between" }}>

//                                     <LinearGradient colors={['#fff', '#883cb6', '#883cb6']} style={{ width: "45%", borderRadius: 10 }}>
//                                         <Button onPress={() => this.fbLogin()} style={{ justifyContent: "center", alignContent: "center", alignItems: "center", backgroundColor: "none", borderRadius: 10, opacity: 0.7 }}>
//                                             <Icon name="instagram" type="MaterialCommunityIcons" />
//                                             <Text style={{ alignSelf: "center", color: "#fff", fontFamily: "Poppins-Regular", fontSize: 20, marginRight: "10%" }}>
//                                                 Instagram
//                     </Text>
//                                         </Button>
//                                         {/* <LoginButton
//           onLoginFinished={
//             (error, result) => {
//               if (error) {
//                 console.log("login has error: " + result.error);
//               } else if (result.isCancelled) {
//                 console.log("login is cancelled.");
//               } else {
//                 AccessToken.getCurrentAccessToken().then(
//                   (data) => {
//                     console.log('data.accessToken.toString()',data)
//                   }
//                 )
//                 .catch((err) => console.log(err))
//               }
//             }
//           }
//           onLogoutFinished={() => console.log("logout.")}/> */}
//                                     </LinearGradient>

//                                     <LinearGradient colors={['#fff', '#fc8b8c', '#fc8b8c']} style={{ width: "45%", borderRadius: 10 }}>
//                                         <Button style={{ justifyContent: "center", alignContent: "center", alignItems: "center", backgroundColor: "none", borderRadius: 10, opacity: 0.7 }}>
//                                             <Icon name="google" type="FontAwesome" />
//                                             <Text style={{ alignSelf: "center", color: "#fff", fontFamily: "Poppins-Regular", fontSize: 20, marginRight: "10%" }}>
//                                                 Gmail
//                     </Text>
//                                         </Button>
//                                     </LinearGradient>
//                                 </View>

//                                 <View style={{ display: "flex", flexDirection: "row", alignContent: "center", alignItems: "center", marginTop: "5%", justifyContent: "center" }}>

//                                     <Text style={{ alignSelf: "center", fontFamily: "Poppins-Regular", fontSize: 20 }}>
//                                         New to Soplush Beauty?
//                     </Text>
//                                     <TouchableOpacity onPress={() => { this.props.navigation.navigate("UserSignUp") }} style={{ marginLeft: "3%" }}>
//                                         <Text style={{ alignSelf: "center", color: "#fc8b8c", fontFamily: "Poppins-Regular", fontSize: 20, borderBottomWidth: 1, borderBottomColor: "#fc8b8c" }}>Create Account</Text>
//                                     </TouchableOpacity>

//                                     {/* <GoogleSigninButton
//                                     style={{ width: 192, height: 48 }}
//                                     size={GoogleSigninButton.Size.Wide}
//                                     color={GoogleSigninButton.Color.Dark}
//                                     onPress={this._signIn}
//                                     disabled={this.state.isSigninInProgress} /> */}

//                                 </View>



//                             </View>
//                         </Animated.View>
//                     </ScrollView>
//                 </ImageBackground>
//             </View>
//         )
//     }

//     componentWillUnmount() {
//         this.keyboardDidShowSub.remove();
//         this.keyboardDidHideSub.remove();
//     }

//     handleKeyboardDidShow = (event) => {
//         const { height: windowHeight } = Dimensions.get('window');
//         const keyboardHeight = event.endCoordinates.height;
//         const currentlyFocusedField = TextInputState.currentlyFocusedField();
//         UIManager.measure(currentlyFocusedField, (originX, originY, width, height, pageX, pageY) => {
//             const fieldHeight = height;
//             const fieldTop = pageY;
//             const gap = (windowHeight - keyboardHeight) - (fieldTop + fieldHeight);
//             if (gap >= 0) {
//                 return;
//             }
//             Animated.timing(
//                 this.state.shift,
//                 {
//                     toValue: gap,
//                     duration: 1000,
//                     useNativeDriver: true,
//                 }
//             ).start();
//         });
//     }

//     handleKeyboardDidHide = () => {
//         Animated.timing(
//             this.state.shift,
//             {
//                 toValue: 0,
//                 duration: 1000,
//                 useNativeDriver: true,
//             }
//         ).start();
//     }
// }









import React, { Component } from 'react'
import { Text, View, ImageBackground, Dimensions, Image, Keyboard, Animated, UIManager, TextInput, TouchableOpacity, ScrollView, Alert, BackHandler, AsyncStorage } from 'react-native'
// import { nodeInternals } from 'stack-utils';
import { Container, Header, Content, Item, Input, Icon, Label, Form, Button, List, ListItem, Left, Body, Spinner, } from 'native-base';
import { LinearGradient } from 'expo-linear-gradient';
// import * as AppAuth from 'expo-app-auth';
// import * as GoogleSignIn from 'expo-google-sign-in';
import * as Google from 'expo-google-app-auth';
import * as Facebook  from 'expo-facebook';

// import { LoginButton, AccessToken, LoginManager, GraphRequest, GraphRequestManager } from 'react-native-fbsdk';
// import {
//     GoogleSignin,
//     GoogleSigninButton,
//     statusCodes,
// } from '@react-native-community/google-signin';
const { State: TextInputState } = TextInput;
const { width, height } = Dimensions.get("window")

import userSvg from '../../../assets/a.svg'






// GoogleSignin.configure({
//     scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
//     webClientId: '240404485205-70t4nc6ok3jh03tu4dooro4nru85ec6i.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
//     offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
//     hostedDomain: '', // specifies a hosted domain restriction
//     loginHint: '', // [iOS] The user's ID, or email address, to be prefilled in the authentication UI if possible. [See docs here](https://developers.google.com/identity/sign-in/ios/api/interface_g_i_d_sign_in.html#a0a68c7504c31ab0b728432565f6e33fd)
//     forceConsentPrompt: true, // [Android] if you want to show the authorization prompt at each login.
//     accountName: '', // [Android] specifies an account name on the device that should be used
//     iosClientId: '240404485205-70t4nc6ok3jh03tu4dooro4nru85ec6i.apps.googleusercontent.com', // [iOS] optional, if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
//   });



// GoogleSignin.configure({
//     scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
//     webClientId: '240404485205-70t4nc6ok3jh03tu4dooro4nru85ec6i.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
//     offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
//     hostedDomain: '', // specifies a hosted domain restriction
//     loginHint: '', // [iOS] The user's ID, or email address, to be prefilled in the authentication UI if possible. [See docs here](https://developers.google.com/identity/sign-in/ios/api/interface_g_i_d_sign_in.html#a0a68c7504c31ab0b728432565f6e33fd)
//     forceConsentPrompt: true, // [Android] if you want to show the authorization prompt at each login.
//     accountName: '', // [Android] specifies an account name on the device that should be used
//     iosClientId: '240404485205-70t4nc6ok3jh03tu4dooro4nru85ec6i.apps.googleusercontent.com', // [iOS] optional, if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
// });





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
        // LoginManager.logOut()
        // console.log("APPAUTH", JSON.stringify(AppAuth.URLSchemes, null, 2))
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

        // this.props.navigation.navigate("UserHome")
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

            // http://192.168.0.120/29-may-2019/rest_api_for_plant_client/login_signup.php?action=login_user


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
                    // console.log(JSON.stringify(resp))
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
              console.log("await response.json()",`${JSON.stringify(result)}`)
            //   response &&   this.props.fbLogin(result, token)
              Alert.alert('Logged in!', `Hi ${result.name}! \n`);
            } else {
              // type === 'cancel'
              console.log("type ===", type)
            }
          } catch ({ message }) {
           console.log("FB AUTH DESTROY", message)
            Alert.alert(`Facebook Login Error: ${message}`);
          }


        // LoginManager.logInWithPermissions(["public_profile"]).then((result) => {
        //     if (result.isCancelled) {
        //         console.log("Login cancelled");
        //     } else {
        //         console.log(
        //             "Login success with permissions: " +
        //             result.grantedPermissions.toString()
        //         );
        //         AccessToken.getCurrentAccessToken().then((accessTokenData) => {
        //             const infoRequest = new GraphRequest(
        //                 '/me?fields=name,picture',
        //                 null,
        //                 this._responseInfoCallback
        //             );
        //             // Start the graph request.
        //             new GraphRequestManager().addRequest(infoRequest).start();

        //             this.initUser(accessTokenData.accessToken)
        //             console.log(accessTokenData.accessToken, 'access')
        //         })
        //     }
        // },
        //     function (error) {
        //         console.log("Login fail with error: " + error);
        //     }
        // );
    }


    

    google = async () => {
          try {
            const result = await Google.logInAsync({
            behavior:'web',
            // clientId:'612630214885-ft25uigg7qvid2ufholar94aq84sgbao.apps.googleusercontent.com',
            // androidStandaloneAppClientId:'612630214885-ft25uigg7qvid2ufholar94aq84sgbao.apps.googleusercontent.com',
            // androidClientId:'612630214885-ft25uigg7qvid2ufholar94aq84sgbao.apps.googleusercontent.com',
            // webClientId:'612630214885-ft25uigg7qvid2ufholar94aq84sgbao.apps.googleusercontent.com',


            clientId:'612630214885-b828cvt0ssagfqkcn6v0nj6d0dqv795a.apps.googleusercontent.com',
            androidStandaloneAppClientId:'612630214885-b828cvt0ssagfqkcn6v0nj6d0dqv795a.apps.googleusercontent.com',
            androidClientId:'612630214885-b828cvt0ssagfqkcn6v0nj6d0dqv795a.apps.googleusercontent.com',
            webClientId:'612630214885-b828cvt0ssagfqkcn6v0nj6d0dqv795a.apps.googleusercontent.com',

            

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
              Alert.alert("RESULT", result.user.name)
              return result.accessToken;
            } else {
              return { cancelled: true };
            }
          } catch (e) {
            return { error: true };
          }
    }






    render() {
        const { email, password, loader } = this.state
        console.log(email, password)
        return (
            <View style={{ flex: 1, height: "100%", width: '100%', marginTop: -80 }}>
                <ImageBackground source={require('../../../assets/login.png')} style={{ height: "100%", width: "100%" }}>
                    <View style={{ width: '100%', height: '100%' }}>
                        <ScrollView keyboardShouldPersistTaps='always'>
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
                                            {/* <List style={{ paddingVertical: "2%", borderBottomColor: 'lightgray', borderBottomWidth: 0.5 }}>
                                                <ListItem avatar>

                                                    <Left style={{ marginBottom: "5%" }}>
                                                        <Icon style={{ fontSize: 20, height: 50 }} active name='email-outline' type="MaterialCommunityIcons" />
                                                    </Left>
                                                    <Item floatingLabel style={{ marginLeft: "5%", borderBottomWidth: 0 }}>
                                                        <Label>Email Address</Label>
                                                        <Input value={this.state.email} style onChangeText={(e) => { this.setState({ email: e }) }} />
                                                    </Item>
                                                </ListItem>
                                            </List> */}

                                            {/* // Text input box with icon aligned to the right */}
                                            {/* <List style={{ marginTop: "5%" }}>
                                                <ListItem avatar>

                                                    <Left>
                                                        <Icon style={{ fontSize: 20, height: 50 }} active name='lock-outline' type="MaterialCommunityIcons" />
                                                    </Left>

                                                    <Item floatingLabel style={{ marginLeft: "5%", borderBottomWidth: 0 , marginTop:-30}}>
                                                        <Label>Password</Label>
                                                        <Input value={this.state.password} onChangeText={(e) => { this.setState({ password: e }) }} secureTextEntry />
                                                    </Item>
                                                </ListItem>
                                            </List> */}

                                            <View style={{ display: 'flex', flexDirection: 'row', borderBottomColor: '#bdbdbd', borderBottomWidth: 0.5, width: '100%', paddingVertical: 10 }} >
                                                <View style={{ width: '20%', alignItems: 'center', justifyContent: 'center', alignContent: 'center' }}>
                                                    <Image source={require("../../../assets/envelope1.png")} style={{ height: 15, width: 20 }} />
                                                    {/* <Image source={require('../../../assets/a.svg')} style={{ height: 20, width: 20 }}  /> */}
                                                </View>
                                                <Item floatingLabel style={{ width: '80%', borderBottomWidth: 0 }}>
                                                    <Label style={{ marginLeft: 3, color: 'lightgray', fontSize: 15, bottom: 5 }}>Email Address</Label>
                                                    <Input value={this.state.email} placeholderTextColor="gray" style={{ color: 'gray', width: '100%', marginBottom: 5 }} onChangeText={(e) => {
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

                                            {/* <View style={{ display: 'flex', flexDirection: 'row', borderBottomColor: '#bdbdbd', borderBottomWidth: 0.5, width: '100%', paddingVertical: 1 }} >
                                                <View style={{ width: '20%', alignItems: 'center', justifyContent: 'center', alignContent: 'center' }}>
                                                    <Image source={require("../../../assets/envelope1.png")} style={{ height: 15, width: 20 }} />
                                                </View>
                                                <Item stackedLabel style={{ width: '80%', borderBottomWidth: 0 }}>
                                                    <Label style={{ marginLeft: 3, color: 'lightgray', fontSize: 12, marginTop: 10 }}>Email Address</Label>
                                                    <Input value={this.state.email} placeholderTextColor="gray" placeholder="something@gmail.com" style={{ color: 'gray', width: '100%', marginBottom: 5 }} onChangeText={(e) => { 
                                                        if (e.includes(' ')) {
                                                            let text = e.replace(" ", "")
                                                            this.setState({ email: text })
                                                            // Alert.alert("Alert!", "Please don't type space in email")
                                                        } else {
                                                            this.setState({ email: e })
                                                        }
                                                     }} />
                                                </Item>
                                            </View> */}





                                            <View style={{ display: 'flex', flexDirection: 'row', width: '100%', paddingVertical: 12 }} >
                                                <View style={{ width: '20%', alignItems: 'center', justifyContent: 'center', alignContent: 'center' }}>
                                                    <Image source={require("../../../assets/lockopen.png")} style={{ height: 20, width: 15 }} />
                                                </View>
                                                <Item floatingLabel style={{ width: '80%', borderBottomWidth: 0 }}>
                                                    <Label style={{ marginLeft: 3, color: 'lightgray', fontSize: 15, bottom: 5}}>Password</Label>
                                                    <Input secureTextEntry value={this.state.password} placeholder="*******" style={{ color: 'gray', width: '100%', marginBottom: 5 }} onChangeText={(e) => { this.setState({ password: e }) }} />
                                                </Item>
                                            </View>


                                            {/* <View style={{ display: 'flex', flexDirection: 'row', width: '100%', paddingVertical: 3 }} >
                                                <View style={{ width: '20%', alignItems: 'center', justifyContent: 'center', alignContent: 'center' }}>
                                                    <Image source={require("../../../assets/lockopen.png")} style={{ height: 20, width: 15 }} />
                                                </View>
                                                <Item stackedLabel style={{ width: '80%', borderBottomWidth: 0 }}>
                                                    <Label style={{ marginLeft: 3, color: 'lightgray', fontSize: 12, marginTop: 10 }}>Password</Label>
                                                    <Input secureTextEntry value={this.state.password} placeholder="*******" style={{ color: 'gray', width: '100%', marginBottom: 5 }} onChangeText={(e) => { this.setState({ password: e }) }} />
                                                </Item>
                                            </View> */}

                                        </View>

                                    </View>

                                    <View style={{ alignContent: "center", alignItems: "center", marginTop: "5%", paddingVertical: 10 }}>
                                        <TouchableOpacity onPress={() => { this.props.navigation.navigate("ForgotPassword", { from: "UserLogin" }) }}>
                                            <Text style={{ fontFamily: 'Poppins-Regular', opacity: 0.6 }}>Forgot Password?</Text>
                                        </TouchableOpacity>
                                    </View>

                                    {!loader ? <View style={{ alignContent: "center", alignItems: "center", marginTop: "5%" }}>
                                        {/* <LinearGradient colors={['#fff', '#fc8b8c', '#fc8b8c']} style={{ width: "90%", borderRadius: 10 }}>
                                            <Button onPress={this.login} style={{ justifyContent: "center", alignContent: "center", alignItems: "center", backgroundColor: "none", opacity: 0.7, borderRadius: 10 }}>
                                                <Text style={{ alignSelf: "center", color: "#fff", fontFamily: "Poppins-Regular", fontSize: 20 }}>
                                                    LOGIN
                    </Text>
                                            </Button>
                                        </LinearGradient> */}

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

                                        {/* <LinearGradient colors={['#fff', '#883cb6', '#883cb6']} style={{ width: "45%", borderRadius: 10 }}>
    <Button onPress={() => {
        Alert.alert("Alert", "Will be implemented")
    }} style={{ justifyContent: "center", alignContent: "center", alignItems: "center", backgroundColor: "none", borderRadius: 10, opacity: 0.7 }}>
        <Icon name="instagram" type="MaterialCommunityIcons" />
        <Text style={{ alignSelf: "center", color: "#fff", fontFamily: "Poppins-Regular", fontSize: 20, marginRight: "10%" }}>
            Instagram
</Text>
    </Button>
</LinearGradient> */}

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

                                        {/* <LinearGradient colors={['#fff', '#fc8b8c', '#fc8b8c']} style={{ width: "45%", borderRadius: 10 }}>
    <Button onPress={() => {
        Alert.alert("Alert", "Will be implemented")
    }}  style={{ justifyContent: "center", alignContent: "center", alignItems: "center", backgroundColor: "none", borderRadius: 10, opacity: 0.7 }}>
        <Icon name="google" type="FontAwesome" />
        <Text style={{ alignSelf: "center", color: "#fff", fontFamily: "Poppins-Regular", fontSize: 20, marginRight: "10%" }}>
            Gmail
</Text>
    </Button>
</LinearGradient> */}


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

                                        {/* <GoogleSigninButton
                                    style={{ width: 192, height: 48 }}
                                    size={GoogleSigninButton.Size.Wide}
                                    color={GoogleSigninButton.Color.Dark}
                                    onPress={this.signIn}
                                    disabled={this.state.isSigninInProgress} /> */}

                                    </View>



                                </View>
                            </View>
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