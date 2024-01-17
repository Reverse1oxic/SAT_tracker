import * as React from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';
import { FontVariant } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from './add_icon';
import border from './styles';

let goal_time = 4 // This will be the time entered by the user into their goals 
let time_math = 2 //This will be the amount of hours entered by user into database json file
let time_reading = 2 //This will be the amount of hours entered by user into database json file


export default function Header({navigation}) {

  const Add_data = () => {
   Alert.alert('You clicked log study time');
  };
    return (
        <View style={border.header_border}>
          <View>
            <Text style={styles.headerText} >  Time Studied                                 <Ionicons onPress={()=>Add_data()} name='add-circle-outline' style={styles.icon}></Ionicons></Text> 
          </View>
          <View style={styles.row}>
            <View style={styles.column}>
              <Text style={styles.hours}>{goal_time} H</Text>
              <Text style={styles.item}>Goal</Text>
            </View>
    
            <View style={styles.column}>
              <Text style={styles.hours}>{time_math} H</Text>
              <Text style={styles.item}>Math</Text>
            </View>
    
            <View style={styles.column}>
              <Text style={styles.hours}>{time_reading} H</Text>
              <Text style={styles.item}>Reading</Text>
          </View>
            </View>
        </View>
      );
    };
    
    const styles = StyleSheet.create({
      header: {
        marginBottom: 2,
      },
      headerText: {
        marginLeft: -1,
        marginTop: 1,
        marginBottom: 20,
        fontSize: 22,
        fontWeight: 'bold',
        color: 'black',
      },
      row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      column: {
        flex: 1,
        alignItems: 'center',
      },
      hours: {
        font: 'San Francisco',
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
        padding: 10,
        marginHorizontal: 5,
      },
      item: {
        textAlign: 'center',
        fontSize: 15,
        color: 'black',
        marginTop: 2,
      },
      icon:{
        fontSize: 27,
        position: 'absolute',

      }
    });
    
    