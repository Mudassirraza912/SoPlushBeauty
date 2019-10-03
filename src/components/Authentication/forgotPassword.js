import React, { Component } from 'react'
import { Text, View, ImageBackground , Dimensions, Image, Keyboard, Animated, UIManager, TextInput, TouchableOpacity, ScrollView} from 'react-native'
// import { nodeInternals } from 'stack-utils';
import { Container, Header, Content, Item, Input, Icon, Label, Form, Button } from 'native-base';
import CodeInput from 'react-native-confirmation-code-input';


const { State: TextInputState } = TextInput;
const {width, height} = Dimensions.get("window")

export default class ForgotPassword extends Component {
    constructor(props) {
        super(props)
        this.state = {
            shift: new Animated.Value(0),
            renderEMail: true, 
            renderCode: false, 
            renderPassword:false,
            email:"",
            code:"",
            password:"",
            newPassword:""
         }
        //  this.refs.refname.
    //    const from = this.props.navigation.getParam("from")
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

    RenderEnterEmial = () => {
        return(
                <View>
                    <View style={{marginTop:"10%"}}>
                    <Text style={{fontFamily:"MrEavesXLModNarOT-Reg", fontSize:30,  marginLeft:"10%", textAlign:"center"}}>Email Varification</Text>
                    <Text style={{fontFamily:"MrEavesXLModNarOT-Reg", marginLeft:"10%", fontSize:20, marginTop:"4%", opacity:0.6, textAlign:"center"}}>To Reset Your Password Enter Your Email</Text>
                </View>

                <View style={{marginTop:"10%",alignContent:"center", alignSelf:"center", alignItems:"center", width:"80%", backgroundColor:"#fff",borderRadius:10, shadowOpacity: 1, elevation: 4, shadowRadius: 20, shadowOffset: { width: 0, height: 13 }, shadowColor: 'rgba(46, 229, 157, 0.4)', padding:"8%"}}>
                    {/* // Text input box with icon aligned to the left */}
                    <Item floatingLabel style={{marginBottom:"3%"}}>
                        <Icon active name='email-outline' type="MaterialCommunityIcons" />
                        <Label>Email Address</Label>
                        <Input onChangeText={(e) => {this.setState({email:e})}} />
                    </Item>


                   


                    {/* // Text input box with icon aligned to the right */}
                  </View>

                  <View style={{alignContent:"center", alignItems:"center", marginTop:"5%"}}>
                    <Button onPress={() => {this.setState({renderEMail: false, renderCode: true, renderPassword:false})}} style={{justifyContent:"center",alignContent:"center", alignItems:"center", backgroundColor:"#f14538", width:"90%", borderRadius: 10, opacity:0.7}}> 
                     <Text style={{alignSelf:"center",color:"#fff", fontFamily:"MrEavesXLModNarOT-Reg", fontSize:20}}>
                        Continue    
                    </Text>   
                     </Button>
                </View>

                
                </View>
        )
    }




    RenderCode = () => {
        return(
                <View>
                    <View style={{marginTop:"10%"}}>
                    <Text style={{fontFamily:"MrEavesXLModNarOT-Reg", fontSize:30,  marginLeft:"10%", textAlign:"center"}}>Email Varification</Text>
                    <Text style={{fontFamily:"MrEavesXLModNarOT-Reg", marginLeft:"10%", fontSize:20, marginTop:"4%", opacity:0.6, textAlign:"center"}}>To vrify your email . Please Enter 4 digit code</Text>
                </View>

                <View style={{marginTop:"10%",alignContent:"center", alignSelf:"center", alignItems:"center", width:"80%", backgroundColor:"#fff",borderRadius:10, shadowOpacity: 1, elevation: 4, shadowRadius: 20, shadowOffset: { width: 0, height: 13 }, shadowColor: 'rgba(46, 229, 157, 0.4)', padding:"4%", marginBottom:"5%"}}>


                        <CodeInput
                    // ref="codeInputRef2"
                    // secureTextEntry
                    codeLength={4}
                    // compareWithCode='1234'
                    activeColor='rgba(49, 180, 4, 1)'
                    inactiveColor='rgba(49, 180, 4, 1.3)'
                    autoFocus={false}
                    ignoreCase={true}
                    inputPosition='center'
                    size={30}
                    onFulfill={(isValid) => {this.setState({code:isValid})}}
                    containerStyle={{ marginTop: 30 }}
                    codeInputStyle={{ borderWidth: 1.5, borderColor:"rgba(242, 201, 240, 0.7)" , borderRadius: 5, color:"#000"}}
                    />
               
                  </View>


                  <View>
                    <Text style={{alignSelf:"center",color:"#000", fontFamily:"MrEavesXLModNarOT-Reg", fontSize:20, textAlign:"center"}}>
                        Code Expires in 01:30
                    </Text>
                </View>

                <View>
                <TouchableOpacity onPress={() => {this.props.navigation.navigate("UserSignUp")}} style={{marginLeft:"3%", marginBottom:"5%"}}>
                        <Text style={{alignSelf:"center",color:"#f14538", fontFamily:"MrEavesXLModNarOT-Reg", fontSize:20, borderBottomWidth:1,borderBottomColor:"#f14538"}}>Resend Code</Text>
                    </TouchableOpacity>
                </View>


                  <View style={{alignContent:"center", alignItems:"center", marginTop:"5%"}}>
                    <Button onPress={() => {this.setState({renderEMail: false, renderCode: false, renderPassword:true})}} style={{justifyContent:"center",alignContent:"center", alignItems:"center", backgroundColor:"#f14538", width:"90%", borderRadius: 10, opacity:0.7}}> 
                     <Text style={{alignSelf:"center",color:"#fff", fontFamily:"MrEavesXLModNarOT-Reg", fontSize:20}}>
                        Continue    
                    </Text>   
                     </Button>
                </View>

                
                </View>
        )
    }



    RenderChangePassword = () => {
       const from = this.props.navigation.getParam("from")
        return(
                <View>
                    <View style={{marginTop:"10%"}}>
                    <Text style={{fontFamily:"MrEavesXLModNarOT-Reg", fontSize:30,  marginLeft:"10%", textAlign:"center"}}>Change Password</Text>
                    <Text style={{fontFamily:"MrEavesXLModNarOT-Reg", marginLeft:"10%", fontSize:20, marginTop:"4%", opacity:0.6, textAlign:"center"}}>Enter your new Password to Login Your Account</Text>
                </View>

                <View style={{marginTop:"10%",alignContent:"center", alignSelf:"center", alignItems:"center", width:"80%", backgroundColor:"#fff",borderRadius:10, shadowOpacity: 1, elevation: 4, shadowRadius: 20, shadowOffset: { width: 0, height: 13 }, shadowColor: 'rgba(46, 229, 157, 0.4)', padding:"8%"}}>
                    {/* // Text input box with icon aligned to the left */}
                    <Item floatingLabel>
                        <Icon active name='lock-outline' type="MaterialCommunityIcons" />
                        <Label>Password</Label>
                        <Input onChangeText={(e)=> {this.setState({password: e})}} secureTextEntry={true} />
                    </Item>

                    <Item floatingLabel>
                        <Icon active name='lock-outline' type="MaterialCommunityIcons" />
                        <Label>Confirm Password</Label>
                        <Input onChangeText={(e)=> {this.setState({newPassword: e})}} secureTextEntry={true} />
                    </Item>


                   


                    {/* // Text input box with icon aligned to the right */}
                  </View>

                  <View style={{alignContent:"center", alignItems:"center", marginTop:"5%"}}>
                    <Button onPress={() => {this.setState({renderEMail: false, renderCode: false, renderPassword:false}),
                this.props.navigation.navigate(from)}} style={{justifyContent:"center",alignContent:"center", alignItems:"center", backgroundColor:"#f14538", width:"90%", borderRadius: 10, opacity:0.7}}> 
                     <Text style={{alignSelf:"center",color:"#fff", fontFamily:"MrEavesXLModNarOT-Reg", fontSize:20}}>
                       Submit
                    </Text>   
                     </Button>
                </View>

                
                </View>
        )
    }

    
    render() {
        const {renderCode, renderEMail, renderPassword, email, code, password, newPassword} = this.state
        console.log(email, password, newPassword, code)
        return (
            <View style={{flex:1, height, width, marginTop: -80}}>
            <ImageBackground source={require('../../../assets/opacity100.png')} style={{height:"100%", width:"100%",}}>
            <ScrollView style={{backgroundColor:"rgba(242, 201, 240, 0.5)"}}> 
            <Animated.View style={[{ justifyContent: 'center', alignItems: "center" }, { transform: [{ translateY: this.state.shift }] }]} >
            <View style={{marginTop:100}}>
                <View style={{alignContent:"center", alignSelf:"center", alignItems:"center"}}>
                    <Image source={require('../../../assets/text.png')} />
                </View>

                   {renderEMail && <this.RenderEnterEmial />}
                   {renderPassword && <this.RenderChangePassword />}
                   {renderCode && <this.RenderCode />}

                

              


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
