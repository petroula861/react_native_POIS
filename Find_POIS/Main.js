import React,{navigation,Component }from 'react';
import { StyleSheet,View,ActivityIndicator , Alert } from 'react-native';
import {vw, vh,} from 'react-native-viewport-units'
import 'react-native-gesture-handler';
import ListScreen from './ListScreen'
import MapScreen from './MapScreen'
import { findlocation} from "./actions/location";
import { connect} from "react-redux"; 

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();




class Main extends React.Component {



  state={location:{flag:"false", coords:{}},isLoading:false}


  componentWillMount() {
    this.getGeoLocation()
  }

//   findlocation = () => {

//     navigator.geolocation.getCurrentPosition(
//       position => {
//         const location = JSON.stringify(position);
//        this.setState({location:{flag:"true",coords:position.coords}});

// },
//      error => console.log('error in geolocation')
//     )

// };

getGeoLocation=()=>{


  Alert.alert(
    'Location Permission',
    'Allow "MyApp" to access to your location ?',
    [
    
      {
        text: 'No',
        onPress: () => Alert.alert('Warning','Without location permission some services may not work correctly'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => {this.props.findlocation()
        this.setState({isLoading:true})}
    },
    ],
    {cancelable: false},
  );

}



    
render(){
  return (
      
      <Tab.Navigator  tabBarOptions={{activeTintColor: '#F2FCF5',activeBackgroundColor:'#71947D', labelStyle: {fontSize: 20}
        // inactiveTintColor: '#F2FCF5',
      }}>
        <Tab.Screen name="List" component={ListScreen}   />
        <Tab.Screen name="Map" component={MapScreen}  />
      </Tab.Navigator>

      
      )
}}

function mapStateToProps(state) { //connects a part of the Redux state to the props of a React component. 
  return {result2:state.locationReducer};
}

// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       alignItems:'center',
//       justifyContent: 'center',
//       height:100*vh,
//     }
  
  
//   });

  export default connect(mapStateToProps,{findlocation})(Main);