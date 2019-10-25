import React, { Component } from 'react'
import { Text, View, ImageBackground, Dimensions, Image, TouchableOpacity, ScrollView } from 'react-native'
// import {  } from 'react-native-gesture-handler';
import { Container, Content, List, ListItem, Left, Right, Button } from 'native-base';
import {Avatar, Header, Icon, Card} from 'react-native-elements'
import LinearGradient from 'react-native-linear-gradient'


const {width, height} = Dimensions.get("window")

export default class BookingDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            services : [
                {
                    name: "So plush",
                    service: "Hair Cutting",
                    time: "02:00",
                    date: "14-08-1900",
                    address:"Lorem Ipsum is simply dummy text of the ",
                    mobile:"090078601"
                },
            ]
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
                <ImageBackground source={require('../../../assets/map.png')} style={{height:"100%", width:"100%",opacity:0.9, marginTop: 20}}> 

                <Header
                        containerStyle={{marginTop:40, backgroundColor:"#fff"}}
                        placement="left"
                        leftComponent={<Icon onPress={() => {this.props.navigation.navigate('BookingReq')}} name="arrow-back" color="#000" />}
                        centerComponent={<Text style={{alignSelf:"center", fontSize:30, fontFamily:"MrEavesXLModNarOT-Reg"}}>BOOKING DETAILS</Text>}
                        rightComponent={<TouchableOpacity onPress={() => {this.props.navigation.navigate("Notification")}}><Image source={require('../../../assets/notification.png')} style={{height:20, width:20}} /> 
                        </TouchableOpacity> }
                        />



                <ScrollView style={{height: height}}>
                   
                   <View style={{justifyContent:"center", alignContent:"center", alignItems:"center", marginTop:20}}>

                <View style={{backgroundColor:"#fff",borderRadius:10, width:"90%"}}>
                    {this.state.services.map((value, index) => {
                        return(
                        <Card containerStyle={{backgroundColor:"transparent", borderColor:"#fff", borderWidth:3, borderRadius:10}}> 
                                <View style={{display:"flex", flexDirection:"row"}}> 
                                    <Text style={{width:"30%", fontFamily:"MrEavesXLModNarOT-Reg"}}>Name</Text>
                                    <Text style={{marginLeft:"3%", fontFamily:"MrEavesXLModNarOT-Reg"}}>{value.name}</Text>
                                    {/* <TouchableOpacity>
                                    <Text  style={{marginLeft:"30%", color:"#fc8b8c", borderBottomColor:"#fc8b8c", borderBottomWidth:1, fontFamily:"MrEavesXLModNarOT-Reg", width:50}}>VIEW DETAILS</Text>
                                    </TouchableOpacity> */}
                                </View>

                                <View style={{display:"flex", flexDirection:"row"}}> 
                                    <Text style={{width:"30%", fontFamily:"MrEavesXLModNarOT-Reg"}}>Service</Text>
                                    <Text style={{marginLeft:"3%", fontFamily:"MrEavesXLModNarOT-Reg"}}>{value.service}</Text>
                                </View>

                                <View style={{display:"flex", flexDirection:"row"}}> 
                                    <Text style={{width:"30%", fontFamily:"MrEavesXLModNarOT-Reg"}}>Time</Text>
                                    <Text style={{marginLeft:"3%", fontFamily:"MrEavesXLModNarOT-Reg"}}>{value.time}</Text>
                                </View>

                                 <View style={{display:"flex", flexDirection:"row"}}> 
                                    <Text style={{width:"30%", fontFamily:"MrEavesXLModNarOT-Reg"}}>Datae</Text>
                                    <Text style={{marginLeft:"3%", fontFamily:"MrEavesXLModNarOT-Reg"}}>{value.date}</Text>
                                </View>

                                <View style={{display:"flex", flexDirection:"row"}}> 
                                    <Text style={{width:"30%", fontFamily:"MrEavesXLModNarOT-Reg"}}>Address</Text>
                                    <Text style={{marginLeft:"3%", fontFamily:"MrEavesXLModNarOT-Reg"}}>{value.address}</Text>
                                </View>

                                <View style={{display:"flex", flexDirection:"row", overflow:"hidden"}}> 
                                    <Text style={{width:"30%", fontFamily:"MrEavesXLModNarOT-Reg"}}>Mobile </Text>
                                    <Text style={{marginLeft:"3%", fontFamily:"MrEavesXLModNarOT-Reg", width:"60%"}}>{value.mobile}</Text>
                                </View>

                                <View style={{display:"flex",  marginRight:"6%", marginTop:"5%", width:"100%"}}> 

                                <LinearGradient colors={['#fff', '#fc8b8c', '#fc8b8c']} style={{ width: "100%", borderRadius: 10 }}>
                                        <Button style={{ justifyContent: "center", alignContent: "center", alignItems: "center", backgroundColor: "none", borderRadius: 10, opacity: 0.7 }}>
                                            <Text style={{ alignSelf: "center", color: "#fff", fontFamily: "MrEavesXLModNarOT-Reg", fontSize: 20, marginRight: "10%" }}>
                                               Ok
</Text>
                                        </Button>
                                    </LinearGradient>
                                </View>
                    </Card>

                        )
                    })}
                         
              </View>
         </View>

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


                </ImageBackground>
        </View>
        )
    }
}
