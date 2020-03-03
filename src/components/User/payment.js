import React, { Component } from 'react'
import { Text, View, ImageBackground, Dimensions, Image, TouchableOpacity, ScrollView, Alert } from 'react-native'
// import {  } from 'react-native-gesture-handler';
import { Container, Content, List, ListItem, Left, Right, Button, Item, Input, Label, Form, Icon } from 'native-base';
import { Avatar, Header, Card, Divider } from 'react-native-elements'
import { LinearGradient } from 'expo-linear-gradient';
const STRIPE_ERROR = 'Payment service error. Try again later.';
const SERVER_ERROR = 'Server error. Try again later.';
const STRIPE_PUBLISHABLE_KEY = 'pk_test_fvLZJsTNIZ1inhzE7G4Xj7qQ00DSZzT1Zw';

const { width, height } = Dimensions.get("window")

export default class Payment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            creditCard:"",
            expireDate:"",
            cvv:"",
            name:"",
            month:'',
            year:'',
            profileData: this.props.navigation.getParam('profileData'),
            selectedSlot: this.props.navigation.getParam('selectedSlot'),
            cart: this.props.navigation.getParam('cart'),
            selectdate: this.props.navigation.getParam('selectdate'),
            costumerProfile: this.props.screenProps.profileData,
            note: this.props.navigation.getParam('note'),

        }
    }


    componentWillUnmount() {
        console.log("componentWillUnmount componentWillUnmount componentWillUnmount")
    }

    

    getCreditCardToken = () => {
        // const card = {
        //   'card': {
        //     'number': creditCardData.values.number.replace(/ /g, ''),
        //     'exp_month': creditCardData.values.expiry.split('/')[0],
        //     'exp_year': creditCardData.values.expiry.split('/')[1],
        //     'cvc': creditCardData.values.cvc
        //   }
        // };
        // const card = {
        // 'card[number]': creditCardData.values.number.replace(/ /g, ''),
        //   'card[exp_month]': creditCardData.values.expiry.split('/')[0],
        //   'card[exp_year]': creditCardData.values.expiry.split('/')[1],
        //   'card[cvc]': creditCardData.values.cvc
        // };
        // console.log("getCreditCardToken")
        const card = {
              'card[number]': this.state.creditCard,
              'card[exp_month]': this.state.expireDate.slice(0,2),
              'card[exp_year]': this.state.expireDate.slice(3,5),
              'card[cvc]': this.state.cvv
            };
        console.log(" card card card card card card ",card)
            if(this.state.expireDate.slice(0,2) >= 12 && this.state.expireDate.slice(0,2).length === 2 && this.state.expireDate.slice(3,5).length === 2) {
                return fetch('https://api.stripe.com/v1/tokens', {
                    headers: {
                      // Use the correct MIME type for your server
                      Accept: 'application/json',
                      // Use the correct Content Type to send data to Stripe
                      'Content-Type': 'application/x-www-form-urlencoded',
                      // Use the Stripe publishable key as Bearer
                      Authorization: `Bearer ${STRIPE_PUBLISHABLE_KEY}`
                    },
                    // Use a proper HTTP method
                    method: 'post',
                    // Format the credit card data to a string of key-value pairs
                    // divided by &
                    body: Object.keys(card)
                      .map(key => key + '=' + card[key])
                      .join('&')
                  }).then(response => response.json())

            }else {
                Alert.alert("Alert", "Please Enter Correct Date")
            }
        // .then(async (response) => { 
        //     console.log("RESPONSE RESPONSE RESPONSE", response)
        // })
        // .catch((err) => {
        //   console.log("ERROR",err)
        // })
      };
      
      subscribeUser = (creditCardToken) => {
       var fetchBooking = this.props.navigation.getParam('fetchBooking');
       var totalAmount = this.props.navigation.getParam('totalAmount');

        return new Promise((resolve) => {
          console.log('Credit card token\n', creditCardToken);
          const formData = new FormData()
          formData.append('token', creditCardToken.id)
          formData.append('price', totalAmount)

          console.log("FORMDATA", formData)

          fetch("http://soplush.ingicweb.com/api/payment/charge.php", {
                method: 'POST',
                // dataType: "json",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'multipart/form-data'
                },
                body: formData
            }).then(res => res.json())
                .then(async (resp) => {
                    // console.log()
                    var successData = resp
                    console.log("successData successData successData ", successData)
                    if(successData.status === true) {
                        console.log(" successData.status", successData.status)
                        this.fetchconfirmBooking(creditCardToken.id)

                    }

                })
                .catch(err => {
                    console.log("err err err", err)
                    Alert.alert("Alert", err.data)
                    this.setState({ loader: false })
                });
          setTimeout(() => {
            resolve({ status: true });
          }, 1000)
        });
      };




      fetchconfirmBooking = (id) => {
        // this.props.navigation.navigate('Payment')
        // this.setState({loader: true})
        console.log("FUNTION CALLED")
        const { cart, selectedSlot, selectdate, profileData, note } = this.state
        var params = JSON.stringify(cart)
        const formData = new FormData()
        // var formmatedDate = moment(selectdate).format("YYYY/MM/DD")
        formData.append('services', params)
        formData.append('time_slot_id', selectedSlot.id)
        formData.append('customer_id', this.props.screenProps.profileData.user_id)
        formData.append('beauticain_id', profileData.user_id)
        formData.append('note', "note")

        // console.log("formData formData", formData, formmatedDate)


        fetch("http://soplush.ingicweb.com/soplush/cart/cart.php?action=add_cart", {
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
                    bookingFormData.append('service_date', selectdate)
                    bookingFormData.append('charge_id', id)

                    console.log('bookingFormData', bookingFormData)

                    fetch("http://soplush.ingicweb.com/soplush/booking/booking.php?action=add_booking", {
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
                                console.log("successData.data Add BOOKING", successData, this.props.navigation.state.params)
                                this.props.navigation.state.params = {};
                                this.props.navigation.navigate('UserHome')
                                Alert.alert("Alert","Booking Send Successfully")

                            } else {
                                this.setState({loader: false})
                                console.log("Else", successData)
                                Alert.alert("Alert",successData.message)
                            }
                        })
                        .catch(err => {
                            this.setState({loader: false})
                            console.log("err err Add BOOKING", err)});



                } else {
                    console.log("Else", successData)
                    this.setState({loader: false})
                    Alert.alert("Alert",successData.message)
                }
            })
            .catch(err => console.log("err err ADD CART", err));
    }

  
  
  
  
      onSubmit = async () => {
          // Disable the Submit button after the request is sent
          console.log("onSubmit")
          this.setState({ submitted: true });
          let creditCardToken;
          try {
            // Create a credit card token
            creditCardToken = await this.getCreditCardToken();
            console.log("creditCardToken TRY" ,creditCardToken)
            if (creditCardToken.error) {
              // Reset the state if Stripe responds with an error
              // Set submitted to false to let the user subscribe again
              this.setState({ submitted: false, error: STRIPE_ERROR });
              return;
            }
          } catch (e) {
            // Reset the state if the request was sent with an error
            // Set submitted to false to let the user subscribe again
            this.setState({ submitted: false, error: STRIPE_ERROR });
            return;
          }
          // Send a request to your server with the received credit card token
          const { error } = await this.subscribeUser(creditCardToken);
          // Handle any errors from your server
          if (error) {
            console.log("creditCardToken error" ,error)
      
            this.setState({ submitted: false, error: SERVER_ERROR });
          } else {
            this.setState({ submitted: false, error: null });
          //   navigation.navigate('Home')
          }
        };
  
  



    static navigationOptions = () => ({
        headerMode: 'none',
        headerVisible: false,
        header: null,
        drawerLockMode: 'locked-closed'
    })


    render() {
        var totalAmount = this.props.navigation.getParam('totalAmount');
        console.log("totalAmount" , totalAmount)
        return (
            <View style={{ flex: 1, height:'100%', width:'100%', marginTop: -80 }}>
                <ImageBackground source={require('../../../assets/opacity100.png')} style={{ height: "100%", width: "100%", opacity: 0.9, marginTop: 20 }}>


                    <Header
                        containerStyle={{ marginTop: 40, backgroundColor: "#fff" }}
                        placement="left"
                        leftComponent={<Icon onPress={() => { this.props.navigation.navigate('Main') }} name="arrow-back" color="#000" />}
                        centerComponent={<Text style={{alignSelf:'center',fontSize: 20, fontFamily: "Poppins-Bold_0" }}>PAYMENT</Text>}
                    />

                    <View style={{flex: 1, height:'100%', width:'100%', backgroundColor: "rgba(246, 232, 232, 0.7)"}}>

                        <ScrollView style={{ height: '100%' }}>


                            <View style={{flex:1 ,width:'100%'}}>

                            <View style={{marginTop:"5%", left:15}}>
                                <Text style={{alignSelf:"flex-start",color:"#000", fontFamily:"Poppins-Regular", fontSize:20}}>
                                    ENTER CARD DETAILS
                                </Text>
                            </View>

                                <View style={{ width: "90%", alignContent: "center", alignItems: "center", justifyContent:'flex-start', backgroundColor:"#fff", marginTop:"2%", borderRadius:10,  left:15}}>


                                    <View style={{ alignSelf: 'center', alignItems: 'center', alignContent: 'center', width:"90%", flexDirection:'row', borderBottomColor:"#bdbdbd", borderBottomWidth:1}}>
                                        <Label style={{fontSize:12, fontFamily:"Poppins-Regular", width: "50%", color:"gray"}}>Credit Card Number </Label>
                                        <Input keyboardType="number-pad" style={{fontSize:12, fontFamily:"Poppins-Regular", textAlign:'right', width: "40%"}} onChangeText={(e) => { this.setState({ creditCard: e }) }} placeholder="Enter your card.no here" />
                                    </View>

                                    <View style={{ alignSelf: 'center', alignItems: 'center', alignContent: 'center', width:"90%", flexDirection:'row', borderBottomColor:"#bdbdbd", borderBottomWidth:1}}>
                                    <Label style={{fontSize:12, fontFamily:"Poppins-Regular", width: "50%", color:"gray"}}>Expiration Date </Label>
                                        <Input keyboardType="numeric" defaultValue={this.state.expireDate} style={{fontSize:12, fontFamily:"Poppins-Regular" , width: "40%", textAlign:'right'}} maxLength={5} onChangeText={(e) => {
                                            if(this.state.expireDate.length === 3){
                                              var month = this.state.expireDate.slice(0,2);
                                              var year = this.state.expireDate.slice(2,4);
                                              this.setState({ expireDate: `${month}/${year}`}) 

                                            }else {
                                                this.setState({ expireDate:e}) 
                                            }
                                            // if(this.state.expireDate.length === ''){
                                            //     this.setState({month: '', year: '' }) 
                                            // }
                                         }} placeholder="MM/YY" />
                                    </View>

                                    <View style={{ alignSelf: 'center', alignItems: 'center', alignContent: 'center', width:"90%", flexDirection:'row', borderBottomColor:"#bdbdbd", borderBottomWidth:1}}>
                                    <Label style={{fontSize:12, fontFamily:"Poppins-Regular", width: "50%", color:"gray"}}>CVV </Label>
                                        <Input keyboardType="number-pad" style={{fontSize:12, fontFamily:"Poppins-Regular" , width: "40%", textAlign:'right'}} onChangeText={(e) => { this.setState({ cvv: e }) }} placeholder="CVV" />
                                    </View>

                                    <View style={{ alignSelf: 'center', alignItems: 'center', alignContent: 'center', width:"90%", flexDirection:'row', borderBottomColor:"#bdbdbd", borderBottomWidth:1, marginBottom: 5}}>
                                    <Label style={{fontSize:12, fontFamily:"Poppins-Regular", width: "50%", color:"gray"}}>Card Holder Name </Label>
                                        <Input style={{fontSize:12, fontFamily:"Poppins-Regular" , width: "40%", textAlign:'right'}} onChangeText={(e) => { this.setState({ name: e }) }} placeholder="Enter your name" />
                                    </View>
                                   

                                           
                                </View>



                                <View style={{ alignContent: "center", alignItems: "center", marginTop: "5%", marginBottom:20 }}>

                                        <LinearGradient start={{ x: 0.0, y: 0.25 }} end={{ x: 0.0, y: 1.0 }} colors={['#F9B1B0', '#FD8788', '#FF7173']} style={{ width: "80%", borderRadius: 5 }}>
                                            <TouchableOpacity onPress={() => this.onSubmit()} style={{ justifyContent: "center", alignContent: "center", alignItems: "center", backgroundColor: "none", opacity: 0.7, borderRadius: 10 }} style={{ flexDirection: "column", justifyContent: "center", alignContent: "center", alignItems: "center", backgroundColor: "transparent", opacity: 0.7, borderRadius: 10 }}>
                                                <Text style={{ alignSelf: "center", textAlignVertical: "center", color: "#fff", fontFamily: "Poppins-Regular", paddingVertical: 15, fontWeight: 'bold' }}>
                                                    PROCEED TO PAYMENT
                    </Text>
                                            </TouchableOpacity>
                                        </LinearGradient>
                                    </View>

                              


                                            </View>


                        </ScrollView>

                    </View>
                </ImageBackground>
            </View>
        )
    }
}
