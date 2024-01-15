import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { FontVariant } from 'react-native';

let goal_time = 4 // This will be the time entered by the user into their goals 
let time_math = 2 //This will be the amount of hours entered by user into database json file
let time_reading = 2 //This will be the amount of hours entered by user into database json file

export default function Header({navigation}) {

    return (
        <View style={styles.container}>
          <View>
            <Text style={styles.headerText}>Time Studied</Text>
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
      container: {
        flex: 1,
        padding: 7,
      },
      header: {
        marginBottom: 20,
      },
      headerText: {
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
    });
    
    