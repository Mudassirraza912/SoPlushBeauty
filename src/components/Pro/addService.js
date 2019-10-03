import React, { Component } from 'react'
import { Text, View, ImageBackground, Dimensions, Image, TouchableOpacity, ScrollView } from 'react-native'
// import {  } from 'react-native-gesture-handler';
import { Container, Content, List, ListItem, Left, Right, Button, Item, Input, Label, Form, Icon } from 'native-base';
import { Avatar, Header, Card, Divider } from 'react-native-elements'


const { width, height } = Dimensions.get("window")

export default class AddService extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profileData:
            {
                name: "So plush",
                email: "SoPlush@gmail.com",
                mobile: "+1 23456789",
                gender: "Female",
                abour: "Inspect the React component hierarchy"
            },
            add: true,

        }
    }


    componentWillUnmount() {
        console.log("componentWillUnmount componentWillUnmount componentWillUnmount")
    }



    static navigationOptions = () => ({
        headerMode: 'none',
        headerVisible: false,
        header: null,
    })


    render() {
        return (
            <View style={{ flex: 1, height, width, marginTop: -80 }}>
                <ImageBackground source={require('../../../assets/opacity100.png')} style={{ height: "100%", width: "100%", opacity: 0.9, marginTop: 20 }}>


                    <Header
                        containerStyle={{ marginTop: 40, backgroundColor: "#fff" }}
                        placement="left"
                        leftComponent={<Icon onPress={() => { this.props.navigation.navigate('Main') }} name="arrow-back" color="#000" />}
                        centerComponent={<Text style={{ alignSelf:"center", fontSize: 30, fontFamily: "MrEavesXLModNarOT-Reg" }}>ADD SERVICE</Text>}
                    // rightComponent={<TouchableOpacity onPress={() => {this.props.navigation.navigate("EditProfile")}}><Image source={require('../../../assets/edit.png')} style={{height:30, width:30}} /> 
                    // </TouchableOpacity> }
                    />

                    <View style={{ height, width, backgroundColor: "rgba(190, 144, 212, 0.7)", justifyContent: "center" }}>

                        <ScrollView style={{ height: height }}>

                            <View>

                                {this.state.add && <TouchableOpacity onPress={() => { this.setState({ add: false }) }} style={{ justifyContent: "center", alignContent: "center", alignItems: "center", marginTop: "50%" }}><Image style={{ height: 150, width: 150, justifyContent: "center" }} source={require('../../../assets/add-documents.png')} />

                                    <Text style={{ alignSelf: "center", color: "#000", fontFamily: "MrEavesXLModNarOT-Reg", fontSize: 20, marginTop: "7%" }}>Add Service</Text>

                                </TouchableOpacity>}


                                {!this.state.add && <View style={{ width: "80%", alignContent: "center", alignItems: "center", justifyContent: "center", alignSelf: 'center' }}>
                                    <Item floatingLabel style={{ alignSelf: 'center', alignItems: 'center', alignContent: 'center' }}>
                                        {/* <Icon active name='user' type="FontAwesome" /> */}
                                        {/* <Label>Name</Label> */}
                                        <Input onChangeText={(e) => { this.setState({ name: e }) }} placeholder="Enter Service" />
                                    </Item>
                                    <Item floatingLabel>
                                        {/* <Icon active name='home' type="FontAwesome" /> */}
                                        {/* <Label>Address</Label> */}
                                        <Input onChangeText={(e) => { this.setState({ address: e }) }} placeholder="Enter Cost" />
                                    </Item>
                                    <Item floatingLabel>
                                        {/* <Icon active name='phone' type="MaterialCommunityIcons" /> */}
                                        {/* <Label>Phone Number</Label> */}
                                        <Input onChangeText={(e) => { this.setState({ phoneNo: e }) }} placeholder="Enter Category" />
                                    </Item>
                                   

                                            <Button onPress={() => {this.props.navigation.navigate('ServiceList')}} style={{justifyContent:"center",alignContent:"center", alignItems:"center", backgroundColor:"#f14538", width:"100%", borderRadius: 10, opacity:0.7, marginTop:"5%"}}> 
                                            <Text style={{alignSelf:"center",color:"#fff", fontFamily:"MrEavesXLModNarOT-Reg", fontSize:20}}>
                                            Ok
                                            </Text>   
                                            </Button>

                                </View>}

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

                    </View>
                </ImageBackground>
            </View>
        )
    }
}
