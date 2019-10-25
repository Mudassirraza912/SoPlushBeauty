import React, { Component } from 'react'
import { Text, View, ImageBackground, Dimensions, Image, TouchableOpacity, ScrollView, Alert } from 'react-native'
// import {  } from 'react-native-gesture-handler';
import { Container, Content, List, ListItem, Left, Right, Button } from 'native-base';
import {Avatar, Header, Icon, Card} from 'react-native-elements'
import Dialog, { DialogFooter, DialogButton, DialogContent, DialogTitle } from 'react-native-popup-dialog';

const {width, height} = Dimensions.get("window")

export default class BookingReq extends Component {
    constructor(props) {
        super(props);
        this.state = {
            services : [
                {
                    name: "So plush",
                    service: "Hair Cutting",
                    time: "02:00",
                    date: "14-08-1900"
                },
                {
                    name: "So plush",
                    service: "Hair Cutting",
                    time: "02:00",
                    date: "14-08-1900"
                },
                {
                    name: "So plush",
                    service: "Hair Cutting",
                    time: "02:00",
                    date: "14-08-1900"
                },
                {
                    name: "So plush",
                    service: "Hair Cutting",
                    time: "02:00",
                    date: "14-08-1900"
                },
                {
                    name: "So plush",
                    service: "Hair Cutting",
                    time: "02:00",
                    date: "14-08-1900"
                },
                {
                    name: "So plush",
                    service: "Hair Cutting",
                    time: "02:00",
                    date: "14-08-1900"
                },
                {
                    name: "So plush",
                    service: "Hair Cutting",
                    time: "02:00",
                    date: "14-08-1900"
                },
                {
                    name: "So plush",
                    service: "Hair Cutting",
                    time: "02:00",
                    date: "14-08-1900"
                },
                {
                    name: "So plush",
                    service: "Hair Cutting",
                    time: "02:00",
                    date: "14-08-1900"
                },
                {
                    name: "So plush",
                    service: "Hair Cutting",
                    time: "02:00",
                    date: "14-08-1900"
                },
                {
                    name: "So plush",
                    service: "Hair Cutting",
                    time: "02:00",
                    date: "14-08-1900"
                },
                {
                    name: "So plush",
                    service: "Hair Cutting",
                    time: "02:00",
                    date: "14-08-1900"
                },
                {
                    name: "So plush",
                    service: "Hair Cutting",
                    time: "02:00",
                    date: "14-08-1900"
                },
                {
                    name: "So plush",
                    service: "Hair Cutting",
                    time: "02:00",
                    date: "14-08-1900"
                },
          

                
               
            ],
              accptVisible: false,
              rejectVisible:false,
              thankVisible: false
        }
    }





