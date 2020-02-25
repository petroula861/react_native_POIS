import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { connect} from "react-redux"; 
import { getData } from "./actions/index";
import {vw, vh,} from 'react-native-viewport-units'
import { ListItem } from 'react-native-elements'
import MapView from 'react-native-map-clustering';
import { Marker } from 'react-native-maps';



export class MapScreen extends React.Component {
    constructor(props) {
      super(props);
    }


    state={region:{ latitude: 37.97,longitude: 23.7,  latitudeDelta: 8, longitudeDelta: 8 }}


  
    render() {
      
      return (
        <View style={styles.container}>
        <MapView  
          region={this.state.region}  
            style={{ width:100*vw,height:100*vh }}  
          >  
          { this.props.result.data.map(el => (
         <Marker key={el.id} coordinate={{ latitude:Number(el.latitude), longitude: Number(el.longitude)}} />  
 ))}
      </MapView>
        </View>
      );
    }
  }
  
  function mapStateToProps(state) { //connects a part of the Redux state to the props of a React component. 
    return {result: state.dataReducer,
    };
  }
  

  const styles = StyleSheet.create({
    container: {
      height:100*vh,
      width:100*vw

    },

  
  
  });

  export default connect(mapStateToProps)(MapScreen);