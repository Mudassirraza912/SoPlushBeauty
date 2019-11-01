import React, { Component } from 'react'
import { Text, View, ImageBackground, Dimensions, Image, TouchableOpacity, ScrollView } from 'react-native'
// import {  } from 'react-native-gesture-handler';
import { Container, Content, List, ListItem, Left, Right, Button, Item, Input,  Label, Form, Icon } from 'native-base';
import {Avatar, Header, Card, Divider} from 'react-native-elements'


const {width, height} = Dimensions.get("window")

export default class UserProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profileData : this.props.screenProps.profileData
                
            
        }
    }

    componentWillMount() {
        this.setState({
            profileData: this.props.screenProps.profileData
        })
    }


    static navigationOptions = () => ({
        headerMode: 'none',
        headerVisible: false,
        header: null,
    })

    
    render() {
        console.log("USERPROFILE",this.state.profileData)
        return (
            <View style={{flex:1, height, width, marginTop: -80}}>
                <ImageBackground source={require('../../../assets/opacity.jpg')} style={{height:"100%", width:"100%",opacity:0.9, marginTop: 20}}> 

              
                <Header
                        containerStyle={{marginTop:40, backgroundColor:"#fff"}}
                        placement="left"
                        leftComponent={<Icon onPress={() => {this.props.navigation.navigate('UserHome')}} name="arrow-back" color="#000" />}
                        centerComponent={<Text style={{alignSelf:"center", fontSize:30, fontFamily:"MrEavesXLModNarOT-Reg"}}>EDIT PROFILE</Text>}
                        // rightComponent={<TouchableOpacity onPress={() => {this.props.navigation.navigate("EditProfile")}}><Image source={require('../../../assets/edit.png')} style={{height:30, width:30}} /> 
                        // </TouchableOpacity> }
                        />

                <View style={{ height, width, backgroundColor:"rgba(200, 165, 212, 0.7)",justifyContent:"center"}}>

                <ScrollView style={{height: height}}>
                   
                   <View style={{justifyContent:"center", alignContent:"center", alignItems:"center", marginTop:20}}>

                {/* <View style={{backgroundColor:"#fff",borderRadius:10, width:"90%"}}> */}
                   
                        <Card containerStyle={{backgroundColor:"#fff", borderRadius:10, width:"90%",}}> 

                        <View style={{justifyContent:"center", alignContent:"center", alignItems:"center"}}>
                             <Avatar onEditPress={() => {console.log("CONSOLE LOG")}} containerStyle={{backgroundColor:"#fc8b8c",}} showEditButton  rounded size="xlarge" editButton={{name:"camera",type:"font-awesome", size:25, iconStyle:{marginTop:8} ,containerStyle:{backgroundColor:"#fc8b8c", borderRadius:50, height: 40, width:40}, color:"#fff", underlayColor:"#fc8b8c", reverseColor:"#fc8b8c", }} source={{uri:`https://hnhtechsolutions.com/hassan/soplush/profile_pics/${this.state.profileData.profile_pic}`}} />
                        </View>
                            <Item floatingLabel>
                        <Icon active name='user' type="FontAwesome"  />
                        {/* <Label>Name</Label> */}
                        <Input defaultValue={this.state.profileData.username} onChangeText={(e) => {this.setState({name:e})}} placeholder="Name" />
                    </Item>
                    
                    <Item floatingLabel>
                        <Icon active name='phone' type="MaterialCommunityIcons" />
                        {/* <Label>Phone Number</Label> */}
                        <Input defaultValue={this.state.profileData.phone_number} onChangeText={(e) => {this.setState({phoneNo:e})}} placeholder="Phone Number" />
                    </Item>
                    <Item floatingLabel>
                        <Icon active name='email' type="MaterialCommunityIcons" />
                        {/* <Label>Email Address</Label> */}
                        <Input defaultValue={this.state.profileData.email} onChangeText={(e) => {this.setState({email:e})}} placeholder="Email Address" />
                    </Item>
                    
                

                                <View style={{marginRight:"6%"}}> 

                                        <View style={{alignContent:"center", alignItems:"center", marginTop:"5%"}}>
                                            <Button onPress={() => {this.props.navigation.navigate('Main')}} style={{justifyContent:"center",alignContent:"center", alignItems:"center", backgroundColor:"#fc8b8c", width:"90%", borderRadius: 10, opacity:0.7}}> 
                                            <Text style={{alignSelf:"center",color:"#fff", fontFamily:"MrEavesXLModNarOT-Reg", fontSize:20}}>
                                            Update
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
