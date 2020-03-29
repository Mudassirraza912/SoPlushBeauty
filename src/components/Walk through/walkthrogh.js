import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, BackHandler, Alert, AsyncStorage,TouchableOpacity, ActivityIndicator} from 'react-native'
import AppIntroSlider from 'react-native-app-intro-slider';
// import Navigator from '../../Navigation/navigator'
// import Home from '../Home/home'
// import console = require('console');
// import Navigator from '../../Navigation/navigator'
import { withNavigationFocus } from 'react-navigation';
// import { TouchableOpacity } from 'react-native-gesture-handler';
import { Icon } from 'native-base';

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    paddingTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  title: {
    fontSize: 26,
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
  text: {
    color: '#000',
    fontSize: 20,
  },
  image: {
    width: 500,
    height: 500,
    resizeMode: 'contain'
  }
});





const slides = [
  {
    key: 'k1',
    title: 'Ecommerce Leader',
    text: 'Lorem Ipsum dolor sit amet adipiscing elit.',
    text1: "Online",
    text2: "Beauty",
    image: require('../../../assets/slide1.png'),
    titleStyle: styles.title,
    textStyle: styles.text,
    imageStyle: styles.image,
    backgroundColor: '#fffff',
  },
  {
    key: 'k2',
    title: 'fast delivery',
    text: 'Lorem Ipsum dolor sit amet adipiscing elit.',
    text1: "Online",
    text2: "Beauty",
    image: require('../../../assets/slide1.png'),
    titleStyle: styles.title,
    textStyle: styles.text,
    imageStyle: styles.image,
    backgroundColor: '#fffff',
  },
  {
    key: 'k3',
    title: 'many store ',
    text: 'Lorem Ipsum dolor sit amet adipiscing elit.',
    text1: "Online",
    text2: "Beauty",
    image: require('../../../assets/slide1.png'),
    titleStyle: styles.title,
    textStyle: styles.text,
    imageStyle: styles.image,
    backgroundColor: '#fffff',
  },
];

export default class Walkthrogh extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show_Main_App: false,
      role: "",
      profileData: '',
      already: false
    };
    this.usertype = this.usertype.bind(this)
  }


  componentDidMount = async () => {
    const already = await AsyncStorage.getItem("alreadyOpen")
    this.setState({already: already})

    try {
        const value = await AsyncStorage.getItem('User');
        console.log('value value value', value)
        if (value !== null) {
          // We have data!!
        var convertVal = JSON.parse(value)
        this.props.screenProps.fetchProfileData(convertVal)
        if (convertVal.role_id === '4') {
            this.props.navigation.navigate("UserNavigator")
        }else {
            this.props.navigation.navigate("ProNavigator")
        }
        console.log('enableButton getting data After JSON in SITEINFO =>',convertVal)
       
        }else {

            const alreadyOpen = await AsyncStorage.getItem("alreadyOpen")
            console.log("alreadyOpen", alreadyOpen)
            setTimeout(() => {
              alreadyOpen !== null ? this.props.navigation.navigate("Authentication") : this.props.navigation.navigate("WalkThrough")
            }, 3000);
            
        }
      } catch (error) {
            console.log('Errr getting data =>', error)

      }
}

  usertype(e) {
    console.log(e)
    this.setState({
      role: e
    })

  }

  fetchProfileData = (data) => {
    this.setState({
      profileData: data
    })
  }

  

  on_Done_all_slides = () => {
    this.setState({ show_Main_App: true });
    this.props.navigation.navigate("Home")
    AsyncStorage.setItem("alreadyOpen", "true")
    .then((succ) => console.log(succ))
    .catch(err => console.log(err))
  };
  on_Skip_slides = () => {
    this.setState({ show_Main_App: true });
    this.props.navigation.navigate("Home")
    AsyncStorage.setItem("alreadyOpen", "true")
    .then((succ) => console.log(succ))
    .catch(err => console.log(err))
  };


  _renderItem = ({ item, dimensions }) => (
    <View style={{ justifyContent: "center", alignContent: "center", flex: 1, alignItems: "center" }}>
      
      <View style={{ position: 'absolute', top: 20, right: 15 }} >
        <TouchableOpacity style={{ flexDirection: 'row' }} onPress={this.on_Skip_slides}>
          <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 17, textAlign: 'center' }}>SKIP</Text>
          <Icon name="chevron-right" type="MaterialCommunityIcons" fontSize={20} style={{marginTop: -2}} />
        </TouchableOpacity>
      </View>

      <Image style={{ height: "40%", width: '80%' }} source={item.image} />
      <View style={{ marginTop: "10%" }}>
        <Text style={{ fontSize: 30 }}>{item.text1} <Text style={{ fontWeight: "bold" }}>{item.text2}</Text></Text>
      </View>
      <View style={{ width: "70%", marginTop: "5%", alignItems: 'center', justifyContent: 'center', alignContent: 'center' }}>
        <Text style={{ fontSize: 17, textAlign: 'center' }} >{item.text}</Text>
      </View>
    </View>
  );




  render() {
   const {already} = this.state

    console.log(this.props)
    if(already !== null) {
       return(
        <View style={{flex: 1, justifyContent:'center', alignContent:'center'}}>
        <ActivityIndicator  color='#fc8b8c' size="large"/>
      </View>
       )
    }else {
      return (
        <AppIntroSlider
          activeDotStyle={{ backgroundColor: "#000" }}
          buttonTextStyle={{ selectionColor: "#0000", color: "#000" }}
          slides={slides} renderItem={this._renderItem}
          // onDone={this.on_Done_all_slides}
          renderDoneButton={false}
          showDoneButton={false}
          // showSkipButton={true}
          showNextButton={false}
          onSkip={this.on_Skip_slides}
        />
      );
    }
     
    
  }
}