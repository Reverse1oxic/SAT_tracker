import * as React from 'react';
import {View, Text, Alert, StyleSheet} from 'react-native';
import {useRef, useEffect} from 'react';
import {styled} from 'styled-components/native';
import {Animated} from 'react-native';
import Header from '../homeComponets/header';
import { NavigationContainer } from '@react-navigation/native';
import Leaderboard from '../homeComponets/Leaderboard';

let goal_time = 4 // This will be the time entered by the user into their goals 
let time_math = 2 //This will be the amount of hours entered by user into database json file
let time_reading = 2 //This will be the amount of hours entered by user into database json file



export default function HomeScreen({navigation}) {
    const ButtonHandler = () => Alert.alert('You clicked Home Screen','This is the Home Screen.')//Title of Alert, //Alert Message
    return(
    <View style={styles.container}>
      {Header}
      <Header navigation={navigation} />

      {/* Your HomeScreen content goes here */}
      {Leaderboard}
      <Leaderboard styles={styles.Leaderboard1}/>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      marginTop: -10
    },
    Leaderboard1:{
        marginBottom: -20,
    },
  });
  
  