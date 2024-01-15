import * as React from 'react';
import {View, Text} from 'react-native';

export default function SettingScreen({navigation}) {
    const ButtonHandler = () => navigation.navigate('Settings')
    
    return(
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text 
                onPress={ButtonHandler}
                style={{fontSize: 26, fontWeight: 'bold',}}>Settings Screen</Text>
        </View>
    );
}