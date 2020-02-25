
import React,{navigation,Component }from 'react';
import { StyleSheet, Text, View, Alert,Button,TouchableOpacity } from 'react-native';
import {LinearGradient} from 'react-native-svg';
import {vw, vh,} from 'react-native-viewport-units'
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Main from './Main'


export default class Home extends React.Component {



render(){
  return (
    <View  style={styles.container}>
    <View style={styles.secondpart}>
      <Text style={{color:'#F2FCF5', fontSize:20}}>Welcome to</Text>
      <Text style={{color:'#F2FCF5', fontSize:70}}>MyApp</Text>
    </View> 
    <TouchableOpacity onPress={()=>this.props.navigation.navigate('Main',{})} style={styles.button}>
      <Text style={{color:'#F2FCF5', fontSize:20}}>Go!</Text>
    </TouchableOpacity>
    
  </View>
  )}

}

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems:'center',
      justifyContent: 'center',
      backgroundColor: '#71947D',
      height:100*vh,
      //  position: 'relative'
    },
    secondpart: {
      alignItems:'center'
    },
    button:{
      paddingTop:15,
      width:50*vw,
      height:60,
      marginTop:10*vh,
      borderRadius:80,
      alignItems:'center',
      backgroundColor:'#567661', 
      borderRadius:10,
      borderWidth: 1,
      borderColor: '#194428',//'tranparent'
      
    }
  
  
  });


  