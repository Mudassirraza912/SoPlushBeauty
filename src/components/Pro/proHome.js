import React, { Component } from 'react'
import { Text, View, ImageBackground, Dimensions, Image, TouchableOpacity, ScrollView, Alert, BackHandler  } from 'react-native'
// import {  } from 'react-native-gesture-handler';
// import { Container, Header, Content, Item, Input, Icon, Label, Form, Button, Body } from 'native-base';
import {Avatar, Header, Icon} from 'react-native-elements'
import { withNavigationFocus } from 'react-navigation';

const {width, height} = Dimensions.get("window")

class ProHome extends Component {
    constructor(props) {
        super(props);
    }

   static navigationOptions = () => ({
        // headerBackTitle: null,
        title:"HOME",
        headerTitleStyle: {
            fontFamily:"MrEavesXLModNarOT-Reg",
            fontSize:30
        }
        // headerStyle: {
        //     alignContent:"center",
        //     justifyContent:"center",
        //     alignItems:"center",
        //     // alignSelf:"cneter"
        // },
    })

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);

    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
    }

    handleBackButton = () => {
        if (this.props.isFocused) {
            Alert.alert(
                'Exit App',
                'Exiting the application?',
                [
                    {
                        text: 'Cancel',
                        onPress: () => console.log('Cancel Pressed'),
                        style: 'cancel'
                    },
                    {
                        text: 'OK',
                        onPress: () => BackHandler.exitApp()
                    }
                ],
                {
                    cancelable: false
                }
            );
            return true;
        }
    };
    
    render() {
        return (
            <View style={{flex:1, height, width, marginTop: -80}}>
                <ImageBackground source={require('../../../assets/opacity.jpg')} style={{height:"100%", width:"100%",opacity:0.9}}> 
 
                 {/* <Header  style={{backgroundColor: '#fff', marginTop:80}}>

             <View style={{display:"flex", flexDirection:"row"}}>
    
               <View style={{marginTop:25, marginLeft: -80}}>
                   <Text style={{fontFamily:"MrEavesXLModNarOT-Reg", fontSize: 25 }}>
                        Home
                   </Text>
               </View>

               <View style={{marginTop:25, marginLeft:20}}>
                   <Text style={{fontFamily:"MrEavesXLModNarOT-Reg", fontSize: 25 }}>
                        Home
                   </Text>
               </View>


               <View style={{marginTop:25, marginLeft:20}}>
                   <Text style={{fontFamily:"MrEavesXLModNarOT-Reg", fontSize: 25 }}>
                   </Text>
               </View>

             </View>

       </Header> */}


                        <Header
                        containerStyle={{marginTop:60, backgroundColor:"#fff"}}
                        placement="left"
                        leftComponent={<Icon onPress={() => {this.props.navigation.toggleDrawer()}} name="menu" color="#000" />}
                        centerComponent={<Text style={{alignSelf:'center', fontSize:30, fontFamily:"MrEavesXLModNarOT-Reg"}}>HOME</Text>}
                        // rightComponent={{ icon: 'home', color: '#000' }}
                        />


                <View style={{ height, width, backgroundColor:"rgba(200, 165, 212, 0.7)",justifyContent:"center"}}>
                
                <View style={{height:"80%", width : width-20, backgroundColor:'#fff', borderWidth:1, alignSelf:"center",borderRadius: 10, opacity:0.75, marginTop:-70, borderColor:'#fff', borderWidth:1 }}>

                    <ScrollView>

                    <View style={{alignSelf:"center", alignContent:"center", alignItems:"center", marginTop:"10%"}}> 
                    <Image source={require('../../../assets/text.png')} style={{opacity: 2}} />
                    </View>

                    <View style={{display:"flex", flexDirection:"row", padding: 10, width:"100%", justifyContent:"space-around", marginTop:"3%", paddingVertical:60}}>

                        <TouchableOpacity onPress={() => {this.props.navigation.navigate("ServiceList")}}>
                        <View style={{alignContent:"center",alignItems:"center",alignSelf:"center",backgroundColor:"transparent",width:143, height:139, borderRadius: 5, borderColor:"#000", borderWidth: 1, justifyContent:"space-evenly" }}>

                            <Image source={require('../../../assets/makeUp.png')} style={{height:60, width:80, marginTop:"10%"}}/>
                            <Text style={{fontFamily: 'MrEavesXLModNarOT-Reg', fontWeight:"bold"}}>Services</Text>

                        </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => {this.props.navigation.navigate("BookingReq")}}>
                        <View style={{alignContent:"center",alignItems:"center",alignSelf:"center",backgroundColor:"#fc8b8c",width:143, height:139, borderRadius: 5, justifyContent:"space-evenly" }}>

                            <Image source={require('../../../assets/book.png')} style={{height:60, width:55, marginTop:"10%"}}/>
                            <Text style={{fontFamily: 'MrEavesXLModNarOT-Reg', fontWeight:"bold", color:"#fff"}}>Booking</Text>

                        </View>
                        </TouchableOpacity>

                    </View>

                    </ScrollView>     
                </View>
                </View>
                </ImageBackground>
        </View>
        )
    }
}

export default withNavigationFocus(ProHome)