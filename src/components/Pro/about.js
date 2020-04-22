import React, { Component } from 'react'
import { Text, View, ImageBackground, Dimensions, Image, TouchableOpacity, ScrollView } from 'react-native'
// import {  } from 'react-native-gesture-handler';
import { Container, Content, List, ListItem, Left, Right, Button } from 'native-base';
import { Avatar, Header, Icon, Card } from 'react-native-elements'


const { width, height } = Dimensions.get("window")

export default class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            about: null
       }
    }


    static navigationOptions = () => ({
        headerMode: 'none',
        headerVisible: false,
        header: null,
        drawerLockMode: 'locked-closed'
    })


    componentDidMount = () => {
                
        const formData = new FormData()
        formData.append('role_name','super_admin')

        fetch("http://soplush.ingicweb.com/soplush/application_details/application_details.php?action=get&role_name=customer&type=about", {
          method: 'POST',
          // dataType: "json",
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'multipart/form-data'
          },
          body: formData
      }).then(res => res.json())
            .then(resp => {
            console.log('response ADMIN',resp)
            this.setState({
             about: resp.data.text
            })
          })
        .catch(err => console.log('err', err))
} 




    render() {
        return (
            <View style={{ flex: 1, height:'100%', width:'100%', marginTop: -80 }}>
                <ImageBackground source={require('../../../assets/inner.png')} style={{ height: "100%", width: "100%", opacity: 0.9 }}>

                    <Header
                        containerStyle={{ marginTop: 60, backgroundColor: "#fff" }}
                        placement="left"
                        leftComponent={<Icon onPress={() => { this.props.navigation.navigate('Main') }} name="arrow-back" color="#000" />}
                        centerComponent={<Text style={{ alignSelf: "center", fontSize: 20, fontFamily: "Poppins-Regular" }}>ABOUT</Text>}
                        // rightComponent={<TouchableOpacity onPress={() => { this.props.navigation.navigate("Notification") }}>
                        //     <Image source={require('../../../assets/notification.png')} style={{ height:26, width:20 }} />
                        // </TouchableOpacity>}
                    />



                    <View style={{flex: 1 ,height:'100%', width:'100%', backgroundColor: "rgba(246, 232, 232, 0.5)", justifyContent: "center" }}>

                        <ScrollView style={{ height: height }}>

                            {/* <View style={{backgroundColor:"#fff", width:"80%",justifyContent:"center", alignContent:"center", alignSelf:"center",borderRadius:10, shadowOpacity: 1, elevation: 4, shadowRadius: 20, shadowOffset: { width: 0, height: 13 }, shadowColor: 'rgba(46, 229, 157, 0.4)', marginTop: '10%', marginBottom:'5%'}}> */}

                            <View style={{ marginTop: 20, marginHorizontal: "3%" }}>

                                <Text style={{ fontFamily: "Poppins-Regular", fontSize: 20 }}>About Us</Text>
        <Text style={{ fontFamily: "Poppins-Regular", marginTop: "3%", fontSize: 12, textAlign: "justify", fontStyle: "normal", color: "#48576f", lineHeight: 20  }}>{this.state.about}</Text>

                                {/* <Text style={{ fontFamily: "Poppins-Regular", fontSize: 20, marginTop: "6%" }}>Who We Are?</Text>
                                <Text style={{ fontFamily: "Poppins-Regular", marginTop: "3%", fontSize: 12, textAlign: "justify", fontStyle: "normal", color: "#48576f", lineHeight: 20 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </Text> */}

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