import React, { Component } from 'react'
import { Text, View, ImageBackground, Dimensions, Image, TouchableOpacity, ScrollView } from 'react-native'
// import {  } from 'react-native-gesture-handler';
import { Container, Content, List, ListItem, Left, Right, Button } from 'native-base';
import {Avatar, Header, Icon, Card, Divider} from 'react-native-elements'


const {width, height} = Dimensions.get("window")

export default class ProProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
          profileData : this.props.screenProps.profileData,
            
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
        return (
            <View style={{flex:1, height, width, marginTop: -80}}>
                <ImageBackground source={require('../../../assets/opacity.jpg')} style={{height:"100%", width:"100%",opacity:0.9, marginTop: 20}}> 

              
                <Header
                        containerStyle={{marginTop:40, backgroundColor:"#fff"}}
                        placement="left"
                        leftComponent={<Icon onPress={() => {this.props.navigation.navigate('Main')}} name="arrow-back" color="#000" />}
                        centerComponent={<Text style={{alignSelf:"center", fontSize:30, fontFamily:"MrEavesXLModNarOT-Reg"}}>PROFILE</Text>}
                        rightComponent={<TouchableOpacity onPress={() => {this.props.navigation.navigate("EditProProfile")}}><Image source={require('../../../assets/edit.png')} style={{height:30, width:30}} /> 
                        </TouchableOpacity> }
                        />

                <View style={{ height, width, backgroundColor:"rgba(200, 165, 212, 0.7)",justifyContent:"center"}}>

                <ScrollView style={{height: height}}>
                   
                   <View style={{justifyContent:"center", alignContent:"center", alignItems:"center", marginTop:20}}>

                {/* <View style={{backgroundColor:"#fff",borderRadius:10, width:"90%"}}> */}
                   
                        <Card containerStyle={{backgroundColor:"#fff", borderRadius:10, width:"90%",}}> 
                            <View style={{width:"100%"}}>
                                <Image resizeMode="cover" style={{width:"100%", height:300}} source={{uri:`https://hnhtechsolutions.com/hassan/soplush/profile_pics/${this.props.screenProps.profileData.profile_pic}`}} />
                            </View>
                                <View style={{display:"flex", flexDirection:"column", marginTop: 15}}> 
                                    <Text style={{width:"30%", fontFamily:"MrEavesXLModNarOT-Reg", fontSize:20, color: "gray"}}>Name</Text>
                                    <Text style={{ fontFamily:"MrEavesXLModNarOT-Reg", fontSize:15}}>{this.state.profileData.username}</Text>
                                    <Divider style={{ backgroundColor: 'lightgray' }} />
                                </View>

                                <View style={{display:"flex", flexDirection:"column", marginTop: 15}}> 
                                    <Text style={{width:"30%", fontFamily:"MrEavesXLModNarOT-Reg", fontSize:20, color: "gray"}}>Email</Text>
                                    <Text style={{ fontFamily:"MrEavesXLModNarOT-Reg", fontSize:15}}>{this.state.profileData.email}</Text>
                                    <Divider style={{ backgroundColor: 'lightgray' }} />
                                </View>

                                <View style={{display:"flex", flexDirection:"column", marginTop: 15}}> 
                                    <Text style={{width:"30%", fontFamily:"MrEavesXLModNarOT-Reg", fontSize:20, color: "gray"}}>Mobile No</Text>
                                    <Text style={{fontFamily:"MrEavesXLModNarOT-Reg", fontSize:15}}>{this.state.profileData.phone_number}</Text>
                                    <Divider style={{ backgroundColor: 'lightgray' }} />
                                </View>

                                 <View style={{display:"flex", flexDirection:"column", marginTop: 15}}> 
                                    <Text style={{width:"30%", fontFamily:"MrEavesXLModNarOT-Reg", fontSize:20, color: "gray"}}>Gender</Text>
                                    <Text style={{ fontFamily:"MrEavesXLModNarOT-Reg", fontSize:15}}>{this.state.profileData.gender}</Text>
                                    <Divider style={{ backgroundColor: 'lightgray' }} />
                                </View>

                                <View style={{display:"flex", flexDirection:"column", marginTop: 15}}> 
                                    <Text style={{width:"30%", fontFamily:"MrEavesXLModNarOT-Reg", fontSize:20, color: "gray"}}>About</Text>
                                    <Text style={{ fontFamily:"MrEavesXLModNarOT-Reg", fontSize:15}}>{this.state.profileData.address}</Text>
                                    <Divider style={{ backgroundColor: 'lightgray' }} />
                                </View>

                                <View> 

                                        <View style={{alignContent:"center", alignItems:"center", marginTop:"5%"}}>
                                            <Button onPress={() => {this.props.navigation.navigate('Main')}} style={{justifyContent:"center",alignContent:"center", alignItems:"center", backgroundColor:"#fc8b8c", width:"90%", borderRadius: 10, opacity:0.7}}> 
                                            <Text style={{alignSelf:"center",color:"#fff", fontFamily:"MrEavesXLModNarOT-Reg", fontSize:20}}>
                                            Ok
                                            </Text>   
                                            </Button>
                                        </View> 

                                </View>
                    </Card>




{/* <Card containerStyle={{backgroundColor:"#fff", borderRadius:10, width:"90%",}}> 
                            <View style={{width:"100%"}}>
                                <Image resizeMode="cover" style={{width:"100%", height:300}} source={{uri:`https://cdn.vox-cdn.com/thumbor/XtwGXC-0GhXcDXiM0B0rjGAAxZE=/148x0:1768x1080/1200x800/filters:focal(148x0:1768x1080)/cdn.vox-cdn.com/uploads/chorus_image/image/45905674/3042430-poster-p-1-hello-barbie-talking-toy-toytalk.0.0.jpg`}} />
                            </View>
                                <View style={{display:"flex", flexDirection:"column", marginTop: 15}}> 
                                    <Text style={{width:"30%", fontFamily:"MrEavesXLModNarOT-Reg", fontSize:20, color: "gray"}}>Name</Text>
                                    <Text style={{ fontFamily:"MrEavesXLModNarOT-Reg", fontSize:15}}>John Doe</Text>
                                    <Divider style={{ backgroundColor: 'lightgray' }} />
                                </View>

                                <View style={{display:"flex", flexDirection:"column", marginTop: 15}}> 
                                    <Text style={{width:"30%", fontFamily:"MrEavesXLModNarOT-Reg", fontSize:20, color: "gray"}}>Email</Text>
                                    <Text style={{ fontFamily:"MrEavesXLModNarOT-Reg", fontSize:15}}>John@example.com</Text>
                                    <Divider style={{ backgroundColor: 'lightgray' }} />
                                </View>

                                <View style={{display:"flex", flexDirection:"column", marginTop: 15}}> 
                                    <Text style={{width:"30%", fontFamily:"MrEavesXLModNarOT-Reg", fontSize:20, color: "gray"}}>Mobile No</Text>
                                    <Text style={{fontFamily:"MrEavesXLModNarOT-Reg", fontSize:15}}>0900-78601</Text>
                                    <Divider style={{ backgroundColor: 'lightgray' }} />
                                </View>

                                 <View style={{display:"flex", flexDirection:"column", marginTop: 15}}> 
                                    <Text style={{width:"30%", fontFamily:"MrEavesXLModNarOT-Reg", fontSize:20, color: "gray"}}>Gender</Text>
                                    <Text style={{ fontFamily:"MrEavesXLModNarOT-Reg", fontSize:15}}>Female</Text>
                                    <Divider style={{ backgroundColor: 'lightgray' }} />
                                </View>

                                <View style={{display:"flex", flexDirection:"column", marginTop: 15}}> 
                                    <Text style={{width:"30%", fontFamily:"MrEavesXLModNarOT-Reg", fontSize:20, color: "gray"}}>About</Text>
                                    <Text style={{ fontFamily:"MrEavesXLModNarOT-Reg", fontSize:15}}>Copy the following link into the website you'll use this resource on. If you want to know more, </Text>
                                    <Divider style={{ backgroundColor: 'lightgray' }} />
                                </View>

                                <View style={{marginRight:"6%"}}> 

                                        <View style={{alignContent:"center", alignItems:"center", marginTop:"5%"}}>
                                            <Button onPress={() => {this.props.navigation.navigate('Main')}} style={{justifyContent:"center",alignContent:"center", alignItems:"center", backgroundColor:"#fc8b8c", width:"90%", borderRadius: 10, opacity:0.7}}> 
                                            <Text style={{alignSelf:"center",color:"#fff", fontFamily:"MrEavesXLModNarOT-Reg", fontSize:20}}>
                                            Ok
                                            </Text>   
                                            </Button>
                                        </View> 

                                </View>
                    </Card> */}

                       
                         
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
