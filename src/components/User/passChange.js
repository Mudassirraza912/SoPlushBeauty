import React, { Component } from 'react'
import { Text, View, ImageBackground, Dimensions, Image, TouchableOpacity, ScrollView } from 'react-native'
// import {  } from 'react-native-gesture-handler';
import { Container, Content, List, ListItem, Left, Right, Button, Item, Input,  Label, Form, Icon } from 'native-base';
import {Avatar, Header, Card, Divider} from 'react-native-elements'
import LinearGradient from 'react-native-linear-gradient'


const {width, height} = Dimensions.get("window")

export default class PassChange extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profileData : 
                {
                    name: "So plush",
                    email: "SoPlush@gmail.com",
                    mobile: "+1 23456789",
                    gender: "Female",
                    abour: "Inspect the React component hierarchy"
                },
            
        }
    }




    static navigationOptions = () => ({
        headerMode: 'none',
        headerVisible: false,
        header: null,
    })

    
    render() {
        return (
            <View style={{flex:1, height:'100%', width:'100%', marginTop: -80}}>
                <ImageBackground source={require('../../../assets/inner.png')} style={{height:"100%", width:"100%", marginTop: 20}}> 

              
                <Header
                        containerStyle={{marginTop:40, backgroundColor:"#fff"}}
                        placement="left"
                        leftComponent={<Icon onPress={() => {this.props.navigation.navigate('UserHome')}} name="arrow-back" color="#000" />}
                        centerComponent={<Text style={{ alignSelf:'center',fontSize:20, fontFamily:"Poppins-Regular_0"}}>CHANGE PASSWORD</Text>}
                        // rightComponent={<TouchableOpacity onPress={() => {this.props.navigation.navigate("EditProfile")}}><Image source={require('../../../assets/edit.png')} style={{height:30, width:30}} /> 
                        // </TouchableOpacity> }
                        />

                <View style={{flex:1 ,height:'100%', width:'100%',justifyContent:"center"}}>

                <ScrollView style={{height: height}}>
                   
                   <View style={{flex: 1 , justifyContent:"center", alignContent:"center", alignItems:"center", marginTop:20}}>
            
            
                    <View style={{backgroundColor:"#fff", borderRadius:10, width:"90%", padding:10}}> 

                        
                    <Item  style={{width:"80%"}}>
                    <View style={{ width: 30}}>
                    <Image source={require("../../../assets/lockopen.png")} style={{ height: 20, width: 15 }} /> 
                    </View>
                        {/* <Label>Email Address</Label> */}
                        <Input secureTextEntry={true} style={{fontSize:15}} onChangeText={(e) => {this.setState({email:e})}} placeholder="Current Password" />
                    </Item>
                    
                    <Item >
                    <View style={{ width: 30}}>
                    <Image source={require("../../../assets/lockopen.png")} style={{ height: 20, width: 15 }} />
                    </View>
                        {/* <Label>Password</Label> */}
                        <Input  style={{fontSize:15}} onChangeText={(e) => {this.setState({password:e})}} placeholder="New Password" secureTextEntry={true} />
                    </Item>

                    <Item >
                    <View style={{ width: 30}}>
                    <Image source={require("../../../assets/lockopen.png")} style={{ height: 20, width: 15 }} />
                    </View>
                        {/* <Label>Password</Label> */}
                        <Input style={{fontSize:15}} onChangeText={(e) => {this.setState({password:e})}} placeholder="Confirm Password" secureTextEntry={true} />
                    </Item>

                                {/* <View> 

                                        <View style={{alignContent:"center", alignItems:"center", marginTop:"5%"}}>
                                            <Button onPress={() => {this.props.navigation.navigate('Main')}} style={{justifyContent:"center",alignContent:"center", alignItems:"center", backgroundColor:"#fc8b8c", width:"90%", borderRadius: 10, opacity:0.7}}> 
                                            <Text style={{alignSelf:"center",color:"#fff", fontFamily:"Poppins-Regular_0", fontSize:20}}>
                                                 Update Password
                                            </Text>   
                                            </Button>
                                        </View> 

                                </View> */}


                                <View style={{ alignContent: "center", alignItems: "center", marginTop: "5%", marginBottom:10 }}>
                                            {/* <LinearGradient colors={['#fff', '#fc8b8c', '#fc8b8c']} style={{ width: "90%", borderRadius: 10 }}>
                                                <Button onPress={() => {this.props.navigation.navigate('UserHome')}} style={{ justifyContent: "center", alignContent: "center", alignItems: "center", backgroundColor: "none", opacity: 0.7, borderRadius: 10 }}>
                                                    <Text style={{ alignSelf: "center", color: "#fff", fontFamily: "Poppins-Regular_0", fontSize: 20 }}>
                                                    Update Password
</Text>
                                                </Button>
                                            </LinearGradient> */}

<LinearGradient start={{ x: 0.0, y: 0.25 }} end={{ x: 0.0, y: 1.0 }} colors={['#F9B1B0', '#FD8788', '#FF7173']} style={{ width: "100%", borderRadius: 10}}>
                                        <TouchableOpacity  onPress={() => {this.props.navigation.navigate('UserHome')}} style={{ justifyContent: "center", alignContent: "center", alignItems: "center", backgroundColor: "none", opacity: 0.7, borderRadius: 10 }} style={{ flexDirection: "column", justifyContent: "center", alignContent: "center", alignItems: "center", backgroundColor: "transparent", opacity: 0.7, borderRadius: 10 }}>
                                            <Text style={{ alignSelf: "center", textAlignVertical: "center", color: "#fff", fontFamily: "Poppins-Regular_0", fontSize: 16, paddingVertical: 15 }}>
                                            UPDATE PASSWORD
                    </Text>
                                        </TouchableOpacity>
                                    </LinearGradient>

                                        </View>
                    </View>

                       
                         
              </View>
         {/* </View> */}

                <View>
                    <Text></Text>
                    <Text></Text>
                    <Text></Text>
                    <Text></Text>
                    <Text></Text>
                    <Text></Text>
                    <Text></Text>
                </View>



                </ScrollView>

                </View>
                </ImageBackground>
        </View>
        )
    }
}
