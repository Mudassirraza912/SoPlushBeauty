import React, { Component } from 'react'
import { Text, View , StyleSheet} from 'react-native'
import AppIntroSlider from 'react-native-app-intro-slider';
import Navigator from '../../Navigation/navigator'
import Home from '../Home/home'
// import console = require('console');


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
      text: 'Best ecommerce in the world',
      image: require('../../../assets/slide1.png'),
      titleStyle: styles.title,
      textStyle: styles.text,
      imageStyle: styles.image,
      backgroundColor: '#fffff',
    },
    {
      key: 'k2',
      title: 'fast delivery',
      text: 'get your order insantly fast',
      image: require('../../../assets/slide1.png'),
      titleStyle: styles.title,
      textStyle: styles.text,
      imageStyle: styles.image,
      backgroundColor: '#fffff',
    },
    {
      key: 'k3',
      title: 'many store ',
      text: 'Multiple store location',
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
            role:""
        };
        this.usertype = this.usertype.bind(this)
    }

    usertype(e) {
      console.log(e)
      this.setState({
        role:e
      })

    }

    on_Done_all_slides = () => {
        this.setState({ show_Main_App: true });
      };
    on_Skip_slides = () => {
        this.setState({ show_Main_App: true });
      };


      
      render() {
        if (this.state.show_Main_App) {
          return (
            <View style={{flex: 1}}>
              <Home />
              </View>
                  
          );
       } else { 
           return ( 
             <AppIntroSlider activeDotStyle={{backgroundColor:"#000"}} buttonTextStyle={{selectionColor:"#0000", color:"#000"}} slides={slides} onDone={this.on_Done_all_slides} 
              showSkipButton={true} 
              onSkip={this.on_Skip_slides} /> 
            ); 
       } 
    }
}





