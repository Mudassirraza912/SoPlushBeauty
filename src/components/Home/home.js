import React, { Component } from 'react'
import { Text, View, ImageBackground, Dimensions, Image, TouchableOpacity,  } from 'react-native'
import {Avatar, Header, Card, Divider, Icon} from 'react-native-elements'
import Navigator from '../../Navigation/navigator'
import UserNavigator from '../../UserNavigator/userNavigator'
// import {  } from 'react-native-gesture-handler';

const {width, height} = Dimensions.get("window")

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            role:"",
            profileData: ''
        }
    }

   static navigationOptions = () => ({
        // headerBackTitle: null,
        title:"HOME",
        headerTitleStyle: {
            fontFamily:"MrEavesXLModNarOT-Reg",
            fontSize:30
        },
        headerMode: 'none',
        headerVisible: false,
        header: null,
        // headerStyle: {
        //     alignContent:"center",
        //     justifyContent:"center",
        //     alignItems:"center",
        //     // alignSelf:"cneter"
        // },
    })

   

    
    render() {
        const {role} = this.state
        if(role === ""){
        return (
            <View style={{flex:1, height, width, marginTop: -80}}>
                <ImageBackground source={require('../../../assets/opacity.jpg')} style={{height:"100%", width:"100%",opacity:0.9}}> 
                <Header
                        leftComponent={<Icon  name="arrow-back" color="#000" />}
                        containerStyle={{marginTop:60, backgroundColor:"#fff"}}
                        placement="left"
                        centerComponent={<Text style={{marginLeft:"40%", fontSize:30, fontFamily:"MrEavesXLModNarOT-Reg"}}>Home</Text>}
                        />

                <View style={{ height, width, backgroundColor:"rgba(200, 165, 212, 0.7)",justifyContent:"center"}}>

                <View style={{height:"78%", width : width-20, backgroundColor:'#fff', borderWidth:1, marginTop:-50,  alignSelf:"center",borderRadius: 10, opacity:0.75, marginBottom:"4%" }}>

                    <View style={{alignSelf:"center", alignContent:"center", alignItems:"center", marginTop:"15%"}}> 
                    <Image source={require('../../../assets/text.png')} style={{opacity: 2}} />
                    <Text style={{marginTop:"12%", fontFamily:"MrEavesXLModNarOT-Reg", fontSize:30}}>I am a...</Text> 
                    </View>

                    <View style={{display:"flex", flexDirection:"row", padding: 10, width:"100%", justifyContent:"space-around", marginTop:"3%"}}>

                        <TouchableOpacity onPress={() => {this.props.navigation.navigate("UserNavigator")}}>
                        <View style={{alignContent:"center",alignItems:"center",alignSelf:"center",backgroundColor:"transparent",width:143, height:139, borderRadius: 5, borderColor:"#000", borderWidth: 1, justifyContent:"space-evenly" }}>

                            <Image source={require('../../../assets/userIcon.png')} style={{height:60, width:55, marginTop:"10%"}}/>
                            <Text style={{fontFamily: 'MrEavesXLModNarOT-Reg', fontWeight:"bold"}}>USER</Text>

                        </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => {this.props.navigation.navigate("ProNavigator")}}>
                        <View style={{ width:"40%",borderRadius:10}}>
                            <Image source={require('../../../assets/Button.png')} />
                        </View>
                        </TouchableOpacity>

                    </View>
                            
                </View>
                </View>
                </ImageBackground>
        </View>
        )
    }else {
        return(
        <View style={{flex: 1}}>
                {role === "pro"  && <Navigator screenProps={{ fetchProfileData: this.fetchProfileData, profileData: this.state.profileData}} />}
                {role === "user"  && <UserNavigator screenProps={{ fetchProfileData: this.fetchProfileData, profileData: this.state.profileData}} />}

        </View>
        )
    }








    }
}
