import React, { Component } from 'react'
import { Text, View, ImageBackground, Dimensions, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native'
// import {  } from 'react-native-gesture-handler';
import { Container, Content, List, ListItem, Left, Right, Button, } from 'native-base';
import {Avatar, Header, Icon, Card, Divider} from 'react-native-elements'
import NumericInput from 'react-native-numeric-input'

const {width, height} = Dimensions.get("window")

export default class ConfirmBooking extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profileData : this.props.navigation.getParam('beauticianData'),
            selectedSlot: this.props.navigation.getParam('bookingTime'),
            cart: this.props.navigation.getParam('cart')
            
        }
    }


            workFunction = (item) => {
                const {profileData, selectedSlot} = this.state
                console.log("item",item)
                
                const index = selectedSlot.findIndex(x => x == item)
                    // console.log("index",index)
                if (index != -1) {
                    selectedSlot.splice(index, 1)
                    this.setState({selectedSlot})
                }else {
                    selectedSlot.push(item)
                    this.setState({selectedSlot})
                }

            }


            addQuantity = (index, qunat) => {
                console.log(index, qunat)
                const {cart} = this.state
                cart[index].quantity = qunat
                this.setState({cart})

            }

    static navigationOptions = () => ({
        headerMode: 'none',
        headerVisible: false,
        header: null,
    })

    
    render() {
        const {selectedSlot, cart} = this.state
        console.log("Confirm", this.state.cart)
        return (
            <View style={{flex:1, height, width, marginTop: -80}}>
                <ImageBackground source={require('../../../assets/opacity.jpg')} style={{height:"100%", width:"100%",opacity:0.9, marginTop: 20}}> 

              
                <Header
                        containerStyle={{marginTop:40, backgroundColor:"#fff"}}
                        placement="left"
                        leftComponent={<Icon onPress={() => {this.props.navigation.navigate('Main')}} name="arrow-back" color="#000" />}
                        centerComponent={<Text style={{alignSelf:"center", fontSize:30, fontFamily:"MrEavesXLModNarOT-Reg"}}>CONFIRM BOOKING</Text>}
                        rightComponent={<TouchableOpacity onPress={() => {this.props.navigation.navigate("Notification")}}>
                        <Image source={require('../../../assets/notification.png')} style={{height:20, width:20}} />
                    </TouchableOpacity>}
                        />

                <View style={{ height, width, backgroundColor:"rgba(200, 165, 212, 0.7)",justifyContent:"center"}}>

                <ScrollView style={{height: height}}>
                   
                   <View style={{justifyContent:"center", alignContent:"center", alignItems:"center", marginTop:20}}>

                {/* <View style={{backgroundColor:"#fff",borderRadius:10, width:"90%"}}> */}
                   
                        <Card containerStyle={{backgroundColor:"#fff", borderRadius:10, width:"90%",}}> 
                            
                                <View style={{display:"flex", flexDirection:"column", marginTop: 15}}> 
                                    <Text style={{width:"30%", fontFamily:"MrEavesXLModNarOT-Reg", fontSize:20, color: "gray"}}>Name</Text>
                                    <Text style={{ fontFamily:"MrEavesXLModNarOT-Reg", fontSize:15}}>{this.state.profileData.name}</Text>
                                    <Divider style={{ backgroundColor: 'lightgray' }} />
                                </View>

                                <View style={{display:"flex", flexDirection:"column", marginTop: 15}}> 
                                    <Text style={{width:"30%", fontFamily:"MrEavesXLModNarOT-Reg", fontSize:20, color: "gray"}}>Booking Time</Text>
                                    <Text style={{ fontFamily:"MrEavesXLModNarOT-Reg", fontSize:15}}>{this.state.selectedSlot}</Text>
                                    <Divider style={{ backgroundColor: 'lightgray' }} />
                                </View>

                                <View style={{display:"flex", flexDirection:"column", marginTop: 15}}> 
                                    <Text style={{width:"30%", fontFamily:"MrEavesXLModNarOT-Reg", fontSize:20, color: "gray"}}>Booking Day</Text>
                                    <Text style={{fontFamily:"MrEavesXLModNarOT-Reg", fontSize:15}}>{this.state.profileData.birthdate}</Text>
                                    <Divider style={{ backgroundColor: 'lightgray' }} />
                                </View>

                                 
                                <View style={{display:"flex", flexDirection:"column", marginTop: 15}}> 
                                    <Text style={{width:"30%", fontFamily:"MrEavesXLModNarOT-Reg", fontSize:20, color: "gray"}}>Service</Text>
                                    {
                                        this.state.cart.map((value, index) => {
                                            return(
                                                <View>  
                                                    <Text style={{fontFamily:"MrEavesXLModNarOT-Reg", fontSize:15}}>{value.service_name}</Text>
                                                    <View style={{flexDirection:"row", width:"100%"}}>
                                                        <View style={{ width:"50%"}}>
                                                        <Text style={{fontFamily:"MrEavesXLModNarOT-Reg", fontSize:20, color: "#fc8b8c"}}>${value.service_cost}</Text> 
                                                        </View>
                                                       
                                                        <View style={{width:"50%", alignSelf:"center", alignItems:"center"}}>
                                                        <NumericInput 
                                                        // value={this.state.value} 
                                                        containerStyle={{borderColor :"pink"}}
                                                        onChange={value => this.addQuantity(index, value)} 
                                                        onLimitReached={(isMax,msg) => console.log(isMax,msg)}
                                                        totalWidth={104} 
                                                        totalHeight={30} 
                                                        iconSize={25}
                                                        step={1}
                                                        valueType='real'
                                                        rounded 
                                                        inputStyle={{backgroundColor:"pink"}}
                                                        textColor='#000' 
                                                        iconStyle={{ color: '#000' }} 
                                                        rightButtonBackgroundColor='#ffff' 
                                                        leftButtonBackgroundColor='#ffff'/>
                                                        </View>
                                                    </View>
                                                </View>
                                            )
                                        })
                                    }                                    
                                    <Divider style={{ backgroundColor: 'lightgray' }} />
                                </View>

                              


                                <View style={{marginRight:"6%"}}> 

                                <View style={{alignContent:"center", alignItems:"center", marginTop:"5%"}}>
                                            <Button onPress={() => {this.props.navigation.navigate('PersonalService')}} style={{justifyContent:"center",alignContent:"center", alignItems:"center", backgroundColor:"#ffff", width:"100%", borderRadius: 10, opacity:0.7, borderColor:"#fc8b8c", borderWidth: 1}}> 
                                            <Text style={{alignSelf:"center",color:"#000", fontFamily:"MrEavesXLModNarOT-Reg", fontSize:20}}>
                                            Add More Services
                                            </Text>   
                                            </Button>
                                        </View> 



                                        <View style={{alignContent:"center", alignItems:"center", marginTop:"5%"}}>
                                            <Button onPress={() => {this.props.navigation.navigate('Payment')}} style={{justifyContent:"center",alignContent:"center", alignItems:"center", backgroundColor:"#fc8b8c", width:"100%", borderRadius: 10, opacity:0.7}}> 
                                            <Text style={{alignSelf:"center",color:"#fff", fontFamily:"MrEavesXLModNarOT-Reg", fontSize:20}}>
                                           Proceed to Payment
                                            </Text>   
                                            </Button>
                                        </View> 


                                        <View style={{alignContent:"center", alignItems:"center", marginTop:"5%"}}>
                                            <Button onPress={() => {this.props.navigation.navigate('UserHome')}} style={{justifyContent:"center",alignContent:"center", alignItems:"center", backgroundColor:"#ffff", width:"100%", borderRadius: 10, opacity:0.7, borderColor:"#fc8b8c", borderWidth: 1}}> 
                                            <Text style={{alignSelf:"center",color:"#000", fontFamily:"MrEavesXLModNarOT-Reg", fontSize:20}}>
                                            Cancel
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
