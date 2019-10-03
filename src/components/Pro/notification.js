import React, { Component } from 'react'
import { Text, View, ImageBackground, Dimensions, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native'
// import {  } from 'react-native-gesture-handler';
import { Container, Content,Left, Right, Button } from 'native-base';
import {Avatar, Header, Icon, Card, ListItem, Divider} from 'react-native-elements'
import img from '../../../assets/barbie.jpg'


const {width, height} = Dimensions.get("window")

export default class Notification extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notifications : [
                {
                    icon: img,
                    data: "Dividers are visual separators of content. Use Divider when you want to make a distinction between sections of content.",
                    time: "02:00",
                },
              {
                    icon: img,
                    data: "Hair Cutting",
                    time: "02:00",
                },
                {
                    icon: img,
                    data: "Hair Cutting",
                    time: "02:00",
                },
                {
                    icon: img,
                    data: "Hair Cutting",
                    time: "02:00",
                },
                {
                    icon: img,
                    data: "Hair Cutting",
                    time: "02:00",
                },
                {
                    icon: img,
                    data: "Hair Cutting",
                    time: "02:00",
                },
                {
                    icon: img,
                    data: "Hair Cutting",
                    time: "02:00",
                },
                {
                    icon: img,
                    data: "Hair Cutting",
                    time: "02:00",
                },
                {
                    icon: img,
                    data: "Hair Cutting",
                    time: "02:00",
                },
                {
                    icon: img,
                    data: "Hair Cutting",
                    time: "02:00",
                },
                
                
               
            ]
        }
    }


    static navigationOptions = () => ({
        headerMode: 'none',
        headerVisible: false,
        header: null,
    })


    keyExtractor = (item, index) => index.toString()

    renderItem = ({ item }) => {
        let length = 70
        let mainItem = item.data
        if(item.data.length < length){
            mainItem = item.data
        } else { mainItem = `${item.data.substring(0, length)}...` }
        return(
        <View style={{backgroundColor:"transparent", width:width}}>
        <ListItem
        containerStyle={{backgroundColor:"transparent", width:"100%"}}
          title={mainItem}
          
          subtitle={item.time}
          titleStyle = {{fontFamily:"MrEavesXLModNarOT-Reg"}}
          subtitleStyle={{color:"red",fontFamily:"MrEavesXLModNarOT-Reg"}}
          leftAvatar={{
            source: item.icon &&  item.icon ,
            titleStyle:{fontFamily:"MrEavesXLModNarOT-Reg"},
            title: item.data[0],
            rounded:false,
            size:"medium",
            containerStyle:{borderRadius: 10, backgroundColor:"none"},
            iconStyle:{borderRadius: 20}, 
            avatarStyle:{borderRadius: 10, backgroundColor:"none"}, 
          }}
          
        />
        <Divider style={{ backgroundColor: 'lightgray' }} />
        </View>
      )}

      

    
    render() {
        return (
            <View style={{flex:1, height, width, marginTop: -80}}>
                <ImageBackground source={require('../../../assets/opacity100.png')} style={{height:"100%", width:"100%",opacity:0.9}}> 

                <Header
                    containerStyle={{marginTop:60, backgroundColor:"#fff"}}
                    placement="left"
                    leftComponent={<Icon onPress={() => {this.props.navigation.navigate('Main')}} name="arrow-back" color="#000" />}
                    centerComponent={<Text style={{alignSelf:"center", fontSize:30, fontFamily:"MrEavesXLModNarOT-Reg"}}>Notifications</Text>}
                    rightComponent={  <Image source={require('../../../assets/notification.png')} style={{height:30, width:30}} />}
                    />



                <View style={{ height, width, backgroundColor:"rgba(190, 144, 212, 0.7)",justifyContent:"center"}}>

                <ScrollView style={{height: height}}>

                {/* <View style={{backgroundColor:"#fff", width:"80%",justifyContent:"center", alignContent:"center", alignSelf:"center",borderRadius:10, shadowOpacity: 1, elevation: 4, shadowRadius: 20, shadowOffset: { width: 0, height: 13 }, shadowColor: 'rgba(46, 229, 157, 0.4)', marginTop: '10%', marginBottom:'5%'}}> */}
                   
                   <View style={{justifyContent:"center", alignContent:"center", alignItems:"center", marginTop:20}}>

                <View style={{width:width}}>
                <FlatList
                    style={{backgroundColor:"transparent", width:width}}
                    keyExtractor={this.keyExtractor}
                    data={this.state.notifications}
                    renderItem={this.renderItem}
                    />
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
