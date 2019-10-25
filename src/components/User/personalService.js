import React, { Component } from 'react'
import { Text, View, ImageBackground, Dimensions, Image, TouchableOpacity, ScrollView } from 'react-native'
// import {  } from 'react-native-gesture-handler';
import { Container, Content, List, ListItem, Left, Body, Right, Thumbnail, CheckBox,Button} from 'native-base';
import { Avatar, Header, Icon, Card } from 'react-native-elements'


const { width, height } = Dimensions.get("window")
var soplushData;
var plushData;


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
                {service_name:"Blow out", service_cost:60, checked: false},
                {service_name:"Blow out w/ style", service_cost:70,checked: false},
                {service_name:"Braidede Style", service_cost:75, checked: false},
                {service_name:"Updo", service_cost:80,checked: false},
                {service_name:"Makeup & lashes", service_cost:90, checked: false},
                {service_name:"Makeup ( No lashes )", service_cost:70,checked: false},
                {service_name:"Airbrush Makeup & lash", service_cost:120, checked: false},
                {service_name:"Airbrush Makeup ( No lashes )", service_cost:105,checked: false},
                {service_name:"Add clip ins", service_cost:30,checked: false},

             ],
             soplushData:  [
                {service_name:"Blow out", service_cost:60, checked: false},
                {service_name:"Blow out w/ style", service_cost:70,checked: false},
                {service_name:"Braidede Style", service_cost:75, checked: false},
                {service_name:"Updo", service_cost:80,checked: false},
                {service_name:"Makeup & lashes", service_cost:90, checked: false},
                {service_name:"Makeup ( No lashes )", service_cost:70,checked: false},
                {service_name:"Airbrush Makeup & lash", service_cost:120, checked: false},
                {service_name:"Airbrush Makeup ( No lashes )", service_cost:105,checked: false},
                {service_name:"Add clip ins", service_cost:30,checked: false},

             ],
             cart: [],
             amount:0,
             categoryId: this.props.navigation.getParam('category_id'),
             image: this.props.navigation.getParam('image'),
             selectDate: this.props.navigation.getParam('selectdate')
        }
        // this.workFunction = this.workFunction.bind(this)
    }


    componentWillUnmount() {
      console.log("WILLUNOUNT")
    }

    componentWillMount() {
            console.log(" this.props.navigation.getParam('category_id')",  this.props.navigation.getParam('category_id'))
    }



    static navigationOptions = () => ({
        headerMode: 'none',
        headerVisible: false,
        header: null,
    })


    // componentDidMount() {
    //     const {categoryId, image} = this.state
    //     console.log("user_id", categoryId)
    //         const formData = new FormData();
    //         formData.append("id",categoryId),
        

    //     // console.log("email, password, address, name, phoneNo, profilePic", email, password)


    //     fetch("http://192.168.1.103/SoPlush/service/service.php?action=select_service", {
    //         method: 'POST',
    //         // dataType: "json",
    //         headers: {
    //             'Accept' : 'application/json',
    //             'Content-Type': 'multipart/form-data'
    //         },
    //         body: formData
    //     }).then(res => res.json())
    //     .then(resp =>{
    //       console.log(JSON.stringify(resp))
    //       var successData =  resp
  
    //       if(successData.status === true){
    //           // console.log("successData.data[0].role_id === 3", successData.data[0].role_id === 3)
    //           if (successData.data.length >=1) {
    //             this.setState({
    //                 plushData: successData.data,
    //                 soplushData: successData.data
  
    //             })
    //           }
             
    //               console.log("SUCCESS PRO", successData)
    //             //   Alert.alert("Login successful")
    //         // this.props.navigation.navigate("Main")
       
    //       }else {
    //         Alert.alert(successData.message)
    //       }
    //     })
    //     .catch(err => console.log("err err err",err));
    // }


    workFunction(val, type, ind) {
        let { plush, cart, amount} =  this.state

        amount = 0

       
               
                if(val.p_checked != 0) {
                    // console.log("trueWala",type, val.checked, ind)
                    plushData[ind].p_checked = false
                    cart = []

                    plushData.map((val) => {
                      if(val.p_checked){
                        cart.push(val)
                      }
                    })

                    // soplushData.map((val) => {
                    //     if(val.s_checked){
                    //       cart.push(val)
                    //     }
                    //   })
  

                      amount = this.state.amount - val.amount
                    this.setState({cart, amount: amount})

                }else {
                    // console.log("FalseWala",type, val.checked, ind)
                    plushData[ind].p_checked = true
                    console.log("OOOOOOOOOO",val)
                    cart = []

                    plushData.map((val) => {
                      if(val.p_checked){
                        cart.push(val)
                      }
                    })

                    // soplushData.map((val) => {
                    //     if(val.s_checked){
                    //       cart.push(val)
                    //     }
                    //   })
  

                      amount = this.state.amount + val.amount
                    this.setState({cart, amount: amount})

                }
            
            
           

       

    }



    workFunction1(val, type, ind) {
        let { plush, cart, amount} =  this.state

        amount = 0

       


           
            // console.log(type)

            if(val.s_checked != 0) {
                console.log("trueWala",type, val.checked, ind)
                soplushData[ind].s_checked = false
                cart = []

                // plushData.map((val) => {
                //   if(val.p_checked){
                //     cart.push(val)
                //   }
                // })

                soplushData.map((val) => {
                    if(val.s_checked){
                      cart.push(val)
                    }
                  })


                  amount = this.state.amount - val.amount
                this.setState({cart, amount: amount})

            }else {
                console.log("FalseWala",type, val.checked, ind)
                soplushData[ind].s_checked = true
                console.log("!!!!!!!!!!!",val)
                cart = []

                // plushData.map((val) => {
                //   if(val.p_checked){
                //     cart.push(val)
                //   }
                // })

                soplushData.map((val) => {
                    if(val.s_checked){
                      cart.push(val)
                    }
                  })


                  amount = this.state.amount + val.amount
                this.setState({ cart, amount: amount})

            }

       

    }


    render() {
        // console.log("WORK",this.state.cart, this.state.selectDate)
        console.log("IN RENDER .navigation.getParam('category_id'),",this.state.cart)
        var img =  this.props.navigation.getParam('image')
        soplushData = this.props.navigation.getParam('service')
        plushData = this.props.navigation.getParam('service')
        // if(this.state.plushData.length < 1) {
        //         this.setState({
        //                 plushData: data,
        //                 soplushData: data
        //         })
        // }
        return (
            <View style={{ flex: 1, height, width, marginTop: -80 }}>
                <ImageBackground source={require('../../../assets/opacity.jpg')} style={{ height: "100%", width: "100%", opacity: 0.9 }}>

                    <Header
                        containerStyle={{ marginTop: 60, backgroundColor: "#fff" }}
                        placement="left"
                        leftComponent={<Icon onPress={() => { this.props.navigation.navigate('UserHome'), this.setState({categoryId:"", image:""}) }} name="arrow-back" color="#000" />}
                        centerComponent={<Text style={{ alignSelf: "center", fontSize: 30, fontFamily: "MrEavesXLModNarOT-Reg" }}>PERSONAL SERVICE</Text>}
                        rightComponent={<TouchableOpacity onPress={() => {this.props.navigation.navigate("Notification")}}>
                        <Image source={require('../../../assets/notification.png')} style={{height:20, width:20}} />
                    </TouchableOpacity>}

                    />



                    <View style={{ width, backgroundColor: "rgba(200, 165, 212, 0.7)" }}>

                        <ScrollView  contentContainerStyle={{ alignItems: "center", alignContent: "center", width: "100%" }}>


                            <View style={{ width: "90%", alignItems: "center" }}>


                                <Card key={1} containerStyle={{ width: "100%", padding: 0,  borderRadius: 10, overflow: "hidden", alignContent: "space-between" }}>

                                    <View style={{ width: "100%", marginLeft: 0, marginRight: 0 }}>
                                        <Image source={{uri:'https://cdn.vox-cdn.com/thumbor/XtwGXC-0GhXcDXiM0B0rjGAAxZE=/148x0:1768x1080/1200x800/filters:focal(148x0:1768x1080)/cdn.vox-cdn.com/uploads/chorus_image/image/45905674/3042430-poster-p-1-hello-barbie-talking-toy-toytalk.0.0.jpg'}} style={{ height: 200, width: "100%", }} />
                                    </View>


                                    {this.state.plush ?
                                        <View style={{ width: "90%", borderRadius: 20, flexDirection: "row", borderColor: "pink", borderWidth: 1, alignSelf: "center", overflow: "hidden", top: 20 }}>


                                            <View style={{ backgroundColor: "#fc8b8c", width: "50%", padding: 15, }}>
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

                                            <View style={{ backgroundColor: "#fc8b8c", width: "50%", padding: 15 }}>
                                                <TouchableOpacity onPress={() => {this.setState({plush: false})}}>
                                                    <Text style={{color:"#fff", alignSelf:"center"}}>
                                                        SoPlush
                        </Text>
                                                </TouchableOpacity>
                                            </View>
                                        </View>}




                                        {this.state.plush  ?  <View>
                                             {soplushData == undefined  &&
                                                <View>
                                            {this.state.plushData.map((value, index) => {
                                                if(value.p_checked === 0) {
                                                    var checked  = false
                                                }
                                                return(
                                                <List>
                                                <ListItem key={index}  avatar>
                                                    <Left style={{marginTop:"12%"}}>
                                                    <Text></Text>
                                                    <Text></Text>
                                                    <Text></Text>
                                                    <CheckBox style={{borderRadius: 5}} checked={value.p_checked} color="pink"/>
                                                    </Left>
                                                    <Body style={{paddingHorizontal:"4%"}}>
                                                    <Text></Text>
                                                    <Text note></Text>
                                                    <Text note>{value.service_name}</Text>
                                                    </Body>
                                                    <Right style={{display:"flex", flexDirection:"row", borderBottomColor: null}}>
                                                    <Text note style={{color:"pink"}}> ${value.service_cost}</Text>
                                                   
                                                    </Right>
                                                </ListItem>
                                                </List>)
                                            })}

                                            </View>

}

                                            </View>  :
                                           
                                           
                                           <View>
                                                {plushData == undefined &&
                                                <View>
                                           {this.state.soplushData.map((value, index) => {
                                               return(
                                               <List>
                                               <ListItem key={index}   avatar>
                                                   <Left style={{marginTop:"13%"}}>
                                                   <Text></Text>
                                                   <Text></Text>
                                                   <Text></Text>
                                                   <CheckBox style={{borderRadius: 5}} checked={value.s_checked} color="pink"/>
                                                   </Left>
                                                   <Body>
                                                   <Text></Text>
                                                   <Text note></Text>
                                                   <Text note>{value.service_name}</Text>
                                                   </Body>
                                                   <Right style={{display:"flex", flexDirection:"row", borderBottomColor: null}}>
                                                   <Text note style={{color:"pink"}}> ${value.so_plush_cost}</Text>
                                                  
                                                   </Right>
                                               </ListItem>
                                               </List>)
                                           })}
                                           </View>}

                                        </View> }

                                           {/* () => {this.props.navigation.navigate('SelectBeautician', {
                                                        cart: this.state.cart,
                                                        selectDate: this.state.selectDate
                                                    })} */}

                                       {(soplushData == undefined || plushData == undefined) ?           

                                           <View> 

                                                <View style={{alignContent:"center", alignItems:"center", marginTop:"5%"}}>
                                                    <Button onPress={() => this.props.navigation.navigate('SelectBeautician')} style={{justifyContent:"center",alignContent:"center", alignItems:"center", backgroundColor:"#fc8b8c", width:"90%", borderRadius: 10, opacity:0.7}}> 
                                                    <Text style={{alignSelf:"center",color:"#fff", fontFamily:"MrEavesXLModNarOT-Reg", fontSize:20}}>
                                                    Next
                                                    </Text>   
                                                    </Button>
                                                </View> 

                                                </View> :
                                        
                                    <View>
                                        <Text></Text>
                                    </View>

}


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
