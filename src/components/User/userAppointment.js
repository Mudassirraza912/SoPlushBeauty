import React, { Component } from 'react'
import { Text, View, ImageBackground, Dimensions, Image, TouchableOpacity, ScrollView, Picker, PickerItem } from 'react-native'
// import {  } from 'react-native-gesture-handler';
import { Container, Content, List, ListItem, Left, Right, Button, Item, Input,  Label, Form, Icon } from 'native-base';
import {Avatar, Header, Card, Divider} from 'react-native-elements'
// import  CalendarPicker from 'react-native-calendar-picker';
// import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import Calendar from 'react-native-calendar'

import moment from 'moment'

const {width, height} = Dimensions.get("window")

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
            customDatesStyles: [
                {date:"09-21-2019",  style: {backgroundColor:"#fc8b8c"}},
                {date:"09-23-2019",  style: {backgroundColor:"#fc8b8c"}},
                {date:"09-25-2019",  style: {backgroundColor:"#fc8b8c"}},
              ],
    }

    }


    static navigationOptions = () => ({
        headerMode: 'none',
        headerVisible: false,
        header: null,
    })


    
    

    
    render() {
        const {customDatesStyles} = this.state
        return (
            <View style={{ flex: 1, height, width, marginTop: -80 }}>
              {/* <ImageBackground source={require('../../../assets/opacity.jpg')} style={{height:"100%", width:"100%",opacity:0.9, marginTop: 20}}>  */}
      
      
              <Header
                containerStyle={{ marginTop: 40, backgroundColor: "#fff", borderBottomColor: "#000", borderBottomWidth: 1, height: 100 }}
                placement="left"
                leftContainerStyle={{ marginTop: 10 }}
                centerContainerStyle={{ marginTop: 10 }}
                leftComponent={<Icon onPress={() => { this.props.navigation.navigate('UserHome') }} name="arrow-back" color="#000" />}
                centerComponent={<Text style={{alignSelf:"center", fontSize:30, fontFamily:"MrEavesXLModNarOT-Reg"}}>BOOK APPOINTMENT</Text>}
              />
      
              <Header containerStyle={{ backgroundColor: "#fff", height: 60, width: '100%' }}
                placement="left">
                <View style={{ display: "flex", flexDirection: "row", marginTop: -20, alignItems: 'center', alignContent: 'center', width: '100%' }}>
      
                  <View style={{ display: "flex", flexDirection: "column", borderRightWidth: 1, borderRightColor: "#000", height: 35, width: "25%", justifyContent: "center", alignContent: "center", alignItems: "center" }}>
                    <TouchableOpacity style={{ alignItems: 'center' }}>
                      <Image source={require('../../../assets/envelope.png')} style={{height:25, width:25}} />
                      {/* <Icon name="call" /> */}
                      <Text>
                        Email
                                          </Text>
                    </TouchableOpacity>
                  </View>
      
                  <View style={{ display: "flex", flexDirection: "column", borderRightWidth: 1, borderRightColor: "#000", height: 35, width: "25%", justifyContent: "center", alignContent: "center", alignItems: "center" }}>
                    <TouchableOpacity style={{ alignItems: 'center' }}  >
                      <Image source={require('../../../assets/phone-call.png')} style={{height:25, width:25}} />
                      {/* <Icon name="call" /> */}
                      <Text>
                        Call Us
                                          </Text>
                    </TouchableOpacity>
                  </View>
      
      
                  <View style={{ display: "flex", flexDirection: "column", borderRightWidth: 1, borderRightColor: "#000", height: 35, width: "25%", justifyContent: "center", alignContent: "center", alignItems: "center" }}>
                    <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => { this.props.navigation.navigate('BookingHistory') }}>
                      <Image source={require('../../../assets/history.png')} style={{height:25, width:25}} />
                      {/* <Icon name="call" /> */}
                      <Text>
                        History
                                          </Text>
                    </TouchableOpacity>
                  </View>
      
                  <View style={{ height: 35, width: "25%", justifyContent: "center", alignContent: "center", alignItems: "center" }}>
                    <TouchableOpacity style={{ alignItems: 'center' }}>
                      {/* <Icon name="call" /> */}
                      <Image source={require('../../../assets/placeholder.png')} style={{height:25, width:25}} />
                      <Text>
                        Location
                                          </Text>
                    </TouchableOpacity>
                  </View>
      
      
      
                </View>
              </Header>
      
              <View style={{ height, width, backgroundColor: "rgba(190, 144, 212, 0.7)", justifyContent: "center" }}>
      
                <ScrollView style={{ height: height }}>
      
                  <View style={{ justifyContent: "center", alignContent: "center", alignItems: "center", marginTop: 20 }}>
      
      
                    <Card containerStyle={{ backgroundColor: "#fff", borderRadius: 10, width: "95%", }}>
      
                      <View >
                      </View>
      
                      <View >
      
                        {/* <CalendarPicker
                                          selectedDayColor="#fc8b8c"
                                          todayBackgroundColor="transparent"
                                          enableDateChange={true}
                                          customDatesStyles={customDatesStyles}
                                          onDateChange={(date) => {
                                              var newdate = moment(date).format("MM-DD-YYYY")
                                              console.log("JSJDGJHKSDJHSDHSDKG", moment(date).format("MM-DD-YYYY"))
                                              this.props.navigation.navigate('PersonalService', {
                                                  selectdate: newdate
                                              })
                                          }}
                                      /> */}
      
                        {/* 
                                          <Calendar
                                          // Collection of dates that have to be colored in a special way. Default = {}
                                          markedDates={{
                                              '2012-05-20': {textColor: 'green'},
                                              '2012-05-22': {startingDay: true, color: 'green'},
                                              '2012-05-23': {selected: true, endingDay: true, color: 'green', textColor: 'gray'},
                                              '2012-05-04': {disabled: true, startingDay: true, color: 'green', endingDay: true}
                                          }}
                                          // Date marking style [simple/period/multi-dot/custom]. Default = 'simple'
                                          // markingType={'period'}
                                          /> */}
      
      
      
      
      
                        <Calendar
                          onDateSelect={(date) => {
                            var newdate = moment(date).format("MM-DD-YYYY")
                            // console.log("JSJDGJHKSDJHSDHSDKG",date, moment(date).format("MM-DD-YYYY"))
                            this.props.navigation.navigate('PersonalService', {
                              selectdate: date
                            })
                          }}
      
                          showEventIndicators
                          showControls
                          eventDates={['2019-09-25', '2019-09-27', '2019-09-29']}
                          customStyle={{
                            // dayCircleFiller: {
                            //     backgroundColor: 'blue',
                            //   },
                            hasEventCircle: {
                              backgroundColor: 'red',
                              color: "white"
                            },
                            dayButton: {
                              width: "100%",
                              padding: "2.5%"
                            },
                          }} />
      
                      </View>
      
                      <View style={{ marginTop: '10%' }}>
                        <View style={{ flexDirection: "row", justifyContent: 'space-between', width: '100%' }}>
      
                          <View style={{ width: '60%' }} >
                            <Text style={{ fontSize: 20, fontFamily: "MrEavesXLModNarOT-Reg", marginTop: 15 }}>
                              Available Time
                                              </Text>
                          </View>
      
                          <View style={{ borderWidth: 1, borderBottomColor: "#fc8b8c", borderTopColor: "transparent", borderLeftColor: "transparent", borderRightColor: "transparent", width: '40%' }}>
                            <Picker
                              selectedValue={this.state.language}
                              style={{ width: '100%' }}
                              itemStyle={{ backgroundColor: "grey", color: "blue", fontSize: 17 }}
                              onValueChange={(itemValue, itemIndex) =>
                                this.setState({ language: itemValue })
                              }>
                              <Picker.Item label="11:00 AM" value="11:00 AM" />
                              <Picker.Item label="11:30 AM" value="11:30 AM" />
                              <Picker.Item label="12:00 AM" value="12:00 AM" />
                              <Picker.Item label="01:00 PM" value="01:00 PM" />
                              <Picker.Item label="02:00 PM" value="02:00 PM" />
                            </Picker>
                          </View>
      
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
              {/* </ImageBackground> */}
            </View>
          )
    }
}
