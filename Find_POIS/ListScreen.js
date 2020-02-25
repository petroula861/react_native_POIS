import React from 'react';
import { StyleSheet,ActivityIndicator ,Text, View, ScrollView} from 'react-native';
import { connect} from "react-redux"; 
import { getData } from "./actions/index";
import {vw, vh,} from 'react-native-viewport-units'
import { ListItem } from 'react-native-elements'
import { getDistance, getPreciseDistance } from 'geolib';


 export class ListScreen extends React.Component {
    constructor(props) {
      super(props);
    }
  
    componentDidMount() {
      this.props.getData();
    }
  
    _getDistance(lat,long){
      var dis = getDistance( //this.props.result2.location.coords.latitude
        { latitude: this.props.result2.location.coords.latitude, longitude:this.props.result2.location.coords.latitude},
        { latitude: lat, longitude:long }
      );
      return dis
  }

    render() {

      if(this.props.result2.status==="received location"){
        var data2=[]
        var tmp3=[]
        for (var el of this.props.result.data){
          var tmp,tmp2={}
          var distance=this._getDistance(Number(el.latitude),Number(el.longitude))

          if(distance){
            tmp = Object.assign(el,{"distance":distance})
            data2.push(tmp)
          }else{
              tmp2 = Object.assign(el,{"distance":false})
              tmp3.push(tmp2)
          }

        }
        var data=data2.sort((a,b)=>a.distance>b.distance?1:-1)
        data=data.concat(tmp3)

      }
      else{
      var data=this.props.result.data.sort((a,b)=>a.address>b.address?1:-1)
      }

      return (
        <View style={styles.container}>
        { this.props.result2.status==="received location"||!("status" in this.props.result2)?
          <ScrollView style={{marginTop:5*vh,marginLeft:3*vw,marginRight:3*vw}}>
          {data.map(el => (
            <ListItem key={el.id} title={el.address} subtitle={this.props.result2.status==="received location"&&(el.distance!==false)?(el.distance/1000>1?String(Math.round(el.distance/1000))+" "+"km":String(Math.round(el.distance))+" "+"m"):null} bottomDivider/>
          ))}
          </ScrollView>:<View style={{flex:1,alignItems: 'center',justifyContent: 'center'}}><ActivityIndicator size="large" color="#00ff00" /></View>}
        </View>
      );
    }
  }
  
  function mapStateToProps(state) { //connects a part of the Redux state to the props of a React component. 
    return {result: state.dataReducer,
    result2:state.locationReducer};
  }
  


  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#A2B3A8',
       flex: 1,

    }

  
  
  });
    
  export default connect(mapStateToProps,{ getData })(ListScreen);