import React, { Component } from 'react'
import { Text, View, ImageBackground, Dimensions, Image, TouchableOpacity, ScrollView, Picker, PickerItem, Alert, BackHandler } from 'react-native'
// import {  } from 'react-native-gesture-handler';
import { Container, Content, List, ListItem, Left, Right, Button, Item, Input, Label, Form, Icon, Spinner } from 'native-base';
import { Avatar, Header, Card, Divider } from 'react-native-elements'
import LinearGradient from 'react-native-linear-gradient'
import { withNavigationFocus } from 'react-navigation';


const { width, height } = Dimensions.get("window")

export default class AddService extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profileData:  this.props.screenProps.profileData,
            add: true,
            category:[],
            selectedCategory:"1",
            name: "",
            cost: "",
            loader: false,

        }
    }


    componentDidMount() {
        const {profileData} = this.state
        
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);

        // console.log("email, password, address, name, phoneNo, profilePic", email, password)


        fetch("https://hnhtechsolutions.com/hassan/soplush/category/category.php?action=select_category", {
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
            Alert.alert("Error",successData.message)
          }
        })
        .catch(err => console.log("Category err err",err));
    }


    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
    }

    handleBackButton = () => {
        console.log('RUNNNING')
        if (!this.state.add) {
            console.log('add: true')
           this.setState({add: true})
            return true;
        }
        else {
            console.log('navigation: true')

            this.props.navigation.navigate('Main')
        }
    };


  addCategory = () => {
      this.setState({loader: true})
        const {name, cost, selectedCategory, category, profileData} = this.state
        console.log(selectedCategory, profileData.user_id)

        if (name === "" || cost === "" || selectedCategory === "") {
            this.setState({loader: false})
            Alert.alert("Warning!","please fill all given fileds below")
        } else {
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
    fetch("https://hnhtechsolutions.com/hassan/soplush/beautician/beautician_service.php?action=add_beautician_service", {
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
            this.setState({
                add: false,
            selectedCategory:"",
            name: "",
            cost: ""
            })
            this.setState({loader: false})
        this.props.navigation.navigate("ServiceList")
   
      }else {
        this.setState({loader: false})
        Alert.alert("Error",successData.message)
      }
    })
    .catch(err => {
        this.setState({loader: false})
        console.log("Category err err",err)});
    }

  }



    static navigationOptions = () => ({
        headerMode: 'none',
        headerVisible: false,
        header: null,
    })


    render() {
        // console.log("this.state.category", this.state.category)
        return (
            <View style={{ flex: 1, height: '100%', width:'100%', marginTop: -80 }}>
                <ImageBackground source={require('../../../assets/opacity100.png')} style={{ height: "100%", width: "100%", opacity: 0.9, marginTop: 20 }}>


                    <Header
                        containerStyle={{ marginTop: 40, backgroundColor: "#fff" }}
                        placement="left"
                        leftComponent={<Icon onPress={() => { 
                        this.handleBackButton()
                        this.props.navigation.navigate('Main')
                         }} name="arrow-back" color="#000" />}
                        centerComponent={<Text style={{alignSelf:'center',fontSize: 30, fontFamily: "MrEavesXLModNarOT-Reg" }}>ADD SERVICE</Text>}
                    // rightComponent={<TouchableOpacity onPress={() => {this.props.navigation.navigate("EditProfile")}}><Image source={require('../../../assets/edit.png')} style={{height:30, width:30}} /> 
                    // </TouchableOpacity> }
                    />

                    <View style={{flex: 1 ,height:'100%', width:'100%', backgroundColor: "rgba(246, 232, 232, 0.7)", justifyContent: "center" }}>

                        <ScrollView style={{ height: height }}>

                            <View>

                                {this.state.add && <TouchableOpacity onPress={() => { this.setState({ add: false }) }} style={{ justifyContent: "center", alignContent: "center", alignItems: "center", marginTop: "50%" }}><Image style={{ height: 150, width: 150, justifyContent: "center" }} source={require('../../../assets/add-documents.png')} />

                                    <Text style={{ alignSelf: "center", color: "#000", fontFamily: "MrEavesXLModNarOT-Reg", fontSize: 20, marginTop: "7%" }}>Add Service</Text>

                                </TouchableOpacity>}


                                {!this.state.add && <View style={{ width: "80%", alignContent: "center", alignItems: "center", justifyContent: "center", alignSelf: 'center' }}>
                                    <Item floatingLabel style={{ alignSelf: 'center', alignItems: 'center', alignContent: 'center', borderBottomWidth:1, borderBottomColor: 'gray' }}>
                                        {/* <Icon active name='user' type="FontAwesome" /> */}
                                        {/* <Label>Name</Label> */}
                                        <Input onChangeText={(e) => { this.setState({ name: e }) }} placeholder="Enter Service" />
                                    </Item>
                                    <Item floatingLabel style={{ borderBottomWidth:1, borderBottomColor: 'gray'}}>
                                        {/* <Icon active name='home' type="FontAwesome" /> */}
                                        {/* <Label>Address</Label> */}
                                        <Input keyboardType="number-pad" onChangeText={(e) => { this.setState({ cost: e }) }} placeholder="Enter Cost" />
                                    </Item>
                                    <View>
                                    <Picker
                                            selectedValue={this.state.selectedCategory}
                                            style={{height: 50, width: 280}}
                                            onValueChange={(itemValue, itemIndex) =>
                                                this.setState({selectedCategory: itemValue})
                                            }>
                                                {/* <Picker.Item label="jksfdgsdfh" value="{value.category_name}"/> */}
                                                {this.state.category.map((value, index) => {
                                                    console.log("value.category_name", value.category_name)
                                                    return(<Picker.Item style={{width: 200}} label={value.category_name} value={value.category_id}/>)
                                                })}
                                    </Picker>
                                    </View>


{/* 
                                            <Button onPress={this.addCategory} style={{justifyContent:"center",alignContent:"center", alignItems:"center", backgroundColor:"#fc8b8c", width:"100%", borderRadius: 10, opacity:0.7, marginTop:"5%"}}> 
                                            <Text style={{alignSelf:"center",color:"#fff", fontFamily:"MrEavesXLModNarOT-Reg", fontSize:20}}>
                                            Ok
                                            </Text>   
                                            </Button> */}


                                       {!this.state.loader ?     <View style={{ alignContent: "center", alignItems: "center", marginTop: "5%", marginBottom:10, width: "100%" }}>
                                            {/* <LinearGradient colors={['#fff', '#fc8b8c', '#fc8b8c']} style={{ width: "90%", borderRadius: 10 }}>
                                                <Button onPress={this.addCategory} style={{ justifyContent: "center", alignContent: "center", alignItems: "center", backgroundColor: "none", opacity: 0.7, borderRadius: 10 }}>
                                                    <Text style={{ alignSelf: "center", color: "#fff", fontFamily: "MrEavesXLModNarOT-Reg", fontSize: 20 }}>
                                                    Ok
</Text>
                                                </Button>
                                            </LinearGradient> */}

<LinearGradient start={{ x: 0.0, y: 0.25 }} end={{ x: 0.0, y: 1.0 }} colors={['#F9B1B0', '#FD8788', '#FF7173']} style={{ width: "90%", borderRadius: 10}}>
                                        <TouchableOpacity  onPress={this.addCategory} style={{ justifyContent: "center", alignContent: "center", alignItems: "center", backgroundColor: "none", opacity: 0.7, borderRadius: 10 }} style={{ flexDirection: "column", justifyContent: "center", alignContent: "center", alignItems: "center", backgroundColor: "transparent", opacity: 0.7, borderRadius: 10, width:'100%' }}>
                                            <Text style={{ alignSelf: "center", textAlignVertical: "center", color: "#fff", fontFamily: "MrEavesXLModNarOT-Reg", fontSize: 20, paddingVertical: 15 }}>
                                            Submit
                    </Text>
                                        </TouchableOpacity>
                                    </LinearGradient>
                                        </View> :  <Spinner color="#fc8b8c" />}

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
