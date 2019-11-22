import React, { Component } from 'react'
import { Text, View, ImageBackground, Dimensions, Image, TouchableOpacity, ScrollView, Alert } from 'react-native'
// import {  } from 'react-native-gesture-handler';
import { Container, Header, Content, Item, Input, Icon, Label, Form, Button, DatePicker, Spinner } from 'native-base';
import camicon from '../../../assets/camera.png'
import pro from '../../../assets/barbie.jpg'
import { Avatar, Badge, withBadge } from 'react-native-elements';
import ImagePicker from 'react-native-image-picker'
import LinearGradient from 'react-native-linear-gradient'

import user from '../../../assets/user.png'
import home from '../../../assets/home.png'
import phone from '../../../assets/phone-call.png'
import envelop from '../../../assets/envelope.png'
import lock from '../../../assets/lock.png'
import cake from '../../../assets/cake.png'
import museum from '../../../assets/museum.png'
import atmcard from '../../../assets/atm-card.png'
import moment from 'moment'

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
            fileName: "",
            fileUri: "",
            loader: false,
            emailErr: false,
            passwordErr: false,
            phoneNoErr: false,
            addressErr: false,
            dOBErr: false,
            bankErr: false,
            accountNoErr: false,
            nameErr: false
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
                console.log("uri: response.uri", source, response)

                this.setState({
                    profilePic: source,
                    fileName: response.fileName,
                    fileUri: response.uri
                });
            }
        });
    }


    // signUp = () => {
    //     this.setState({ loader: true })
    //     const { email, password, name, phoneNo, address, profilePic, fileName, fileUri, dOB, bank, accountNo } = this.state
    //     // this.props.successSign()
    //     console.log("SIGN UP jksdajkfajkshjghj")

    //     let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    //     // this.props.navigation.navigate("ProLogin")
    //     if (reg.test(email) === false) {
    //         this.setState({ loader: false })

    //         Alert.alert("Email is not correct")
    //     } else {


    //         const formData = new FormData();
    //         if (fileUri != "") {
    //             var file = {
    //                 uri: fileUri,
    //                 name: fileName,
    //                 type: 'image/png'
    //             }
    //             formData.append("file_upload", file)

    //         }

    //         formData.append("email", email),
    //             formData.append("password", password),
    //             formData.append("address", address),
    //             formData.append("name", name),
    //             formData.append("phone_number", phoneNo),
    //             formData.append("date_of_birth", dOB),
    //             formData.append("bank_number", accountNo),
    //             formData.append("bank_name", bank),




    //             console.log("email, password, address, name, phoneNo, profilePic", email, password, address, name, phoneNo, profilePic)

    //         // axios.post("https://hnhtechsolutions.com/hassan/soplush/auth/signup.php?action=signup_customer",{
    //         //     email: email,
    //         //     password: password,
    //         //     address: address,
    //         //     name: name,
    //         //     phone_number : phoneNo,
    //         //     file_upload : file
    //         //   })
    //         //     .then((response) => {
    //         //      console.log("SIGN_UP_PROCESSED response",response)
    //         //     //   dispatch({type: "SIGN_UP_PROCESSED", payload: response.data});
    //         //     })
    //         //     .catch((err) => {
    //         //      console.log("SIGN_UP_ERROR response",err)

    //         //     //   dispatch({type: "ERROR", payload: 'An unexpected error occured!'});dispatch({type: "CLEAR_PROCESSING"});
    //         //       // dispatch({type: "SIGN_UP_PROCESSED", payload: {error: 'An unexpected error occured!', status: 'error'}})
    //         //     })
    //         // }




    //         fetch("https://hnhtechsolutions.com/hassan/soplush/auth/signup.php?action=signup_beautician", {
    //             method: 'POST',
    //             dataType: "json",
    //             headers: {
    //                 'Accept': 'application/json',
    //                 'Content-Type': 'multipart/form-data'
    //             },
    //             body: formData
    //         }).then(res => res.json())
    //             .then(resp => {
    //                 console.log(JSON.stringify(resp))
    //                 var successData = resp

    //                 if (successData.status) {
    //                     if (successData.status === true) {
    //                         Alert.alert("Signup successful")
    //                         this.setState({ loader: false })

    //                         this.props.navigation.navigate("ProLogin")
    //                     }
    //                 } else {
    //                     this.setState({ loader: false })

    //                     Alert.alert(successData.message)
    //                 }
    //                 console.log("SUCCESS", successData, successData.status, successData.data)
    //             })
    //             .catch(err => {
    //                 this.setState({ loader: false })
    //                 // Alert.alert('Try Later')
    //                 console.log("err err err", err)
    //             });
    //     }
    // }



    signUp = () => {
        this.setState({ loader: true })
        const { email, password, name, phoneNo, address, profilePic, fileName, fileUri, dOB, bank, accountNo,
            emailErr, passwordErr, nameErr, phoneNoErr, dOBErr, bankErr, accountNoErr,

        } = this.state
        // this.props.successSign()
        console.log("SIGN UP jksdajkfajkshjghj", email, password, name, phoneNo, dOB, bank, accountNo)
let date = moment(dOB).format("YYYY-MM-DD")

        // this.props.navigation.navigate("ProLogin")
        if (email && password && name && phoneNo && dOB && bank && accountNo) {
            let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            if (reg.test(email) === false) {
                console.log("hello")
                this.setState({ loader: false })
                Alert.alert("Error","Email is not Formated")
            } else {
                console.log('else')
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
                    formData.append("date_of_birth", date),
                    formData.append("bank_number", accountNo),
                    formData.append("bank_name", bank),
                    formData.append("file_upload", file),



                    console.log("email, password, address, name, phoneNo, profilePic", email, password, address, name, phoneNo, profilePic)

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
                                Alert.alert("Success","Signup successful")
                                this.setState({ loader: true })

                                this.props.navigation.navigate("ProLogin")
                            }
                        } else {
                            this.setState({ loader: true })

                            Alert.alert("Error",successData.message)
                        }
                        console.log("SUCCESS", successData, successData.status, successData.data)
                    })
                    .catch(err => {
                        this.setState({ loader: false })
                        Alert.alert('Try Later')
                        console.log("err err err", err)
                    });
            }
        } if (!email) {
            this.setState({ emailErr: true, loader: false })
        } if (!name) {
            this.setState({ nameErr: true, loader: false })
        } if (!address) {
            this.setState({ addressErr: true, loader: false })
        } if (!phoneNo) {
            this.setState({ phoneNoErr: true, loader: false })
        } if (!bank) {
            this.setState({ bankErr: true, loader: false })
        } if (!dOB) {
            this.setState({ dOBErr: true, loader: false })
        } if (password.length < 6) {
            this.setState({ passwordErr: true, loader: false })
        } if (!accountNo) {
            this.setState({ accountNoErr: true, loader: false })
        }


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

    }


    checkField = (key) => {
        if (key == "password") {
            if (this.state.password.length > 5) {
                this.setState({ passwordErr: false })
            }
            else {
                this.setState({ passwordErr: true })
            }
        } else {
            if (!this.state[key]) {
                this.setState({
                    [`${key}Err`]: true
                })
            } else {
                this.setState({
                    [`${key}Err`]: false
                })
            }
        }
    }


    render() {
        const { email, password, name, address, phoneNo, bank, accountNo, loader,  nameErr, emailErr, accountNoErr, addressErr, bankErr, passwordErr, phoneNoErr, dOBErr
        } = this.state
        console.log(email, password, name, address, phoneNo, bank, accountNo)
        return (
            <View style={{ flex: 1, height: '100%', width: '100%', marginTop: -80 }}>
                <ImageBackground source={require('../../../assets/opacity.jpg')} style={{ height: "100%", width: "100%", opacity: 0.9 }}>

                    <ScrollView style={{ height: height }}>


                        <View style={{ height: "100%", width: '100%', backgroundColor: "rgba(242, 201, 240, 0.7)", justifyContent: "center", marginTop: 80 }}>

                            <View style={{ alignSelf: "center", alignContent: "center", alignItems: "center", marginTop: -65 }}>
                                <Image source={require('../../../assets/text.png')} style={{ opacity: 2, alignSelf: 'center', width: 240, height: 115 }} />
                            </View>




                            <View style={{ marginTop: "5%", alignContent: "center", alignSelf: "center", alignItems: "center", width: "80%", backgroundColor: "#fff", borderRadius: 10, shadowOpacity: 1, elevation: 4, shadowRadius: 20, shadowOffset: { width: 0, height: 13 }, shadowColor: 'rgba(46, 229, 157, 0.4)', padding: "5%" }}>

                                <View style={{ marginVertical: 10 }}>
                                    <Text style={{ fontFamily: "MrEavesXLModNarOT-Reg", fontSize: 22, fontWeight: "bold" }}>CREATE ACCOUNT</Text>
                                </View>


{/* 
                                <Item>
                                    <Image source={user} style={{ height: 22, width: 22 }} />
                                    <Input placeholderTextColor="#bdbdbd" onChangeText={(e) => this.setState({ name: e })} placeholder=" Name" />
                                </Item>
                                <Item>
                                    <Image source={home} style={{ height: 22, width: 22 }} />
                                    <Input placeholderTextColor="#bdbdbd" onChangeText={(e) => this.setState({ address: e })} placeholder="Address" />
                                </Item>
                                <Item>
                                    <Image source={phone} style={{ height: 22, width: 22 }} />
                                    <Input placeholderTextColor="#bdbdbd" keyboardType="number-pad" onChangeText={(e) => this.setState({ phoneNo: e })} placeholder="Phone Number" />
                                </Item>
                                <Item>
                                    <Image source={envelop} style={{ height: 22, width: 22 }} />
                                    <Input placeholderTextColor="#bdbdbd" onChangeText={(e) => this.setState({ email: e })} placeholder="Email Address" />
                                </Item>

                                <Item >
                                    <Image source={lock} style={{ height: 22, width: 22 }} />
                                    <Input style={{ fontSize: 20 }} placeholderTextColor="#bdbdbd" onChangeText={(e) => this.setState({ password: e })} placeholder="Password" secureTextEntry />
                                </Item>

                                <View style={{ flexDirection: "row", marginTop: 10, width: "100%", borderBottomWidth: 0.5, borderBottomColor: '#bdbdbd' }}>
                                    <Image source={cake} style={{ height: 22, width: 22 }} />
                                    <DatePicker
                                        ref={ref => this.datePicker = ref}
                                       aultDate={"1/23/3"}
                                        mode="date" //The enum of date, datetime and time
                                        placeHolderTextStyle={{ color: "#bdbdbd" }}
                                        placeHolderText="Date Of Birth"
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
                                            var newdate = moment(date.toString().substr(4, 12)).format("YYYY-MM-DD")
                                            //  this.state.profileData.birthdate = newdate

                                            this.setState({ dOB: newdate })

                                        }}
                                        underlineColorAndroid="#f55f2a" />
                                </View>

                                <Item>
                                    <Image source={museum} style={{ height: 22, width: 22 }} />
                                    <Input placeholderTextColor="#bdbdbd" onChangeText={(e) => this.setState({ bank: e })} placeholder="Bank Name" />
                                </Item>

                                <Item>
                                    <Image source={atmcard} style={{ height: 22, width: 22 }} />
                                    <Input placeholderTextColor="#bdbdbd" keyboardType="number-pad" onChangeText={(e) => this.setState({ accountNo: e })} placeholder="Account Number" />
                                </Item>

                                <Item onPress={this.openGallery}>
                                    <Image source={camicon} style={{ height: 30, width: 30 }} />
                                    <Input placeholderTextColor="#bdbdbd" disabled keyboardType="number-pad" onChangeText={(e) => this.setState({ accountNo: e })} placeholder="Upload Pictures" />
                                </Item>
                                
                                */}




<Item error={nameErr}  >
<Image source={user} style={{ height: 22, width: 22 }} />
                                    {/* <Label>Name</Label> */}
                                    <Input placeholderTextColor="#bdbdbd"  onBlur={() => this.checkField("name")} onChangeText={(e) => this.setState({ name: e })} placeholder=" Name" />
                                </Item>
                                {nameErr && <Text style={{ color: 'red', fontSize: 12, alignSelf: 'flex-end' }} >Required</Text>}
                                <Item error={addressErr}  >
                                <Image source={home} style={{ height: 22, width: 22 }} />
                                    {/* <Label>Address</Label> */}
                                    <Input placeholderTextColor="#bdbdbd" onBlur={() => this.checkField("address")} onChangeText={(e) => this.setState({ address: e })} placeholder="Address" />
                                </Item>
                                {addressErr && <Text style={{ color: 'red', fontSize: 12, alignSelf: 'flex-end' }} >Required</Text>}
                                <Item error={phoneNoErr}  >
                                <Image source={phone} style={{ height: 22, width: 22 }} />
                                    {/* <Label>Phone Number</Label> */}
                                    <Input placeholderTextColor="#bdbdbd" onBlur={() => this.checkField("phoneNo")} keyboardType="number-pad" onChangeText={(e) => this.setState({ phoneNo: e })} placeholder="Phone Number" />
                                </Item>
                                {phoneNoErr && <Text style={{ color: 'red', fontSize: 12, alignSelf: 'flex-end' }} >Required</Text>}
                                <Item error={emailErr}  >
                                <Image source={envelop} style={{ height: 22, width: 22 }} />
                                    {/* <Label>Email Address</Label> */}
                                    <Input placeholderTextColor="#bdbdbd" onBlur={() => this.checkField("email")} onChangeText={(e) => this.setState({ email: e })} placeholder="Email Address" />
                                </Item>
                                {emailErr && <Text style={{ color: 'red', fontSize: 12, alignSelf: 'flex-end' }} >Required</Text>}
                                <Item error={passwordErr}  >
                                <Image source={lock} style={{ height: 22, width: 22 }} />
                                    {/* <Label>Password</Label> */}
                                    <Input placeholderTextColor="#bdbdbd" style={{ fontSize: 20 }} onBlur={() => this.checkField("password")} secureTextEntry={true} onChangeText={(e) => this.setState({ password: e })} placeholder="Password" />
                                </Item>
                                {passwordErr && <Text style={{ color: 'red', fontSize: 12, alignSelf: 'flex-end' }} >min 6 letters</Text>}
                                <View style={{ flexDirection: "row", marginTop: 10, width: "100%", borderBottomWidth: 0.5, borderBottomColor: '#bdbdbd'  }}>
                                <Image source={cake} style={{ height: 22, width: 22, marginBottom:-5 }} />
                                <DatePicker
                                        ref={ref => this.datePicker = ref}
                                       aultDate={"1/23/3"}
                                        mode="date" //The enum of date, datetime and time
                                        placeHolderTextStyle={{ color: "#bdbdbd" }}
                                        placeHolderText="Date Of Birth"
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
                                            var newdate = moment(date.toString().substr(4, 12)).format("YYYY-MM-DD")
                                            //  this.state.profileData.birthdate = newdate

                                            this.setState({ dOB: newdate })

                                        }}
                                        underlineColorAndroid="#f55f2a" />
                                </View>
                                {dOBErr && <Text style={{ color: 'red', fontSize: 12, alignSelf: 'flex-end' }} >Required</Text>}
                                <Item error={bankErr}  >
                                <Image source={museum} style={{ height: 22, width: 22 }} />
                                    <Input placeholderTextColor="#bdbdbd" onBlur={() => this.checkField("bank")} onChangeText={(e) => this.setState({ bank: e })} placeholder="Bank Name" />
                                </Item>
                                {bankErr && <Text style={{ color: 'red', fontSize: 12, alignSelf: 'flex-end' }} >Required</Text>}
                                <Item error={accountNoErr}  >
                                <Image source={atmcard} style={{ height: 22, width: 22 }} />
                                    <Input placeholderTextColor="#bdbdbd" onBlur={() => this.checkField("accountNo")} keyboardType="number-pad" onChangeText={(e) => this.setState({ accountNo: e })} placeholder="Account Number" />
                                </Item>
                                {accountNoErr && <Text style={{ color: 'red', fontSize: 12, alignSelf: 'flex-end' }} >Required</Text>}
                                <Item onPress={this.openGallery}  >
                                <Image source={camicon} style={{ height: 30, width: 30 }} />
                                    <Input placeholderTextColor="#bdbdbd" disabled keyboardType="number-pad" onChangeText={(e) => this.setState({ accountNo: e })} placeholder="Upload" />
                                </Item>

                               


                                {this.state.profilePic && <View style={{ display: "flex", flexDirection: "row", marginBottom: "3%", marginVertical: '3%' , alignSelf: 'flex-start' }}>
                                    <Avatar onPress={this.openGallery} containerStyle={{ height: 40, width: 40, marginTop: "1%", borderRadius: 5, backgroundColor:'#bdbdbd' }} source={camicon} overlayContainerStyle={{ height: 40, width: 40, marginTop: "1%", borderRadius: 5 }} source={camicon} />


                                    <TouchableOpacity style={{ height: 50, width: 50, borderTopLeftRadius: 5,borderBottomLeftRadius: 5, borderBottomRightRadius: 5,  }} onPress={() => {

                                        Alert.alert(
                                            'Profile',
                                            'Are you sure you want to remove picture?',
                                            [
                                                {
                                                    text: 'No',
                                                    onPress: () => console.log('Cancel Pressed'),
                                                    style: 'cancel',
                                                },
                                                {
                                                    text: 'yes',
                                                    onPress: () => this.setState({ profilePic: false })
                                                    ,
                                                    style: 'cancel',
                                                },
                                                { cancelable: false }
                                            ]
                                        )

                                    }}>
                                        <ImageBackground source={this.state.profilePic} borderTopLeftRadius = {5}  borderBottomRightRadius= {5} borderBottomLeftRadius={5} style={{ height: 40, width: 40, margin: 3, display: "flex", backgroundColor: "lightgray",}}>
                                            <Text style={{ backgroundColor: "red", borderRadius: 100, color: "#fff", height: 20, width: 20, alignSelf: 'flex-end', textAlign: 'center', position: 'absolute', right: -7, top: -7 }}>X</Text>
                                        </ImageBackground>
                                    </TouchableOpacity>
                                </View>}

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

                                    //                                 <View style={{ alignContent: "center", alignItems: "center", marginBottom:5, width:'100%', marginVertical:'5%' }}>
                                    //                                 <LinearGradient colors={['#fff', '#fc8b8c', '#fc8b8c']} style={{ width: "90%", borderRadius: 10 }}>
                                    //                                     <Button onPress={this.signUp} style={{ justifyContent: "center", alignContent: "center", alignItems: "center", backgroundColor: "none", opacity: 0.7, borderRadius: 10 }}>
                                    //                                         <Text style={{ alignSelf: "center", color: "#fff", fontFamily: "MrEavesXLModNarOT-Reg", fontSize: 20 , paddingVertical: '8%', marginTop:-5}}>
                                    //                                         Sign Up
                                    // </Text>
                                    //                                     </Button>
                                    //                                 </LinearGradient>
                                    //                             </View>

                                    <View style={{ alignContent: "center", alignItems: "center", width: '100%', paddingVertical: '5%' }}>
                                        <LinearGradient start={{ x: 0.0, y: 0.25 }} end={{ x: 0.0, y: 1.0 }} colors={['#F9B1B0', '#FD8788', '#FF7173']} style={{ width: "100%", borderRadius: 10 }}>
                                            <TouchableOpacity onPress={this.signUp} style={{ justifyContent: "center", alignContent: "center", alignItems: "center", backgroundColor: "none", opacity: 0.7, borderRadius: 10 }}>
                                                <Text style={{ alignSelf: "center", color: "#fff", fontFamily: "MrEavesXLModNarOT-Reg", fontSize: 20, paddingVertical: '7%', marginTop: -5 }}>
                                                    SIGN UP
