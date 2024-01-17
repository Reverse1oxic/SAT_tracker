import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { FontVariant } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Icon() {
    return (
        <View>
            <Ionicons name='add-circle-outline' style={styles.icon}></Ionicons>
        </View>
    );
}

const styles = StyleSheet.create({
    icon:{
      fontSize: 20,
      marginBottom: 40,
      marginLeft: 315,
    }
  });
  