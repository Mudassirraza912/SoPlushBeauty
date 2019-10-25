import React, { Component } from 'react'
import { Text, View , StyleSheet, Image} from 'react-native'
import AppIntroSlider from 'react-native-app-intro-slider';
// import Navigator from '../../Navigation/navigator'
// import Home from '../Home/home'
// import console = require('console');
import Navigator from '../../Navigation/navigator'

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
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry ',
      text1:"Online",
      text2:"Beauty",
      image: require('../../../assets/slide1.png'),
      titleStyle: styles.title,
      textStyle: styles.text,
      imageStyle: styles.image,
      backgroundColor: '#fffff',
    },
    {
      key: 'k2',
      title: 'fast delivery',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry ',
      text1:"Online",
      text2:"Beauty",
      image: require('../../../assets/slide1.png'),
      titleStyle: styles.title,
      textStyle: styles.text,
      imageStyle: styles.image,
      backgroundColor: '#fffff',
    },
    {
      key: 'k3',
      title: 'many store ',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry ',
      text1:"Online",
      text2:"Beauty",
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
            role:"",
            profileData: ''
        };
        this.usertype = this.usertype.bind(this)
    }

    usertype(e) {
      console.log(e)
      this.setState({
        role:e
      })

    }

    fetchProfileData = (data) =>{
      this.setState({
          profileData: data
      })
  }

    on_Done_all_slides = () => {
        this.setState({ show_Main_App: true });
      };
    on_Skip_slides = () => {
        this.setState({ show_Main_App: true });
      };


      _renderItem = ({ item, dimensions }) => (
        <View style={{justifyContent:"center", alignContent:"center", flex:1, alignItems:"center"}}>
          
          <Image style={{height:300, width:300}} source={item.image} />
          <View>
            <Text style={{fontSize:30}}>{item.text1}  <Text style={{fontWeight:"bold"}}>{item.text2}</Text></Text>
          </View>
          <View style={{width:"80%", marginTop:"10%"}}>
            <Text style={{fontSize:15}} >{item.text}</Text>
          </View>
        </View>
      );

      
      render() {
        if (this.state.show_Main_App) {
          return (
            <View style={{flex: 1}}>
              <Navigator screenProps={{fetchProfileData:this.fetchProfileData, profileData: this.state.profileData}} />
              </View>
                  
          );
       } else { 
           return ( 
             <AppIntroSlider activeDotStyle={{backgroundColor:"#000"}} buttonTextStyle={{selectionColor:"#0000", color:"#000"}} slides={slides} renderItem={this._renderItem} onDone={this.on_Done_all_slides} 
              showSkipButton={true} 
              onSkip={this.on_Skip_slides} /> 
            ); 
       } 
    }
}





