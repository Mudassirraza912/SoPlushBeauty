import React, { Component } from 'react'
import { Text, View, ImageBackground, Dimensions, Image, TouchableOpacity, ScrollView, Alert } from 'react-native'
// import {  } from 'react-native-gesture-handler';
import { Container, Header, Content, Item, Input, Icon, Label, Form, Button} from 'native-base';
import camicon from '../../../assets/camera.png'
import pro from '../../../assets/barbie.jpg'
import { Avatar, Badge, withBadge } from 'react-native-elements';
import ImagePicker from 'react-native-image-picker'
import axios from 'axios'

const BadgedIcon = withBadge("X")(Avatar)
const {width, height} = Dimensions.get("window")

const options = {
    title: 'Select Avatar',
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };


export default class UserSignUp extends Component {
    constructor(props) {
        super(props);
        this.state={
            // profilePic:[
            //     camicon,
            //     pro,
            //     // pro,
            //     // pro,
            //     // pro,
            //     // pro,

            // ],
            email:"",
            password:"",
            name:"",
            address:"",
            phoneNo:"",
            profilePic:false,
            fileName:"",
            fileUri:""

        }
    }

  
    static navigationOptions = () => ({
        headerMode: 'none',
        headerVisible: false,
        header: null,
    })


    openGallery = () => {
        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);
          
