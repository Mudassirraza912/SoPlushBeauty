import React, { Component } from 'react'
import { Text, View, ImageBackground, Dimensions, Image, TouchableOpacity, ScrollView, Picker, PickerItem, Alert, BackHandler } from 'react-native'
// import {  } from 'react-native-gesture-handler';
import { Container, Content, List, ListItem, Left, Right, Button, Item, Input, Label, Form, Icon, Spinner } from 'native-base';
import { Avatar, Header, Card, Divider } from 'react-native-elements'
import { LinearGradient } from 'expo-linear-gradient';

import { withNavigationFocus } from 'react-navigation';


const { width, height } = Dimensions.get("window")

export default class AddServiceDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profileData: this.props.screenProps.profileData,
            add: true,
            category: [],
            selectedCategory: "",
            name: "",
            cost: "",
            loader: false,
            services: null

        }
    }


    componentDidMount() {
        const { profileData } = this.state



        fetch("http://soplush.ingicweb.com/soplush/category/category.php?action=select_category", {
            method: 'GET',
        }).then(res => res.json())
            .then(resp => {
                console.log('JSON CATEGORY',JSON.stringify(resp))
                var successData = resp

                if (successData.status === true) {
                    // console.log("successData.data[0].role_id === 3", successData.data[0].role_id === 3)
                    this.setState({
                        category: successData.data
                    })
                    //   console.log("Category PRO", successData)
                    // this.props.navigation.navigate("Main")

                } else {
                    Alert.alert("Alert", successData.message)
                }
            })
            .catch(err => console.log("Category err err", err));
    }




    addCategory = () => {
        this.setState({ loader: true })
        const { name, cost, selectedCategory, category, profileData } = this.state
        console.log(selectedCategory, profileData.user_id)

        if (name === "" || cost === "" || selectedCategory === "") {
            this.setState({ loader: false })
            Alert.alert("Alert", "Please fill the required fields")
        } else {
            var formData = new FormData()
            formData.append("service_id", name)
            formData.append("cost", cost)
            formData.append("category_id", selectedCategory)
            formData.append("user_id", profileData.user_id)
          

            console.log("formData", formData)
            fetch("http://soplush.ingicweb.com/soplush/beautician/beautician_service.php?action=add_beautician_service", {
                method: 'POST',
                dataType: "json",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'multipart/form-data'
                },
                body: formData
            }).then(res => res.json())
                .then(resp => {
                    console.log(JSON.stringify(resp))
                    var successData = resp

                    if (successData.status === true) {
                        // console.log("successData.data[0].role_id === 3", successData.data[0].role_id === 3)
                        // this.setState({
                        //     category: successData.data
                        // })
                        //   console.log("Category PRO", successData)
                        this.setState({
                            add: false,
                            selectedCategory: "",
                            name: "",
                            cost: ""
                        })
                        this.setState({ loader: false })
                        this.props.navigation.navigate("ServiceList")

                    } else {
                        this.setState({ loader: false })
                        Alert.alert("Alert", successData.message)
                    }
                })
                .catch(err => {
                    this.setState({ loader: false })
                    console.log("Category err err", err)
                });
        }

    }



    static navigationOptions = () => ({
        headerMode: 'none',
        headerVisible: false,
        header: null,
        drawerLockMode: 'locked-closed'
    })


    onValueChange = (value, index) => {
            this.setState({ selectedCategory: value })

            fetch(`http://soplush.ingicweb.com/soplush/service/service.php?action=select_all_service&category_id=${value}`, {
            method: 'GET',
        }).then(res => res.json())
            .then(resp => {
                console.log('SERVICES',JSON.stringify(resp))
                var successData = resp

                if (successData.status) {
                    this.setState({
                        services: successData.data
                    })
                } else {
                    Alert.alert("Alert", successData.message)
                    this.setState({
                        services: successData.data
                    })
                }
            })
            .catch(err => console.log("Category err err", err));

    }


    render() {
        const {selectedCategory, services} = this.state
        console.log("selectedCategory", selectedCategory)

        return (
            <View style={{ flex: 1, height: '100%', width: '100%', marginTop: -80 }}>
                <ImageBackground source={require('../../../assets/inner.png')} style={{ height: "100%", width: "100%", opacity: 0.9, marginTop: 20 }}>


                    <Header
                        containerStyle={{ marginTop: 40, backgroundColor: "#fff" }}
                        placement="left"
                        leftComponent={<Icon onPress={() => {

                            // this.handleBackButton()

                          
                                this.props.navigation.navigate('AddService')
                            
                        }} name="arrow-back" color="#000" />}
                        centerComponent={<Text style={{ alignSelf: 'center', fontSize: 20, fontFamily: "Poppins-Regular" }}>ADD SERVICE</Text>}
                    // rightComponent={<TouchableOpacity onPress={() => {this.props.navigation.navigate("EditProfile")}}><Image source={require('../../../assets/edit.png')} style={{height:30, width:30}} /> 
                    // </TouchableOpacity> }
                    />

                    <View style={{ flex: 1, height: '100%', width: '100%', justifyContent: "center" }}>

                        <ScrollView style={{ height: height }}>

                            <View>

                                {/* {this.state.add && <TouchableOpacity onPress={() => { this.setState({ add: false }) }} style={{ justifyContent: "center", alignContent: "center", alignItems: "center", marginTop: "50%" }}><Image style={{ height: 150, width: 150, justifyContent: "center" }} source={require('../../../assets/add-documents.png')} />

                                    <Text style={{ alignSelf: "center", color: "#000", fontFamily: "Poppins-Regular", fontSize: 20, marginTop: "7%" }}>Add Service</Text>

                                </TouchableOpacity>} */}


<View 
style={{ width: "80%",alignSelf: 'center' }}
>


<View style={{marginTop: 20,}}>

    <View>
        <Text style={{  color: 'gray', fontSize: 12}}>
            SELECT CATEGORY
        </Text>
    </View>

    <Picker
        mode="dropdown"
        selectedValue={selectedCategory}
        style={{ height: 50, width: 280 }}
        onValueChange={(itemValue, itemIndex) =>{
            // this.setState({ selectedCategory: itemValue })
                this.onValueChange(itemValue, itemIndex)
        }}
        >
        {this.state.category.map((value, index) => {
            console.log("value.category_name", value.category_name)
            return (<Picker.Item style={{ width: 200 }} label={value.category_name} value={value.category_id} />)
        })}
    </Picker>
</View>


{services != null && <View>
        {/* <Item  stackedLabel style={{ width: '100%', borderBottomWidth: 1, borderBottomColor: '#bdbdbd' }}>
            <Label style={{marginRight: '73%',    color: 'gray', fontSize: 12, marginTop: 10 }}>Enter Service</Label>
            <Input value={this.state.email} style={{ color: 'gray', width: '100%', marginBottom: 5 }} onChangeText={(e) => { this.setState({ name: e }) }} placeholder="Enter Service" />
        </Item> */}

<View>

    <View>
        <Text style={{  color: 'gray', fontSize: 12}}>
            ENTER SERVICE
        </Text>
    </View>

    <Picker
        mode="dropdown"
        selectedValue={this.state.name}
        style={{ height: 50, width: 280 }}
        onValueChange={(itemValue, itemIndex) =>{
            this.setState({ name: itemValue })
                // this.onValueChange(itemValue, itemIndex)
        }}
        >
        {services.map((value, index) => {
            console.log("value.category_name", value.category_name)
            return (<Picker.Item style={{ width: 200 }} label={value.service_name} value={value.service_id} />)
        })}
    </Picker>
</View>




        <Item stackedLabel style={{ width: '100%', borderBottomWidth: 1, borderBottomColor: '#bdbdbd' }}>
            <Label style={{ color: 'gray', fontSize: 12 , width:'100%'}}>ENTER COST</Label>
            <Input value={this.state.email} style={{ color: 'gray', width: '100%', marginBottom: 5 }} onChangeText={(e) => { this.setState({ cost: e }) }} placeholder="Enter Cost" keyboardType="number-pad" />
        </Item>
</View>}


{/* 
        <Button onPress={this.addCategory} style={{justifyContent:"center",alignContent:"center", alignItems:"center", backgroundColor:"#fc8b8c", width:"100%", borderRadius: 10, opacity:0.7, marginTop:"5%"}}> 
        <Text style={{alignSelf:"center",color:"#fff", fontFamily:"Poppins-Regular", fontSize:20}}>
        Ok
        </Text>   
        </Button> */}


{!this.state.loader ? <View style={{ alignContent: "center", alignItems: "center", marginTop: "5%", marginBottom: 10, width: "100%" }}>


    <LinearGradient start={{ x: 0.0, y: 0.25 }} end={{ x: 0.0, y: 1.0 }} colors={['#F9B1B0', '#FD8788', '#FF7173']} style={{ width: "90%", borderRadius: 10 }}>
        <TouchableOpacity onPress={this.addCategory} style={{ justifyContent: "center", alignContent: "center", alignItems: "center", backgroundColor: "none", opacity: 0.7, borderRadius: 10 }} style={{ flexDirection: "column", justifyContent: "center", alignContent: "center", alignItems: "center", backgroundColor: "transparent", opacity: 0.7, borderRadius: 10, width: '100%' }}>
            <Text style={{ alignSelf: "center", textAlignVertical: "center", color: "#fff", fontFamily: "Poppins-Regular", paddingVertical: 15, fontWeight:'bold' }}>
                OK
</Text>
        </TouchableOpacity>
    </LinearGradient>
</View> : <Spinner color="#fc8b8c" />}

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

                    </View>
                </ImageBackground>
            </View>
        )
    }
}
