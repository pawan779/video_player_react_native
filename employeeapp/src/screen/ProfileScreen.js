import React from 'react'
import {
    View,
    StyleSheet,
    Text,
    Image,
    Linking,
    Platform
} from 'react-native'
import {LinearGradient} from 'expo-linear-gradient'
import {Title, Card, Button} from 'react-native-paper'
import {MaterialIcons, Entypo} from '@expo/vector-icons'

const ProfileScreen = (props) => {

    const {id,name,email,phone,salary,position,image}=props.route.params.employee;
   
    const openDial = () => {
        //for android and ios phone dialing
        if (Platform.OS === "android") {
            Linking.openURL(`tel:${phone}`)
        } else {
            Linking.openURL(`telprompt:${phone}`)
        }
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
                    uri: "https://images.unsplash.com/flagged/photo-1578848151039-b8916d7c1c34?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
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
                    }}>10 lakh Rupees</Text>
                </View>
            </Card>

            <View
                style={{
                flexDirection: "row",
                justifyContent: "space-around"
            }}>
                <Button icon="account-edit" theme={theme} mode="contained">Edit</Button>
                <Button icon="delete" theme={theme} mode="contained">Delete</Button>
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