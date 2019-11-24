import React, { Component } from 'react'
import { Text, View, ImageBackground, Dimensions, Image, TouchableOpacity, ScrollView, FlatList, Alert } from 'react-native'
// import {  } from 'react-native-gesture-handler';
import { Container, Content, List, ListItem, Left, Right, Button, Spinner } from 'native-base';
import { Avatar, Header, Icon, Card, Divider } from 'react-native-elements'
import NumericInput from 'react-native-numeric-input'
import moment from 'moment'
const { width, height } = Dimensions.get("window")
import LinearGradient from 'react-native-linear-gradient'

export default class ConfirmBooking extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profileData: this.props.navigation.getParam('beauticianData'),
            selectedSlot: this.props.navigation.getParam('selectedSlot'),
            cart: this.props.navigation.getParam('cart'),
            selectdate: this.props.navigation.getParam('selectdate'),
            costumerProfile: this.props.screenProps.profileData,
            note: this.props.navigation.getParam('note'),
            loader: false
        }
    }


    workFunction = (item) => {
        const { profileData, selectedSlot } = this.state
        // console.log("item",item)

        const index = selectedSlot.findIndex(x => x == item)
        // console.log("index",index)
        if (index != -1) {
            selectedSlot.splice(index, 1)
            this.setState({ selectedSlot })
        } else {
            selectedSlot.push(item)
            this.setState({ selectedSlot })
        }

    }


    addQuantity = (obj, qunat, index) => {
        const { cart } = this.state
        // console.log(index, qunat, cart)
        if (obj.type == 'inc') {
            cart[index].quantity = qunat + 1
            console.log(cart)
            this.setState({ cart })
        }else if(obj.type == 'dec'){
            cart[index].quantity = qunat - 1
            console.log(cart)
            this.setState({ cart })
        }

    }

    static navigationOptions = () => ({
        headerMode: 'none',
        headerVisible: false,
        header: null,
    })


    fetchconfirmBooking = () => {
        // this.props.navigation.navigate('Payment')
        this.setState({loader: true})
        console.log("FUNTION CALLED")
        const { cart, selectedSlot, selectdate, profileData, note } = this.state
        var params = JSON.stringify(cart)
        const formData = new FormData()
        var formmatedDate = moment(selectdate).format("YYYY-MM-DD")
        formData.append('services', params)
        formData.append('time_slot_id', selectedSlot.id)
        formData.append('customer_id', this.props.screenProps.profileData.user_id)
        formData.append('beauticain_id', profileData.user_id)
        formData.append('note', "note")

        console.log("formData formData", formData, formmatedDate)


        fetch("https://hnhtechsolutions.com/hassan/soplush/cart/cart.php?action=add_cart", {
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
                    const bookingFormData = new FormData()
                    bookingFormData.append('cart_id', successData.cart_id.toString())
                    bookingFormData.append('customer_id', this.props.screenProps.profileData.user_id)
                    bookingFormData.append('address', 'karachi')
                    bookingFormData.append('service_date', formmatedDate)
                    console.log('bookingFormData', bookingFormData)

                    fetch("https://hnhtechsolutions.com/hassan/soplush/booking/booking.php?action=add_booking", {
                        method: 'POST',
                        // dataType: "json",
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'multipart/form-data'
                            // 'Content-Type': 'application/json'

                        },
                        body: bookingFormData
                    }).then(res => res.json())
                        .then(resp => {
                            //   console.log(JSON.stringify(resp))
                            var successData = resp

                            if (successData.status === true) {
                                // console.log("successData.data[0].role_id === 3", successData.data[0].role_id === 3)
                                this.setState({loader: false})
                                console.log("successData.data Add BOOKING", successData)
                                Alert.alert("Success","Booking Send Sucessfully")
                                this.props.navigation.navigate('UserHome')

                            } else {
                                this.setState({loader: false})
                                console.log("Else", successData)
                                Alert.alert("Error",successData.message)
                            }
                        })
                        .catch(err => {
                            this.setState({loader: false})
                            console.log("err err Add BOOKING", err)});



                } else {
                    console.log("Else", successData)
                    this.setState({loader: false})
                    Alert.alert("Error",successData.message)
                }
            })
            .catch(err => console.log("err err ADD CART", err));
    }


    render() {
        const { selectedSlot, cart, selectdate, profileData } = this.state
        // console.log('profileData', profileData)
        return (
            <View style={{ flex: 1, height:'100%', width:'100%', marginTop: -80 }}>
                <ImageBackground source={require('../../../assets/opacity.jpg')} style={{ height: "100%", width: "100%", opacity: 0.9, marginTop: 20 }}>


                    <Header
                        containerStyle={{ marginTop: 40, backgroundColor: "#fff" }}
                        placement="left"
                        leftComponent={<Icon onPress={() => { this.props.navigation.goBack() }} name="arrow-back" color="#000" />}
                        centerComponent={<Text style={{alignSelf:'center',fontSize: 30, fontFamily: "MrEavesXLModNarOT-Reg" }}>CONFIRM BOOKING</Text>}
                        rightComponent={<TouchableOpacity onPress={() => { this.props.navigation.navigate("Notification") }}>
                            <Image source={require('../../../assets/notification.png')} style={{ height: 20, width: 20 }} />
                        </TouchableOpacity>}
                    />

                    <View style={{flex: 1, height, width:'100%', backgroundColor: "rgba(246, 232, 232, 0.7)", justifyContent: "center" }}>

                        <ScrollView style={{ height: height }}>

                            <View style={{ justifyContent: "center", alignContent: "center", alignItems: "center", marginTop: 20 }}>

                                {/* <View style={{backgroundColor:"#fff",borderRadius:10, width:"90%"}}> */}

                                <Card containerStyle={{ backgroundColor: "#fff", borderRadius: 10, width: "90%", }}>

                                    

                                    <View style={{ display: "flex", flexDirection: "column", marginTop: 15 }}>
                                        <Text style={{ width: "50%", fontFamily: "MrEavesXLModNarOT-Reg", fontSize: 22, color: "#bdbdbd" }}>Booking Time</Text>
                                        <Text style={{ fontFamily: "MrEavesXLModNarOT-Reg", fontSize: 18 }}>{this.state.selectedSlot.time}</Text>
                                        {/* <Divider style={{ backgroundColor: 'lightgray' }} /> */}
                                    </View>

                                    <View style={{ display: "flex", flexDirection: "column", marginTop: 15 }}>
                                        <Text style={{ width: "50%", fontFamily: "MrEavesXLModNarOT-Reg", fontSize: 22,color: "#bdbdbd" }}>Booking Day</Text>
                                        <Text style={{ fontFamily: "MrEavesXLModNarOT-Reg", fontSize: 18 }}>{this.state.selectdate}</Text>
                                        {/* <Divider style={{ backgroundColor: 'lightgray' }} /> */}
                                    </View>


                                    <View style={{ display: "flex", flexDirection: "column", marginTop: 15 }}>

                                        <Text style={{ width: "50%", fontFamily: "MrEavesXLModNarOT-Reg", fontSize: 22,color: "#bdbdbd" }}>Provider Name</Text>
                                        {this.state.profileData !== null ?
                                            <Text style={{ fontFamily: "MrEavesXLModNarOT-Reg", fontSize: 18 }}>{this.state.profileData.username}</Text>
                                            :
                                            <Text style={{ fontFamily: "MrEavesXLModNarOT-Reg", fontSize: 18 }}>UnSelecteds</Text>
                                        }
                                        {/* <Divider style={{ backgroundColor: 'lightgray' }} /> */}
                                    </View>


                                    <View style={{ display: "flex", flexDirection: "column", marginTop: 15 }}>
                                        <Text style={{ width: "30%", fontFamily: "MrEavesXLModNarOT-Reg", fontSize: 22,color: "#bdbdbd"}}>Service</Text>
                                        {
                                            this.state.cart.map((value, index) => {
                                                return (
                                                    <View>
                                                        <Text style={{ fontFamily: "MrEavesXLModNarOT-Reg", fontSize: 20 }}>{value.service_name}</Text>
                                                        <View style={{ flexDirection: "row", width: "100%" }}>
                                                            <View style={{ width: "50%" }}>
                                                                <Text style={{ fontFamily: "MrEavesXLModNarOT-Reg", fontSize: 20, color: "#fc8b8c" }}>${value.service_cost}</Text>
                                                            </View>

                                                            <View style={{ width: "50%", alignSelf: "center", alignItems: "center" }}>
                                                                <NumericInput
                                                                    // value={this.state.value} 
                                                                    value={Number(value.quantity)}
                                                                    // initValue={1}
                                                                    minValue={1}
                                                                    containerStyle={{ borderColor: "pink" }}
                                                                    onChange={(e) => this.addQuantity(e, value.quantity, index)}
                                                                    maxValue={10}
                                                                    onLimitReached={(isMax, msg) => console.log(isMax, msg)}
                                                                    totalWidth={104}
                                                                    totalHeight={30}
                                                                    iconSize={25}
                                                                    step={1}
                                                                    valueType='real'
                                                                    rounded
                                                                    inputStyle={{ backgroundColor: "pink" }}
                                                                    textColor='#000'
                                                                    iconStyle={{ color: '#000' }}
                                                                    rightButtonBackgroundColor='#ffff'
                                                                    leftButtonBackgroundColor='#ffff' />
                                                            </View>
                                                        </View>
                                                    </View>
                                                )
                                            })
                                        }
                                        {/* <Divider style={{ backgroundColor: 'lightgray' }} /> */}
                                    </View>




                                    <View style={{ marginRight: "6%" }}>

                                        <View style={{ alignContent: "center", alignItems: "center", marginTop: "5%" }}>
                                            <Button onPress={() => { this.props.navigation.navigate('PersonalService') }} style={{ justifyContent: "center", alignContent: "center", alignItems: "center", backgroundColor: "#ffff", width: "100%", borderRadius: 10, opacity: 0.7, borderColor: "#fc8b8c", borderWidth: 1 }}>
                                                <Text style={{ alignSelf: "center", color: "#000", fontFamily: "MrEavesXLModNarOT-Reg", fontSize: 20 }}>
                                                   ADD MORE SERVICES
                                            </Text>
                                            </Button>
                                        </View>



                                        {/* <View style={{ alignContent: "center", alignItems: "center", marginTop: "5%" }}>
                                            <Button onPress={() => { this.fetchconfirmBooking() }} style={{ justifyContent: "center", alignContent: "center", alignItems: "center", backgroundColor: "#fc8b8c", width: "100%", borderRadius: 10, opacity: 0.7 }}>
                                                <Text style={{ alignSelf: "center", color: "#fff", fontFamily: "MrEavesXLModNarOT-Reg", fontSize: 20 }}>
                                                    Proceed to Payment
                                            </Text>
                                            </Button>
                                        </View> */}


                                    {!this.state.loader ?    
//                                     <View style={{ alignContent: "center", alignItems: "center", marginTop: "5%", marginBottom:10 ,width: "100%" }}>
//                                             <LinearGradient colors={['#fff', '#fc8b8c', '#fc8b8c']} style={{ width: "100%", borderRadius: 10 }}>
//                                                 <Button onPress={() => { this.fetchconfirmBooking() }} style={{ justifyContent: "center", alignContent: "center", alignItems: "center", backgroundColor: "none", opacity: 0.7, borderRadius: 10 , width:'100%'}}>
//                                                     <Text style={{ alignSelf: "center", color: "#fff", fontFamily: "MrEavesXLModNarOT-Reg", fontSize: 20 }}>
//                                                     PROCEES TO PAYMENT
// </Text>
//                                                 </Button>
//                                             </LinearGradient>
//                                         </View>

<View style={{ alignContent: "center", alignItems: "center", marginTop: "5%" }}>
                                    <LinearGradient start={{ x: 0.0, y: 0.25 }} end={{ x: 0.0, y: 1.0 }} colors={['#F9B1B0', '#FD8788', '#FF7173']} style={{ width: "100%", borderRadius: 10}}>
                                        <TouchableOpacity onPress={() => { this.fetchconfirmBooking() }} style={{ justifyContent: "center", alignContent: "center", alignItems: "center", backgroundColor: "none", opacity: 0.7, borderRadius: 10 }} style={{ flexDirection: "column", justifyContent: "center", alignContent: "center", alignItems: "center", backgroundColor: "transparent", opacity: 0.7, borderRadius: 10 }}>
                                            <Text style={{ alignSelf: "center", textAlignVertical: "center", color: "#fff", fontFamily: "MrEavesXLModNarOT-Reg", fontSize: 20, paddingVertical: 15 }}>
                                            PROCEES TO PAYMENT
                    </Text>
                                        </TouchableOpacity>
                                    </LinearGradient>
                                </View>
                                        
                                        :   <Spinner color="#fc8b8c" />}


                                        <View style={{ alignContent: "center", alignItems: "center", marginTop: "5%" }}>
                                            <Button onPress={() => { this.props.navigation.navigate('UserHome') }} style={{ justifyContent: "center", alignContent: "center", alignItems: "center", backgroundColor: "#ffff", width: "100%", borderRadius: 10, opacity: 0.7, borderColor: "#fc8b8c", borderWidth: 1 }}>
                                                <Text style={{ alignSelf: "center", color: "#000", fontFamily: "MrEavesXLModNarOT-Reg", fontSize: 20 }}>
                                                    CANCEL
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