</Text>
                                            </TouchableOpacity>
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






//  // <BadgedIcon onPress={() => 
//                             //         {

//                             //             Alert.alert(
//                             //                 'Profile',
//                             //                 'Are you sure you want to remove picture?',
//                             //                 [
//                             //                   {
//                             //                     text: 'No',
//                             //                     onPress: () => console.log('Cancel Pressed'),
//                             //                     style: 'cancel',
//                             //                   },
//                             //                   {
//                             //                     text: 'yes',
//                             //                     onPress: () =>  this.setState({ profilePic: false })
//                             //                     ,
//                             //                     style: 'cancel',
//                             //                   },
//                             //                   {cancelable:  false}
//                             //                 ]
//                             //               )

//                             //     }}containerStyle={{padding:3, height:40, width: 40, marginTop:"5%"}} iconStyle={{right:'4%'}} source={this.state.profilePic}/> 
//                         }


//                         {/* {this.state.profilePic.map((val, index) => {
// if(index == 0) {

// return <Avatar onPress={this.openGallery} containerStyle={{padding:5, height:40, width: 40, marginTop:"1%"}} source={val} />
// } else{
// return(
// <BadgedIcon  containerStyle={{padding:5, margin: 5, height:40, width: 40}} source={val}/>
// )
// }

// if(index == 0) {
// return <ImageBackground source={val}  style={{height:30, width:30,backgroundColor:"#bdbdbd", marginTop:"1%"}}/>
// } else{
// return(
// <ImageBackground source={val}  style={{height:30, width:30,borderRadius:5,margin:3, display:"flex", alignContent:"center", backgroundColor:"#bdbdbd"}}> 
//     <Text style={{fontSize:7, backgroundColor: "red", borderRadius:100, color:"#fff",marginTop:-7,marginLeft:20, textAlign:"center", height:10, width:15}}>X</Text>
// </ImageBackground>
// )
// }


// })} */}