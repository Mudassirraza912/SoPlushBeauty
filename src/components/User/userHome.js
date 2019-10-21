import React, { Component } from 'react'
import { Text, View, ImageBackground, Dimensions, Image, TouchableOpacity, ScrollView, FlatList, StyleSheet } from 'react-native'
// import {  } from 'react-native-gesture-handler';
// import { Container, Header, Content, Item, Input, Icon, Label, Form, Button, Body } from 'native-base';
import { Avatar, Header, Icon } from 'react-native-elements'
import Cover1 from '../../../assets/Cover1.png'
import Cover2 from '../../../assets/Cover2.png'
import Cover3 from '../../../assets/Cover3.png'
import Cover4 from '../../../assets/Cover4.png'

const { width, height } = Dimensions.get("window")

export default class UserHome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navigate: "PersonalService",
            items: "",
            profileData:  this.props.screenProps.profileData
        }
    }

    static navigationOptions = () => ({
        // headerBackTitle: null,
        title: "HOME",
        headerTitleStyle: {
            fontFamily: "MrEavesXLModNarOT-Reg",
            fontSize: 30
        },
        headerMode: 'none',
        headerVisible: false,
        header: null,
    })


    componentWillMount() {
        console.log("this.props.screenProps.profileData",this.props.screenProps.profileData)
    }

    componentDidMount() {
        const {profileData} = this.state
        console.log("user_id", profileData.user_id)
        const formData = new FormData();
        formData.append("id", profileData.user_id),
       

        // console.log("email, password, address, name, phoneNo, profilePic", email, password)


        fetch("http://192.168.1.125/SoPlush/category/category.php?action=select_category", {
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
                    items: successData.data
                })
                //   console.log("Category PRO", successData)
            // this.props.navigation.navigate("Main")
       
          }else {
            Alert.alert(successData.message)
          }
        })
        .catch(err => console.log("Category err err",err));
    }

    render() {
        // console.log("this.state.items", this.state.items)
        const { items } = this.state
        return (
            <View style={{ flex: 1, height, width, marginTop: -80 }}>

                <Header
                    containerStyle={{ marginTop: 60, backgroundColor: "rgb(255,239,241)" }}
                    placement="left"
                    leftComponent={<Icon onPress={() => { this.props.navigation.toggleDrawer() }} name="menu" color="#000" />}
                    centerComponent={<Text style={{alignSelf:"center",fontSize: 30, fontFamily: "MrEavesXLModNarOT-Reg" }}>Home</Text>}
                    rightComponent={<TouchableOpacity onPress={() => {this.props.navigation.navigate("Notification")}}>
                            <Image source={require('../../../assets/notification.png')} style={{height:30, width:30}} />
                        </TouchableOpacity>}
                />


                <View style={{ height, width, backgroundColor: "rgb(255,239,241)", justifyContent: "center" }}>



                    <ScrollView>

                        <View style={{ alignSelf: "center", alignContent: "center", alignItems: "center", backgroundColor: "#fff", width: width }}>
                            <Image source={require('../../../assets/Cover.png')} style={{ opacity: 2 }} />
                        </View>

                        <View style={{ width: width, marginTop: "2%", marginLeft: "5%" }}>
                            <Text style={{ fontSize: 20, fontFamily: "MrEavesXLModNarOT-Reg", fontWeight:"bold" }}>SERVICES</Text>
                        </View>



                        <View style={{ flex: 1, width: Dimensions.get('window').width, height:"100%", marginBottom:"10%" }}>
                            <FlatList style={{ flex: 1, marginTop:"3%" }}
                                data={this.state.items}
                                renderItem={({ item }) => {
                                    console.log("FlatList FlatList",`http://192.168.1.125/SoPlush/images/${item.image}`)
                                    return( <View style={{ flexDirection: "column", margin: 2, height: 180, width: 180, borderRadius: 10, alignContent:"center", alignItems:"center", alignSelf:"center" }}>
                                        <TouchableOpacity onPress={() => this.props.navigation.navigate(this.state.navigate)}>
                                            <Image style={styles.imageThumbnail} source={{uri:`http://192.168.1.125/SoPlush/images/${item.image}`}} />
                                        </TouchableOpacity>
                                        <Text style={{fontSize:18, color:"#000", opacity:0.6, fontFamily:"MrEavesXLModNarOT-Reg"}}>{item.category_name}</Text>
                                    </View>
                                )
                            }
                            }
                                //Setting the number of column
                                numColumns={2}
                                key={2}
                                keyExtractor={(item, index) => index}
                            />
                        </View>




                    </ScrollView>
                </View>
            </View>
        )
    }
}





const styles = StyleSheet.create({
    btnContainer:{
      flexDirection:"row",
  // justifyContent:'space-between',
  alignContent:"center",
  
  
   
   width:"60%",
   right: "3%"
  
  },
  wordBold: {
    fontWeight: 'bold',
    color: 'black',
    alignContent:"center",
    alignItems:"center"
  
  },
  btnContainers:{
    borderWidth:2,
    flex:1,
     justifyContent:'center',
     alignItems:'center',
     justifyContent:'space-between',
  
   
   width:"30%"
  },
    imageStyle:
    {
      width:150,
      height:150,
      
      
   
     flexDirection:"row",
     justifyContent:'space-between',
      alignItems:'flex-end',
      fontSize: 40
    
      
      
    },
    imageThumbnail: {
    //   justifyContent: 'center',
    //   alignItems: 'center',
      height: 150,
      width:150,
      borderRadius: 10
    },
   
  })
