import React from 'react'
import {View, StyleSheet, Alert, Text, Linking,Platform} from 'react-native'
import {Card} from 'react-native-paper'

const ProfileScreen = ({route}) => {
    const data = route.params.employee

    const openPhone=()=>{
        if(Platform.OS==="android")
        {
Linking.openURL(`tel:${data.phone}`)
        }
        else{
Linking.openURL(`telpromt:${data.phone}`)
        }
    }
    return (
        <View>
            <Card
                onPress={()=>openPhone()}>
                <Text>{data.phone}</Text>
            </Card>
            <Card
                onPress={() => {
                Linking.openURL(`mailto:${data.email}`)
            }}>
                <Text>{data.email}</Text>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({})

export default ProfileScreen;