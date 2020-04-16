import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AuthScreen from './src/screens/AuthScreen';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import { signupReducer } from './src/store/reducers/auth';

const Stack = createStackNavigator();
const store=createStore(signupReducer);

const App = () => {
    return (
        <View style={styles.container}>
            <NavigationContainer>

                <Stack.Navigator headerMode="none">
                    <Stack.Screen name="Auth" component={AuthScreen}/>
                </Stack.Navigator>
            </NavigationContainer>
        </View>
    )
}

export default() => {
    return (
    <Provider store={store}>
    <App/>
    </Provider>)
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
