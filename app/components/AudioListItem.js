import { Text, View ,StyleSheet,Dimensions} from 'react-native'
import React, { Component } from 'react'
import { Entypo } from '@expo/vector-icons';
import color from '../misc/color';

export class AudioListItem extends Component {
  render() {
    return (
        <>
      <View style={styles.container}>
        <View style={styles.leftContainer}>
            <View style={styles.thumbnail}>
                 <Text style={styles.thumbnailText}>A</Text>
            </View>
            <View style={styles.titleContainer}>
                 <Text numberOfLines={1} style={styles.title}>Titlesdxxxxxxxxxxxxxxxxxxxxxxxxxxxddd</Text>
                 <Text numberOfLines={1} style={styles.timeText}>03:58</Text>
            </View>
        </View>
        <View style={styles.rightContainer}>
        <Entypo name="dots-three-vertical" size={20} color={color.FONT_MEDIUM} />
        </View>
      </View>
      <View style={styles.separator} />
      </>
    )
  }
}

const {width} = Dimensions.get('window')

const styles = StyleSheet.create({
  container :{
    flexDirection:'row',
    alignSelf:'center',
    width:width -80,
  },
  leftContainer:{
     flexDirection:'row',
     alignItems:'center',
     flex:1,

  },
  rightContainer: {
       flexBasis:50,
       height: 50,
      alignItems: 'center',
      justifyContent: 'center',
  },
  thumbnail: {
    height: 50,
    flexBasis: 50,
    backgroundColor: color.FONT_LIGHT,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
  },
  thumbnailText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: color.FONT,
  },
  titleContainer: {
    width: width - 180,
    paddingLeft: 10,
  },
  title: {
    fontSize: 16,
    color: color.FONT,
  },

  separator: {
    width: width - 80,
    backgroundColor: '#333',
    opacity: 0.3,
    height: 0.5,
    alignSelf: 'center',
    marginTop: 10,
  },
  timeText: {
    fontSize: 14,
    color: color.FONT_LIGHT,
  },
})
export default AudioListItem