import React, { Component } from 'react'
import { Text, View, ImageBackground, Dimensions, Image, TouchableOpacity, ScrollView, FlatList, TextInput } from 'react-native'
// import {  } from 'react-native-gesture-handler';
import { Container, Content, List, ListItem, Left, Right, Button, DatePicker } from 'native-base';
import { Avatar, Header, Icon, Card, Divider } from 'react-native-elements'
import Cover1 from '../../../assets/Cover1.png'
import Cover2 from '../../../assets/Cover2.png'
import Cover3 from '../../../assets/Cover3.png'
import Cover4 from '../../../assets/Cover4.png'
// import CalendarPicker from 'react-native-calendar-picker';
import moment from 'moment'

const { width, height } = Dimensions.get("window")

export default class SelectedProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profileData:this.props.navigation.getParam('selectedUser'),
            selectedSlot: "",
            selectedUser: this.props.navigation.getParam('selectedUser'),
            cart: this.props.navigation.getParam('cart'),
            selectdate: this.props.navigation.getParam('selectDate'),
            works: [Cover1, Cover2, Cover3, Cover4, Cover1, Cover3, Cover2, Cover4],
            dateSlot: [{id:1,time:"11: 10 AM"},{ id:2,time:"11: 15 AM"}, {id:3,time:"11: 020 AM"}, {id:4,time:"11: 25 AM"}],
            note:''
            

        }
    }

    // onDateChange = (date) => {
    //     const { profileData, selectedSlot } = this.state
    //     profileData.birthdate = date
    //     this.setState({
    //         profileData
    //     });
    // }


    workFunction = (item) => {
        const { profileData, selectedSlot } = this.state
        console.log("item", item)

        this.setState({ selectedSlot: item })


        // const index = selectedSlot.findIndex(x => x == item)
        //     // console.log("index",index)
        // if (index != -1) {
        //     selectedSlot.splice(index, 1)
        //     this.setState({selectedSlot})
        // }else {
        //     selectedSlot.push(item)
        //     this.setState({selectedSlot})
        // }

    }



    componentDidMount() {
        const { profileData } = this.state
        var sDate = this.props.navigation.getParam('selectdate')
        var newDate = moment(sDate).toDate()
        console.log("asfasdjkfhasjkdjk", typeof newDate, typeof new Date())
        // this
        // this.state.profileData.birthdate = this.props.navigation.getParam('selectdate')
        this.setState({
            selectdate: newDate,
            profileData
        })
    }


    static navigationOptions = () => ({
        headerMode: 'none',
        headerVisible: false,
        header: null,
    })


    render() {
        const { selectedSlot, profileData } = this.state
        // console.log("SelectProfile", this.state.cart,this.props.navigation.getParam('selectDate') )
        var sDate = this.props.navigation.getParam('selectDate')
        var date = moment(sDate).format('DD')
        var month = moment(sDate).format('MM')
        var year = moment(sDate).format('YYYY')

        console.log("Date", date, month, year, sDate)
        return (
            <View style={{ flex: 1, height, width, marginTop: -80 }}>
                <ImageBackground source={require('../../../assets/opacity.jpg')} style={{ height: "100%", width: "100%", opacity: 0.9, marginTop: 20 }}>


                    <Header
                        containerStyle={{ marginTop: 40, backgroundColor: "#fff" }}
                        placement="left"
                        leftComponent={<Icon onPress={() => { this.props.navigation.goBack() }} name="arrow-back" color="#000" />}
                        centerComponent={<Text style={{ alignSelf: "center", fontSize: 30, fontFamily: "MrEavesXLModNarOT-Reg" }}>PROFILE</Text>}
                    // rightComponent={<TouchableOpacity onPress={() => {this.props.navigation.navigate("EditProProfile")}}><Image source={require('../../../assets/edit.png')} style={{height:30, width:30}} /> 
                    // </TouchableOpacity> }
                    />

                    <View style={{ height, width, backgroundColor: "rgba(200, 165, 212, 0.7)", justifyContent: "center" }}>

                        <ScrollView style={{ height: height }}>

                            <View style={{ justifyContent: "center", alignContent: "center", alignItems: "center", marginTop: 20 }}>

                                {/* <View style={{backgroundColor:"#fff",borderRadius:10, width:"90%"}}> */}

                                {this.state.selectedUser !== null ?

                                <Card containerStyle={{ backgroundColor: "#fff", borderRadius: 10, width: "90%", }}>
                                    <View style={{ width: "100%" }}>
                                        <Image resizeMode="cover" style={{ width: "100%", height: 300, borderRadius: 10 }} source={{uri:`https://hnhtechsolutions.com/hassan/soplush/profile_pics/${this.state.profileData.profile_pic}`}} />
                                    </View>
                                    <View style={{ display: "flex", flexDirection: "column", marginTop: 15 }}>
                                        <Text style={{ width: "30%", fontFamily: "MrEavesXLModNarOT-Reg", fontSize: 20, color: "gray" }}>Name</Text>
                                        <Text style={{ fontFamily: "MrEavesXLModNarOT-Reg", fontSize: 15 }}>{this.state.profileData.username}</Text>
                                        <Divider style={{ backgroundColor: 'lightgray' }} />
                                    </View>

                                    <View style={{ display: "flex", flexDirection: "column", marginTop: 15 }}>
                                        <Text style={{ width: "30%", fontFamily: "MrEavesXLModNarOT-Reg", fontSize: 20, color: "gray" }}>Email</Text>
                                        <Text style={{ fontFamily: "MrEavesXLModNarOT-Reg", fontSize: 15 }}>{this.state.profileData.email}</Text>
                                        <Divider style={{ backgroundColor: 'lightgray' }} />
                                    </View>

                                    <View style={{
                        backgroundColor: "transparent",
                        borderColor: 'gray',
                        borderWidth: 1,
                        borderColor: 'gray',
                        borderRadius: 10,
                        height: 50,
                        marginTop: 10,
                        flexDirection: 'row',
                        alignItems: 'center',
                        alignSelf: 'center',
                        width: '93%',
                        paddingHorizontal: 16,
                        paddingVertical: 10,
                        marginBottom: 10,

                    }}>
                        <TextInput style={{
                            height: 45,
                            flex: 1,
                        }}
                            value={this.state.search}
                            placeholder="Define Your Important Notice"
                            onChangeText={(text) => {this.setState({note:text})}}
                        />
                        <Icon style={{
                            color: 'gray',
                            justifyContent: 'flex-end'
                        }} type="EvilIcons" name="search" size={24} />
                    </View>


                                    <View style={{ display: "flex", flexDirection: "column", marginTop: 15 }}>
                                        <Text style={{ width: "30%", fontFamily: "MrEavesXLModNarOT-Reg", fontSize: 20, color: "gray" }}>Selected Date</Text>
                                        <DatePicker
                                            // date={this.state.date} //initial date from state
                                            defaultDate={new Date(year, month, date)}
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
                                                this.state.selectdate = newdate

                                                this.setState({ selectdate })

                                            }}
                                            underlineColorAndroid="#f55f2a" />
                                        {/* <Text style={{fontFamily:"MrEavesXLModNarOT-Reg", fontSize:15}}>
                                    {this.state.profileData.birthdate}</Text> */}
                                        <Divider style={{ backgroundColor: 'lightgray' }} />
                                    </View>





                                    <View style={{ display: "flex", flexDirection: "column", marginTop: 15 }}>
                                        <Text style={{ width: "30%", fontFamily: "MrEavesXLModNarOT-Reg", fontSize: 20, color: "gray" }}>Gender</Text>
                                        <Text style={{ fontFamily: "MrEavesXLModNarOT-Reg", fontSize: 15 }}>{this.state.profileData.gender}</Text>
                                        <Divider style={{ backgroundColor: 'lightgray' }} />
                                    </View>

                                    <View style={{ display: "flex", flexDirection: "column", marginTop: 15 }}>
                                        <Text style={{ width: "30%", fontFamily: "MrEavesXLModNarOT-Reg", fontSize: 20, color: "gray" }}>About</Text>
                                        <Text style={{ fontFamily: "MrEavesXLModNarOT-Reg", fontSize: 15 }}>{this.state.profileData.abour}</Text>
                                        <Divider style={{ backgroundColor: 'lightgray' }} />
                                    </View>


                                    <View style={{ display: "flex", flexDirection: "column", marginTop: 15 }}>
                                        <Text style={{ width: "30%", fontFamily: "MrEavesXLModNarOT-Reg", fontSize: 20, color: "gray" }}>Expertize</Text>
                                        <Text style={{ fontFamily: "MrEavesXLModNarOT-Reg", fontSize: 15 }}>{this.state.profileData.expertize}</Text>
                                        <Divider style={{ backgroundColor: 'lightgray' }} />
                                    </View>

                                    <View style={{ display: "flex", flexDirection: "column", marginTop: 15 }}>
                                        <Text style={{ width: "30%", fontFamily: "MrEavesXLModNarOT-Reg", fontSize: 20, color: "gray" }}>Available Slot</Text>

                                        <View style={{ flexDirection: "row", width: "100%" }}>
                                            <FlatList style={{ flex: 1, marginTop: "3%" }}
                                                data={this.state.dateSlot}
                                                renderItem={({ item, index }) => (
                                                    <View style={{ flexDirection: "column", margin: 2, height: 60, width: "30%", borderRadius: 10, alignContent: "center", alignItems: "center", alignSelf: "center" }}>

                                                        {selectedSlot.time == item.time ?
                                                            <TouchableOpacity style={{ width: "100%", }} onPress={() => { this.workFunction(item) }}>
                                                                <View style={{ backgroundColor: "#fc8b8c", height: 30, width: "100%", borderRadius: 10, alignSelf: "center", justifyContent: "center", alignContent: "center", alignItems: "center" }}>
                                                                    <Text style={{ color: "#fff" }}>{item.time}</Text>
                                                                </View>
                                                            </TouchableOpacity>

                                                            :
                                                            <TouchableOpacity style={{ width: "100%", }} onPress={() => { this.workFunction(item) }}>
                                                                <View style={{ backgroundColor: "lightgray", height: 30, width: "100%", borderRadius: 10, alignSelf: "center", justifyContent: "center", alignContent: "center", alignItems: "center" }}>
                                                                    <Text style={{ color: "#000" }}>{item.time}</Text>
                                                                </View>
                                                            </TouchableOpacity>
                                                        }
                                                    </View>
                                                )}
                                                //Setting the number of column
                                                numColumns={3}
                                                key={2}
                                                keyExtractor={(item, index) => index}
                                            />
                                        </View>
                                        <Divider style={{ backgroundColor: 'lightgray' }} />
                                    </View>

                                    <View style={{ flex: 1, height: Dimensions.get('window').height / 2, width: Dimensions.get('window').width }}>
                                        <FlatList style={{ flex: 1, marginTop: "3%" }}
                                            data={this.state.works}
                                            renderItem={({ item }) => (
                                                <View style={{ flexDirection: "column", margin: 2, height: 90, width: 90, borderRadius: 10, alignContent: "center", alignItems: "center", alignSelf: "center" }}>
                                                    <TouchableOpacity style={{ borderRadius: 10 }}>
                                                        <Image style={{ height: 80, width: 80, borderRadius: 10 }} source={item} />
                                                    </TouchableOpacity>
                                                </View>
                                            )}
                                            //Setting the number of column
                                            numColumns={3}
                                            key={2}
                                            keyExtractor={(item, index) => index}
                                        />
                                    </View>



                                    <View style={{ marginRight: "6%" }}>

                                        <View style={{ alignContent: "center", alignItems: "center", marginTop: "5%" }}>
                                            <Button onPress={() => {
                                                this.props.navigation.navigate('ConfirmBooking', {
                                                    beauticianData: this.state.profileData,
                                                    selectedSlot: this.state.selectedSlot,
                                                    cart: this.state.cart,
                                                    selectdate: this.state.selectdate
                                                })
                                            }} style={{ justifyContent: "center", alignContent: "center", alignItems: "center", backgroundColor: "#fc8b8c", width: "90%", borderRadius: 10, opacity: 0.7 }}>
                                                <Text style={{ alignSelf: "center", color: "#fff", fontFamily: "MrEavesXLModNarOT-Reg", fontSize: 20 }}>
                                                    Book Now
                                            </Text>
                                            </Button>
                                        </View>

                                    </View>
                                </Card> 
                                
                                :


                                <Card containerStyle={{ backgroundColor: "#fff", borderRadius: 10, width: "90%", }}>
                                    <View style={{
                        backgroundColor: "transparent",
                        borderColor: 'gray',
                        borderWidth: 1,
                        borderColor: 'gray',
                        borderRadius: 10,
                        height: 50,
                        marginTop: 10,
                        flexDirection: 'row',
                        alignItems: 'center',
                        alignSelf: 'center',
                        width: '93%',
                        paddingHorizontal: 16,
                        paddingVertical: 10,
                        marginBottom: 10,

                    }}>
                        <TextInput style={{
                            height: 45,
                            flex: 1,
                        }}
                            value={this.state.search}
                            placeholder="Define Your Important Notice"
                            onChangeText={this.updateSearch}
                        />
                        <Icon style={{
                            color: 'gray',
                            justifyContent: 'flex-end'
                        }} type="EvilIcons" name="search" size={24} />
                    </View>


                                    <View style={{ display: "flex", flexDirection: "column", marginTop: 15 }}>
                                        <Text style={{ width: "30%", fontFamily: "MrEavesXLModNarOT-Reg", fontSize: 20, color: "gray" }}>Selected Date</Text>
                                        <DatePicker
                                            // date={this.state.date} //initial date from state
                                            defaultDate={new Date(year, month, date)}
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
                                                this.state.selectdate = newdate

                                                this.setState({ selectdate })

                                            }}
                                            underlineColorAndroid="#f55f2a" />
                                        {/* <Text style={{fontFamily:"MrEavesXLModNarOT-Reg", fontSize:15}}>
                                    {this.state.profileData.birthdate}</Text> */}
                                        <Divider style={{ backgroundColor: 'lightgray' }} />
                                    </View>


                                    <View style={{ display: "flex", flexDirection: "column", marginTop: 15 }}>
                                        <Text style={{ width: "30%", fontFamily: "MrEavesXLModNarOT-Reg", fontSize: 20, color: "gray" }}>Available Slot</Text>

                                        <View style={{ flexDirection: "row", width: "100%" }}>
                                            <FlatList style={{ flex: 1, marginTop: "3%" }}
                                                data={this.state.dateSlot}
                                                renderItem={({ item, index }) => (
                                                    <View style={{ flexDirection: "column", margin: 2, height: 60, width: "30%", borderRadius: 10, alignContent: "center", alignItems: "center", alignSelf: "center" }}>

                                                        {selectedSlot.time == item.time ?
                                                            <TouchableOpacity style={{ width: "100%", }} onPress={() => { this.workFunction(item) }}>
                                                                <View style={{ backgroundColor: "#fc8b8c", height: 30, width: "100%", borderRadius: 10, alignSelf: "center", justifyContent: "center", alignContent: "center", alignItems: "center" }}>
                                                                    <Text style={{ color: "#fff" }}>{item.time}</Text>
                                                                </View>
                                                            </TouchableOpacity>

                                                            :
                                                            <TouchableOpacity style={{ width: "100%", }} onPress={() => { this.workFunction(item) }}>
                                                                <View style={{ backgroundColor: "lightgray", height: 30, width: "100%", borderRadius: 10, alignSelf: "center", justifyContent: "center", alignContent: "center", alignItems: "center" }}>
                                                                    <Text style={{ color: "#000" }}>{item.time}</Text>
                                                                </View>
                                                            </TouchableOpacity>
                                                        }
                                                    </View>
                                                )}
                                                //Setting the number of column
                                                numColumns={3}
                                                key={2}
                                                keyExtractor={(item, index) => index}
                                            />
                                        </View>
                                        <Divider style={{ backgroundColor: 'lightgray' }} />
                                    </View>




                                    <View style={{ marginRight: "6%" }}>

                                        <View style={{ alignContent: "center", alignItems: "center", marginTop: "5%" }}>
                                            <Button onPress={() => {
                                                this.props.navigation.navigate('ConfirmBooking', {
                                                    beauticianData: this.state.profileData,
                                                    selectedSlot: this.state.selectedSlot,
                                                    cart: this.state.cart,
                                                    selectdate: this.state.selectdate,
                                                    note: this.state.note
                                                })
                                            }} style={{ justifyContent: "center", alignContent: "center", alignItems: "center", backgroundColor: "#fc8b8c", width: "90%", borderRadius: 10, opacity: 0.7 }}>
                                                <Text style={{ alignSelf: "center", color: "#fff", fontFamily: "MrEavesXLModNarOT-Reg", fontSize: 20 }}>
                                                    Book Now
                                            </Text>
                                            </Button>
                                        </View>

                                    </View>
                                </Card>







}



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
