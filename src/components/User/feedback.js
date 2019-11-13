import React, { Component } from 'react'
import { Text, View, ImageBackground, Dimensions, Image, TouchableOpacity, ScrollView, TextInput, Alert } from 'react-native'
import {Avatar, Header, Icon, Card} from 'react-native-elements'
import { Button, } from 'native-base';
import StarRating from 'react-native-star-rating';
import LinearGradient from 'react-native-linear-gradient'


const {width, height} = Dimensions.get("window")

export default class Feedback extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bokingdetails : this.props.navigation.getParam('bokingdetails'),
            starCount:'',
            review:''
        }
        }

        componentDidMount() {
            this.setState({
                bokingdetails: this.props.navigation.getParam('bokingdetails')
            })
        }


        submitReview = () => {
            const {review, starCount, bokingdetails} = this.state
           
            const formData = new FormData()
            formData.append('review',review)
            formData.append('rating',starCount)
            formData.append('customer_id',bokingdetails.customer_id)
            formData.append('booking_id',bokingdetails.booking_id)
            
    
            console.log("profileData", formData)
    
    
            fetch("https://hnhtechsolutions.com/hassan/soplush/review_rating/review_rating.php?action=add_review_rating", {
                method: 'POST',
                // dataType: "json",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'multipart/form-data'
                },
                body: formData
            }).then(res => res.json())
                .then(resp => {
                    console.log(JSON.stringify(resp))
                    var successData = resp
    
                    if (successData.status) {
    
                        if (successData.status === true) {
                            console.log(" After Status SUCCESS USER", successData)
                            this.props.navigation.goBack()
                          
                        } else {
                            Alert.alert("Email Or Password Incorrect")
                            console.log(" ELSE", successData)

                        }
                    } else {
                        Alert.alert(successData.message)
                    }
                })
                .catch(err => console.log("err UPDATEPROFILE", err));
    
        }


    static navigationOptions = () => ({
        headerMode: 'none',
        headerVisible: false,
        header: null,
    })

    
    render() {
        console.log(' bokingdetails  bokingdetails',this.state.bokingdetails)
        return (
            <View style={{flex:1, height, width, marginTop: -80}}>
                <ImageBackground source={require('../../../assets/opacity100.png')} style={{height:"100%", width:"100%",opacity:0.9}}> 

                <Header
                        containerStyle={{marginTop:60, backgroundColor:"#fff"}}
                        placement="left"
                        leftComponent={<Icon onPress={() => {this.props.navigation.navigate('UserHome')}} name="arrow-back" color="#000" />}
                        centerComponent={<Text style={{alignSelf:"center", fontSize:30, fontFamily:"MrEavesXLModNarOT-Reg"}}>Feed Back</Text>}
                        // rightComponent={<TouchableOpacity onPress={() => {this.props.navigation.navigate("Notification")}}>
                        //     <Image source={require('../../../assets/notification.png')} style={{height:20, width:20}} />
                        // </TouchableOpacity>}
                        />



                <View style={{ height, width, backgroundColor:"rgba(200, 165, 212, 0.5)"}}>

                {/* <ScrollView style={{height: height}}>

               


                </ScrollView> */}

                <View style={{width:"80%", alignContent:"center", alignItems:'center', alignSelf:'center', justifyContent:'center', marginTop:'15%'}}>

                <StarRating
                                containerStyle={{ paddingBottom:'5%'}}
                                // starSize={15}
                                disabled={false}
                                maxStars={5}
                                fullStarColor="#fff"
                                rating={this.state.starCount}
                                selectedStar={(rating) => this.setState({ starCount: rating })}
                                emptyStarColor="#000"
                            />
                    <TextInput multiline style={{paddingVertical:20, borderColor:"#000", borderWidth: 3, borderRadius:10, width:"100%"}} onChangeText={(e) => this.setState({review: e})} />
                </View>


                <View style={{ alignContent: "center", alignItems: "center", marginTop: "5%" }}>
                                    <LinearGradient colors={['#fff', '#fc8b8c', '#fc8b8c']} style={{ width: "90%", borderRadius: 10 }}>
                                        <Button onPress={this.submitReview} style={{ justifyContent: "center", alignContent: "center", alignItems: "center", backgroundColor: "none", opacity: 0.7, borderRadius: 10 }}>
                                            <Text style={{ alignSelf: "center", color: "#fff", fontFamily: "MrEavesXLModNarOT-Reg", fontSize: 20 }}>
                                                Submit
                    </Text>
                                        </Button>
                                    </LinearGradient>
                </View>


                </View>
                </ImageBackground>
        </View>
        )
    }
}