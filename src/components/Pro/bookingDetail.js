import React, { Component } from 'react'
import { Text, View, ImageBackground, Dimensions, Image, TouchableOpacity, ScrollView } from 'react-native'
// import {  } from 'react-native-gesture-handler';
import { Container, Content, List, ListItem, Left, Right, Button } from 'native-base';
import {Avatar, Header, Icon, Card} from 'react-native-elements'
import LinearGradient from 'react-native-linear-gradient'


const {width, height} = Dimensions.get("window")

var varservices = null

export default class BookingDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            services : null
        }
    }


    componentWillMount() {
        this.setState({
            services:  this.props.navigation.getParam('bookinDetail')
        })
        console.log(this.props.navigation.getParam("bookinDetail"))
    }




    static navigationOptions = () => ({
        headerMode: 'none',
        headerVisible: false,
        header: null,
    })

    
    render() {
    const {services} = this.state
    // if (services !== false) {
    // console.log("",services.services[0])
        
    // }

    varservices = this.props.navigation.getParam('bookinDetail')

    // this.setState({
    //     services:  this.props.navigation.getParam('bookinDetail')
    // })
        return (
            <View style={{flex:1, height:'100%', width:'100%', marginTop: -80}}>
                <ImageBackground source={require('../../../assets/map.png')} style={{height:"100%", width:"100%",opacity:0.9, marginTop: 20}}> 

                <Header
                        containerStyle={{marginTop:40, backgroundColor:"#fff"}}
                        placement="left"
                        leftComponent={<Icon onPress={() => {this.props.navigation.navigate('BookingReq')}} name="arrow-back" color="#000" />}
                        centerComponent={<Text style={{alignSelf:'center',fontSize:30, fontFamily:"MrEavesXLModNarOT-Reg"}}>BOOKING DETAILS</Text>}
                        rightComponent={<TouchableOpacity onPress={() => {this.props.navigation.navigate("Notification")}}><Image source={require('../../../assets/notification.png')} style={{height:20, width:20}} /> 
                        </TouchableOpacity> }
                        />



                <ScrollView style={{height: height}}>
                   
                   <View style={{justifyContent:"center", alignContent:"center", alignItems:"center", marginTop:20}}>

                <View style={{backgroundColor:"#fff",borderRadius:10, width:"90%"}}>
                  
                        <Card containerStyle={{borderColor:"none", borderWidth:0, borderRadius:10,}}> 
                                <View style={{display:"flex", flexDirection:"row"}}> 
                                    <Text style={{width:"50%", fontFamily:"MrEavesXLModNarOT-Reg", fontSize:20, color:'#aaaaaa' }}>Name</Text>
                                    <Text style={{marginLeft:"4%", fontFamily:"MrEavesXLModNarOT-Reg", fontSize:20 }}>{varservices.username}</Text>
                                    {/* <TouchableOpacity>
                                    <Text  style={{marginLeft:"30%", color:"#fc8b8c", borderBottomColor:"#fc8b8c", borderBottomWidth:1, fontFamily:"MrEavesXLModNarOT-Reg", width:50}}>VIEW DETAILS</Text>
                                    </TouchableOpacity> */}
                                </View>

                                <View style={{display:"flex", flexDirection:"row"}}> 
                                    <Text style={{width:"50%", fontFamily:"MrEavesXLModNarOT-Reg", fontSize:20, color:'#aaaaaa' }}>Service</Text>
                                   {varservices && <View>
                                                    {varservices.services.map((value, index) => {
                                                        console.log('value.service_name', value)
                                                        return(
                                                            <Text style={{ marginLeft: "10%", fontFamily: "MrEavesXLModNarOT-Reg", fontSize:20  }}> {value.service_name}</Text>
                                                        )
                                                    })    
                                                    }
                                                    </View>}
                                </View>

                                <View style={{ display: "flex", flexDirection: "row" }}>
                                                    <Text style={{ width: "50%", fontFamily: "MrEavesXLModNarOT-Reg", fontSize:20 , color:'#aaaaaa'}}>Time</Text>
                                                    <Text style={{ marginLeft: "4%", fontFamily: "MrEavesXLModNarOT-Reg", fontSize:20  }}>{varservices.time_slot}</Text>
                                    </View>
{/* 
                                <View style={{display:"flex", flexDirection:"row"}}> 
                                    <Text style={{width:"30%", fontFamily:"MrEavesXLModNarOT-Reg"}}>Time</Text>
                                    <Text style={{marginLeft:"3%", fontFamily:"MrEavesXLModNarOT-Reg"}}>{services.time_slot}</Text>
                                </View> */}

                                 <View style={{display:"flex", flexDirection:"row"}}> 
                                    <Text style={{width:"50%", fontFamily:"MrEavesXLModNarOT-Reg", fontSize:20, color:'#aaaaaa' }}>Date</Text>
                                    <Text style={{marginLeft:"4%", fontFamily:"MrEavesXLModNarOT-Reg", fontSize:20 }}>{varservices.service_date}</Text>
                                </View>

                                <View style={{display:"flex", flexDirection:"row", overflow:"hidden"}}> 
                                    <Text style={{width:"50%", fontFamily:"MrEavesXLModNarOT-Reg", fontSize:20, color:'#aaaaaa' }}>Mobile </Text>
                                    <Text style={{marginLeft:"4%", fontFamily:"MrEavesXLModNarOT-Reg", width:"60%", fontSize:20 }}>{varservices.mobile}</Text>
                                </View>


                                <View style={{display:"flex", flexDirection:"row"}}> 
                                    <Text style={{width:"50%", fontFamily:"MrEavesXLModNarOT-Reg", fontSize:20, color:'#aaaaaa' }}>Address</Text>
                                    <Text style={{marginLeft:"4%", fontFamily:"MrEavesXLModNarOT-Reg", fontSize:20 }}>{varservices.address}</Text>
                                </View>

                               
                                <View style={{display:"flex",  marginRight:"6%", marginTop:"5%", width:"100%"}}> 

                                {/* <LinearGradient colors={['#fff', '#fc8b8c', '#fc8b8c']} style={{ width: "100%", borderRadius: 10 }}>
                                        <Button onPress={() => this.props.navigation.navigate('BookingReq')} style={{ justifyContent: "center", alignContent: "center", alignItems: "center", backgroundColor: "none", borderRadius: 10, opacity: 0.7 }}>
                                            <Text style={{ alignSelf: "center", color: "#fff", fontFamily: "MrEavesXLModNarOT-Reg", fontSize: 20, marginRight: "10%" }}>
                                               Ok
</Text>
                                        </Button>
                                    </LinearGradient> */}


<LinearGradient start={{ x: 0.0, y: 0.25 }} end={{ x: 0.0, y: 1.0 }} colors={['#F9B1B0', '#FD8788', '#FF7173']} style={{ width: "90%", borderRadius: 10}}>
                                        <TouchableOpacity onPress={() => this.props.navigation.navigate('BookingReq')} style={{ justifyContent: "center", alignContent: "center", alignItems: "center", backgroundColor: "none", opacity: 0.7, borderRadius: 10 }} style={{ flexDirection: "column", justifyContent: "center", alignContent: "center", alignItems: "center", backgroundColor: "transparent", opacity: 0.7, borderRadius: 10 }}>
                                            <Text style={{ alignSelf: "center", textAlignVertical: "center", color: "#fff", fontFamily: "MrEavesXLModNarOT-Reg", fontSize: 20, paddingVertical: 15 }}>
                                            Ok
                    </Text>
                                        </TouchableOpacity>
                                    </LinearGradient>
                                </View>
                    </Card>

                         
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
