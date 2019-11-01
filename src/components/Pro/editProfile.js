import React, { Component } from 'react'
import { Text, View, ImageBackground, Dimensions, Image, TouchableOpacity, ScrollView } from 'react-native'
// import {  } from 'react-native-gesture-handler';
import { Container, Content, List, ListItem, Left, Right, Button, Item, Input,  Label, Form, Icon } from 'native-base';
import {Avatar, Header, Card, Divider} from 'react-native-elements'
import ImagePicker from 'react-native-image-picker'


const {width, height} = Dimensions.get("window")
const options = {
    title: 'Select Avatar',
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };
export default class EditProProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profileData : this.props.screenProps.profileData,
            username:'',
            address:'',
            phoneNo:'',
            email:'',
            gender:'',
            expertise:'',
            about:'',
            bankName:'',
            accountNumber: '',
            profilePic: '',
            fileName: '',
            fileUri: '',
            userId:''

          }
    }


    componentWillMount() {
        this.setState({
            profileData: this.props.screenProps.profileData,
            username: this.props.screenProps.profileData.username,
            address:this.props.screenProps.profileData.address,
            phoneNo:this.props.screenProps.profileData.phone_number,
            email:this.props.screenProps.profileData.email,
            gender:this.props.screenProps.profileData.gender,
            expertise:this.props.screenProps.profileData.expertise,
            about:this.props.screenProps.profileData.about,
            accountNumber: this.props.screenProps.profileData.account_number,
            bankName: this.props.screenProps.profileData.bank_name,
            userId: this.props.screenProps.profileData.user_id
        })
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


    updateProfile = () => {
        const {profileData, username, phoneNo, address,userId,fileName, fileUri, gender,expertise, about,bankName,accountNumber} = this.state
        var file = {
            uri: fileUri,
            name: fileName,
            type: 'image/png'
        }
        const formData = new FormData()
        formData.append('name',username)
        formData.append('phone_number',phoneNo)
        formData.append('address',address)
        formData.append('user_id',userId)
        formData.append('file_upload',file)
        formData.append('gender',gender)
        formData.append('expertise',expertise)
        formData.append('about',about)
        formData.append('bank_name',bankName)
        formData.append('account_number',accountNumber)

        console.log("profileData", formData)


        // fetch("https://hnhtechsolutions.com/hassan/soplush/user/user.php?action=update_profile", {
        //     method: 'POST',
        //     // dataType: "json",
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'multipart/form-data'
        //     },
        //     body: formData
        // }).then(res => res.json())
        //     .then(resp => {
        //         console.log(JSON.stringify(resp))
        //         var successData = resp

        //         if (successData.status) {

        //             if (successData.status === true) {
        //                 // console.log(" After Status SUCCESS USER", successData.data[0].role_id == 2)
        //                     this.props.screenProps.fetchProfileData(successData.data[0])
        //                     Alert.alert("Login successful")
        //                 this.props.navigation.navigate('Main')

                      
        //             } else {
        //                 Alert.alert("Email Or Password Incorrect")
        //             }
        //         } else {
        //             Alert.alert(successData.message)
        //         }
        //         console.log("SUCCESS USER", successData, successData.status, successData.data)
        //     })
        //     .catch(err => console.log("err err err", err));

    }

    
    render() {
        return (
            <View style={{flex:1, height, width, marginTop: -80}}>
                <ImageBackground source={require('../../../assets/opacity.jpg')} style={{height:"100%", width:"100%",opacity:0.9, marginTop: 20}}> 

              
                <Header
                        containerStyle={{marginTop:40, backgroundColor:"#fff"}}
                        placement="left"
                        leftComponent={<Icon onPress={() => {this.props.navigation.navigate('Main')}} name="arrow-back" color="#000" />}
                        centerComponent={<Text style={{alignSelf:"center", fontSize:30, fontFamily:"MrEavesXLModNarOT-Reg"}}>EDIT PROFILE</Text>}
                        // rightComponent={<TouchableOpacity onPress={() => {this.props.navigation.navigate("EditProfile")}}><Image source={require('../../../assets/edit.png')} style={{height:30, width:30}} /> 
                        // </TouchableOpacity> }
                        />

                <View style={{ height, width, backgroundColor:"rgba(200, 165, 212, 0.7)",justifyContent:"center"}}>

                <ScrollView style={{height: height}}>
                   
                   <View style={{justifyContent:"center", alignContent:"center", alignItems:"center", marginTop:20}}>

                {/* <View style={{backgroundColor:"#fff",borderRadius:10, width:"90%"}}> */}
                   
                        <Card containerStyle={{backgroundColor:"#fff", borderRadius:10, width:"90%",}}> 

                        <View style={{justifyContent:"center", alignContent:"center", alignItems:"center"}}>
                             <Avatar  onPress={this.openGallery} onEditPress={this.openGallery} containerStyle={{backgroundColor:"#fc8b8c",}} showEditButton  rounded size="xlarge" editButton={{name:"camera",type:"font-awesome", size:25, iconStyle:{marginTop:8} ,containerStyle:{backgroundColor:"#fc8b8c", borderRadius:50, height: 40, width:40}, color:"#fff", underlayColor:"#fc8b8c", reverseColor:"#fc8b8c", }}  source={{uri:`https://hnhtechsolutions.com/hassan/soplush/profile_pics/${this.props.screenProps.profileData.profile_pic}`}} />
                        </View>
                            <Item floatingLabel>
                        <Icon active name='user' type="FontAwesome"  />
                        {/* <Label>Name</Label> */}
                        <Input defaultValue={this.state.username} onChangeText={(e) => {this.setState({username:e})}} placeholder="Name" />
                    </Item>
                    <Item floatingLabel>
                        <Icon active name='home' type="FontAwesome" />
                        {/* <Label>Address</Label> */}
                        <Input defaultValue={this.state.address} onChangeText={(e) => {this.setState({address:e})}}  placeholder="Address" />
                    </Item>
                    <Item floatingLabel>
                        <Icon active name='phone' type="MaterialCommunityIcons" />
                        {/* <Label>Phone Number</Label> */}
                        <Input defaultValue={this.state.phoneNo} onChangeText={(e) => {this.setState({phoneNo:e})}} placeholder="Phone Number" />
                    </Item>
                    <Item floatingLabel>
                        <Icon active name='email' type="MaterialCommunityIcons" />
                        {/* <Label>Email Address</Label> */}
                        <Input defaultValue={this.state.email} onChangeText={(e) => {this.setState({email:e})}} placeholder="Email Address" />
                    </Item>
                    <Item floatingLabel>
                        <Icon active name='gender' type="MaterialCommunityIcons" />
                        {/* <Label>Email Address</Label> */}
                        <Input defaultValue={this.state.gender}  onChangeText={(e) => {this.setState({gender:e})}} placeholder="Gender" />
                    </Item>
                    <Item floatingLabel>
                        <Icon active name='Expertize' type="MaterialCommunityIcons" />
                        {/* <Label>Email Address</Label> */}
                        <Input defaultValue={this.state.expertise}  onChangeText={(e) => {this.setState({expertise:e})}} placeholder="Expertize" />
                    </Item>
                    <Item floatingLabel>
                        <Icon active name='About' type="MaterialCommunityIcons" />
                        {/* <Label>Email Address</Label> */}
                        <Input defaultValue={this.state.about}  onChangeText={(e) => {this.setState({about:e})}} placeholder="About" />
                    </Item>

                    <Item floatingLabel>
                        <Icon active name='university' type="MaterialCommunityIcons" />
                        {/* <Label>Email Address</Label> */}
                        <Input defaultValue={this.state.bankName}  onChangeText={(e) => {this.setState({bankName:e})}} placeholder="Bank Name" />
                    </Item>

                    <Item floatingLabel>
                        <Icon active name='address-card' type="MaterialCommunityIcons" />
                        {/* <Label>Email Address</Label> */}
                        <Input defaultValue={this.state.accountNumber}  onChangeText={(e) => {this.setState({accountNumber:e})}} placeholder="Acount Number" />
                    </Item>
                    {/* <Item floatingLabel>
                        <Icon active name='lock' type="MaterialCommunityIcons" />
                        <Label>Password</Label>
                        <Input disabled defaultValue={this.state.profileData.username}  onChangeText={(e) => {this.setState({password:e})}} placeholder="Password" secureTextEntry={true} />
                    </Item> */}


                                <View style={{marginRight:"6%"}}> 

                                        <View style={{alignContent:"center", alignItems:"center", marginTop:"5%"}}>
                                            <Button onPress={() => {this.updateProfile()}} style={{justifyContent:"center",alignContent:"center", alignItems:"center", backgroundColor:"#fc8b8c", width:"90%", borderRadius: 10, opacity:0.7}}> 
                                            <Text style={{alignSelf:"center",color:"#fff", fontFamily:"MrEavesXLModNarOT-Reg", fontSize:20}}>
                                            Update
                                            </Text>   
                                            </Button>
                                        </View> 

                                </View>
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
