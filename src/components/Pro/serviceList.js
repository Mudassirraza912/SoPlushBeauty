import React, { Component } from 'react'
import { Text, View, ImageBackground, Dimensions, Image, TouchableOpacity, ScrollView, Alert } from 'react-native'
// import {  } from 'react-native-gesture-handler';
import { Container, Content, List, ListItem, Left, Right, Button } from 'native-base';
import {Avatar, Header, Icon} from 'react-native-elements'


const {width, height} = Dimensions.get("window")

export default class ServiceList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // services : [
            //     {service_name : "So Plush",
            //     service_cost:"20"
            // },
            // {service_name : "So Plush",
            //     service_cost:"20"
            // },
            // {service_name : "So Plush",
            //     service_cost:"20"
            // },
            // {service_name : "So Plush",
            //     service_cost:"20"
            // },

            // {service_name : "So Plush",
            //     service_cost:"20"
            // },
            // ],
            profileData : this.props.screenProps.profileData,
            services: []
        }
    }


    componentWillMount() {
        this.setState({
            profileData: this.props.screenProps.profileData
        })
    }

    componentDidMount() {
        const {profileData} = this.state
        console.log("user_id", profileData.user_id)
        const formData = new FormData();
        formData.append("id", profileData.user_id),
       

        // console.log("email, password, address, name, phoneNo, profilePic", email, password)


        fetch("https://hnhtechsolutions.com/hassan/soplush/beautician/beautician_service.php?action=select_service", {
            method: 'POST',
            // dataType: "json",
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
              this.setState({
                  services: successData.data
              })
                //   console.log("SUCCESS PRO", successData)
                //   Alert.alert("Login successful")
            // this.props.navigation.navigate("Main")
       
          }else {
            Alert.alert(successData.message)
          }
        })
        .catch(err => console.log("err err err",err));
    }
//    static navigationOptions = () => ({
//         // headerBackTitle: null,
//         title:"SERVICES LIST",
//         headerTitleStyle: {
//             fontFamily:"MrEavesXLModNarOT-Reg",
//             fontSize:30
//         }
//         // headerStyle: {
//         //     alignContent:"center",
//         //     justifyContent:"center",
//         //     alignItems:"center",
//         //     // alignSelf:"cneter"
//         // },
//     })

    // static navigationOptions = ({
    
    //     navigation, screenProps }) => ({
    //     drawerLabel: "SERVICES LIST",
    //     title:"SERVICES LIST",
    //     headerTintColor: 'white',
    //     headerTitleStyle: {
    //         fontFamily:"MrEavesXLModNarOT-Reg",
    //         fontSize:30
    //     },
    //     // title: "Service List",
    //     // headerTitleStyle: { 
    //     //     textAlign:"center", 
    //     //     flex:1 
    //     // },
        
    //     headerLeft: (
    //         console.log("navigation",navigation),
    //       <View style={{ paddingHorizontal: 10
    //        }}>
    //         <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
    //           <Icon name="menu" size={30} color="white" />
    //         </TouchableOpacity>
    //       </View>
    //     ),

    //   });



    static navigationOptions = () => ({
        headerMode: 'none',
        headerVisible: false,
        header: null,
    })

    
    render() {
        return (
            <View style={{flex:1, height, width, marginTop: -80}}>
                <ImageBackground source={require('../../../assets/opacity.jpg')} style={{height:"100%", width:"100%",opacity:0.9}}> 

                <Header
                        containerStyle={{marginTop:60, backgroundColor:"#fff"}}
                        placement="left"
                        leftComponent={<Icon onPress={() => {this.props.navigation.toggleDrawer()}} name="menu" color="#000" />}
                        centerComponent={<Text style={{alignSelf:"center", fontSize:30, fontFamily:"MrEavesXLModNarOT-Reg"}}>SERVICE LIST</Text>}
                        // rightComponent={{ icon: 'home', color: '#000' }}
                        />



                <View style={{ height, width, backgroundColor:"rgba(200, 165, 212, 0.7)",justifyContent:"center"}}>

                <ScrollView style={{height: height}}>

                <View style={{backgroundColor:"#fff", width:"80%",justifyContent:"center", alignContent:"center", alignSelf:"center",borderRadius:10, shadowOpacity: 1, elevation: 4, shadowRadius: 20, shadowOffset: { width: 0, height: 13 }, shadowColor: 'rgba(46, 229, 157, 0.4)', marginTop: "10%", paddingBottom:10}}>
                   

                <View>
                    {this.state.services.map((value, index) => {
                        return(
                        <List> 
                            <ListItem>
                            <Left>
                                <Text style={{fontFamily:"MrEavesXLModNarOT-Reg", fontSize:20}}>{value.service_name}</Text>
                            </Left>
                            <Right>
                            <Text style={{color:"#fc8b8c", fontFamily:"MrEavesXLModNarOT-Reg", fontSize:20}}>${value.service_cost}</Text>
                            </Right>
                            </ListItem>
                    </List>

                        )
                    })}
                         
              </View>
                      
                        
                  <View style={{alignContent:"center", alignItems:"center", marginTop:"5%"}}>
                    <Button onPress={() => {this.setState({renderEMail: false, renderCode: false, renderPassword:false}),
                this.props.navigation.navigate('Main')}} style={{justifyContent:"center",alignContent:"center", alignItems:"center", backgroundColor:"#fc8b8c", width:"90%", borderRadius: 10, opacity:0.7}}> 
                     <Text style={{alignSelf:"center",color:"#fff", fontFamily:"MrEavesXLModNarOT-Reg", fontSize:20}}>
                       Save Service
                    </Text>   
                     </Button>
                </View>

                </View>



                </ScrollView>


                </View>
                </ImageBackground>
        </View>
        )
    }
}
