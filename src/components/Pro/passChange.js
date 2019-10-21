import React, { Component } from 'react'
import { Text, View, ImageBackground, Dimensions, Image, TouchableOpacity, ScrollView } from 'react-native'
// import {  } from 'react-native-gesture-handler';
import { Container, Content, List, ListItem, Left, Right, Button, Item, Input,  Label, Form, Icon } from 'native-base';
import {Avatar, Header, Card, Divider} from 'react-native-elements'


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
            <View style={{flex:1, height, width, marginTop: -80}}>
                <ImageBackground source={require('../../../assets/opacity.jpg')} style={{height:"100%", width:"100%",opacity:0.9, marginTop: 20}}> 

              
                <Header
                        containerStyle={{marginTop:40, backgroundColor:"#fff"}}
                        placement="left"
                        leftComponent={<Icon onPress={() => {this.props.navigation.navigate('Main')}} name="arrow-back" color="#000" />}
                        centerComponent={<Text style={{alignSelf:"center", fontSize:30, fontFamily:"MrEavesXLModNarOT-Reg"}}>CHANGE PASSWORD</Text>}
                        // rightComponent={<TouchableOpacity onPress={() => {this.props.navigation.navigate("EditProfile")}}><Image source={require('../../../assets/edit.png')} style={{height:30, width:30}} /> 
                        // </TouchableOpacity> }
                        />

                <View style={{ height, width, backgroundColor:"rgba(190, 144, 212, 0.7)",justifyContent:"center"}}>

                <ScrollView style={{height: height}}>
                   
                   <View style={{justifyContent:"center", alignContent:"center", alignItems:"center", marginTop:20}}>
            
            
                    <Card containerStyle={{backgroundColor:"#fff", borderRadius:10, width:"90%",}}> 

                        
                    <Item floatingLabel>
                        <Icon active name='lock' type="MaterialCommunityIcons" />   
                        {/* <Label>Email Address</Label> */}
                        <Input onChangeText={(e) => {this.setState({email:e})}} placeholder="Current Password" />
                    </Item>
                    
                    <Item floatingLabel>
                        <Icon active name='lock' type="MaterialCommunityIcons" />
                        {/* <Label>Password</Label> */}
                        <Input  onChangeText={(e) => {this.setState({password:e})}} placeholder="New Password" secureTextEntry={true} />
                    </Item>

                    <Item floatingLabel>
                        <Icon active name='lock' type="MaterialCommunityIcons" />
                        {/* <Label>Password</Label> */}
                        <Input  onChangeText={(e) => {this.setState({password:e})}} placeholder="Confirm Password" secureTextEntry={true} />
                    </Item>

                                <View style={{marginRight:"6%"}}> 

                                        <View style={{alignContent:"center", alignItems:"center", marginTop:"5%"}}>
                                            <Button onPress={() => {this.props.navigation.navigate('Main')}} style={{justifyContent:"center",alignContent:"center", alignItems:"center", backgroundColor:"#f14538", width:"90%", borderRadius: 10, opacity:0.7}}> 
                                            <Text style={{alignSelf:"center",color:"#fff", fontFamily:"MrEavesXLModNarOT-Reg", fontSize:20}}>
                                                 Update Password
                                            </Text>   
                                            </Button>
                                        </View> 

                                </View>
                    </Card>

                       
                         
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