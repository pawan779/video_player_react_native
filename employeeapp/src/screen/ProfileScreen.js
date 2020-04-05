import React from 'react'
import {
    View,
    StyleSheet,
    Text,
    Image,
    Linking,
    Platform,
    Alert
} from 'react-native'
import {LinearGradient} from 'expo-linear-gradient'
import {Title, Card, Button} from 'react-native-paper'
import {MaterialIcons, Entypo} from '@expo/vector-icons'
import Delete from '../components/Delete'
import Axios from 'axios'

const ProfileScreen = ({route,navigation}) => {

    const {
        _id,
        name,
        email,
        phone,
        salary,
        position,
        image
    } = route.params.employee;
    const openDial = () => {
        //for android and ios phone dialing
        if (Platform.OS === "android") {
            Linking.openURL(`tel:${phone}`)
        } else {
            Linking.openURL(`telprompt:${phone}`)
        }
    }


    const deleteEmployee=()=>{
        Axios({
            method:"delete",
            url:`http://192.168.1.21:3000/delete/${_id}`
        })
        .then((result)=>{
            Alert.alert("Deleted sucessfully")
        })
    }



    return (
        <View style={styles.root}>

            <LinearGradient
                colors={["#0033ff", "#6bc1ff"]}
                style={{
                height: "20%"
            }}/>
            <View style={{
                alignItems: "center"
            }}>
                <Image
                    source={{
                    uri: image
                }}
                    style={{
                    width: 150,
                    height: 150,
                    borderRadius: 75,
                    marginTop: -75
                }}/>
                <Title>{name}</Title>
                <Text>{position}</Text>
            </View>
            <Card
                style={{
                padding: 10
            }}
                onPress={() => Linking.openURL(`mailto:${email}`)}>
                <View style={{
                    flexDirection: "row"
                }}>
                    <MaterialIcons name="email" size={32} color="blue"/>
                    <Text
                        style={{
                        fontSize: 18,
                        marginTop: 3,
                        marginLeft: 5
                    }}>{email}</Text>
                </View>
            </Card>
            <Card
                style={{
                padding: 10
            }}
                onPress={() => openDial()}>
                <View style={{
                    flexDirection: "row"
                }}>
                    <Entypo name="phone" size={32} color="blue"/>
                    <Text
                        style={{
                        fontSize: 18,
                        marginTop: 3,
                        marginLeft: 5
                    }}>{phone}</Text>
                </View>
            </Card>
            <Card style={{
                padding: 10
            }}>
                <View style={{
                    flexDirection: "row"
                }}>
                    <MaterialIcons name="attach-money" size={32} color="blue"/>
                    <Text
                        style={{
                        fontSize: 18,
                        marginTop: 3,
                        marginLeft: 5
                    }}>{salary}</Text>
                </View>
            </Card>

            <View
                style={{
                flexDirection: "row",
                justifyContent: "space-around"
            }}>
                <Button icon="account-edit" theme={theme} mode="contained"
                onPress={()=>{
                   navigation.navigate('Edit',{employee:route.params.employee})
                }}
                >Edit</Button>
                <Button
                    icon="delete"
                    theme={theme}
                    mode="contained"
                    onPress={() => deleteEmployee()}>Delete</Button>
            </View>

        </View>
    )
}

const theme = {
    colors: {
        primary: "blue"
    }
}

const styles = StyleSheet.create({
    root: {
        flex: 1
    }
})

export default ProfileScreen;