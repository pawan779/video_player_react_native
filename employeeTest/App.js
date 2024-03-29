import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import HomeScreen from './src/screen/HomeScreen';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import CreateEmployeeScreen from './src/screen/CreateEmployeeScreen';
import ProfileScreen from './src/screen/ProfileScreen';

const Stack = createStackNavigator();

const myOptions = {
    title: "Employee App",
    headerTintColor: "white",
    headerStyle: {
        backgroundColor: "#7b85c4"
    }
}
App = () => {
    return (
        <View style={{
            flex: 1
        }}>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} options={myOptions}/>
                <Stack.Screen
                    name="Create"
                    component={CreateEmployeeScreen}
                    options={{
                    ...myOptions,
                    title: "Add Employee"
                }}/>
                <Stack.Screen name="Profile" component={ProfileScreen}/>
            </Stack.Navigator>
        </View>
    )

}

export default() => {
    return (
        <NavigationContainer><App/></NavigationContainer>
    );
}
