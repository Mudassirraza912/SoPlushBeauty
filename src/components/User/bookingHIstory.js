import React, { Component } from 'react'
import { Text, View, ImageBackground, Dimensions, Image, TouchableOpacity, ScrollView } from 'react-native'
// import {  } from 'react-native-gesture-handler';
import { Container, Content, List, ListItem, Left, Right, Button } from 'native-base';
import {Avatar, Header, Icon, Card} from 'react-native-elements'


const {width, height} = Dimensions.get("window")

export default class BookingHistory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            services : [
                {
                    dateTime:"Modnay - 14/08/2019",
                    name: "So plush",
                    service: "Hair Cutting",
                    time: "02:00",
                    date: "14-08-1900",
                    cost: "$70"
                },
                {
                    dateTime:"Modnay - 14/08/2019",
                    name: "So plush",
                    service: "Hair Cutting",
                    time: "02:00",
                    date: "14-08-1900",
                    cost: "$70"
                },
                {
                    dateTime:"Modnay - 14/08/2019",
                    name: "So plush",
                    service: "Hair Cutting",
                    time: "02:00",
                    date: "14-08-1900",
                    cost: "$70"
                },
                {
                    dateTime:"Modnay - 14/08/2019",
                    name: "So plush",
                    service: "Hair Cutting",
                    time: "02:00",
                    date: "14-08-1900",
                    cost: "$70"
                },
                {
                    dateTime:"Modnay - 14/08/2019",
                    name: "So plush",
                    service: "Hair Cutting",
                    time: "02:00",
                    date: "14-08-1900",
                    cost: "$70"
                },
                {
                    dateTime:"Modnay - 14/08/2019",
                    name: "So plush",
                    service: "Hair Cutting",
                    time: "02:00",
                    date: "14-08-1900",
                    cost: "$70"
                },
                {
                    dateTime:"Modnay - 14/08/2019",
                    name: "So plush",
                    service: "Hair Cutting",
                    time: "02:00",
                    date: "14-08-1900",
                    cost: "$70"
                },
                {
                    dateTime:"Modnay - 14/08/2019",
                    name: "So plush",
                    service: "Hair Cutting",
                    time: "02:00",
                    date: "14-08-1900",
                    cost: "$70"
                },
                {
                    dateTime:"Modnay - 14/08/2019",
                    name: "So plush",
                    service: "Hair Cutting",
                    time: "02:00",
                    date: "14-08-1900",
                    cost: "$70"
                },
                {
                    dateTime:"Modnay - 14/08/2019",
                    name: "So plush",
                    service: "Hair Cutting",
                    time: "02:00",
                    date: "14-08-1900",
                    cost: "$70"
                },
                {
                    dateTime:"Modnay - 14/08/2019",
                    name: "So plush",
                    service: "Hair Cutting",
                    time: "02:00",
                    date: "14-08-1900",
                    cost: "$70"
                },
                {
                    dateTime:"Modnay - 14/08/2019",
                    name: "So plush",
                    service: "Hair Cutting",
                    time: "02:00",
                    date: "14-08-1900",
                    cost: "$70"
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
                <ImageBackground source={require('../../../assets/opacity.jpg')} style={{height:"100%", width:"100%",opacity:0.9}}> 

                <Header
                        containerStyle={{marginTop:60, backgroundColor:"#fff"}}
                        placement="left"
                        leftComponent={<Icon onPress={() => {this.props.navigation.navigate('UserHome')}} name="arrow-back" color="#000" />}
                        centerComponent={<Text style={{alignSelf:"center", fontSize:30, fontFamily:"MrEavesXLModNarOT-Reg"}}>BOOKING HISTORY</Text>}
                        // rightComponent={<TouchableOpacity onPress={() => {this.props.navigation.navigate("Notification")}}>
                        //     <Image source={require('../../../assets/notification.png')} style={{height:20, width:20}} />
                        // </TouchableOpacity>}
                        />



                <View style={{ height, width, backgroundColor:"rgba(200, 165, 212, 0.7)",justifyContent:"center"}}>

                <ScrollView style={{height: height}}>

                {/* <View style={{backgroundColor:"#fff", width:"80%",justifyContent:"center", alignContent:"center", alignSelf:"center",borderRadius:10, shadowOpacity: 1, elevation: 4, shadowRadius: 20, shadowOffset: { width: 0, height: 13 }, shadowColor: 'rgba(46, 229, 157, 0.4)', marginTop: '10%', marginBottom:'5%'}}> */}
                   
                   <View style={{justifyContent:"center", alignContent:"center", alignItems:"center", marginTop:20}}>

                <View style={{backgroundColor:"#fff",borderRadius:10, width:"90%"}}>
                    {this.state.services.map((value, index) => {
                        return(
                        <Card key={index} containerStyle={{backgroundColor:"transparent", borderColor:"#fff", borderWidth:3, borderRadius:10}}> 

                           <View style={{display:"flex", flexDirection:"row"}}> 
                                    <Text style={{marginLeft:"3%", fontFamily:"MrEavesXLModNarOT-Reg", color:"#fc8b8c", fontSize:25}}>{value.dateTime}</Text>
                                </View>




                                <View style={{display:"flex", flexDirection:"row"}}> 
                                    <Text style={{width:"50%", fontFamily:"MrEavesXLModNarOT-Reg", fontSize:20}}>Service Name</Text>
                                    <Text style={{marginLeft:"3%", fontFamily:"MrEavesXLModNarOT-Reg", fontSize:20}}>{value.service}</Text>
                                </View>


                                <View style={{display:"flex", flexDirection:"row"}}> 
                                    <Text style={{width:"30%", fontFamily:"MrEavesXLModNarOT-Reg", fontSize:20}}>User Name</Text>
                                    <Text style={{marginLeft:"3%", fontFamily:"MrEavesXLModNarOT-Reg", fontSize:20}}>{value.name}</Text>
                                </View>

                                

                                <View style={{display:"flex", flexDirection:"row"}}> 
                                    <Text style={{width:"30%", fontFamily:"MrEavesXLModNarOT-Reg", fontSize:20}}>Time</Text>
                                    <Text style={{marginLeft:"3%", fontFamily:"MrEavesXLModNarOT-Reg", fontSize:20}}>{value.time}</Text>
                                </View>

                                 <View style={{display:"flex", flexDirection:"row"}}> 
                                    <Text style={{width:"30%", fontFamily:"MrEavesXLModNarOT-Reg", fontSize:20}}>Date</Text>
                                    <Text style={{marginLeft:"3%", fontFamily:"MrEavesXLModNarOT-Reg", fontSize:20}}>{value.date}</Text>
                                </View>

                                <View style={{display:"flex", flexDirection:"row"}}> 
                                    <Text style={{width:"30%", fontFamily:"MrEavesXLModNarOT-Reg", fontSize:20}}>Cost</Text>
                                    <Text style={{marginLeft:"3%", fontFamily:"MrEavesXLModNarOT-Reg", fontSize:20}}>{value.cost}</Text>
                                </View>

                    </Card>

                        )
                    })}
                         
              </View>
         </View>
                                        
                  {/* <View style={{alignContent:"center", alignItems:"center", marginTop:"5%"}}>
                    <Button onPress={() => {this.setState({renderEMail: false, renderCode: false, renderPassword:false}),
                this.props.navigation.navigate(from)}} style={{justifyContent:"center",alignContent:"center", alignItems:"center", backgroundColor:"#fc8b8c", width:"90%", borderRadius: 10, opacity:0.7}}> 
                     <Text style={{alignSelf:"center",color:"#fff", fontFamily:"MrEavesXLModNarOT-Reg", fontSize:20}}>
                       Submit
                    </Text>   
                     </Button>
                </View>  */}

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
