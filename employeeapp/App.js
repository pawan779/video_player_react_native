import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import HomeScreen from './src/screen/HomeScreen';
import CreateEmployeeScreen from './src/screen/CreateEmployeeScreen';
import ProfileScreen from './src/screen/ProfileScreen';
import EmployeeScreen from './src/test/EmployeeScreen';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import EditScreen from './src/screen/EditScreen';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import {reducer} from './src/reducer/reducer'
const Stack = createStackNavigator();

const Myoptions = {
    title: "Employee App",
    headerTintColor: "white",
    headerStyle: {
        backgroundColor: "#7b85c4"
    }

}

const store = createStore(reducer);

App = () => {
    return (
        <View style={styles.container}>
            {/* //for no header <Stack.Navigator headerMode="none"></Stack.Navigator> */}
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} options={Myoptions}/>
                <Stack.Screen
                    name="Create"
                    component={CreateEmployeeScreen}
                    options={{
                    ...Myoptions,
                    title: "Create"
                }}/>
                <Stack.Screen
                    name="Profile"
                    component={ProfileScreen}
                    options={{
                    ...Myoptions,
                    title: "Profile"
                }}/>
                <Stack.Screen
                    name="Edit"
                    component={EditScreen}
                    options={{
                    ...Myoptions,
                    title: "Edit"
                }}/>
            </Stack.Navigator>
        </View>
    );
}

export default() => {
    return (
        <Provider store={store}>
            <NavigationContainer><App/></NavigationContainer>
        </Provider>
    )

}
const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
