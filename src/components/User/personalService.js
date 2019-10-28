import React, { Component } from 'react'
import { Text, View, ImageBackground, Dimensions, Image, TouchableOpacity, ScrollView,Alert, TextInput} from 'react-native'
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
            // plushData: [
            //     {service_name:"Blow out", service_cost:60, checked: false},
            //     {service_name:"Blow out w/ style", service_cost:70,checked: false},
            //     {service_name:"Braidede Style", service_cost:75, checked: false},
            //     {service_name:"Updo", service_cost:80,checked: false},
            //     {service_name:"Makeup & lashes", service_cost:90, checked: false},
            //     {service_name:"Makeup ( No lashes )", service_cost:70,checked: false},
            //     {service_name:"Airbrush Makeup & lash", service_cost:120, checked: false},
            //     {service_name:"Airbrush Makeup ( No lashes )", service_cost:105,checked: false},
            //     {service_name:"Add clip ins", service_cost:30,checked: false},

            //  ],
            //  soplushData:  [
            //     {service_name:"Blow out", service_cost:60, checked: false},
            //     {service_name:"Blow out w/ style", service_cost:70,checked: false},
            //     {service_name:"Braidede Style", service_cost:75, checked: false},
            //     {service_name:"Updo", service_cost:80,checked: false},
            //     {service_name:"Makeup & lashes", service_cost:90, checked: false},
            //     {service_name:"Makeup ( No lashes )", service_cost:70,checked: false},
            //     {service_name:"Airbrush Makeup & lash", service_cost:120, checked: false},
            //     {service_name:"Airbrush Makeup ( No lashes )", service_cost:105,checked: false},
            //     {service_name:"Add clip ins", service_cost:30,checked: false},

            //  ],
             cart: [],
             amount:0,
             categoryId: this.props.navigation.getParam('category_id'),
             image: this.props.navigation.getParam('image'),
             selectDate: this.props.navigation.getParam('selectdate')
        }
        // this.workFunction = this.workFunction.bind(this)
    }


    // componentWillUnmount() {
    // //   console.log("WILLUNOUNT")
    // }

    // componentWillMount() {
    //         // console.log(" this.props.navigation.getParam('category_id')",  this.props.navigation.getParam('category_id'))
    // }



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


    //     fetch("http://192.168.1.112/SoPlush/service/service.php?action=select_service", {
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
                    // console.log("trueWala",type, val.p_checked, ind)
                    plushData[ind].p_checked = false
                    cart = []

                    plushData.map((val) => {
                      if(val.p_checked == 1 || val.p_checked == true ){
                          console.log("trueWala LOOP")
                        cart.push(val)
                      }
                    })

                    soplushData.map((val) => {
                        if(val.s_checked == 1 || val.s_checked == true ){
                        console.log("LOOP",val.p_checked)
                        cart.push(val)
                      }
                    })
  

                      amount = this.state.amount - val.amount
                    this.setState({cart, amount: amount})

                }else {
                    // console.log("FalseWala",type, val.checked, ind)
                    plushData[ind].p_checked = true
                    // console.log("OOOOOOOOOO",val)
                    cart = []

                    plushData.map((val) => {
                        if(val.p_checked == 1 || val.p_checked == true ){
                        console.log("LOOP",val.p_checked)
                        cart.push(val)
                      }
                    })

                    soplushData.map((val) => {
                        if(val.s_checked == 1 || val.s_checked == true ){
                        console.log("LOOP",val.p_checked)
                        cart.push(val)
                      }
                    })
  

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

                plushData.map((val) => {
                    if(val.p_checked == 1 || val.p_checked == true ){
                    console.log("LOOP",val.p_checked)
                    cart.push(val)
                  }
                })
                soplushData.map((val) => {
                    if(val.s_checked == 1 || val.s_checked == true ){
                      cart.push(val)
                    }
                  })


                  amount = this.state.amount - val.amount
                this.setState({cart, amount: amount})

            }else {
                console.log("FalseWala",type, val.checked, ind)
                soplushData[ind].s_checked = true
                // console.log("!!!!!!!!!!!",val)
                cart = []

                plushData.map((val) => {
                    if(val.p_checked == 1 || val.p_checked == true ){
                    console.log("LOOP",val.p_checked)
                    cart.push(val)
                  }
                })

                soplushData.map((val) => {
                    if(val.s_checked == 1 || val.s_checked == true ){
                      cart.push(val)
                    }
                  })


                  amount = this.state.amount + val.amount
                this.setState({ cart, amount: amount})

            }

       

    }



    FilterBeautician = () => {

            const {cart} = this.state
            // console.log('FilterBeautician FilterBeautician FilterBeautician', cart)

        // this.props.navigation.navigate('SelectBeautician', {
        //     cart: this.state.cart,
        //     selectDate: this.state.selectDate
        // })


        const formData = new FormData()
            // formData.append("search", ["blow out"])

        // console.log("cart", cart)
        var filterName = []
         cart.map((val) =>  {
            filterName.push(val.service_name)
        })

        console.log("filterName",filterName)

         var params = JSON.stringify(filterName);
         console.log("json convert:"+params);

      formData.append("search",params);

        fetch("http://192.168.1.112/SoPlush/customer/search_beautcian.php?action=search_beautician", {
            method: 'POST',
            // dataType: "json",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'multipart/form-data'
                // 'Content-Type': 'application/json'

            },
            body: formData
        }).then(res => res.json())
        .then(resp =>{
        //   console.log(JSON.stringify(resp))
          var successData =  resp

          if(successData.status === true){
              // console.log("successData.data[0].role_id === 3", successData.data[0].role_id === 3)
              console.log(" successData.data SEARCH BEAUTICIAN", successData.data)
             
                 
                //   Alert.alert("Login successful")
            this.props.navigation.navigate("SelectBeautician", {
                users: successData.data,
                cart: this.state.cart
            })

          }else {
            console.log("Else", successData)
            Alert.alert(successData.message)
          }
        })
        .catch(err => console.log("err err SEARCH",err));

    }


    render() {
        // console.log("WORK",this.state.cart, this.state.selectDate)
        var img =  this.props.navigation.getParam('image')
        soplushData = this.props.navigation.getParam('service')
        plushData = this.props.navigation.getParam('service')
        console.log("CART",this.state.cart, this.state.amount)

        // if(this.state.plushData.length < 1) {
        //         this.setState({
        //                 plushData: data,
        //                 soplushData: data
        //         })
        // }
        return (
            <View style={{ flex: 1, height: "100%", width: "100%", marginTop: -80 }}>
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
                                        {/* <Image source={{uri:'https://cdn.vox-cdn.com/thumbor/XtwGXC-0GhXcDXiM0B0rjGAAxZE=/148x0:1768x1080/1200x800/filters:focal(148x0:1768x1080)/cdn.vox-cdn.com/uploads/chorus_image/image/45905674/3042430-poster-p-1-hello-barbie-talking-toy-toytalk.0.0.jpg'}} style={{ height: 200, width: "100%", }} /> */}

                                        <Image source={{uri:img}} style={{ height: 200, width: "100%", }} />
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
                            placeholder="Search"
                            onChangeText={this.updateSearch}
                        />
                        <Icon style={{
                            color: 'gray',
                            justifyContent: 'flex-end'
                        }} type="EvilIcons" name="search" size={24} />
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
                                             {soplushData !== undefined  ?
                                                <View>
                                            {plushData.map((value, index) => {
                                                if(value.p_checked === 0) {
                                                    var checked  = false
                                                }
                                                return(
                                                <List>
                                                <ListItem key={index} onPress={() => this.workFunction(value,"plush", index)}  avatar>
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

                                            </View> :

                                            <View style={{flex: 1, height:300}}>

                                            </View>

}

                                            </View>  :
                                           
                                           
                                           <View>
                                                {plushData !== undefined ?
                                                <View>
                                           {soplushData.map((value, index) => {
                                               return(
                                               <List>
                                               <ListItem key={index} onPress={() => this.workFunction1(value,"soplush", index)}   avatar>
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
                                           </View> : 
                                        
                                        
                                        <View style={{flex: 1, height:300}}>

                                            </View>
}

                                        </View> }

                                           {/* () => {this.props.navigation.navigate('SelectBeautician', {
                                                        cart: this.state.cart,
                                                        selectDate: this.state.selectDate
                                                    })} */}

                                       {(soplushData !== undefined || plushData !== undefined) ?           

                                           <View> 

                                                <View style={{alignContent:"center", alignItems:"center", marginTop:"5%"}}>
                                                    <Button onPress={() => this.FilterBeautician()} style={{justifyContent:"center",alignContent:"center", alignItems:"center", backgroundColor:"#fc8b8c", width:"90%", borderRadius: 10, opacity:0.7}}> 
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
