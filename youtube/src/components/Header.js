import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Entypo, Ionicons, MaterialIcons} from '@expo/vector-icons'
import Constant from "expo-constants"
import {useNavigation,useTheme} from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux';

export default Header = () => {


    const dispathch=useDispatch();
    const currentTheme=useSelector(state=>{
        return state.myTheme
    })
const navigation=useNavigation();
const {colors}=useTheme();
    const myColor = colors.iconColor
    return (
        <View style={{
 marginTop: Constant.statusBarHeight,
        height: 60,
        backgroundColor: "#fff",
        flexDirection: "row",
        justifyContent: "space-between",
        elevation:4,
        padding:5,
        alignItems:"center",
        backgroundColor:colors.headerColor,
        
        // for ios shadow
    shadowOffset:{width:1,height:1},
    shadowColor:"#212121",
    shadowOpacity:0.2,
        }}>
            <View
                style={{
                flexDirection: "row",
                margin: 5,
                flex: 1
              
            }}>
                <Entypo
                    name="youtube"
                    size={30}
                    color="red"
                    style={{
                    marginLeft: 15
                }}/>
                <Text
                    style={{
                    fontSize: 22,
                    marginLeft: 7,
                    color: myColor,
                    fontWeight: "bold"
                }}>YouTube</Text>

            </View>
            <View
                style={{
                flexDirection: "row",
                justifyContent: "space-around",
                width: 150
            }}>
                <Ionicons name="md-videocam" size={30} color={myColor}/>
                <Ionicons name="md-search" size={30} color={myColor} onPress={()=>{
                    navigation.navigate("Search")}}/>
                <MaterialIcons name="account-circle" size={30} color={myColor} 
                onPress={()=>{
                    dispathch({type:"CHANGE_THEME",payload:!currentTheme})
                }}
                />

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
       

        
    }
});