    static navigationOptions = () => ({
        headerMode: 'none',
        headerVisible: false,
        header: null,
    })

    
    render() {
        const {accptVisible, rejectVisible, thankVisible} = this.state
        console.log(accptVisible, rejectVisible, thankVisible)
        return (
            <View style={{flex:1, height, width, marginTop: -80}}>
                <ImageBackground source={require('../../../assets/opacity.jpg')} style={{height:"100%", width:"100%",opacity:0.9}}> 

                <Header
                        containerStyle={{marginTop:60, backgroundColor:"#fff"}}
                        placement="left"
                        leftComponent={<Icon onPress={() => {this.props.navigation.navigate('Main')}} name="arrow-back" color="#000" />}
                        centerComponent={<Text style={{alignSelf:"center", fontSize:30, fontFamily:"MrEavesXLModNarOT-Reg"}}>BOOKING REQUEST</Text>}
                        rightComponent={<TouchableOpacity onPress={() => {this.props.navigation.navigate("Notification")}}>
                            <Image source={require('../../../assets/notification.png')} style={{height:20, width:20}} />
                        </TouchableOpacity>}
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
                                    <Text style={{width:"30%", fontFamily:"MrEavesXLModNarOT-Reg"}}>Name</Text>
                                    <Text style={{marginLeft:"3%", fontFamily:"MrEavesXLModNarOT-Reg"}}>{value.name}</Text>
                                    <TouchableOpacity onPress={() => {this.props.navigation.navigate('BookingDetail')}}>
                                    <Text  style={{marginLeft:"30%", color:"#fc8b8c", borderBottomColor:"#fc8b8c", borderBottomWidth:1, fontFamily:"MrEavesXLModNarOT-Reg", width:50, textAlign:"center"}}>VIEW DETAILS</Text>
                                    </TouchableOpacity>
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

                                <View style={{display:"flex", flexDirection:"row", marginRight:"6%"}}> 

                                        <View style={{alignContent:"center", alignItems:"center", marginTop:"5%"}}>
                                            <Button onPress={() => {Alert.alert(
                                        'Booking',
                                        'Are you sure you want to accept?',
                                        [
                                            {
                                            text: 'No',
                                            onPress: () => console.log('Cancel Pressed'),
                                            style: 'cancel',
                                            },
                                            {text: 'Yes', onPress: () => {Alert.alert(
                                                'Thank You',
                                                'Thank you for accepting the booking',
                                                [
                                                    {text: 'OK', onPress: () => {this.props.navigation.navigate('ServingHistory')}},
                                                ],
                                                {cancelable: false},
                                                )}},
                                        ],
                                        {cancelable: false},
                                        )}} style={{justifyContent:"center",alignContent:"center", alignItems:"center", backgroundColor:"#fc8b8c", width:"90%", borderRadius: 10, opacity:0.7}}> 
                                            <Text style={{alignSelf:"center",color:"#fff", fontFamily:"MrEavesXLModNarOT-Reg", fontSize:20}}>
                                            Accept
                                            </Text>   
                                            </Button>
                                        </View> 

                                        <View style={{alignContent:"center", alignItems:"center", marginTop:"5%"}}>
                                            <Button onPress={() => {{Alert.alert(
                                        'Booking',
                                        'Are you sure you want to reject?',
                                        [
                                            {
                                            text: 'No',
                                            onPress: () => console.log('Cancel Pressed'),
                                            style: 'cancel',
                                            },
                                            {text: 'Yes', onPress: () => {this.props.navigation.navigate('ServingHistory')}},
                                        ],
                                        {cancelable: false},
                                        )}}} style={{justifyContent:"center",alignContent:"center", alignItems:"center", backgroundColor:"#ffff", width:"90%", borderRadius: 10, opacity:0.7, borderColor:"#fc8b8c", borderWidth: 1}}> 
                                            <Text style={{alignSelf:"center",color:"#000", fontFamily:"MrEavesXLModNarOT-Reg", fontSize:20}}>
                                            Reject
                                            </Text>   
                                            </Button>
                                        </View> 
                                </View>
                    </Card>

                        )
                    })}
                         
              </View>
         </View>
                                        

                    {accptVisible && 
                    <View>
                   

                                         {   Alert.alert(
                                        'Alert Title',
                                        'My Alert Msg',
                                        [
                                            {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
                                            {
                                            text: 'Cancel',
                                            onPress: () => console.log('Cancel Pressed'),
                                            style: 'cancel',
                                            },
                                            {text: 'OK', onPress: () => console.log('OK Pressed')},
                                        ],
                                        {cancelable: false},
                                        )}

                                </View>}


                                {rejectVisible && 
                                <View>
                                    <Dialog
                                    visible={rejectVisible}
                                    footer={
                                    <DialogFooter>
                                        <DialogButton
                                        textStyle={{color:"#fc8b8c"}}
                                        text="Yes"
                                        onPress={() => {this.props.navigation.navigate('ServingHistory')}}
                                        />
                                        <DialogButton
                                        textStyle={{color:"#fc8b8c"}}
                                        text="No"
                                        onPress={() => {this.setState({rejectVisible: !rejectVisible})}}
                                        />
                                    </DialogFooter>
                                    }
                                    dialogTitle={<DialogTitle title="Booking" />}
                                >
                                    <DialogContent>
                                    <Text style={{marginTop:"2%"}}>Are You Sure You want to reject?</Text>
                                    </DialogContent>
                                </Dialog>
                                
                                </View>}


                                {thankVisible && 
                                <View>
                                <Dialog
                                    visible={thankVisible}
                                    footer={
                                    <DialogFooter>
                                        <DialogButton
                                        textStyle={{color:"#fc8b8c"}}
                                        text="Ok"
                                        onPress={() => {this.setState({thankVisible:!thankVisible}),this.props.navigation.navigate('ServingHistory')}}
                                        />
                                    </DialogFooter>
                                    }
                                    dialogTitle={<DialogTitle title="Thank You" />}
                                >
                                    <DialogContent>
                                    <Text style={{marginTop:"2%"}}>Thank you for accepting the booking</Text>
                                    </DialogContent>
                                </Dialog>
                                </View>
                            }



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