            if (response.didCancel) {
              console.log('User cancelled image picker');
            } else if (response.error) {
              console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
              console.log('User tapped custom button: ', response.customButton);
            } else {
            //   const source = { uri: response.uri };
              // You can also display the image using data:
              const source = { uri: 'data:image/jpeg;base64,' + response.data };
              console.log( "uri: response.uri", source, response)
          
              this.setState({
                profilePic: source,
                fileName: response.fileName,
                fileUri: response.uri
              });
            }
          });
    } 



    


    signUp = () => {
        const { email, password, name, phoneNo, address, profilePic, fileName, fileUri } = this.state
        // this.props.successSign()
        console.log("SIGN UP jksdajkfajkshjghj")

        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;

    if(reg.test(email) === false ) {

      Alert.alert("Email is not correct")
    }else{

        var file = {
            uri: fileUri,
            name: fileName,
            type: 'image/png'
        }

        const formData = new FormData();
        formData.append("email", email),
        formData.append("password", password),
        formData.append("address", address),
        formData.append("name", name),
        formData.append("phone_number", phoneNo),
        formData.append("file_upload", file),

        console.log("email, password, address, name, phoneNo, profilePic", email, password, address, name, phoneNo, profilePic)

        // axios.post("http://192.168.1.125/SoPlush/auth/signup.php?action=signup_customer",{
        //     email: email,
        //     password: password,
        //     address: address,
        //     name: name,
        //     phone_number : phoneNo,
        //     file_upload : file
        //   })
        //     .then((response) => {
        //      console.log("SIGN_UP_PROCESSED response",response)
        //     //   dispatch({type: "SIGN_UP_PROCESSED", payload: response.data});
        //     })
        //     .catch((err) => {
        //      console.log("SIGN_UP_ERROR response",err)

        //     //   dispatch({type: "ERROR", payload: 'An unexpected error occured!'});dispatch({type: "CLEAR_PROCESSING"});
        //       // dispatch({type: "SIGN_UP_PROCESSED", payload: {error: 'An unexpected error occured!', status: 'error'}})
        //     })
        // }

    //     axios.post("https://hnh-crypto.herokuapp.com/api/activities/get-activity",{
    //   id: 1
    // })
    //   .then((response) => {
    //     console.log("SIGN_UP_PROCESSED response",response)
    //   })
    //   .catch((err) => {
    //     console.log("SIGN_UP_ERROR response",err)
    //     // dispatch({type: "ACTIVITIES_PROCESSED", payload: {error: 'An unexpected error occured!', status: 'error'}})
    //   })
    


        fetch("http://192.168.1.125/SoPlush/auth/signup.php?action=signup_customer", {
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
  
          if(successData.status) {
              if(successData.status === true){
            Alert.alert("Signup successful")
            this.props.navigation.navigate("UserLogin")
        }
          }else {
            Alert.alert(successData.message)
          }
          console.log("SUCCESS", successData, successData.status, successData.data)
        })
        .catch(err => console.log("err err err",err));
    }
    }

    
    render() {
        const {email, password, name, address, phoneNo} = this.state
        console.log(email, password, name, address, phoneNo)
        return (
            <View style={{flex:1, height, width, marginTop: -80}}>
                <ImageBackground source={require('../../../assets/opacity.jpg')} style={{height:"100%", width:"100%",opacity:0.9}}> 

            <ScrollView style={{height}}>

                
                <View style={{ height, width, backgroundColor:"rgba(242, 201, 240, 0.7)",justifyContent:"center", marginTop: 80}}>

                <View style={{alignSelf:"center", alignContent:"center", alignItems:"center", marginTop: 15}}> 
                    <Image source={require('../../../assets/text.png')} style={{opacity: 2}} />
                    </View>

                

                   
                <View style={{marginTop:"5%",alignContent:"center", alignSelf:"center", alignItems:"center", width:"80%", backgroundColor:"#fff",borderRadius:10, shadowOpacity: 1, elevation: 4, shadowRadius: 20, shadowOffset: { width: 0, height: 13 }, shadowColor: 'rgba(46, 229, 157, 0.4)', padding:"5%"}}>

                    <View>
                        <Text style={{fontFamily:"MrEavesXLModNarOT-Reg", fontSize: 30}}>CREATE ACCOUNT</Text>
                    </View>

                    <Item floatingLabel>
                        <Icon active name='user' type="FontAwesome"  />
                        {/* <Label>Name</Label> */}
                        <Input onChangeText={(e) => {this.setState({name:e})}} placeholder="Name" />
                    </Item>
                    <Item floatingLabel>
                        <Icon active name='home' type="FontAwesome" />
                        {/* <Label>Address</Label> */}
                        <Input onChangeText={(e) => {this.setState({address:e})}}  placeholder="Address" />
                    </Item>
                    <Item floatingLabel>
                        <Icon active name='phone' type="MaterialCommunityIcons" />
                        {/* <Label>Phone Number</Label> */}
                        <Input onChangeText={(e) => {this.setState({phoneNo:e})}} placeholder="Phone Number" />
                    </Item>
                    <Item floatingLabel>
                        <Icon active name='email' type="MaterialCommunityIcons" />
                        {/* <Label>Email Address</Label> */}
                        <Input onChangeText={(e) => {this.setState({email:e})}} placeholder="Email Address" />
                    </Item>
                    
                    <Item floatingLabel>
                        <Icon active name='lock' type="MaterialCommunityIcons" />
                        {/* <Label>Password</Label> */}
                        <Input  onChangeText={(e) => {this.setState({password:e})}} placeholder="Password" secureTextEntry={true} />
                    </Item>

                    <Item  onPress={this.openGallery} style={{marginBottom:"3%", width: "100%"}}> 
                        <Icon active name='camera' type="MaterialCommunityIcons" />
                        <Label>Upload</Label>
                    </Item>

                    <View style={{display:"flex", flexDirection:"row",marginBottom:"3%"}}>

                             <Avatar onPress={this.openGallery} containerStyle={{padding:5, height:40, width: 40, marginTop:"1%"}} source={camicon} /> 

                            {this.state.profilePic &&   <BadgedIcon onPress={() => this.setState({profilePic:false})}  containerStyle={{ margin: 5, height:40, width: 40}} source={this.state.profilePic}/> 
                            }

                        
                            {/* {this.state.profilePic.map((val, index) => {
                                if(index == 0) {

                                     return <Avatar onPress={this.openGallery} containerStyle={{padding:5, height:40, width: 40, marginTop:"1%"}} source={val} />
                                } else{
                                    return(
                                        <BadgedIcon  containerStyle={{padding:5, margin: 5, height:40, width: 40}} source={val}/>
                                    )
                                }

                                if(index == 0) {
                                    return <ImageBackground source={val}  style={{height:30, width:30,backgroundColor:"lightgray", marginTop:"1%"}}/>
                               } else{
                                   return(
                                    <ImageBackground source={val}  style={{height:30, width:30,borderRadius:5,margin:3, display:"flex", alignContent:"center", backgroundColor:"lightgray"}}> 
                                            <Text style={{fontSize:7, backgroundColor: "red", borderRadius:100, color:"#fff",marginTop:-7,marginLeft:20, textAlign:"center", height:10, width:15}}>X</Text>
                                    </ImageBackground>
                                   )
                               }
                         

                            })} */}
                    </View>



                <Button onPress={this.signUp} style={{justifyContent:"center",alignContent:"center", alignItems:"center", backgroundColor:"#f14538", width:"90%", borderRadius: 10, opacity:0.7}}> 
                    <Text style={{alignSelf:"center",color:"#fff", fontFamily:"MrEavesXLModNarOT-Reg", fontSize:20}}>
                        Sign Up
                    </Text>
                </Button>


                </View>

                            
                </View>
                </ScrollView>
                </ImageBackground>
        </View>
        )
    }
}
