import { Text, View ,StyleSheet, ScrollView, Dimensions} from 'react-native'
import React, { Component } from 'react'
import { AudioContext } from '../context/AudioProvider'
import {RecyclerListView , LayoutProvider} from 'recyclerlistview'




export class AudioList extends Component {
    static contextType = AudioContext
    layoutProvider = new LayoutProvider((i) => 'audio' , (type , dim)=> {
      switch(type){
        case 'audio':
            dim.width = Dimensions.get('window').width;
            dim.height=70
            break;

            default:
                dim.width = 0;
            dim.height=0;

      }
     
    })

    rowRenderer = (type , item )=>{
      return <Text> {item.filename} </Text>
    }
  render() {
      return (
      <AudioContext.Consumer>
        {({dataProvider}) =>{
            
            return (
            <View style={{flex:1 , padding:10 , borderBottomColor:'lightgray',borderBottomWidth:0.5 ,}}>
            
            <RecyclerListView 
            dataProvider={dataProvider} layoutProvider={this.layoutProvider} rowRenderer={this.rowRenderer}/>
            
            
            </View>
            );
        }}
      </AudioContext.Consumer>
)}}


// const styles = StyleSheet.create({
//     container:{
//         flex:1,
//         justifyContent:'center',
//         alignItems:'center'
//     },
//     text:{
//         fontSize:15,
//         width:'100%',
//         padding:15,
//         borderBottomColor:'lightgray',
//         borderBottomWidth:0.3,

        

//     }
// })

export default AudioList