import React, { Component } from 'react'
import { Text, View, ImageBackground, Dimensions, Image, TouchableOpacity, ScrollView } from 'react-native'
// import {  } from 'react-native-gesture-handler';
import { Container, Header, Content, Item, Input, Icon, Label, Form, Button} from 'native-base';
import camicon from '../../../assets/camera.png'
import pro from '../../../assets/barbie.jpg'
import { Avatar, Badge, withBadge } from 'react-native-elements';


const BadgedIcon = withBadge("X")(Avatar)
const {width, height} = Dimensions.get("window")

export default class ProSignUp extends Component {
    constructor(props) {
        super(props);
        this.state={
            profilePic:[
                camicon,
                pro,
                // pro,
                // pro,
                // pro,
                // pro,

            ],
            email:"",
            password:"",
            phoneNo:"",
            address:"",
            dOB:"",
            bank:"",
            accountNo:"",

        }
    }

  
    static navigationOptions = () => ({
        headerMode: 'none',
        headerVisible: false,
        header: null,
    })

    
    render() {
        const {email, password, name, address, phoneNo, bank, accountNo} = this.state
        console.log(email, password, name, address, phoneNo, bank, accountNo)
        return (
            <View style={{flex:1, height, width, marginTop: -80}}>
                <ImageBackground source={require('../../../assets/opacity.jpg')} style={{height:"100%", width:"100%",opacity:0.9}}> 

            <ScrollView style={{height: height}}>

                
                <View style={{ height:"100%", width, backgroundColor:"rgba(242, 201, 240, 0.7)",justifyContent:"center", marginTop: 80}}>

                <View style={{alignSelf:"center", alignContent:"center", alignItems:"center", marginTop:-60}}> 
                    <Image source={require('../../../assets/text.png')} style={{opacity: 2}} />
                    </View>

                

                   
                <View style={{marginTop:"5%",alignContent:"center", alignSelf:"center", alignItems:"center", width:"80%", backgroundColor:"#fff",borderRadius:10, shadowOpacity: 1, elevation: 4, shadowRadius: 20, shadowOffset: { width: 0, height: 13 }, shadowColor: 'rgba(46, 229, 157, 0.4)', padding:"5%"}}>

                    <View>
                        <Text style={{fontFamily:"MrEavesXLModNarOT-Reg", fontSize: 30}}>CREATE ACCOUNT</Text>
                    </View>

                    <Item floatingLabel>
                        <Icon active name='user' type="FontAwesome"  />
                        {/* <Label>Name</Label> */}
                        <Input onChangeText={(e) => this.setState({name:e})} placeholder="Name" />
                    </Item>
                    <Item floatingLabel>
                        <Icon active name='home' type="FontAwesome" />
                        {/* <Label>Address</Label> */}
                        <Input onChangeText={(e) => this.setState({address:e})}  placeholder="Address" />
                    </Item>
                    <Item floatingLabel>
                        <Icon active name='phone' type="MaterialCommunityIcons" />
                        {/* <Label>Phone Number</Label> */}
                        <Input onChangeText={(e) => this.setState({phoneNo:e})} placeholder="Phone Number" />
                    </Item>
                    <Item floatingLabel>
                        <Icon active name='email' type="MaterialCommunityIcons" />
                        {/* <Label>Email Address</Label> */}
                        <Input onChangeText={(e) => this.setState({email:e})} placeholder="Email Address" />
                    </Item>
                    
                    <Item floatingLabel>
                        <Icon active name='lock' type="MaterialCommunityIcons" />
                        {/* <Label>Password</Label> */}
                        <Input onChangeText={(e) => this.setState({password:e})} placeholder="Password"  />
                    </Item>

                    <Item floatingLabel>
                        <Icon active name='birthday-cake' type="FontAwesome" />
                        <Input onChangeText={(e) => this.setState({dOB:e})} placeholder="Date Of Birth"  />
                    </Item>

                    <Item floatingLabel>
                        <Icon active name='university' type="FontAwesome" />
                        <Input onChangeText={(e) => this.setState({bank:e})} placeholder="Bank Name"  />
                    </Item>

                    <Item floatingLabel>
                        <Icon active name="address-card" type="FontAwesome" />
                        <Input onChangeText={(e) => this.setState({accountNo:e})} placeholder="Account Number" />
                    </Item>

                    <Item  onPress={() => {alert("UPLOAD PICTURES")}} style={{marginBottom:"3%", width: "100%"}}> 
                        <Icon active name='camera' type="MaterialCommunityIcons" />
                        <Label>Upload</Label>
                    </Item>


                    <View style={{display:"flex", flexDirection:"row",marginBottom:"3%"}}>
                            {this.state.profilePic.map((val, index) => {
                                if(index == 0) {
                                    return <Avatar containerStyle={{padding:5, height:40, width: 40, marginTop:"1%"}} source={val} />
                               } else{
                                   return(
                                       <BadgedIcon  containerStyle={{padding:5, margin: 5, height:40, width: 40}} source={val}/>
                                   )
                               }

                            //     if(index == 0) {
                            //         return <ImageBackground source={val}  style={{height:30, width:30,backgroundColor:"lightgray", marginTop:"1%"}}/>
                            //    } else{
                            //        return(
                            //         <ImageBackground source={val}  style={{height:30, width:30,borderRadius:5,margin:3, display:"flex", alignContent:"center", backgroundColor:"lightgray"}}> 
                            //                 <Text style={{fontSize:7, backgroundColor: "red", borderRadius:100, color:"#fff",marginTop:-7,marginLeft:20, textAlign:"center", height:10, width:15}}>X</Text>
                            //         </ImageBackground>
                            //        )
                            //    }
                         

                            })}
                    </View>

{/* 
                 <View style={{alignContent:"center", alignItems:"center", marginTop:"5%"}}>
                    <Button style={{justifyContent:"center",alignContent:"center", alignItems:"center", backgroundColor:"#f14538", width:"90%", borderRadius: 10, opacity:0.7}}> 
                     <Text style={{alignSelf:"center",color:"#fff", fontFamily:"MrEavesXLModNarOT-Reg", fontSize:20}}>
                        Login    
                    </Text>   
                     </Button>
                </View> */}


                <Button style={{justifyContent:"center",alignContent:"center", alignItems:"center", backgroundColor:"#f14538", width:"90%", borderRadius: 10, opacity:0.7}}> 
                    <Text style={{alignSelf:"center",color:"#fff", fontFamily:"MrEavesXLModNarOT-Reg", fontSize:20}}>
                        Sign Up
                    </Text>
                </Button>


                </View>

                            
                </View>

                <View>
                    <Text></Text>
                    <Text></Text>
                    <Text></Text>
                    <Text></Text>
                    <Text></Text>
                    <Text></Text>
                </View>
                </ScrollView>
                </ImageBackground>
        </View>
        )
    }
}
