import React, { Component } from "react";
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,Image
  ,ImageBackground
} from "react-native";

import { NavigationActions } from "react-navigation";
import { Container, Header, Body, Content } from 'native-base'
import { Avatar, Button, Icon } from "react-native-elements"
// import { LinearGradient } from 'expo-linear-gradient';

class DrawerMenu extends Component {
 

  static navigationOptions = () => ({
    headerMode: 'none',
    headerVisible: false,
    header: null,
})


  render() {
        console.log(`https://hnhtechsolutions.com/hassan/soplush/profile_pics/${this.props.screenProps.profileData.profile_pic}`)
      return (
     
        <Container style={{flex: 1, justifyContent:"center", alignContent: "center"}}>
        <Header style={{ height: 100, backgroundColor: '#fff' }}>
          <View style={{display:"flex", flexDirection:"row", marginTop:20, marginRight:25}}>
  
             <View >
                    <Avatar
                        overlayContainerStyle={{backgroundColor:"#fff"}}
                        rounded
                        size="large"
                        source={{uri:`https://hnhtechsolutions.com/hassan/soplush/profile_pics/${this.props.screenProps.profileData.profile_pic}`}}
                    />
  
                  </View> 
                <View style={{marginTop:25, marginLeft:20}}>
                    <Text style={{fontFamily:"MrEavesXLModNarOT-Reg", fontSize: 25 }}>
                      {this.props.screenProps.profileData.username}
                    </Text>

{/* <Avatar
                        overlayContainerStyle={{backgroundColor:"#fff"}}
                        rounded
                        size="large"
                        source={{uri:`https://cdn.vox-cdn.com/thumbor/XtwGXC-0GhXcDXiM0B0rjGAAxZE=/148x0:1768x1080/1200x800/filters:focal(148x0:1768x1080)/cdn.vox-cdn.com/uploads/chorus_image/image/45905674/3042430-poster-p-1-hello-barbie-talking-toy-toytalk.0.0.jpg`}}
                    />
  
                  </View> 
                <View style={{marginTop:25, marginLeft:20}}>
                    <Text style={{fontFamily:"MrEavesXLModNarOT-Reg", fontSize: 25 }}>
                      John Doe
                    </Text> */}
                    
                </View>
  
          </View>   
        </Header>
  
  
  
        <Content style={{ backgroundColor: '#fff', marginTop: 20 }}>
          
  
        <ImageBackground source={require('../../assets/opacity100.png')} style={{ height: "100%", width: "100%", }}>
          
              <TouchableOpacity
                        style={styles.menuItem}
                        onPress={() =>  this.props.navigation.navigate('Main')}
                      >
  
                        <View style={{marginLeft:10}}>
                        <Image source={require('../../assets/home.png')} style={{height:30, width:30}} />
                        </View>
  
                        <View style={{marginLeft:20}}>
                        <Text style={styles.menuItemText}>Home</Text>
                        </View>
  
                        
                    </TouchableOpacity>
                      
                  


                    <TouchableOpacity
                        style={styles.menuItem}
                        onPress={() =>
                          this.props.navigation.navigate('ProProfile')}
  
                      >
                      <View style={{marginLeft:10}}>
                        <Image source={require('../../assets/user.png')} style={{height:30, width:30}} />
                        </View>
  
                        <View style={{marginLeft:20}}>
                        <Text style={styles.menuItemText}>My Profile</Text>
                        </View>
  
  
  
                      </TouchableOpacity>
  



  
                      <TouchableOpacity
                        style={styles.menuItem}
                        onPress={() =>
                        this.props.navigation.navigate('Notification')}
  
                      >
                      <View style={{marginLeft:10}}>
                      <Image source={require('../../assets/notification.png')} style={{height:30, width:30}} />
                        </View>
  
                        <View style={{marginLeft:20}}>
                        <Text style={styles.menuItemText}>Notification</Text>
                        </View>
  
  
  
                      </TouchableOpacity>
  
  
  
  
  
  
                   
  
  
  
  
  
  
                      <TouchableOpacity
                        style={styles.menuItem}
                        onPress={() =>
                          this.props.navigation.navigate('ServingHistory')}
  
                      >
                      <View style={{marginLeft:10}}> 
                      <Image source={require('../../assets/bible.png')} style={{height:30, width:30}} />
                        </View>
  
                        <View style={{marginLeft:20}}>
                        <Text style={styles.menuItemText}>View Booking</Text>
                        </View>
  
  
  
                      </TouchableOpacity>
  
  
  
  
  
  
  
                      <TouchableOpacity
                        style={styles.menuItem}
                        onPress={() =>
                          this.props.navigation.navigate('AddService')}
  
                      >
                      <View style={{marginLeft:10}}>
                      <Image source={require('../../assets/more.png')} style={{height:30, width:30}} />
                        </View>
  
                        <View style={{marginLeft:20}}>
                        <Text style={styles.menuItemText}>Add Service</Text>
                        </View>
  
  
  
                      </TouchableOpacity>
  
  
  
  
  
  
                      <TouchableOpacity
                        style={styles.menuItem}
                        onPress={() =>
                          this.props.navigation.navigate('About')}
  
                      >
                      <View style={{marginLeft:10}}>
                      <Image source={require('../../assets/information.png')} style={{height:30, width:30}} />
                        </View>
  
                        <View style={{marginLeft:20}}>
                        <Text style={styles.menuItemText}>About App</Text>
                        </View>
  
  
  
                      </TouchableOpacity>
  
  
  
  
  
                      <TouchableOpacity
                        style={styles.menuItem}
                        onPress={() =>
                          this.props.navigation.navigate('ViewBooking')}
  
                      >
                      <View style={{marginLeft:10}}>
                      <Image source={require('../../assets/history.png')} style={{height:30, width:30}} />
                        </View>
  
                        <View style={{marginLeft:20}}>
                        <Text style={styles.menuItemText}>Serving History</Text>
                        </View>
  
  
  
                      </TouchableOpacity>
  
  
  
  
                      <TouchableOpacity
                        style={styles.menuItem}
                        onPress={() =>
                          this.props.navigation.navigate('PassChange')}
  
                      >
                      <View style={{marginLeft:10}}>
                      <Image source={require('../../assets/lock.png')} style={{height:30, width:30}} />
                        </View>
  
                        <View style={{marginLeft:20}}>
                        <Text style={styles.menuItemText}>Change Password</Text>
                        </View>
  
  
  
                      </TouchableOpacity>




                      <TouchableOpacity
                        style={styles.menuItem}
                        onPress={() =>
                          this.props.navigation.navigate('Main')}
  
                      >
                      <View style={{marginLeft:10}}>
                      <Image source={require('../../assets/translation.png')} style={{height:30, width:30}} />
                        </View>
  
                        <View style={{marginLeft:20}}>
                        <Text style={styles.menuItemText}>English - عربي</Text>
                        </View>
  
  
  
                      </TouchableOpacity>





  
  
                      <TouchableOpacity
                        style={styles.menuItem}
                        onPress={() =>
                          this.props.navigation.navigate('Term')}
  
                      >
                      <View style={{marginLeft:10}}>
                      <Image source={require('../../assets/accept.png')} style={{height:30, width:30}} />
                        </View>
  
                        <View style={{marginLeft:20}}>
                        <Text style={styles.menuItemText}>Term & Condition</Text>
                        </View>
  
  
  
                      </TouchableOpacity>
  
  
  
                      <TouchableOpacity
                        style={styles.menuItem}
                        onPress={() =>
                          this.props.navigation.navigate('ProLogin')}
  
                      >
                      <View style={{marginLeft:10}}>
                      <Image source={require('../../assets/logout.png')} style={{height:30, width:30}} />
                        </View>
  
                        <View style={{marginLeft:20}}>
                        <Text style={styles.menuItemText}>Logout</Text>
                        </View>
  
  
  
                      </TouchableOpacity>
  
  

              </ImageBackground>  
                    
                      
        </Content>
    </Container>
      );


    
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100
  },
  menuItem: {
    padding: 10,
    // justifyContent: "center",
    // backgroundColor: "rgba(12, 12, 12, 0.2)",
    marginBottom: 2,
    display:"flex",
    flexDirection:"row"
  },
  menuItemText: {
    fontSize: 20,
    top:2,
    fontFamily:"MrEavesXLModNarOT-Reg"
  }
});

DrawerMenu.defaultProps = {};

DrawerMenu.propTypes = {};

export default DrawerMenu;