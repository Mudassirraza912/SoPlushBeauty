import React, { Component } from 'react'
import { Text, View, ImageBackground, Dimensions, Image, TouchableOpacity, ScrollView,TextInput, RefreshControl, Alert, BackHandler, Modal, ActivityIndicator } from 'react-native'
// import {  } from 'react-native-gesture-handler';
import { Container, Content, List, ListItem, Left, Right, Button, DatePicker , Input, Item} from 'native-base';
import {Avatar, Header, Icon, Card, Divider} from 'react-native-elements'
import moment from 'moment'
import { LinearGradient } from 'expo-linear-gradient';

const {width, height} = Dimensions.get("window")

export default class BookingHistory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // services : [
            //     {
            //         dateTime:"Modnay - 14/08/2019",
            //         name: "So plush",
            //         service: "Hair Cutting",
            //         time: "02:00",
            //         date: "14-08-1900",
            //         cost: "$70"
            //     },
            //     {
            //         dateTime:"Modnay - 14/08/2019",
            //         name: "So plush",
            //         service: "Hair Cutting",
            //         time: "02:00",
            //         date: "14-08-1900",
            //         cost: "$70"
            //     },
            //     {
            //         dateTime:"Modnay - 14/08/2019",
            //         name: "So plush",
            //         service: "Hair Cutting",
            //         time: "02:00",
            //         date: "14-08-1900",
            //         cost: "$70"
            //     },
            //     {
            //         dateTime:"Modnay - 14/08/2019",
            //         name: "So plush",
            //         service: "Hair Cutting",
            //         time: "02:00",
            //         date: "14-08-1900",
            //         cost: "$70"
            //     },
            //     {
            //         dateTime:"Modnay - 14/08/2019",
            //         name: "So plush",
            //         service: "Hair Cutting",
            //         time: "02:00",
            //         date: "14-08-1900",
            //         cost: "$70"
            //     },
            //     {
            //         dateTime:"Modnay - 14/08/2019",
            //         name: "So plush",
            //         service: "Hair Cutting",
            //         time: "02:00",
            //         date: "14-08-1900",
            //         cost: "$70"
            //     },
            //     {
            //         dateTime:"Modnay - 14/08/2019",
            //         name: "So plush",
            //         service: "Hair Cutting",
            //         time: "02:00",
            //         date: "14-08-1900",
            //         cost: "$70"
            //     },
            //     {
            //         dateTime:"Modnay - 14/08/2019",
            //         name: "So plush",
            //         service: "Hair Cutting",
            //         time: "02:00",
            //         date: "14-08-1900",
            //         cost: "$70"
            //     },
            //     {
            //         dateTime:"Modnay - 14/08/2019",
            //         name: "So plush",
            //         service: "Hair Cutting",
            //         time: "02:00",
            //         date: "14-08-1900",
            //         cost: "$70"
            //     },
            //     {
            //         dateTime:"Modnay - 14/08/2019",
            //         name: "So plush",
            //         service: "Hair Cutting",
            //         time: "02:00",
            //         date: "14-08-1900",
            //         cost: "$70"
            //     },
            //     {
            //         dateTime:"Modnay - 14/08/2019",
            //         name: "So plush",
            //         service: "Hair Cutting",
            //         time: "02:00",
            //         date: "14-08-1900",
            //         cost: "$70"
            //     },
            //     {
            //         dateTime:"Modnay - 14/08/2019",
            //         name: "So plush",
            //         service: "Hair Cutting",
            //         time: "02:00",
            //         date: "14-08-1900",
            //         cost: "$70"
            //     },
                
               
            // ]
            services: [],
            refreshing: false,
            data: [],
            focusOn: false,
            offFocus: true,
            text:'',
            modalVisible: false,
            date: '',
            day: '',
            cost: '',
            serviceName: '',
            beauticianName: '',
            loader: false
            

        }
    }


    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);

        console.log('this.props.screenProps.profileData.user_id', this.props.screenProps.profileData.user_id)
        fetch(`http://soplush.ingicweb.com/soplush/user/user.php?action=get_user_bookings&user_id=${this.props.screenProps.profileData.user_id}&status=completed`, {

                }).then(res => res.json())
                    .then(resp => {
                        console.log(JSON.stringify(resp))
                        var successData = resp

                        if (successData.status === true) {
                            console.log("successData.data[0].role_id === 3", successData.data)
                            //   console.log("Category PRO", successData)
                            this.setState({
                                services:successData.data,
                                data:successData.data

                            })
                        

                        } else {
                            Alert.alert("Alert",successData.message)
                            console.log("successData.data[0].role_id === 3", successData)

                        }
                    })
                    .catch(err => console.log("Category err err", err));
    }



    onRefresh = () => {
        this.setState({refreshing: true})
        fetch(`http://soplush.ingicweb.com/soplush/user/user.php?action=get_user_bookings&user_id=${this.props.screenProps.profileData.user_id}`, {

        }).then(res => res.json())
            .then(resp => {
                console.log(JSON.stringify(resp))
                var successData = resp

                if (successData.status === true) {
                    console.log("successData.data[0].role_id === 3", successData.data)
                    //   console.log("Category PRO", successData)
           this.setState({
               services:successData.data,
               data:successData.data,
               refreshing: false
           })
                

                } else {
                    Alert.alert("Alert",successData.message)
                    this.setState({
                        refreshing: false
                    })
                }
            })
            .catch(err => console.log("Category err err", err));
    }

    // componentDidMount() {
    //     BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);

    // }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
    }


    handleBackButton = () => {
        const { from } = this.props.navigation.state.params
        console.log('this.props.isFocused ',from, from === 'appointment')
            if(from === 'appointment') {
                this.props.navigation.navigate('UserAppointment')
         }

        // if(this.props.navigation.isFocused()) {
        //     this.props.navigation.goBack()
        // }
        
    };



    searchFilterFunction = text => {    
        const {services} = this.state
        if (text !== "") {
            const newData = services.filter(item => {      
                const itemData = `${item.service_name.toUpperCase()}`;
                
                 const textData = text.toUpperCase();
                  
                 return itemData.indexOf(textData) > -1;    
              });
              
              this.setState({ data: newData });  
        }else {
            this.setState({data: services })
        }
        this.setState({text: text})
        
      };





    //   FILTER FUNCTION

    filterByParams = () => {
        const {date, day, serviceName, cost, beauticianName} = this.state
this.setState({ loader: true})
        const formData = new FormData()
        formData.append('date', date)
        formData.append('beautician_name', beauticianName)
        formData.append('cost', cost)
        formData.append('service_name', serviceName)
        console.log('formData', formData)
        fetch(`http://soplush.ingicweb.com/soplush/user/user.php?action=get_user_bookings&user_id=${this.props.screenProps.profileData.user_id}`, {
            method: 'POST',
            // dataType: "json",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'multipart/form-data'
            },
            body: formData
        }).then(res => res.json())
        .then(resp => {
          console.log('resp specific', resp.data, resp)
          
          if(resp.status){
            this.setState({
                data: resp.data,
                modalVisible: false,
                loader: false
              })
          }else{
              Alert.alert('Alert', resp.message)
            this.setState({ loader: false})

          }
          
        })
        .catch(err => {
            this.setState({ loader: false})
            console.log(err)
        })
    }




    static navigationOptions = () => ({
        headerMode: 'none',
        headerVisible: false,
        header: null,
        drawerLockMode: 'locked-closed'
    })

    
    render() {
        const { data , modalVisible} = this.state
        const { from } = this.props.navigation.state.params
        console.log('this.props.isFocused ',from, from === 'appointment')
        return (
            <View style={{flex:1, height:'100%', width:'100%', marginTop: -80}}>
                <ImageBackground source={require('../../../assets/inner.png')} style={{height:"100%", width:"100%"}}> 

                {/* FILTER OPTIONS */}
                
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                    this.setState({modalVisible:!modalVisible})
                    }}
                >
                    <View style={{
                flex: 1,
                backgroundColor: "#fff",
                height: '100%',
            }}>
          <View style={{ flex: 1, width: '100%', backgroundColor: "rgba(246, 232, 232, 0.7)"}}>

              <View style={{backgroundColor:'#fff', height:60, justifyContent:'center'}}>
                        <Text style={{textAlign:'center', fontSize: 20, fontFamily: "Poppins-Regular"}}>FILTER OPTIONS</Text>
              </View>

              <View style={{width:'100%', padding: 20}}>

                         <View style={{ borderWidth: 1, borderColor: 'pink', padding: 10, borderRadius: 10}}>
                            <DatePicker
                                ref={ref => this.datePicker = ref}
                                aultDate={"1/23/3"}
                                mode="date" //The enum of date, datetime and time
                                placeHolderTextStyle={{ color: "#000", fontSize: 15 }}
                                placeHolderText="Date"
                                format="DD-MM-YYYY"
                                minDate="01-01-2019"
                                maxDate="01-01-2050"
                                confirmBtnText="Confirm"
                                cancelBtnText="Cancel"
                                onDateChange={(date) => {
                                    var newdate = moment(date.toString().substr(4, 12)).format("YYYY-MM-DD")
                                    var day = moment(date.toString().substr(4, 12)).format("dddd")

                                    //  this.state.profileData.birthdate = newdate

                                    this.setState({ date: newdate, day: day })

                                }}
                                underlineColorAndroid="#f55f2a" />
                         </View>


                         <View style={{width: '100%', flexDirection:'row', justifyContent:'space-between', top: 10}}>
                            <View style={{ borderWidth: 1, borderColor: 'pink',  borderRadius: 10, padding: 5, width: '45%'}}>
                             
                             <Item style={{borderBottomWidth: 0,}}>  
                                  <Input defaultValue={this.state.newPass} style={{ width: '100%', fontSize: 15 }}  onChangeText={(e) => { this.setState({ serviceName: e }) }} placeholder="Service Name" placeholderTextColor="#000" />
                             </Item>
 
                             </View>

                             <View style={{ borderWidth: 1, borderColor: 'pink',  borderRadius: 10, padding: 5, width: '45%'}}>
                             
                             <Item style={{borderBottomWidth: 0,}}>  
                                  <Input defaultValue={this.state.newPass} style={{ width: '100%', fontSize: 15 }}  onChangeText={(e) => { this.setState({ cost: e }) }} placeholder="Cost" placeholderTextColor="#000" />
                             </Item>
 
                             </View>
                        </View>



                         <View style={{ borderWidth: 1, borderColor: 'pink',  borderRadius: 10, padding: 5, top: 20}}>
                             
                            <Item style={{borderBottomWidth: 0}}>  
                                 <Input defaultValue={this.state.newPass} style={{ width: '100%', fontSize: 15 }}  onChangeText={(e) => { this.setState({ beauticianName: e }) }} placeholder="Beautician Name" placeholderTextColor="#000" />
                            </Item>

                        </View>

                       {!this.state.loader ? <View style={{ alignContent: "center", alignItems: "center", marginTop: "15%", marginBottom:10 }}>
                                <LinearGradient start={{ x: 0.0, y: 0.25 }} end={{ x: 0.0, y: 1.0 }} colors={['#F9B1B0', '#FD8788', '#FF7173']} style={{ width: "100%", borderRadius: 10}}>
                                        <TouchableOpacity onPress={() => {this.filterByParams()}} style={{ justifyContent: "center", alignContent: "center", alignItems: "center", backgroundColor: "none", opacity: 0.7, borderRadius: 10 }} style={{ flexDirection: "column", justifyContent: "center", alignContent: "center", alignItems: "center", backgroundColor: "transparent", opacity: 0.7, borderRadius: 10 }}>
                                            <Text style={{ alignSelf: "center", textAlignVertical: "center", color: "#fff", fontFamily: "Poppins-Regular", fontSize: 17, paddingVertical: 15 , fontWeight:'bold'}}>
                                            FILTER
                                            </Text>
                                        </TouchableOpacity>
                                    </LinearGradient>
                                    </View> :
                                    
                                    <ActivityIndicator color='FF7173' size="large" />
                                    }


                        


              </View>

                                    
          
          </View>
        </View>
      </Modal>



                <Header
                        containerStyle={{marginTop:60, backgroundColor:"#fff"}}
                        placement="left"
                        leftComponent={<Icon onPress={() => {{
                            if(from === 'appointment') {
                                this.props.navigation.navigate('UserAppointment')
                         }else{
                            this.props.navigation.navigate('UserHome')
                        }

                         
                        }}} name="arrow-back" color="#000" />}
                        centerComponent={
                            <View style={{alignContent:"center", alignItems:"center", alignSelf:"center"}}>
                      {!this.state.focusOn  ? <Text style={{alignSelf:'center', fontSize: 20, fontFamily: "Poppins-Regular" }}>BOOKING HISTORY</Text> 
                      :
    
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
                            value={this.state.text}
                            placeholder="Search"
                            onChangeText={(text) =>  this.searchFilterFunction(text)}
                            onBlur = {() => {this.setState({focusOn: false})} }
                            autoFocus = {true}
                            ref={x => this.input = x}
                        />
                        <Icon style={{
                            color: 'gray',
                            justifyContent: 'flex-end'
                        }} type="EvilIcons" name="search" size={24} />
                    </View>
    
                    }
                        </View>
                    }
                    rightComponent={
                        <View style={{flexDirection:"row"}}>

                     
                        <TouchableOpacity onPress={() => {this.setState({modalVisible: true})}}>
                            <Image source={require('../../../assets/filter.png')} style={{ height: 20, width: 20 }} />
                        </TouchableOpacity>
                        </View>}


                    // rightComponent={<Icon name="filter" type = "material-community" containerStyle={{borderColor: "#000", }}  color="white" size={30}/>}
                        />



                <View style={{flex: 1 ,height:'100%', width:'100%',justifyContent:"center"}}>

                <ScrollView refreshControl={<RefreshControl refreshing={this.state.refreshing} onRefresh={this.onRefresh} />} style={{height: height}}>

                {/* <View style={{backgroundColor:"#fff", width:"80%",justifyContent:"center", alignContent:"center", alignSelf:"center",borderRadius:10, shadowOpacity: 1, elevation: 4, shadowRadius: 20, shadowOffset: { width: 0, height: 13 }, shadowColor: 'rgba(46, 229, 157, 0.4)', marginTop: '10%', marginBottom:'5%'}}> */}
                   
                   <View style={{flex:1 ,justifyContent:"center", alignContent:"center", alignItems:"center", marginTop:20, borderRadius:20}}>

                <View style={{flex: 1 , backgroundColor:"#fff",borderRadius:20, width:"90%"}}>

                {this.state.data.length > 0 ?       <View style={{ backgroundColor: "#fff", width: "100%", borderRadius:20}}> 
                    {this.state.data.map((value, index) => {
                        var index = index + 1
                        var dataLength = this.state.data.length
                        console.log("DAY NAME DAY NAME",index , dataLength)
                        var formatDate = `${moment(value.service_date).format('dddd')} - ${ moment(value.service_date).format('DD/MM/YYYY')}`

                        if(this.state.data.length === 1) {

                            return(
                                <View key={index} style={{backgroundColor:'#fff', padding: 10, borderTopLeftRadius: 20, borderTopRightRadius: 20, borderBottomLeftRadius: 20, borderBottomRightRadius: 20}}> 
        
                                   <View style={{display:"flex", flexDirection:"row", paddingVertical:"5%", justifyContent:'space-between'}}> 
                                            <Text style={{fontFamily:"Poppins-Regular", color:"#ff8385", fontSize:17}}>{formatDate}</Text>
                                        </View>
        
        
        
        
                                        <View style={{ display: "flex", flexDirection: "row" , justifyContent:'space-between'}}>
                                                            <Text style={{ width: "50%", fontFamily: "Poppins-Regular", color: '#bdbdbd' }}>Service Name</Text>
                                                            <Text style={{ marginLeft: "5%", fontFamily: "Poppins-Regular", fontSize:15  }}>{value.service_name}</Text>
                                            </View>
        
        
                                      
        
        
        {value.s_checked  == 1 ? 
                                         <View style={{display:"flex", flexDirection:"row"}}> 
                                            <Text style={{width:"50%", fontFamily:"Poppins-Regular", color:'#aaaaaa' }}>Cost</Text>
                                            <Text style={{width:"50%",  fontFamily:"Poppins-Regular", textAlign: 'right'}}>${value.soplush_cost}</Text>
                                        </View>  
                                        
                                    :
                                    <View style={{display:"flex", flexDirection:"row"}}> 
                                    <Text style={{width:"50%", fontFamily:"Poppins-Regular", color:'#aaaaaa' }}>Cost</Text>
                                    <Text style={{width:"50%",  fontFamily:"Poppins-Regular", textAlign: 'right'}}>${value.plush_cost}</Text>
                                    </View>  
                                    
                                    }
        
        
                                        <View style={{display:"flex", flexDirection:"row", justifyContent:'space-between'}}> 
                                        <Text style={{ width: "50%", fontFamily: "Poppins-Regular", color: '#bdbdbd' }}>Beauticainist Name</Text>
                                                            <Text style={{ marginLeft: "5%", fontFamily: "Poppins-Regular", fontSize:15  }}>{value.beautician}</Text>
                                        </View>
        
                                        <Divider style={{backgroundColor:'#bdbdbd', top: 10, width:'95%'}} />
        
                            </View>
        
                                )

                        }else {







                            if( index === 1){

                                return(
                                    <View key={index} style={{backgroundColor:'#fff', padding: 10, borderTopLeftRadius: 20, borderTopRightRadius: 20}}> 
            
                                       <View style={{display:"flex", flexDirection:"row", paddingVertical:"5%", justifyContent:'space-between'}}> 
                                                <Text style={{fontFamily:"Poppins-Regular", color:"#ff8385", fontSize:17}}>{formatDate}</Text>
                                            </View>
            
            
            
            
                                            <View style={{ display: "flex", flexDirection: "row" , justifyContent:'space-between'}}>
                                                                <Text style={{ width: "50%", fontFamily: "Poppins-Regular", color: '#bdbdbd' }}>Service Name</Text>
                                                                <Text style={{ marginLeft: "5%", fontFamily: "Poppins-Regular", fontSize:15  }}>{value.service_name}</Text>
                                                </View>
            
            
                                          
            
            
            {value.s_checked  == 1 ? 
                                             <View style={{display:"flex", flexDirection:"row"}}> 
                                                <Text style={{width:"50%", fontFamily:"Poppins-Regular", color:'#aaaaaa' }}>Cost</Text>
                                                <Text style={{width:"50%",  fontFamily:"Poppins-Regular", textAlign: 'right'}}>${value.soplush_cost}</Text>
                                            </View>  
                                            
                                        :
                                        <View style={{display:"flex", flexDirection:"row"}}> 
                                        <Text style={{width:"50%", fontFamily:"Poppins-Regular", color:'#aaaaaa' }}>Cost</Text>
                                        <Text style={{width:"50%",  fontFamily:"Poppins-Regular", textAlign: 'right'}}>${value.plush_cost}</Text>
                                        </View>  
                                        
                                        }
            
            
                                            <View style={{display:"flex", flexDirection:"row", justifyContent:'space-between'}}> 
                                            <Text style={{ width: "50%", fontFamily: "Poppins-Regular", color: '#bdbdbd' }}>Beauticainist Name</Text>
                                                                <Text style={{ marginLeft: "5%", fontFamily: "Poppins-Regular", fontSize:15  }}>{value.beautician}</Text>
                                            </View>
            
                                            <Divider style={{backgroundColor:'#bdbdbd', top: 10, width:'95%'}} />
            
                                </View>
            
                                    )
    
                            }else {
    
                                return(
                                    <View key={index} style={index === dataLength ? {backgroundColor:'#fff', padding: 10, borderBottomLeftRadius: 20, borderBottomRightRadius: 20} : {backgroundColor:'#fff', padding: 10}}> 
            
                                       <View style={{display:"flex", flexDirection:"row", paddingVertical:"5%", justifyContent:'space-between'}}> 
                                                <Text style={{fontFamily:"Poppins-Regular", color:"#ff8385", fontSize:17}}>{formatDate}</Text>
                                            </View>
            
            
            
            
                                            <View style={{ display: "flex", flexDirection: "row" , justifyContent:'space-between'}}>
                                                                <Text style={{ width: "50%", fontFamily: "Poppins-Regular", color: '#bdbdbd' }}>Service Name</Text>
                                                                <Text style={{ marginLeft: "5%", fontFamily: "Poppins-Regular", fontSize:15  }}>{value.service_name}</Text>
                                                </View>
            
            
                                          
            
            
            {value.s_checked  == 1 ? 
                                             <View style={{display:"flex", flexDirection:"row"}}> 
                                                <Text style={{width:"50%", fontFamily:"Poppins-Regular", color:'#aaaaaa' }}>Cost</Text>
                                                <Text style={{width:"50%",  fontFamily:"Poppins-Regular", textAlign: 'right'}}>${value.soplush_cost}</Text>
                                            </View>  
                                            
                                        :
                                        <View style={{display:"flex", flexDirection:"row"}}> 
                                        <Text style={{width:"50%", fontFamily:"Poppins-Regular", color:'#aaaaaa' }}>Cost</Text>
                                        <Text style={{width:"50%",  fontFamily:"Poppins-Regular", textAlign: 'right'}}>${value.plush_cost}</Text>
                                        </View>  
                                        
                                        }
            
            
                                            <View style={{display:"flex", flexDirection:"row", justifyContent:'space-between', paddingVertical: 5}}> 
                                            <Text style={{ width: "50%", fontFamily: "Poppins-Regular", color: '#bdbdbd' }}>Beauticainist Name</Text>
                                                                <Text style={{ marginLeft: "5%", fontFamily: "Poppins-Regular", fontSize:15  }}>{value.beautician}</Text>
                                            </View>
            
                                            <Divider style={{backgroundColor:'#bdbdbd', top: 10, width:'95%'}} />
            
                                </View>
            
                                    )
    
    
    
    
                            }

                        }
                    
                        

                        
                    })}




{/* 

{this.state.data.map((value, index) => {
                        var formatDate = `${moment(value.service_date).format('dddd')} - ${ moment(value.service_date).format('DD/MM/YYYY')}`
                        return(
                            <View key={index} style={{width:'100%', padding: 20, alignSelf:'center', borderBottomColor:"#bdbdbd", borderBottomWidth:0.2}}>
                                 <View style={{display:"flex", flexDirection:"row", paddingVertical: 10}}> 
                                    <Text style={{fontFamily:"Poppins-Regular", color:"#ff8385", fontSize:15}}>{formatDate}</Text>
                                </View>

                                <View style={{display:"flex", flexDirection:"row"}}> 
                                    <Text style={{width:"50%", fontFamily:"Poppins-Regular", color:'#aaaaaa' }}>Service Name</Text>
                                    <Text style={{width:"50%", fontFamily:"Poppins-Regular", textAlign: 'right'}}>{value.service_name}</Text>
                                </View>

                                {value.s_checked  == 1 ? 
                                 <View style={{display:"flex", flexDirection:"row"}}> 
                                    <Text style={{width:"50%", fontFamily:"Poppins-Regular", color:'#aaaaaa' }}>Cost</Text>
                                    <Text style={{width:"50%",  fontFamily:"Poppins-Regular", textAlign: 'right'}}>${value.service_cost}</Text>
                                </View>  
                                
                            :
                            <View style={{display:"flex", flexDirection:"row"}}> 
                            <Text style={{width:"50%", fontFamily:"Poppins-Regular", color:'#aaaaaa' }}>Cost</Text>
                            <Text style={{width:"50%",  fontFamily:"Poppins-Regular", textAlign: 'right'}}>${value.so_plush_cost}</Text>
                            </View>  
                            
                            }



                                 <View style={{display:"flex", flexDirection:"row"}}> 
                                    <Text style={{width:"50%", fontFamily:"Poppins-Regular", color:'#aaaaaa' }}>Beauticianist Name</Text>
                                    <Text style={{width:"50%", fontFamily:"Poppins-Regular", textAlign: 'right'}}>{this.state.beauticianName}</Text>
                                </View>

                                
                    </View>

                        )
                    })} */}

    </View>   :
            

            <View style={{alignContent:"center",alignItems:'center', alignSelf:'center', justifyContent:'center', height:100}}>
            <Text>
                    No Booking History
            </Text>
        </View>}
                         
              </View>
         </View>
                                        
                  {/* <View style={{alignContent:"center", alignItems:"center", marginTop:"5%"}}>
                    <Button onPress={() => {this.setState({renderEMail: false, renderCode: false, renderPassword:false}),
                this.props.navigation.navigate(from)}} style={{justifyContent:"center",alignContent:"center", alignItems:"center", backgroundColor:"#fc8b8c", width:"90%", borderRadius: 10, opacity:0.7}}> 
                     <Text style={{alignSelf:"center",color:"#fff", fontFamily:"Poppins-Regular", fontSize:20}}>
                       Submit
                    </Text>   
                     </Button>
                </View>  */}

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
