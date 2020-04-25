import React, { Component } from 'react'
import { Text, View, ImageBackground, Dimensions, Image, TouchableOpacity, ScrollView, PickerItem, Alert, Linking, TouchableHighlight, Modal,  Picker } from 'react-native'
import { Container, Content, List, ListItem, Left, Right, Button, Item, Input, Label, Form, Icon } from 'native-base';
import { Avatar, Header, Card, Divider } from 'react-native-elements'
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import moment from 'moment'
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
const { width, height } = Dimensions.get("window")
import { LinearGradient } from 'expo-linear-gradient';


const customStyle = {
  hasEventCircle: {
    backgroundColor: 'blue',
  },
  hasEventDaySelectedCircle: {
    backgroundColor: 'red',
  },
}

export default class UserAppointment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customDates: {},
      email: null,
      phone: null,
      modalVisible: false,
      modalVisible1: false,
      selectedDateData: [],
      cities: [],
      selectedCity:null,
      a:[
        {name:'Port Hueneme', latitude:34.155834, longitude:-119.202789},
        {name:'Auburn', latitude:42.933334, longitude:-76.566666},
        {name:'Jamestown', latitude:	42.095554, longitude:-79.238609}
      ]
    }

  }


  static navigationOptions = () => ({
    headerMode: 'none',
    headerVisible: false,
    header: null,
    drawerLockMode: 'locked-closed'
  })




  componentDidMount() {
    const { customDates, cities } = this.state

    fetch(`http://soplush.ingicweb.com/soplush/booking/cities.php?action=get_cities`, {

    }).then(res => res.json())
      .then(resp => {
        if(resp.status) {
          this.setState({
            cities: resp.data
          })
        }
      })
      .catch((err) => {})




    fetch(`http://soplush.ingicweb.com/soplush/user/user.php?action=get_user_bookings&user_id=${this.props.screenProps.profileData.user_id}&status=accepted`, {

    }).then(res => res.json())
      .then(resp => {
        // console.log(JSON.stringify(resp))
        var successData = resp

        if (successData.status === true) {
          // console.log("successData.data[0].role_id === 3", successData.data)

          successData.data.map((value, index) => {
            var date = moment(value.service_date).format('YYYY-MM-DD')
            customDates[date] = { selected: true, selectedColor: '#FFB9BA' }
            // console.log("date date date",customDates)
            this.setState({ customDates })
          })
          //   console.log("Category PRO", successData)


          this.setState({
            services: successData.data,
            data: successData.data,
          })


        } else {
          // Alert.alert("Alert",successData.message)
          // console.log("successData.message", successData.message)
        }
      })
      .catch(err => console.log("Category err err", err));


    const formData = new FormData()
    formData.append('role_name', 'super_admin')

    fetch("http://soplush.ingicweb.com/soplush/user/user.php?action=select_user", {
      method: 'POST',
      // dataType: "json",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'multipart/form-data'
      },
      body: formData
    }).then(res => res.json())
      .then(resp => {
        // console.log('response ADMIN',resp)
        this.setState({
          email: resp.data[0].email,
          phone: resp.data[0].phone_number
        })
      })
      .catch(err => console.log('err', err))
  }



  onDateSelect = (dateString) => {

    // console.log(`http://soplush.ingicweb.com/soplush/booking/booking.php?action=get_customer_bookings&date=${dateString}&customer_id=${this.props.screenProps.profileData.user_id}`)

    fetch(`http://soplush.ingicweb.com/soplush/booking/booking.php?action=get_customer_bookings&date=${dateString}&customer_id=${this.props.screenProps.profileData.user_id}`, {
    }).then(res => res.json())
      .then(resp => {
        // console.log('resp specific', resp)

        this.setState({
          selectedDateData: resp.data,
          modalVisible: true
        })
      })
      .catch(err => console.log(err))

  }


  addlocation = () => {
    const { selectedCity } = this.state

    const formData = new FormData()
        formData.append('user_id', this.props.screenProps.profileData.user_id)
        formData.append('city_id', selectedCity.id)
        formData.append('latitude', selectedCity.latitude)
        formData.append('longitude',selectedCity.longitude)


        console.log('formData', formData)
        fetch(`http://soplush.ingicweb.com/soplush/booking/locations.php?action=add_location`, {
            method: 'POST',
            // dataType: "json",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'multipart/form-data'
            },
            body: formData
        }).then(res => res.json())
        .then(resp => {
          console.log('resp ADD LOCATION', resp)
          if(resp.status){
            Alert.alert('Alert', resp.message)
            this.setState({
              modalVisible1: false,
              selectedCity: null
            })
          }
        })
  }



  render() {
    const { customDates, modalVisible, modalVisible1, selectedDateData, selectedCity, cities, a } = this.state
    console.log('selectedCity',selectedCity, 'selectedCity != nul', selectedCity != null)
    return (
      <View style={{ flex: 1, height, width: '100%', marginTop: -80 }}>

        {/* LOCATION WORK START */}

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible1}
          onRequestClose={() => {
            this.setState({ modalVisible1: !modalVisible1 })
          }}
        >
          <View style={{
            flex: 1,
            backgroundColor: "#fff",
            height: '100%',
          }}>
            <View style={{ flex: 1, width: '100%', backgroundColor: "rgba(246, 232, 232, 0.7)"}}>

              {/* <View style={{ borderWidth: 1, borderColor: 'pink',  borderRadius: 10, top: 20}}>
                             
                             <Item style={{borderBottomWidth: 0}}>  
                                  <Input defaultValue={this.state.newPass} style={{ width: '100%', fontSize: 15 }}  onChangeText={(e) => { this.setState({ beauticianName: e }) }} placeholder="Enter City" placeholderTextColor="#000" />
                             </Item>
 
               </View> */}


<View style={{ borderWidth: 1, borderColor: 'pink',  borderRadius: 10, top: 20, width: '80%', alignSelf:'center', justifyContent:'center'}}>
    <Picker
        mode="dropdown"
        selectedValue={selectedCity}
        style={{ height: 50, width: 280 }}
        onValueChange={(itemValue, itemIndex) => {
           console.log("itemValue",typeof Number(itemValue.latitude), 'itemIndex',typeof  Number(itemValue.longitude))
           this.setState({ selectedCity: itemValue })
        }
         
        }>
        {cities.map((value, index) => {
            // console.log("value.category_name", value)
            return (<Picker.Item style={{ width: 200 }} label={value.name} value={value} />)
        })}
    </Picker>
</View>


                <View>
                {selectedCity != null &&   <MapView
                      region={{
                        latitude: Number(selectedCity.latitude),
                        longitude:  Number(selectedCity.longitude),
                        latitudeDelta: 0.80192,
                        longitudeDelta: 0.80192,
                      }}
                      style={{height:'80%', width: '100%', top: 20}}
                    >
                    
                     <Marker draggable coordinate={selectedCity != null ? {latitude: Number(selectedCity.latitude),
                        longitude: Number(selectedCity.longitude)} : {latitude: 37.78825,
                        longitude:-122.4324}}
                        onDragEnd={(e) => {
                          selectedCity.latitude = e.nativeEvent.coordinate.latitude
                          selectedCity.longitude = e.nativeEvent.coordinate.longitude
                          this.setState({selectedCity: selectedCity})

                        }}
                          /> 
                    

                  </MapView>}
                </View>


                {selectedCity != null && <View style={{ alignContent: "center", alignItems: "center", marginBottom:10 }}>
                                <LinearGradient start={{ x: 0.0, y: 0.25 }} end={{ x: 0.0, y: 1.0 }} colors={['#F9B1B0', '#FD8788', '#FF7173']} style={{ width: "100%", borderRadius: 10}}>
                                        <TouchableOpacity onPress={() => {this.addlocation()}} style={{ justifyContent: "center", alignContent: "center", alignItems: "center", backgroundColor: "none", opacity: 0.7, borderRadius: 10 }} style={{ flexDirection: "column", justifyContent: "center", alignContent: "center", alignItems: "center", backgroundColor: "transparent", opacity: 0.7, borderRadius: 10 }}>
                                            <Text style={{ alignSelf: "center", textAlignVertical: "center", color: "#fff", fontFamily: "Poppins-Regular", fontSize: 17, paddingVertical: 15 , fontWeight:'bold'}}>
                                            ADD LOCATION
                                            </Text>
                                        </TouchableOpacity>
                                    </LinearGradient>
                                    </View>}

            </View>
          </View>
        </Modal>

        {/* LOCATION WORK START */}



        {/*  SHOW SPECIFIC BOOKING START */}

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            this.setState({ modalVisible: !modalVisible })
          }}
        >
          <View style={{
            flex: 1,
            backgroundColor: "#fff",
            height: '100%',
          }}>
            <View style={{ flex: 1, width: '100%', backgroundColor: "rgba(246, 232, 232, 0.7)", justifyContent: "center", padding: 10 }}>

              <ScrollView>
                {selectedDateData.map((value, index) => {
                  var index = index + 1
                  var dataLength = selectedDateData.length
                  // console.log("DAY NAME DAY NAME",index , dataLength)
                  var formatDate = `${moment(value.service_date).format('dddd')} - ${moment(value.service_date).format('DD/MM/YYYY')}`

                  if (index === 1) {

                    return (
                      <View key={index} style={{ backgroundColor: '#fff', padding: 10, borderTopLeftRadius: 20, borderTopRightRadius: 20 }}>

                        <View style={{ display: "flex", flexDirection: "row", paddingVertical: "5%", justifyContent: 'space-between' }}>
                          <Text style={{ fontFamily: "Poppins-Regular", color: "#ff8385", fontSize: 17 }}>{formatDate}</Text>
                        </View>




                        <View style={{ display: "flex", flexDirection: "row", justifyContent: 'space-between' }}>
                          <Text style={{ width: "50%", fontFamily: "Poppins-Regular", color: '#bdbdbd' }}>Service Name</Text>
                          <Text style={{ marginLeft: "5%", fontFamily: "Poppins-Regular", fontSize: 15 }}>{value.service_name}</Text>
                        </View>





                        {value.s_checked == 1 ?
                          <View style={{ display: "flex", flexDirection: "row" }}>
                            <Text style={{ width: "50%", fontFamily: "Poppins-Regular", color: '#aaaaaa' }}>Cost</Text>
                            <Text style={{ width: "50%", fontFamily: "Poppins-Regular", textAlign: 'right' }}>${value.soplush_cost}</Text>
                          </View>

                          :
                          <View style={{ display: "flex", flexDirection: "row" }}>
                            <Text style={{ width: "50%", fontFamily: "Poppins-Regular", color: '#aaaaaa' }}>Cost</Text>
                            <Text style={{ width: "50%", fontFamily: "Poppins-Regular", textAlign: 'right' }}>${value.plush_cost}</Text>
                          </View>

                        }


                        <View style={{ display: "flex", flexDirection: "row", justifyContent: 'space-between' }}>
                          <Text style={{ width: "50%", fontFamily: "Poppins-Regular", color: '#bdbdbd' }}>Beauticainist Name</Text>
                          <Text style={{ marginLeft: "5%", fontFamily: "Poppins-Regular", fontSize: 15 }}>{value.beautician}</Text>
                        </View>

                        <Divider style={{ backgroundColor: '#bdbdbd', top: 10, width: '95%' }} />

                      </View>

                    )

                  } else {

                    return (
                      <View key={index} style={index === dataLength ? { backgroundColor: '#fff', padding: 10, borderBottomLeftRadius: 20, borderBottomRightRadius: 20 } : { backgroundColor: '#fff', padding: 10 }}>

                        <View style={{ display: "flex", flexDirection: "row", paddingVertical: "5%", justifyContent: 'space-between' }}>
                          <Text style={{ fontFamily: "Poppins-Regular", color: "#ff8385", fontSize: 17 }}>{formatDate}</Text>
                        </View>




                        <View style={{ display: "flex", flexDirection: "row", justifyContent: 'space-between' }}>
                          <Text style={{ width: "50%", fontFamily: "Poppins-Regular", color: '#bdbdbd' }}>Service Name</Text>
                          <Text style={{ marginLeft: "5%", fontFamily: "Poppins-Regular", fontSize: 15 }}>{value.service_name}</Text>
                        </View>





                        {value.s_checked == 1 ?
                          <View style={{ display: "flex", flexDirection: "row" }}>
                            <Text style={{ width: "50%", fontFamily: "Poppins-Regular", color: '#aaaaaa' }}>Cost</Text>
                            <Text style={{ width: "50%", fontFamily: "Poppins-Regular", textAlign: 'right' }}>${value.soplush_cost}</Text>
                          </View>

                          :
                          <View style={{ display: "flex", flexDirection: "row" }}>
                            <Text style={{ width: "50%", fontFamily: "Poppins-Regular", color: '#aaaaaa' }}>Cost</Text>
                            <Text style={{ width: "50%", fontFamily: "Poppins-Regular", textAlign: 'right' }}>${value.plush_cost}</Text>
                          </View>

                        }


                        <View style={{ display: "flex", flexDirection: "row", justifyContent: 'space-between', paddingVertical: 5 }}>
                          <Text style={{ width: "50%", fontFamily: "Poppins-Regular", color: '#bdbdbd' }}>Beauticainist Name</Text>
                          <Text style={{ marginLeft: "5%", fontFamily: "Poppins-Regular", fontSize: 15 }}>{value.beautician}</Text>
                        </View>

                        <Divider style={{ backgroundColor: '#bdbdbd', top: 10, width: '95%' }} />

                      </View>

                    )

                  }

                })}
              </ScrollView>
            </View>
          </View>
        </Modal>

        {/*  SHOW SPECIFIC BOOKING END */}




        <Header
          containerStyle={{ marginTop: 40, backgroundColor: "#fff", borderBottomColor: "#000", borderBottomWidth: 1, height: 100 }}
          placement="left"
          leftContainerStyle={{ marginTop: 10 }}
          centerContainerStyle={{ marginTop: 10 }}
          leftComponent={<Icon onPress={() => { this.props.navigation.navigate('UserHome') }} name="arrow-back" color="#000" />}
          centerComponent={<Text style={{ alignSelf: "center", fontSize: 20, fontFamily: "Poppins-Regular" }}>BOOK APPOINTMENT</Text>}
        />

        <Header containerStyle={{ backgroundColor: "#fff", height: 60, width: '100%' }}
          placement="left">
          <View style={{ display: "flex", flexDirection: "row", marginTop: -20, alignItems: 'center', alignContent: 'center', width: '100%' }}>

            <View style={{ display: "flex", flexDirection: "column", borderRightWidth: 1, borderRightColor: "#000", height: 35, width: "25%", justifyContent: "center", alignContent: "center", alignItems: "center" }}>
              <TouchableOpacity style={{ alignItems: 'center' }} onPress={() =>
                // Alert.alert("Alert","Will be impelmented")
                Linking.openURL(`mailto:${this.state.email}`)
              }>
                <Image source={require('../../../assets/envelope.png')} style={{ height: 22, width: 22 }} />
                {/* <Icon name="call" /> */}
                <Text>
                  Email
                                          </Text>
              </TouchableOpacity>
            </View>

            <View style={{ display: "flex", flexDirection: "column", borderRightWidth: 1, borderRightColor: "#000", height: 35, width: "25%", justifyContent: "center", alignContent: "center", alignItems: "center" }}>
              <TouchableOpacity style={{ alignItems: 'center' }} onPress={() =>
                Linking.openURL(`tel:${this.state.phone}`)
                // Alert.alert("Alert","Will be impelmented")
              } >
                <Image source={require('../../../assets/phone-call.png')} style={{ height: 22, width: 22 }} />
                {/* <Icon name="call" /> */}
                <Text>
                  Call Us
                                          </Text>
              </TouchableOpacity>
            </View>


            <View style={{ display: "flex", flexDirection: "column", borderRightWidth: 1, borderRightColor: "#000", height: 35, width: "25%", justifyContent: "center", alignContent: "center", alignItems: "center" }}>
              <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => { this.props.navigation.navigate('BookingHistory', { from: 'appointment' }) }}>
                <Image source={require('../../../assets/Apphistory.png')} style={{ height: 22, width: 22, transform: [{ rotate: "120deg" }] }} />
                {/* <Icon name="call" /> */}
                <Text>
                  History
                                          </Text>
              </TouchableOpacity>
            </View>

            <View style={{ height: 35, width: "25%", justifyContent: "center", alignContent: "center", alignItems: "center" }}>
              <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => {
                this.setState({ modalVisible1: !modalVisible1 })
                // Alert.alert("Alert","Will be impelmented")
              }
              }>
                {/* <Icon name="call" /> */}
                <Image source={require('../../../assets/placeholder.png')} style={{ height: 22, width: 22 }} />
                <Text>
                  Location
                                          </Text>
              </TouchableOpacity>
            </View>



          </View>
        </Header>

        <View style={{ flex: 1, width: '100%', backgroundColor: "rgba(246, 232, 232, 0.7)", justifyContent: "center" }}>

          <ScrollView>

            <View style={{ justifyContent: "center", alignContent: "center", alignItems: "center", marginTop: 20 }}>


              <Card containerStyle={{ backgroundColor: "#fff", borderRadius: 10, width: "95%", overflow: 'hidden' }}>

                <View >
                </View>

                <View >

                  <Calendar
                    // Specify style for calendar container element. Default = {}
                    ref={ref => this.calendar = ref}
                    style={{
                      height: 300
                    }}

                    onDayPress={(day) => this.onDateSelect(day.dateString)}
                    theme={{
                      backgroundColor: '#ffffff',
                      calendarBackground: '#ffffff',
                      textSectionTitleColor: '#000',
                      selectedDayBackgroundColor: '#00adf5',
                      selectedDayTextColor: '#ffffff',
                      todayTextColor: '#000',
                      dayTextColor: '#2d4150',
                      textDisabledColor: '#d9e1e8',
                      dotColor: '#00adf5',
                      selectedDotColor: '#ffffff',
                      arrowColor: 'orange',
                      monthTextColor: '#FE7678',
                      indicatorColor: 'blue',
                      textDayFontFamily: '',
                      textMonthFontFamily: 'Poppins-Regular',
                      textDayHeaderFontFamily: 'Poppins-Regular',
                      textDayFontWeight: '300',
                      textMonthFontWeight: 'bold',
                      textDayHeaderFontWeight: 'bold',
                      textDayFontSize: 14,
                      textMonthFontSize: 15,
                      textDayHeaderFontSize: 14,
                      arrowStyle: {
                        justifyContent: 'flex-end'
                      },

                    }}
                    markedDates={customDates}


                  />

                </View>

                <View style={{ marginTop: '10%' }}>
                  <View style={{ flexDirection: "row", justifyContent: 'space-between', width: '100%', paddingHorizontal: 15 }}>

                    <View style={{ width: '60%' }} >
                      <Text style={{ fontSize: 18, fontFamily: "Poppins-Regular", marginTop: 15, color: 'gray' }}>
                        Available Time
                                              </Text>
                    </View>

                    <View style={{ borderTopColor: "transparent", borderLeftColor: "transparent", borderRightColor: "transparent", width: '40%', }}>
                      <View style={{
                        // borderColor: 'blur',
                        // borderWidth: 1,
                        backgroundColor: "transparent",
                        // borderRadius: 4
                        borderBottomWidth: 1,
                        borderBottomColor: 'gray',
                        height: 40
                        // paddingBottom: 50
                      }}>
                        <Icon
                          name="arrow-drop-down"
                          type="MaterialIcons"
                          style={{
                            color: "#FE7678",
                            position: "absolute",
                            bottom: 0,
                            right: 0,
                            fontSize: 25
                          }}
                        />
                        <Picker
                          mode="dropdown"
                          selectedValue={this.state.language}
                          style={{ width: '100%', borderBottomColor: "#fc8b8c", borderBottomWidth: 1, backgroundColor: 'transparent', color: '#FE7678' }}
                          itemStyle={{ backgroundColor: "grey", color: "blue", fontSize: 15, borderBottomColor: "#fc8b8c", borderBottomWidth: 1 }}
                          onValueChange={(itemValue, itemIndex) =>
                            this.setState({ language: itemValue })
                          }>
                          <Picker.Item label="11:00 am" value="11:00 am" />
                          <Picker.Item label="11:30 am" value="11:30 am" />
                          <Picker.Item label="12:00 am" value="12:00 am" />
                          <Picker.Item label="01:00 pm" value="01:00 pm" />
                          <Picker.Item label="02:00 pm" value="02:00 pm" />
                        </Picker>
                      </View>
                    </View>

                  </View>
                </View>
              </Card>




              {/* <Modal
              isVisible={this.state.modalVisible}
              onSwipeComplete={() => this.setState({modalVisible: false})}
              onBackdropPress={() => this.setState({modalVisible: false})}>
              <View style={{flex: 1}}>
                <Text>I am the modal content!</Text>
              </View>
            </Modal> */}


            </View>
            {/* </View> */}

            <View>
              <Text></Text>
              <Text></Text>
              {/* <Text></Text>
              <Text></Text>
              <Text></Text>
              <Text></Text>
              <Text></Text> */}
            </View>



          </ScrollView>

        </View>
        {/* </ImageBackground> */}
      </View>
    )
  }
}