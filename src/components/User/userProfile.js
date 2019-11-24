import React, { Component } from 'react'
import { Text, View, ImageBackground, Dimensions, Image, TouchableOpacity, ScrollView, Alert } from 'react-native'
// import {  } from 'react-native-gesture-handler';
import { Container, Content, List, ListItem, Left, Right, Button, Item, Input,  Label, Form, Icon, Spinner } from 'native-base';
import {Avatar, Header, Card, Divider} from 'react-native-elements'
import ImagePicker from 'react-native-image-picker'
import LinearGradient from 'react-native-linear-gradient'


const {width, height} = Dimensions.get("window")
const options = {
    title: 'Select Avatar',
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };
export default class UserProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profileData : this.props.screenProps.profileData,
            fileName: '',
            fileUri: '',
            userId:'',
            profilePic: false,
            username: '',
            phoneNo : '',
            email: '',
            userId: '',
            address:'',
            loader: false
                
            
        }
    }

    componentWillMount() {
        this.setState({
            profileData: this.props.screenProps.profileData,
            username: this.props.screenProps.profileData.username,
            phoneNo:this.props.screenProps.profileData.phone_number,
            email:this.props.screenProps.profileData.email,
            userId: this.props.screenProps.profileData.user_id,
            address:this.props.screenProps.profileData.address,
            
        })
    }


    static navigationOptions = () => ({
        headerMode: 'none',
        headerVisible: false,
        header: null,
    })



    updateProfile = () => {
        this.setState({loader: true})
        const {username, phoneNo, address,userId,fileName, fileUri,} = this.state
        const formData = new FormData()
        
        if  (fileUri != "") {
            var file = {
                uri: fileUri,
                name: fileName,
                type: 'image/png'
            }
        formData.append('file_upload',file)

        }
        
        formData.append('name',username)
        formData.append('phone_number',phoneNo)
        formData.append('user_id',userId)
        formData.append('address',address)
        

        console.log("profileData", formData)


        fetch("https://hnhtechsolutions.com/hassan/soplush/user/user.php?action=update_profile", {
            method: 'POST',
            // dataType: "json",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'multipart/form-data'
            },
            body: formData
        }).then(res => res.json())
            .then(resp => {
                console.log(JSON.stringify(resp))
                var successData = resp

                if (successData.status) {

                    if (successData.status === true) {
                        console.log(" After Status SUCCESS USER", successData.data)

                            this.props.screenProps.fetchProfileData(successData.data)
                            Alert.alert("Success","Profile Updated Successfully")
                            this.setState({loader: false})
                            this.setState({profilePic: false, fileUri:"", fileName:""})
                        this.props.navigation.navigate('UseHome')

                      
                    } else {
                        this.setState({loader: false})
                        Alert.alert("Error","Email or Password is incorrect")
                    }
                } else {
                    this.setState({loader: false})

                    Alert.alert("Error",successData.message)
                }
                console.log("SUCCESS USER", successData, successData.status, successData.data)
            })
            .catch(err => {
                this.setState({loader: false})
                console.log("err UPDATEPROFILE", err)});

    }


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

    
    render() {
        console.log("USERPROFILE",this.state.profileData)
        return (
            <View style={{flex:1, height:'100%', width:'100%', marginTop: -80}}>
                <ImageBackground source={require('../../../assets/opacity.jpg')} style={{height:"100%", width:"100%",opacity:0.9, marginTop: 20}}> 

              
                <Header
                        containerStyle={{marginTop:40, backgroundColor:"#fff"}}
                        placement="left"
                        leftComponent={<Icon onPress={() => {this.props.navigation.navigate('UserHome')}} name="arrow-back" color="#000" />}
                        centerComponent={<Text style={{alignSelf:'center', fontSize:30, fontFamily:"MrEavesXLModNarOT-Reg"}}>EDIT PROFILE</Text>}
                        // rightComponent={<TouchableOpacity onPress={() => {this.props.navigation.navigate("EditProfile")}}><Image source={require('../../../assets/edit.png')} style={{height:30, width:30}} /> 
                        // </TouchableOpacity> }
                        />

                <View style={{ height:'100%', width:'100%', backgroundColor:"rgba(246, 232, 232, 0.7)",justifyContent:"center"}}>

                <ScrollView style={{height: height}}>
                   
                   <View style={{justifyContent:"center", alignContent:"center", alignItems:"center", marginTop:20}}>

                {/* <View style={{backgroundColor:"#fff",borderRadius:10, width:"90%"}}> */}
                   
                        <Card containerStyle={{backgroundColor:"#fff", borderRadius:10, width:"90%",}}> 

                        {!this.state.profilePic ? <View style={{justifyContent:"center", alignContent:"center", alignItems:"center"}}>
                             <Avatar  editButton={{name:"camera",type:"font-awesome", size:25, iconStyle:{marginTop:10} ,containerStyle:{backgroundColor:"#fc8b8c", borderRadius:50, height: 45, width: 45, borderColor:'#fff' , borderWidth:2 ,marginRight:60}, color:"#fff", underlayColor:"#fc8b8c", reverseColor:"#fc8b8c", }}  onPress={this.openGallery} onEditPress={this.openGallery} containerStyle={{backgroundColor:"#fc8b8c",}} showEditButton  rounded size="xlarge" source={{uri:`https://hnhtechsolutions.com/hassan/soplush/profile_pics/${this.props.screenProps.profileData.profile_pic}`}} />
                        </View> 
                        :
                        <View style={{justifyContent:"center", alignContent:"center", alignItems:"center"}}>
                        <Avatar  onPress={this.openGallery} onEditPress={this.openGallery} containerStyle={{backgroundColor:"#fc8b8c",}} showEditButton  rounded size="xlarge" editButton={{name:"camera",type:"font-awesome", size:25, iconStyle:{marginTop:10} ,containerStyle:{backgroundColor:"#fc8b8c", borderRadius:50, height: 45, width: 45, borderColor:'#fff' , borderWidth:2 ,marginRight:60}, color:"#fff", underlayColor:"#fc8b8c", reverseColor:"#fc8b8c", }}  source={this.state.profilePic} />
                   </View>
                        
                        }
                            <Item>
                        <Icon style={{paddingVertical:"7%"}} active name='user' type="FontAwesome" />
                        {/* <Label>Name</Label> */}
                        <Input  defaultValue={this.state.username} onChangeText={(e) => {this.setState({username:e})}} placeholder="Name" />
                    </Item>
                    
                    <Item floatingLabel>
                        <Icon style={{paddingVertical:"7%"}} active name='phone' type="MaterialCommunityIcons" />
                        {/* <Label>Phone Number</Label> */}
                        <Input defaultValue={this.state.phoneNo} onChangeText={(e) => {this.setState({phoneNo:e})}} placeholder="Phone Number" />
                    </Item>
                    <Item floatingLabel>
                        <Icon style={{paddingVertical:"5%"}} active name='email' type="MaterialCommunityIcons" />
                        {/* <Label>Email Address</Label> */}
                        <Input disabled defaultValue={this.state.email} onChangeText={(e) => {this.setState({email:e})}} placeholder="Email Address" />
                    </Item>
                    <Item floatingLabel>
                        <Icon style={{paddingVertical:"7%"}} active name='home' type="FontAwesome" />
                        {/* <Label>Address</Label> */}
                        <Input defaultValue={this.state.address} onChangeText={(e) => {this.setState({address:e})}}  placeholder="Address" />
                    </Item>
                

                                {/* <View> 

                                        <View style={{alignContent:"center", alignItems:"center", marginTop:"5%"}}>
                                            <Button onPress={() => {this.updateProfile()}} style={{justifyContent:"center",alignContent:"center", alignItems:"center", backgroundColor:"#fc8b8c", width:"90%", borderRadius: 10, opacity:0.7}}> 
                                            <Text style={{alignSelf:"center",color:"#fff", fontFamily:"MrEavesXLModNarOT-Reg", fontSize:20}}>
                                            Update
                                            </Text>   
                                            </Button>
                                        </View> 

                                </View> */}


                                {!this.state.loader ? <View style={{ alignContent: "center", alignItems: "center", marginTop: "5%", marginBottom:10 }}>
                                            {/* <LinearGradient colors={['#fff', '#fc8b8c', '#fc8b8c']} style={{ width: "90%", borderRadius: 10 }}>
                                                <Button onPress={() => {this.updateProfile()}} style={{ justifyContent: "center", alignContent: "center", alignItems: "center", backgroundColor: "none", opacity: 0.7, borderRadius: 10 }}>
                                                    <Text style={{ alignSelf: "center", color: "#fff", fontFamily: "MrEavesXLModNarOT-Reg", fontSize: 20 }}>
                                                    Update
</Text>
                                                </Button>
                                            </LinearGradient> */}

<LinearGradient start={{ x: 0.0, y: 0.25 }} end={{ x: 0.0, y: 1.0 }} colors={['#F9B1B0', '#FD8788', '#FF7173']} style={{ width: "100%", borderRadius: 10}}>
                                        <TouchableOpacity onPress={() => {this.updateProfile()}}style={{ justifyContent: "center", alignContent: "center", alignItems: "center", backgroundColor: "none", opacity: 0.7, borderRadius: 10 }} style={{ flexDirection: "column", justifyContent: "center", alignContent: "center", alignItems: "center", backgroundColor: "transparent", opacity: 0.7, borderRadius: 10 }}>
                                            <Text style={{ alignSelf: "center", textAlignVertical: "center", color: "#fff", fontFamily: "MrEavesXLModNarOT-Reg", fontSize: 20, paddingVertical: 15 }}>
                                            UPDATE
                    </Text>
                                        </TouchableOpacity>
                                    </LinearGradient>
                                        </View> : <Spinner color="#fc8b8c" />}
                    </Card>

                       
                         
              </View>
         {/* </View> */}

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
