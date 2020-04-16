import React from 'react'
import {View, Text, StyleSheet, Switch} from 'react-native'
import {MaterialIcons, Feather, MaterialCommunityIcons} from '@expo/vector-icons'
import {useTheme} from '@react-navigation/native'
import Constant from 'expo-constants'
import {useDispatch,useSelector} from 'react-redux'



const Header = () => {

    const dispatch=useDispatch();
    const changeTheme=useSelector((state)=>{
        return state.customTheme
    })

    const {colors} = useTheme();
    const headerColor = colors.headerColor;
    const textColor = colors.text;
    const iconColor = colors.iconColor;
    const subIcon = colors.subIcon;

    const styles = StyleSheet.create({
        root: {
            backgroundColor: `${headerColor}`,
            elevation: 4
        },
        header: {
            flexDirection: "row",
            height: 50,
            marginTop: Constant.statusBarHeight,
            alignItems: "center",
            marginHorizontal: 10
        },
        mainHeader: {
            flexDirection: "row",
            flex: 1
        },
        subHeader: {
            flexDirection: "row",
            width: "30%",
            justifyContent: "space-around"
        },
        text: {
            color: `${iconColor}`,
            fontSize: 20,
            marginLeft: 5,
            fontWeight: "bold"
        }
    })

    return (
        <View style={styles.root}>
            <View style={styles.header}>
                <View style={styles.mainHeader}>
                    <MaterialIcons name="videocam" size={32} color={iconColor}/>
                    <Text style={styles.text}>Video Player</Text>
                </View>

                <View style={styles.subHeader}>
                    <Feather name="search" size={32} color={subIcon}/>
                    <MaterialCommunityIcons
                        name="toggle-switch"
                        size={32}
                        color={subIcon}
                        onPress={() => {
                            dispatch({type:"CHANGE_COLOR",payload:!changeTheme})
                        }}/>

                </View>
            </View>

        </View>
    )

}

export default Header;
