import React, { Component } from 'react'
import { Text, View, ImageBackground, Dimensions, Image, TouchableOpacity, ScrollView, Alert } from 'react-native'
// import {  } from 'react-native-gesture-handler';
import { Container, Header, Content, Item, Input, Icon, Label, Form, Button , DatePicker, Spinner} from 'native-base';
import camicon from '../../../assets/camera.png'
import pro from '../../../assets/barbie.jpg'
import { Avatar, Badge, withBadge } from 'react-native-elements';
import ImagePicker from 'react-native-image-picker'
import LinearGradient from 'react-native-linear-gradient'


const BadgedIcon = withBadge("X")(Avatar)
const { width, height } = Dimensions.get("window")
const options = {
    title: 'Select Avatar',
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };

export default class ProSignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profilePic: false,
            email: "",
            password: "",
            phoneNo: "",
            address: "",
            dOB: "",
            bank: "",
            accountNo: "",
            fileName:"",
            fileUri:"",
            loader: false
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
        this.setState({loader: true})
        const { email, password, name, phoneNo, address, profilePic, fileName, fileUri, dOB, bank, accountNo } = this.state
        // this.props.successSign()
        console.log("SIGN UP jksdajkfajkshjghj")

        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        // this.props.navigation.navigate("ProLogin")
        if (reg.test(email) === false) {
            this.setState({loader: false})

            Alert.alert("Email is not correct")
        } else {

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
                formData.append("date_of_birth", dOB),
                formData.append("bank_number", accountNo),
                formData.append("bank_name", bank),
                formData.append("file_upload", file),



                console.log("email, password, address, name, phoneNo, profilePic", email, password, address, name, phoneNo, profilePic)

            // axios.post("https://hnhtechsolutions.com/hassan/soplush/auth/signup.php?action=signup_customer",{
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




            fetch("https://hnhtechsolutions.com/hassan/soplush/auth/signup.php?action=signup_beautician", {
                method: 'POST',
                dataType: "json",
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
                            Alert.alert("Signup successful")
                            this.setState({loader: true})

                            this.props.navigation.navigate("ProLogin")
                        }
                    } else {
                        this.setState({loader: true})

                        Alert.alert(successData.message)
                    }
                    console.log("SUCCESS", successData, successData.status, successData.data)
                })
                .catch(err => {
                    this.setState({loader: false})
                    Alert.alert('Try Later')
                    console.log("err err err", err)});
        }
    }



    render() {
        const { email, password, name, address, phoneNo, bank, accountNo, loader } = this.state
        console.log(email, password, name, address, phoneNo, bank, accountNo)
        return (
            <View style={{ flex: 1, height, width, marginTop: -80 }}>
                <ImageBackground source={require('../../../assets/opacity.jpg')} style={{ height: "100%", width: "100%", opacity: 0.9 }}>

                    <ScrollView style={{ height: height }}>


                        <View style={{ height: "100%", width, backgroundColor: "rgba(242, 201, 240, 0.7)", justifyContent: "center", marginTop: 80 }}>

                            <View style={{ alignSelf: "center", alignContent: "center", alignItems: "center", marginTop: -60 }}>
                                <Image source={require('../../../assets/text.png')} style={{ opacity: 2 }} />
                            </View>




                            <View style={{ marginTop: "5%", alignContent: "center", alignSelf: "center", alignItems: "center", width: "80%", backgroundColor: "#fff", borderRadius: 10, shadowOpacity: 1, elevation: 4, shadowRadius: 20, shadowOffset: { width: 0, height: 13 }, shadowColor: 'rgba(46, 229, 157, 0.4)', padding: "5%" }}>

                                <View>
                                    <Text style={{ fontFamily: "MrEavesXLModNarOT-Reg", fontSize: 30 }}>CREATE ACCOUNT</Text>
                                </View>

                               

                                <Item floatingLabel>
                                    <Icon active name='user' type="FontAwesome" />
                                    {/* <Label>Name</Label> */}
                                    <Input onChangeText={(e) => this.setState({ name: e })} placeholder=" Name" />
                                </Item>
                                <Item floatingLabel>
                                    <Icon active name='home' type="FontAwesome" />
                                    {/* <Label>Address</Label> */}
                                    <Input onChangeText={(e) => this.setState({ address: e })} placeholder="Address" />
                                </Item>
                                <Item floatingLabel>
                                    <Icon active name='phone' type="MaterialCommunityIcons" />
                                    {/* <Label>Phone Number</Label> */}
                                    <Input keyboardType="number-pad" onChangeText={(e) => this.setState({ phoneNo: e })} placeholder="Phone Number" />
                                </Item>
                                <Item floatingLabel>
                                    <Icon active name='email' type="MaterialCommunityIcons" />
                                    {/* <Label>Email Address</Label> */}
                                    <Input onChangeText={(e) => this.setState({ email: e })} placeholder="Email Address" />
                                </Item>

                                <Item floatingLabel>
                                    <Icon active name='lock' type="MaterialCommunityIcons" />
                                    {/* <Label>Password</Label> */}
                                    <Input secureTextEntry={true} onChangeText={(e) => this.setState({ password: e })} placeholder="Password" />
                                </Item>

                            <View style={{flexDirection:"row", marginTop: 10, width:"100%"}}> 
                                    <Icon active name='birthday-cake' type="FontAwesome" />
                                    <DatePicker
                                     ref={ref => this.datePicker = ref}
                                     // date={this.state.date} //initial date from state
                                    //  defaultDate={new Date(year, month, date)}
                                     // defaultDate={"1/23/3"}
                                     mode="date" //The enum of date, datetime and time
                                     placeholder="select date"
                                     format="DD-MM-YYYY"
                                     minDate="01-01-2019"
                                     maxDate="01-01-2050"
                                     confirmBtnText="Confirm"
                                     cancelBtnText="Cancel"
                                     customStyles={{
                                       dateIcon: {
                                         position: 'absolute',
                                         left: 0,
                                         top: 4,
                                         marginLeft: 0
                                       },
                                       dateInput: {
                                         marginLeft: 36
                                       }
                                     }}
                                     onDateChange={(date) => {
                                      var newdate = moment(date.toString().substr(4, 12)).format("MM-DD-YYYY")
                                        //  this.state.profileData.birthdate = newdate
                                         
                                     this.setState({dOB : newdate})
                                 
                                 }}
                                     underlineColorAndroid="#f55f2a" />
                        </View>

                                <Item floatingLabel>
                                    <Icon active name='university' type="FontAwesome" />
                                    <Input onChangeText={(e) => this.setState({ bank: e })} placeholder="Bank Name" />
                                </Item>

                                <Item floatingLabel>
                                    <Icon active name="address-card" type="FontAwesome" />
                                    <Input keyboardType="number-pad" onChangeText={(e) => this.setState({ accountNo: e })} placeholder="Account Number" />
                                </Item>

                                <Item onPress={this.openGallery} floatingLabel>
                                    <Icon active name='camera' type="FontAwesome" />
                                    <Input disabled keyboardType="number-pad" onChangeText={(e) => this.setState({ accountNo: e })} placeholder="Upload" />
                                </Item>

                                {/* <Item onPress={this.openGallery} style={{ marginBottom: "3%", width: "100%" }}>
                                    <Icon active name='camera' type="MaterialCommunityIcons" />
                                    <Input disabled keyboardType="number-pad" onChangeText={(e) => this.setState({ accountNo: e })} placeholder=" Upload" />
                                </Item> */}


                                <View style={{ display: "flex", flexDirection: "row", marginBottom: "3%" }}>
                                    <Avatar onPress={this.openGallery} containerStyle={{ padding: 5, height: 40, width: 40, marginTop: "1%" }} source={camicon} />

                                    {this.state.profilePic && <BadgedIcon onPress={() => this.setState({ profilePic: false })} containerStyle={{ margin: 5, height: 40, width: 40 }} source={this.state.profilePic} />
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

                                {/* 
                 <View style={{alignContent:"center", alignItems:"center", marginTop:"5%"}}>
                    <Button style={{justifyContent:"center",alignContent:"center", alignItems:"center", backgroundColor:"#fc8b8c", width:"90%", borderRadius: 10, opacity:0.7}}> 
                     <Text style={{alignSelf:"center",color:"#fff", fontFamily:"MrEavesXLModNarOT-Reg", fontSize:20}}>
                        Login    
                    </Text>   
                     </Button>
                </View> */}


{/* <Button onPress={this.signUp} style={{ justifyContent: "center", alignContent: "center", alignItems: "center", backgroundColor: "#fc8b8c", width: "90%", borderRadius: 10, opacity: 0.7 }}>
                                    <Text style={{ alignSelf: "center", color: "#fff", fontFamily: "MrEavesXLModNarOT-Reg", fontSize: 20 }}>
                                        Sign Up
                    </Text>
                                </Button> */}
                
               

                                {!loader ? 
                                
                                <View style={{ alignContent: "center", alignItems: "center", marginBottom:5, width:'100%' }}>
                                <LinearGradient colors={['#fff', '#fc8b8c', '#fc8b8c']} style={{ width: "90%", borderRadius: 10 }}>
                                    <Button onPress={this.signUp} style={{ justifyContent: "center", alignContent: "center", alignItems: "center", backgroundColor: "none", opacity: 0.7, borderRadius: 10 }}>
                                        <Text style={{ alignSelf: "center", color: "#fff", fontFamily: "MrEavesXLModNarOT-Reg", fontSize: 20 }}>
                                        Sign Up
</Text>
                                    </Button>
                                </LinearGradient>
                            </View>
                            :  

                                
                                <Spinner color="#fc8b8c" />

                                }


                            </View>


                        </View>

                        <View>
                            <Text></Text>
                            <Text></Text>
                            <Text></Text>
                            <Text></Text>
                            <Text></Text>
                            <Text></Text>
                        </View>
                    </ScrollView>
                </ImageBackground>
            </View>
        )
    }
}
