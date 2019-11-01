import React, { Component } from 'react'
import { Text, View, ImageBackground, Dimensions, Image, TouchableOpacity, ScrollView, Alert, RefreshControl } from 'react-native'
// import {  } from 'react-native-gesture-handler';
import { Container, Content, List, ListItem, Left, Right, Button } from 'native-base';
import {Avatar, Header, Icon, Card} from 'react-native-elements'


const {width, height} = Dimensions.get("window")

// this.focusListner = this.props.navigation.addListener("willFocus",() => {
//     // Update your data
//   });

export default class ServingHistory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // services : [
            //     {
            //         dateTime:"Modnay - 14/08/2019",
            //         name: "So plush",
            //         service: "Hair Cutting",
            //         time: "02:00",
            //         date: "14-08-1900",
            //         cost: "$70"
            //     },
            //     {
            //         dateTime:"Modnay - 14/08/2019",
            //         name: "So plush",
            //         service: "Hair Cutting",
            //         time: "02:00",
            //         date: "14-08-1900",
            //         cost: "$70"
            //     },
            //     {
            //         dateTime:"Modnay - 14/08/2019",
            //         name: "So plush",
            //         service: "Hair Cutting",
            //         time: "02:00",
            //         date: "14-08-1900",
            //         cost: "$70"
            //     },
            //     {
            //         dateTime:"Modnay - 14/08/2019",
            //         name: "So plush",
            //         service: "Hair Cutting",
            //         time: "02:00",
            //         date: "14-08-1900",
            //         cost: "$70"
            //     },
            //     {
            //         dateTime:"Modnay - 14/08/2019",
            //         name: "So plush",
            //         service: "Hair Cutting",
            //         time: "02:00",
            //         date: "14-08-1900",
            //         cost: "$70"
            //     },
            //     {
            //         dateTime:"Modnay - 14/08/2019",
            //         name: "So plush",
            //         service: "Hair Cutting",
            //         time: "02:00",
            //         date: "14-08-1900",
            //         cost: "$70"
            //     },
            //     {
            //         dateTime:"Modnay - 14/08/2019",
            //         name: "So plush",
            //         service: "Hair Cutting",
            //         time: "02:00",
            //         date: "14-08-1900",
            //         cost: "$70"
            //     },
            //     {
            //         dateTime:"Modnay - 14/08/2019",
            //         name: "So plush",
            //         service: "Hair Cutting",
            //         time: "02:00",
            //         date: "14-08-1900",
            //         cost: "$70"
            //     },
            //     {
            //         dateTime:"Modnay - 14/08/2019",
            //         name: "So plush",
            //         service: "Hair Cutting",
            //         time: "02:00",
            //         date: "14-08-1900",
            //         cost: "$70"
            //     },
            //     {
            //         dateTime:"Modnay - 14/08/2019",
            //         name: "So plush",
            //         service: "Hair Cutting",
            //         time: "02:00",
            //         date: "14-08-1900",
            //         cost: "$70"
            //     },
            //     {
            //         dateTime:"Modnay - 14/08/2019",
            //         name: "So plush",
            //         service: "Hair Cutting",
            //         time: "02:00",
            //         date: "14-08-1900",
            //         cost: "$70"
            //     },
            //     {
            //         dateTime:"Modnay - 14/08/2019",
            //         name: "So plush",
            //         service: "Hair Cutting",
            //         time: "02:00",
            //         date: "14-08-1900",
            //         cost: "$70"
            //     },
                
               
            // ]
            services: false,
            refreshing: false
        }
    }

    markAsCompelet = (value,detail,index) => {
        const {services} = this.state
        const formData = new FormData()
        formData.append('booking_id', detail.booking_id)
        formData.append('beautician_id', this.props.screenProps.profileData.user_id)
        formData.append('status', value)
        fetch("https://hnhtechsolutions.com/hassan/soplush/booking/booking.php?action=change_booking_status", {
                                                method: 'POST',
                                                // dataType: "json",
                                                headers: {
                                                    'Accept': 'application/json',
                                                    'Content-Type': 'multipart/form-data'
                                                    // 'Content-Type': 'application/json'

                                                },
                                                body: formData
                                            }).then(res => res.json())
                                                .then(resp => {
                                                    //   console.log(JSON.stringify(resp))
                                                    var successData = resp

                                                    if (successData.status === true) {
                                                        // console.log("successData.data[0].role_id === 3", successData.data[0].role_id === 3)
                                                        console.log(" successData.data CHANGE STATUS", successData.data)
                                                        this.state.services.splice(index, 1)
                                                        this.setState({ services})

                                                    } else {
                                                        console.log("Else", successData)
                                                        Alert.alert(successData.message)
                                                    }
                                                })
                                                .catch(err => console.log("err err SEARCH", err));
    }


    

    componentDidMount() {
        fetch(`https://hnhtechsolutions.com/hassan/soplush/beautician/beautician_booking.php?action=get_beautician_bookings&beautician_id=${this.props.screenProps.profileData.user_id}&status=accepted`, {

                }).then(res => res.json())
                    .then(resp => {
                        console.log(JSON.stringify(resp))
                        var successData = resp

                        if (successData.status === true) {
                            console.log("successData.data[0].role_id === 3", successData.data)
                            //   console.log("Category PRO", successData)
                   this.setState({
                       services:successData.data
                   })
                        

                        } else {
                            Alert.alert(successData.message)
                        }
                    })
                    .catch(err => console.log("Category err err", err));
    }



    static navigationOptions = () => ({
        headerMode: 'none',
        headerVisible: false,
        header: null,
    })

    onRefresh = () => {
        this.setState({refreshing:true})
        fetch(`https://hnhtechsolutions.com/hassan/soplush/beautician/beautician_booking.php?action=get_beautician_bookings&beautician_id=${this.props.screenProps.profileData.user_id}&status=accepted`, {

                }).then(res => res.json())
                    .then(resp => {
                        console.log(JSON.stringify(resp))
                        var successData = resp

                        if (successData.status === true) {
                            console.log("successData.data[0].role_id === 3", successData.data)
                            //   console.log("Category PRO", successData)
                   this.setState({
                       services:successData.data,
                       refreshing: false
                   })
                        

                        } else {
                            Alert.alert(successData.message)
                        }
                    })
                    .catch(err => console.log("Category err err", err));

    }

    
    render() {
        console.log(this.state.services)
        return (
            <View style={{flex:1, height, width, marginTop: -80}}>
                <ImageBackground source={require('../../../assets/opacity.jpg')} style={{height:"100%", width:"100%",opacity:0.9}}> 

                <Header
                        containerStyle={{marginTop:60, backgroundColor:"#fff"}}
                        placement="left"
                        leftComponent={<Icon onPress={() => {this.props.navigation.navigate('Main')}} name="arrow-back" color="#000" />}
                        centerComponent={<Text style={{alignSelf:"center", fontSize:30, fontFamily:"MrEavesXLModNarOT-Reg"}}>VIEW BOOKING</Text>}
                        // rightComponent={<TouchableOpacity onPress={() => {this.props.navigation.navigate("Notification")}}>
                        //     <Image source={require('../../../assets/notification.png')} style={{height:20, width:20}} />
                        // </TouchableOpacity>}
                        />



                <View style={{ height, width, backgroundColor:"rgba(200, 165, 212, 0.7)",justifyContent:"center"}}>

                <ScrollView refreshControl={<RefreshControl refreshing={this.state.refreshing} onRefresh={this.onRefresh} />} style={{height: height}}>

                {/* <View style={{backgroundColor:"#fff", width:"80%",justifyContent:"center", alignContent:"center", alignSelf:"center",borderRadius:10, shadowOpacity: 1, elevation: 4, shadowRadius: 20, shadowOffset: { width: 0, height: 13 }, shadowColor: 'rgba(46, 229, 157, 0.4)', marginTop: '10%', marginBottom:'5%'}}> */}
                   
                   <View style={{justifyContent:"center", alignContent:"center", alignItems:"center", marginTop:20}}>
{this.state.services &&
                <View style={{backgroundColor:"#fff",borderRadius:10, width:"90%"}}>
                    {this.state.services.map((value, index) => {
                        return(
                        <Card key={index} containerStyle={{backgroundColor:"transparent", borderColor:"#fff", borderWidth:3, borderRadius:10}}> 

                           <View style={{display:"flex", flexDirection:"row"}}> 
                                    <Text style={{marginLeft:"20%", fontFamily:"MrEavesXLModNarOT-Reg", color:"#fc8b8c", fontSize:25}}>{value.dateTime}</Text>
                                </View>




                                <View style={{display:"flex", flexDirection:"row"}}> 
                                    <Text style={{width:"50%", fontFamily:"MrEavesXLModNarOT-Reg", fontSize:20}}>Service Service Name</Text>
                                    <Text style={{marginLeft:"20%", fontFamily:"MrEavesXLModNarOT-Reg", fontSize:20, textAlign:"right"}}>{value.services[0].service_name}</Text>
                                </View>


                                <View style={{display:"flex", flexDirection:"row"}}> 
                                    <Text style={{width:"50%", fontFamily:"MrEavesXLModNarOT-Reg", fontSize:20}}>User Name</Text>
                                    <Text style={{marginLeft:"20%", fontFamily:"MrEavesXLModNarOT-Reg", fontSize:20, textAlign:"right"}}>{value.username}</Text>
                                    {/* <TouchableOpacity onPress={() => {this.props.navigation.navigate('BookingDetail')}}>
                                    <Text  style={{marginLeft:"30%", color:"#fc8b8c", borderBottomColor:"#fc8b8c", borderBottomWidth:1, fontFamily:"MrEavesXLModNarOT-Reg", width:50}}>VIEW DETAILS</Text>
                                    </TouchableOpacity> */}
                                </View>

                                

                                <View style={{display:"flex", flexDirection:"row",}}> 
                                    <Text style={{width:"50%",fontFamily:"MrEavesXLModNarOT-Reg", fontSize:20}}>Time</Text>
                                    <Text style={{marginLeft:"20%", fontFamily:"MrEavesXLModNarOT-Reg", fontSize:20, textAlign:"right", justifyContent:"flex-end"}}>{value.time_slot}</Text>
                                </View>

                                 <View style={{display:"flex", flexDirection:"row"}}> 
                                    <Text style={{width:"66%", fontFamily:"MrEavesXLModNarOT-Reg", fontSize:20}}>Date</Text>
                                    <Text style={{marginLeft:"3%", fontFamily:"MrEavesXLModNarOT-Reg", fontSize:20}}>{value.service_date}</Text>
                                </View>

                              {value.services[0].s_checked  == 1 ? 
                                 <View style={{display:"flex", flexDirection:"row"}}> 
                                    <Text style={{width:"50%", fontFamily:"MrEavesXLModNarOT-Reg", fontSize:20}}>Cost</Text>
                                    <Text style={{marginLeft:"20%",  fontFamily:"MrEavesXLModNarOT-Reg", fontSize:20}}>{value.services[0].plush_cost}</Text>
                                </View>  
                                
                            :
                            <View style={{display:"flex", flexDirection:"row"}}> 
                            <Text style={{width:"50%", fontFamily:"MrEavesXLModNarOT-Reg", fontSize:20}}>Cost</Text>
                            <Text style={{marginLeft:"20%",  fontFamily:"MrEavesXLModNarOT-Reg", fontSize:20}}>{value.services[0].soplush_cost}</Text>
                            </View>  
                            
                            }

                                <View style={{display:"flex", flexDirection:"row", marginRight:"6%"}}> 

                                        <View style={{alignContent:"center", alignItems:"center", marginTop:"5%"}}>
                                            <Button onPress={() => {this.markAsCompelet('completed', value, index)}} style={{justifyContent:"center",alignContent:"center", alignItems:"center", backgroundColor:"#fc8b8c", width:"100%", borderRadius: 10, opacity:0.7}}> 
                                            <Text style={{alignSelf:"center",color:"#fff", fontFamily:"MrEavesXLModNarOT-Reg", fontSize:20}}>
                                            Mark As Compelete
                                            </Text>   
                                            </Button>
                                        </View> 

                                        <View style={{alignContent:"center", alignItems:"center", marginTop:"5%"}}>
                                            <Button style={{justifyContent:"center",alignContent:"center", alignItems:"center", backgroundColor:"#fc8b8c", borderRadius: 10, opacity:0.7, width:"60%"}}> 
                                            <Icon name="camera" type="font-awesome" color="#fff" />
                                            </Button>
                                        </View> 
                                </View>
                    </Card>

                        )
                    })}
                         
              </View>}
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
