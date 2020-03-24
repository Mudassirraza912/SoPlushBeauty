import React, { Component } from 'react'
import { Text, View, ImageBackground, Dimensions, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native'
// import {  } from 'react-native-gesture-handler';
import { Container, Content,Left, Right, Button } from 'native-base';
import {Avatar, Header, Icon, Card, ListItem, Divider} from 'react-native-elements'
import img from '../../../assets/notiLogo.png'
import moment from "moment"

const {width, height} = Dimensions.get("window")

export default class UserNotification extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notifications :  [
                {
                    icon: img,
                    data: "Lorem Ipsum is simply dummy text of the printing ",
                    time: "8 May, 2018",
                },
              {
                    icon: img,
                    data: "Lorem Ipsum is simply dummy text of the printing ",
                    time: "8 May, 2018",
                },
                {
                    icon: img,
                    data: "Lorem Ipsum is simply dummy text of the printing ",
                    time: "8 May, 2018",
                },
                {
                    icon: img,
                    data: "Lorem Ipsum is simply dummy text of the printing ",
                    time: "8 May, 2018",
                },
                {
                    icon: img,
                    data: "Lorem Ipsum is simply dummy text of the printing ",
                    time: "8 May, 2018",
                },
                {
                    icon: img,
                    data: "Lorem Ipsum is simply dummy text of the printing ",
                    time: "8 May, 2018",
                },
                {
                    icon: img,
                    data: "Lorem Ipsum is simply dummy text of the printing ",
                    time: "8 May, 2018",
                },
                {
                    icon: img,
                    data: "Lorem Ipsum is simply dummy text of the printing ",
                    time: "8 May, 2018",
                },
                {
                    icon: img,
                    data: "Lorem Ipsum is simply dummy text of the printing ",
                    time: "8 May, 2018",
                },
                {
                    icon: img,
                    data: "Lorem Ipsum is simply dummy text of the printing ",
                    time: "8 May, 2018",
                },
                
                
               
            ],
            data: [],

            profileData: this.props.screenProps.profileData,
        }
    }

    componentDidMount() {
        const {profileData} = this.state
        const formData = new FormData()
        formData.append("common_id",profileData.user_id)
        fetch("http://soplush.ingicweb.com/soplush/notification/notification_api.php?action=get_notification", {
            method: 'POST',
            // dataType: "json",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'multipart/form-data'
            },
            body: formData
        }).then(res => res.json())
            .then(async (resp) => {
                var successData = resp

                console.log(JSON.stringify(successData))
                if(successData.data.length > 0) {
                    this.setState({data: successData.data})
                }
            })
            .catch(err => {
                console.log("err err", err)
            });
    }

    static navigationOptions = () => ({
        headerMode: 'none',
        headerVisible: false,
        header: null,
        drawerLockMode: 'locked-closed'
    })


    keyExtractor = (item, index) => index.toString()

    renderItem = ({ item }) => {
        // let length = 70
        // let mainItem = item.notification_msg
        // if(item.notification_msg.length < length){
        //     mainItem = item.notification_msg
        // } else { mainItem = `${item.notification_msg.substring(0, length)}...` }
        var month = moment(item.notic_time).format('MMMM')
        var day =  moment(item.notic_time).format('DD')
        var year =  moment(item.notic_time).format('YYYY')

        console.log("day month , year", `${day} ${month}, ${year}`)
        if (item.noti_status === "Accepted") 
        {
            var msg = `${item.username} is Accepted your order `
        }if(item.noti_status === "Rejected") {
            var msg = `${item.username} is Rejected your order `
        }
        if(item.noti_status === "Completed") {
            var msg = `${item.username} is Completed your order `
        }

        return(
        <View style={{backgroundColor:"transparent", width:'100%'}}>
           <ListItem
        containerStyle={{backgroundColor:"transparent", width:"100%"}}
          title={msg}
          subtitle={`${day} ${month}, ${year}`}
          titleStyle = {{fontFamily:"Poppins-Regular", textAlignVertical: "top", fontSize: 14}}
          subtitleStyle={{color:"red", fontFamily:"Poppins-Regular", textAlignVertical: "bottom", marginTop: 8}}
          leftAvatar={{
            // source: item.icon &&  item.icon ,
            source:{uri: `http://soplush.ingicweb.com/soplush/profile_pics/${item.profile_pic}`},
            titleStyle:{fontFamily:"Poppins-Regular"},
            // title: item.data[0],
            rounded:false,
            size:'large',
            containerStyle:{borderRadius: 10, backgroundColor:"transparent", overflow:'hidden'},
            iconStyle:{borderRadius: 20, overflow:'hidden'}, 
            avatarStyle:{borderRadius: 10, backgroundColor:"transparent", overflow:'hidden'}, 
          }}
          
        />
        <Divider style={{ backgroundColor: '#bdbdbd', height: 0.2 }} />
        </View>
      )}

      

    
    render() {
        return (
            <View style={{flex:1, height:'100%', width:'100%', marginTop: -80}}>
                <ImageBackground source={require('../../../assets/inner.png')} style={{height:"100%", width:"100%"}}> 

                <Header
                    containerStyle={{marginTop:60, backgroundColor:"#fff"}}
                    placement="left"
                    leftComponent={<Icon onPress={() => {this.props.navigation.navigate('UserHome')}} name="arrow-back" color="#000" />}
                    centerComponent={<Text style={{alignSelf:"center",fontSize:20, fontFamily:"Poppins-Regular"}}>NOTIFICATIONS</Text>}
                    // rightComponent={  <Image source={require('../../../assets/notification.png')} style={{height:20, width:20}} />}
                    />



                <View style={{ flex:1,height:'100%', width:'100%',justifyContent:"center"}}>

                <ScrollView style={{height: height}}>

                {/* <View style={{backgroundColor:"#fff", width:"80%",justifyContent:"center", alignContent:"center", alignSelf:"center",borderRadius:10, shadowOpacity: 1, elevation: 4, shadowRadius: 20, shadowOffset: { width: 0, height: 13 }, shadowColor: 'rgba(46, 229, 157, 0.4)', marginTop: '10%', marginBottom:'5%'}}> */}
                   
                   <View style={{flex: 1,justifyContent:"center", alignContent:"center", alignItems:"center", marginTop:20, width:'100%'}}>

                <View style={{width:'100%'}}>
                <FlatList
                    style={{backgroundColor:"transparent", width:'100%'}}
                    keyExtractor={this.keyExtractor}
                    data={this.state.data}
                    renderItem={this.renderItem}
                    ListHeaderComponent={() => (!this.state.data.length > 0 ? 
                        <Text style={{textAlign: 'center',}}>The list is empty</Text>  
                        : null)}
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