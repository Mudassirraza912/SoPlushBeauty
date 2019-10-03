import React, { Component } from 'react'
import { Text, View, ImageBackground, Dimensions, Image, TouchableOpacity, ScrollView } from 'react-native'
// import {  } from 'react-native-gesture-handler';
import { Container, Content, List, ListItem, Left, Right, Button } from 'native-base';
import {Avatar, Header, Icon} from 'react-native-elements'


const {width, height} = Dimensions.get("window")

export default class ServiceList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            services : [
                {
                    name: "So plush",
                    price: "$70"
                },
                {
                    name: "Blow Out",
                    price: "$70"
                },
                {
                    name: "Blow Out",
                    price: "$70"
                },
                {
                    name: "Blow Out",
                    price: "$70"
                },
                {
                    name: "Blow Out",
                    price: "$70"
                },
                {
                    name: "Blow Out",
                    price: "$70"
                },
                {
                    name: "Blow Out",
                    price: "$70"
                },
                
               
            ]
        }
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
                        centerComponent={<Text style={{alignSelf:"center", fontSize:30, fontFamily:"MrEavesXLModNarOT-Reg"}}>Services List</Text>}
                        // rightComponent={{ icon: 'home', color: '#000' }}
                        />



                <View style={{ height, width, backgroundColor:"rgba(190, 144, 212, 0.7)",justifyContent:"center"}}>

                <ScrollView style={{height: height}}>

                <View style={{backgroundColor:"#fff", width:"80%",justifyContent:"center", alignContent:"center", alignSelf:"center",borderRadius:10, shadowOpacity: 1, elevation: 4, shadowRadius: 20, shadowOffset: { width: 0, height: 13 }, shadowColor: 'rgba(46, 229, 157, 0.4)', marginTop: "10%", paddingBottom:10}}>
                   

                <View>
                    {this.state.services.map((value, index) => {
                        return(
                        <List> 
                            <ListItem>
                            <Left>
                                <Text style={{fontFamily:"MrEavesXLModNarOT-Reg", fontSize:20}}>{value.name}</Text>
                            </Left>
                            <Right>
                            <Text style={{color:"#f14538", fontFamily:"MrEavesXLModNarOT-Reg", fontSize:20}}>{value.price}</Text>
                            </Right>
                            </ListItem>
                    </List>

                        )
                    })}
                         
              </View>
                      
                        
                  <View style={{alignContent:"center", alignItems:"center", marginTop:"5%"}}>
                    <Button onPress={() => {this.setState({renderEMail: false, renderCode: false, renderPassword:false}),
                this.props.navigation.navigate('Main')}} style={{justifyContent:"center",alignContent:"center", alignItems:"center", backgroundColor:"#f14538", width:"90%", borderRadius: 10, opacity:0.7}}> 
                     <Text style={{alignSelf:"center",color:"#fff", fontFamily:"MrEavesXLModNarOT-Reg", fontSize:20}}>
                       Submit
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
