import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from "@react-navigation/native"
import {createStackNavigator} from '@react-navigation/stack'
import HomeScreen from './src/screens/HomeScreen';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import { reducer } from './src/reducers/reducers';

const Stack = createStackNavigator();
const Store = createStore(reducer);
const Employee = () => {

    return (
        <View style={styles.container}>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen}/>
            </Stack.Navigator>

        </View>
    )

}

export default() => {
    return (
        <Provider store={Store}> 
            <NavigationContainer>
                <Employee/>
            </NavigationContainer>
        </Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})