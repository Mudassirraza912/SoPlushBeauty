import React, { Component } from 'react'
import { Text, View, ImageBackground, Dimensions, Image, TouchableOpacity, ScrollView } from 'react-native'
// import {  } from 'react-native-gesture-handler';
import { Container, Content, List, ListItem, Left, Body, Right, Thumbnail, CheckBox,Button} from 'native-base';
import { Avatar, Header, Icon, Card } from 'react-native-elements'


const { width, height } = Dimensions.get("window")

export default class PersonalService extends Component {
    constructor(props) {
        super(props);
        this.state = {
            services: [
                {
                    dateTime: "Modnay - 14/08/2019",
                    name: "So plush",
                    service: "Hair Cutting",
                    time: "02:00",
                    date: "14-08-1900",
                    cost: "$70"
                },
            ],
            plush: true,
            plushData: [
                {name:"Blow out", amount:60, checked: false},
                {name:"Blow out w/ style", amount:70,checked: false},
                {name:"Braidede Style", amount:75, checked: false},
                {name:"Updo", amount:80,checked: false},
                {name:"Makeup & lashes", amount:90, checked: false},
                {name:"Makeup ( No lashes )", amount:70,checked: false},
                {name:"Airbrush Makeup & lash", amount:120, checked: false},
                {name:"Airbrush Makeup ( No lashes )", amount:105,checked: false},
                {name:"Add clip ins", amount:30,checked: false},

             ],
            
             soplushData:  [
                {name:"Blow out", amount:125, checked: false},
                {name:"Blow out w/ style", amount:150,checked: false},
                {name:"Braidede Style", amount:150, checked: false},
                {name:"Updo", amount:170,checked: false},
                {name:"Makeup & lashes", amount:200, checked: false},
                {name:"Makeup ( No lashes )", amount:160,checked: false},
                {name:"Airbrush Makeup & lash", amount:250, checked: false},
                {name:"Airbrush Makeup ( No lashes )", amount:225,checked: false},
                {name:"Add clip ins", amount:60,checked: false},

             ],
             cart: [],
             amount:0,
             selectDate: this.props.navigation.getParam('selectdate')
        }
        // this.workFunction = this.workFunction.bind(this)
    }



    static navigationOptions = () => ({
        headerMode: 'none',
        headerVisible: false,
        header: null,
    })


    workFunction(val, type, ind) {
        let {plushData, soplushData, plush, cart, amount} =  this.state

        amount = 0

        switch(type) {
            case "plush":
               
                if(val.checked) {
                    // console.log("trueWala",type, val.checked, ind)
                    plushData[ind].checked = false
                    cart = []

                    plushData.map((val) => {
                      if(val.checked){
                        cart.push(val)
                      }
                    })

                    soplushData.map((val) => {
                        if(val.checked){
                          cart.push(val)
                        }
                      })
  

                      amount = this.state.amount - val.amount
                    this.setState({plushData, cart, amount: amount})

                }else {
                    // console.log("FalseWala",type, val.checked, ind)
                    plushData[ind].checked = true
                    cart = []

                    plushData.map((val) => {
                      if(val.checked){
                        cart.push(val)
                      }
                    })

                    soplushData.map((val) => {
                        if(val.checked){
                          cart.push(val)
                        }
                      })
  

                      amount = this.state.amount + val.amount
                    this.setState({plushData, cart, amount: amount})

                }
            
            
            break;



            case "soplush": 
            // console.log(type)

            if(val.checked) {
                console.log("trueWala",type, val.checked, ind)
                soplushData[ind].checked = false
                cart = []

                plushData.map((val) => {
                  if(val.checked){
                    cart.push(val)
                  }
                })

                soplushData.map((val) => {
                    if(val.checked){
                      cart.push(val)
                    }
                  })


                  amount = this.state.amount - val.amount
                this.setState({soplushData, cart, amount: amount})

            }else {
                console.log("FalseWala",type, val.checked, ind)
                soplushData[ind].checked = true
                cart = []

                plushData.map((val) => {
                  if(val.checked){
                    cart.push(val)
                  }
                })

                soplushData.map((val) => {
                    if(val.checked){
                      cart.push(val)
                    }
                  })


                  amount = this.state.amount + val.amount
                this.setState({soplushData, cart, amount: amount})

            }

            break;
        }

    }


