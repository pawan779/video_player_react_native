import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import SearchScreen from './src/screens/SearchScreen';
import {NavigationContainer, DefaultTheme, DarkTheme, useTheme} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import ExploreScreen from './src/screens/ExploreScreen';
import SubscribeScreen from './src/screens/SubscribeScreen';
import VideoScreen from './src/screens/VideoScreen';
import {MaterialIcons} from '@expo/vector-icons'
import {Provider, useSelector} from 'react-redux'
import {createStore, combineReducers} from 'redux'
import {reducer} from './src/reducer/reducer';
import {themeReducer} from './src/reducer/themeReducer';

const customDarkTheme = {
    ...DarkTheme,
    colors: {
        ...DarkTheme.colors,
        headerColor: "#1e1e1e",
        iconColor: "#fff",
        tabIcon: "#fff",
        textColor: "#fff"
    }
}

const customDefaultTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        headerColor: "#fff",
        iconColor: "##1e1e1e",
        tabIcon: "red",
        textColor: "#000"
    }
}

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const rootReducer = combineReducers({cardData: reducer, myTheme: themeReducer})

const store = createStore(rootReducer);

const RootHome = () => {
    const {colors} = useTheme();
    return (
        <Tab.Navigator
            screenOptions={({route}) => ({
            tabBarIcon: ({color}) => {
                let iconName;
                if (route.name === 'Home') {
                    iconName = "home"
                } else if (route.name === 'Explore') {
                    iconName = 'explore'
                } else if (route.name === 'Subscribe') {
                    iconName = "subscriptions"
                }
                return <MaterialIcons name={iconName} size={30} color={color}/>;
            }
        })}
            tabBarOptions={{
            activeTintColor: colors.tabIcon,
            inactiveTintColor: 'gray'
        }}>
            <Tab.Screen name="Home" component={HomeScreen}/>
            <Tab.Screen name="Explore" component={ExploreScreen}/>
            <Tab.Screen name="Subscribe" component={SubscribeScreen}/>
        </Tab.Navigator>
    )
}

const App = () => {
    let currentTheme = useSelector(state => {
        return (state.myTheme)
    })
    return (
        <NavigationContainer
            theme={currentTheme
            ? customDarkTheme
            : customDefaultTheme}>

            <Stack.Navigator headerMode="none">
                <Stack.Screen name="RootHome" component={RootHome}/>
                <Stack.Screen name="Search" component={SearchScreen}/>
                <Stack.Screen name="Video" component={VideoScreen}/>

            </Stack.Navigator>

        </NavigationContainer>
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
