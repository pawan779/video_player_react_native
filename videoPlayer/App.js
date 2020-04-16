import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import HomeScreen from './src/screens/HomeScreen';
import {CustomDarkTheme, CustomDefaultTheme} from './src/components/Color';
import {createStore, combineReducers} from 'redux'
import {Provider, useSelector} from 'react-redux'
import { themeReducer } from './src/store/reducers/changeTheme';
import AddScreen from './src/screens/AddScreen';

const rootReducer = combineReducers({customTheme: themeReducer})

const store = createStore(rootReducer)

const App = () => {

    const Stack = createStackNavigator();

    const changeTheme = useSelector((state) => {
      return state.customTheme
  })
  console.log(changeTheme)
    return (
        <View style={styles.container}>
            <NavigationContainer
                theme={changeTheme
                ? CustomDarkTheme
                : CustomDefaultTheme}>
                <Stack.Navigator  headerMode="none">
                    <Stack.Screen name="Home" component={HomeScreen}/>
                    <Stack.Screen name="Add" component={AddScreen}/>
                </Stack.Navigator>
            </NavigationContainer>
        </View>
    );
}

export default() => {

    return (
        <Provider store={store}>
            <App/>
        </Provider>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
