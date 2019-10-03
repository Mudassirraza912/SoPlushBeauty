import React, { Component } from 'react'
import { Text, View, ImageBackground , Dimensions, Image, Keyboard, Animated, UIManager, TextInput, TouchableOpacity, ScrollView} from 'react-native'
// import { nodeInternals } from 'stack-utils';
import { Container, Header, Content, Item, Input, Icon, Label, Form, Button, Body } from 'native-base';
import {Avatar} from 'react-native-elements'


const { State: TextInputState } = TextInput;
const {width, height} = Dimensions.get("window")

export default class ProLogin extends Component {
    constructor(props) {
        super(props)
        this.state = {
            shift: new Animated.Value(0),
            email: "",
            password:""
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
    render() {
        const {email, password} = this.state
        console.log(email, password)
        return (
            <View style={{flex:1, height, width, marginTop: -80}}>
            <ImageBackground source={require('../../../assets/opacity100.png')} style={{height:"100%", width:"100%",}}>
           


            <ScrollView> 
            <Animated.View style={[{ justifyContent: 'center', alignItems: "center" }, { transform: [{ translateY: this.state.shift }] }]} >
            <View style={{marginTop:100}}>
                <View style={{alignContent:"center", alignSelf:"center", alignItems:"center"}}>
                    <Image source={require('../../../assets/text.png')} />
                </View>

                <View style={{marginTop:"10%"}}>
                    <Text style={{fontFamily:"MrEavesXLModNarOT-Reg", fontSize:30,  marginLeft:"10%"}}>Sign In</Text>
                    <Text style={{fontFamily:"MrEavesXLModNarOT-Reg", marginLeft:"10%", fontSize:20, marginTop:"4%", opacity:0.6}}>Sign in with your email ID and Password</Text>
                </View>

                <View style={{marginTop:"10%",alignContent:"center", alignSelf:"center", alignItems:"center", width:"80%", backgroundColor:"#fff",borderRadius:10, shadowOpacity: 1, elevation: 4, shadowRadius: 20, shadowOffset: { width: 0, height: 13 }, shadowColor: 'rgba(46, 229, 157, 0.4)', padding:"8%"}}>
                    {/* // Text input box with icon aligned to the left */}
                    <Item floatingLabel style={{marginBottom:"3%"}}>
                        <Icon active name='email-outline' type="MaterialCommunityIcons" />
                        <Label>Email Address</Label>
                        <Input onChangeText={(e) => {this.setState({email:e})}} />
                    </Item>
                    {/* // Text input box with icon aligned to the right */}
                    <Item floatingLabel>
                        <Icon active name='lock-outline' type="MaterialCommunityIcons" />
                        <Label>Password</Label>
                        <Input onChangeText={(e) => {this.setState({password:e})}} secureTextEntry={true} />
                    </Item>
                </View>

                <View style={{alignContent:"center", alignItems:"center", marginTop:"5%"}}>
                    <TouchableOpacity onPress={() => {this.props.navigation.navigate("ForgotPassword",{ from: "ProLogin" })}}>
                                <Text style={{fontFamily:'MrEavesXLModNarOT-Reg', fontSize:20}}>Forgot Password</Text>
                    </TouchableOpacity>
                </View>

                <View style={{alignContent:"center", alignItems:"center", marginTop:"5%"}}>
                    <Button onPress={() => {this.props.navigation.navigate("Main")}} style={{justifyContent:"center",alignContent:"center", alignItems:"center", backgroundColor:"#f14538", width:"90%", borderRadius: 10, opacity:0.7}}> 
                     <Text style={{alignSelf:"center",color:"#fff", fontFamily:"MrEavesXLModNarOT-Reg", fontSize:20}}>
                        Login    
                    </Text>   
                     </Button>
                </View>

                <View style={{alignContent:"center", alignItems:"center", marginTop:"5%"}}>
                                <Text style={{fontFamily:'MrEavesXLModNarOT-Reg', fontSize:20}}>Or Sing Up Using</Text>
                </View>


                <View style={{display:"flex",flexDirection:"row",alignContent:"center", alignItems:"center", marginTop:"5%", justifyContent:"space-between"}}>
                <Button style={{justifyContent:"center",alignContent:"center", alignItems:"center", backgroundColor:"#8336b1", borderRadius: 10, opacity:0.7, width:"45%"}}>
                    <Icon name="instagram" type="MaterialCommunityIcons"/> 
                     <Text style={{alignSelf:"center",color:"#fff", fontFamily:"MrEavesXLModNarOT-Reg", fontSize:20, marginRight:"10%"}}>
                        Instagram
                    </Text>   
                     </Button>

                     
                <Button style={{justifyContent:"center",alignContent:"center", alignItems:"center", backgroundColor:"#f14538", borderRadius: 10, opacity:0.7, width:"45%"}}> 
                <Icon name="google" type="FontAwesome"/> 
                     <Text style={{alignSelf:"center",color:"#fff", fontFamily:"MrEavesXLModNarOT-Reg", fontSize:20, marginRight:"10%"}}>
                        Gmail    
                    </Text>   
                     </Button>
                </View>

                <View style={{display:"flex",flexDirection:"row",alignContent:"center", alignItems:"center", marginTop:"5%", justifyContent:"center"}}>
                    
                    <Text style={{alignSelf:"center", fontFamily:"MrEavesXLModNarOT-Reg", fontSize:20}}>
                        New to Soplush Beauty
                    </Text>
                    <TouchableOpacity onPress={() => {this.props.navigation.navigate("ProSignUp")}} style={{marginLeft:"3%"}}>
                        <Text style={{alignSelf:"center",color:"#f14538", fontFamily:"MrEavesXLModNarOT-Reg", fontSize:20, borderBottomWidth:1,borderBottomColor:"#f14538"}}>Create Account</Text>
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