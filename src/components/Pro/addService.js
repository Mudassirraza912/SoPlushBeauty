import React, { Component } from 'react'
import { Text, View, ImageBackground, Dimensions, Image, TouchableOpacity, ScrollView, Picker, PickerItem } from 'react-native'
// import {  } from 'react-native-gesture-handler';
import { Container, Content, List, ListItem, Left, Right, Button, Item, Input, Label, Form, Icon } from 'native-base';
import { Avatar, Header, Card, Divider } from 'react-native-elements'


const { width, height } = Dimensions.get("window")

export default class AddService extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profileData:  this.props.screenProps.profileData,
            add: true,
            category:[],
            selectedCategory:"",
            name: "",
            cost: ""
        }
    }


    componentDidMount() {
        const {profileData} = this.state
        
       

        // console.log("email, password, address, name, phoneNo, profilePic", email, password)


        fetch("http://192.168.1.112/SoPlush/category/category.php?action=select_category", {
            method: 'GET',
            // dataType: "json",
            // headers: {
            //     'Accept' : 'application/json',
            //     'Content-Type': 'multipart/form-data'
            // },
            // body: ""
        }).then(res => res.json())
        .then(resp =>{
          console.log(JSON.stringify(resp))
          var successData =  resp
  
          if(successData.status === true){
              // console.log("successData.data[0].role_id === 3", successData.data[0].role_id === 3)
                this.setState({
                    category: successData.data
                })
                //   console.log("Category PRO", successData)
            // this.props.navigation.navigate("Main")
       
          }else {
            Alert.alert(successData.message)
          }
        })
        .catch(err => console.log("Category err err",err));
    }



  addCategory = () => {
        const {name, cost, selectedCategory, category, profileData} = this.state
        console.log(selectedCategory, profileData.user_id)

    var formData = new FormData()
    formData.append("name", name)
    formData.append("cost", cost)
    formData.append("category_id", selectedCategory)
    formData.append("user_id", profileData.user_id)
    // this.props.navigation.navigate("ServiceList")
    // category.map((val) => {
    //     if (val.category_name === selectedCategory) {
    //         formData.append("category_id", val.category_id)
    //     }
// })
    fetch("http://192.168.1.112/SoPlush/beautician/beautician_service.php?action=add_beautician_service", {
        method: 'POST',
        dataType: "json",
        headers: {
            'Accept' : 'application/json',
            'Content-Type': 'multipart/form-data'
        },
        body: formData
    }).then(res => res.json())
    .then(resp =>{
      console.log(JSON.stringify(resp))
      var successData =  resp

      if(successData.status === true){
          // console.log("successData.data[0].role_id === 3", successData.data[0].role_id === 3)
            // this.setState({
            //     category: successData.data
            // })
            //   console.log("Category PRO", successData)
        this.props.navigation.navigate("ServiceList")
   
      }else {
        Alert.alert(successData.message)
      }
    })
    .catch(err => console.log("Category err err",err));

  }



    static navigationOptions = () => ({
        headerMode: 'none',
        headerVisible: false,
        header: null,
    })


    render() {
        // console.log("this.state.category", this.state.category)
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

                    <View style={{ height, width, backgroundColor: "rgba(200, 165, 212, 0.7)", justifyContent: "center" }}>

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
                                        <Input keyboardType="number-pad" onChangeText={(e) => { this.setState({ cost: e }) }} placeholder="Enter Cost" />
                                    </Item>
                                    <View>
                                    <Picker
                                            selectedValue={this.state.selectedCategory}
                                            style={{height: 50, width: 100}}
                                            onValueChange={(itemValue, itemIndex) =>
                                                this.setState({selectedCategory: itemValue})
                                            }>
                                                {/* <Picker.Item label="jksfdgsdfh" value="{value.category_name}"/> */}
                                                {this.state.category.map((value, index) => {
                                                    console.log("value.category_name", value.category_name)
                                                    return(<Picker.Item label={value.category_name} value={value.category_id}/>)
                                                })}
                                    </Picker>
                                    </View>

                                            <Button onPress={this.addCategory} style={{justifyContent:"center",alignContent:"center", alignItems:"center", backgroundColor:"#fc8b8c", width:"100%", borderRadius: 10, opacity:0.7, marginTop:"5%"}}> 
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