    render() {
        // console.log("WORK",this.state.cart, this.state.selectDate)
        return (
            <View style={{ flex: 1, height, width, marginTop: -80 }}>
                <ImageBackground source={require('../../../assets/opacity.jpg')} style={{ height: "100%", width: "100%", opacity: 0.9 }}>

                    <Header
                        containerStyle={{ marginTop: 60, backgroundColor: "#fff" }}
                        placement="left"
                        leftComponent={<Icon onPress={() => { this.props.navigation.navigate('UserHome') }} name="arrow-back" color="#000" />}
                        centerComponent={<Text style={{ alignSelf: "center", fontSize: 30, fontFamily: "MrEavesXLModNarOT-Reg" }}>Personal Services</Text>}
                        rightComponent={<TouchableOpacity onPress={() => {this.props.navigation.navigate("Notification")}}>
                        <Image source={require('../../../assets/notification.png')} style={{height:30, width:30}} />
                    </TouchableOpacity>}

                    />



                    <View style={{ width, backgroundColor: "rgba(190, 144, 212, 0.7)" }}>

                        <ScrollView  contentContainerStyle={{ alignItems: "center", alignContent: "center", width: "100%" }}>


                            <View style={{ width: "80%", alignItems: "center" }}>


                                <Card key={1} containerStyle={{ width: "100%", padding: 0,  borderRadius: 10, overflow: "hidden", alignContent: "space-between" }}>

                                    <View style={{ width: "100%", marginLeft: 0, marginRight: 0 }}>
                                        <Image source={require('../../../assets/Cover4.png')} style={{ height: 280, width: "100%", }} />
                                    </View>


                                    {this.state.plush ?
                                        <View style={{ width: "90%", borderRadius: 20, flexDirection: "row", borderColor: "pink", borderWidth: 1, alignSelf: "center", overflow: "hidden", top: 20 }}>


                                            <View style={{ backgroundColor: "#f14538", width: "50%", padding: 15, }}>
                                                <TouchableOpacity onPress={() => {this.setState({plush: true})}}>
                                                    <Text style={{color:"#fff", alignSelf:"center"}}>
                                                        Plush
                                                            </Text>
                                                </TouchableOpacity>
                                            </View>

                                            <View style={{ backgroundColor: "#fff", width: "50%", padding: 15 }}>
                                                <TouchableOpacity onPress={() => {this.setState({plush: false})}}>
                                                    <Text style={{color:"pink", alignSelf:"center"}}>
                                                        SoPlush
                                                            </Text>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                        :
                                        <View style={{ width: "90%", borderRadius: 20, flexDirection: "row", borderColor: "pink", borderWidth: 1, alignSelf: "center", overflow: "hidden", top: 20 }}>


                                            <View style={{ backgroundColor: "#fff", width: "50%", padding: 15, }}>
                                                <TouchableOpacity onPress={() => {this.setState({plush: true})}}> 
                                                    <Text style={{color:"pink", alignSelf:"center"}}>
                                                        Plush
                        </Text>
                                                </TouchableOpacity>
                                            </View>

                                            <View style={{ backgroundColor: "#f14538", width: "50%", padding: 15 }}>
                                                <TouchableOpacity onPress={() => {this.setState({plush: false})}}>
                                                    <Text style={{color:"#fff", alignSelf:"center"}}>
                                                        SoPlush
                        </Text>
                                                </TouchableOpacity>
                                            </View>
                                        </View>}




                                        {this.state.plush  ?  <View>
                                            {this.state.plushData.map((value, index) => {
                                                return(
                                                <List>
                                                <ListItem key={index} onPress={this.workFunction.bind(this, value, "plush", index)} avatar>
                                                    <Left style={{marginTop:"13%"}}>
                                                    <Text></Text>
                                                    <Text></Text>
                                                    <Text></Text>
                                                    <CheckBox style={{borderRadius: 5}} checked={value.checked} color="pink"/>
                                                    </Left>
                                                    <Body>
                                                    <Text></Text>
                                                    <Text note></Text>
                                                    <Text note>{value.name}</Text>
                                                    </Body>
                                                    <Right style={{display:"flex", flexDirection:"row", borderBottomColor: null}}>
                                                    <Text note style={{color:"pink"}}> ${value.amount}</Text>
                                                   
                                                    </Right>
                                                </ListItem>
                                                </List>)
                                            })}
                                            </View>  :
                                           
                                           
                                           <View>
                                           {this.state.soplushData.map((value, index) => {
                                               return(
                                               <List>
                                               <ListItem key={index} onPress={this.workFunction.bind(this, value, "soplush", index)}  avatar>
                                                   <Left style={{marginTop:"13%"}}>
                                                   <Text></Text>
                                                   <Text></Text>
                                                   <Text></Text>
                                                   <CheckBox style={{borderRadius: 5}} checked={value.checked} color="pink"/>
                                                   </Left>
                                                   <Body>
                                                   <Text></Text>
                                                   <Text note></Text>
                                                   <Text note>{value.name}</Text>
                                                   </Body>
                                                   <Right style={{display:"flex", flexDirection:"row", borderBottomColor: null}}>
                                                   <Text note style={{color:"pink"}}> ${value.amount}</Text>
                                                  
                                                   </Right>
                                               </ListItem>
                                               </List>)
                                           })}
                                           </View>}


                                           <View> 

                                                <View style={{alignContent:"center", alignItems:"center", marginTop:"5%"}}>
                                                    <Button onPress={() => {this.props.navigation.navigate('SelectBeautician', {
                                                        cart: this.state.cart,
                                                        selectDate: this.state.selectDate
                                                    })}} style={{justifyContent:"center",alignContent:"center", alignItems:"center", backgroundColor:"#f14538", width:"90%", borderRadius: 10, opacity:0.7}}> 
                                                    <Text style={{alignSelf:"center",color:"#fff", fontFamily:"MrEavesXLModNarOT-Reg", fontSize:20}}>
                                                    Next
                                                    </Text>   
                                                    </Button>
                                                </View> 

                                                </View>

                                        
                                    <View>
                                        <Text></Text>
                                    </View>

                                </Card>

                            
                            <View>
                                <Text></Text>
                                <Text></Text>
                                <Text></Text>
                                <Text></Text>
                                <Text></Text>
                                <Text></Text>
                                <Text></Text>
                                <Text></Text>
                            </View>




                            </View>

                        </ScrollView>


                    </View>
                </ImageBackground>
            </View>
        )
    }
}
