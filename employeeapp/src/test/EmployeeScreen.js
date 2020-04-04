import React, {useState} from 'react'
import {
    View,
    StyleSheet,
    Image,
    Text,
    Linking,
    Platform,
    Modal
} from 'react-native'
import {LinearGradient} from 'expo-linear-gradient'
import {Title, Card, Button,FAB} from 'react-native-paper'
import {MaterialIcons, Entypo} from '@expo/vector-icons'

const EmployeeScreen = () => {

    const [modal,
        setModal] = useState(false)

    const openDial = () => {
        if (Platform == "android") {
            Linking.openURL('tel:9849758616')
        } else {
            Linking.openURL("telprompt:9849758616")
        }
    }
    return (
        <View style={{
            flex: 1
        }}>
            <LinearGradient
                colors={["#0000ff", "#400080"]}
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
                <Title>Beard Man</Title>
                <Text>Web Developer</Text>
            </View>
            <View >
                <Card onPress={() => Linking.openURL("mailto:beardman@gmail.com")}>

                    <View
                        style={{
                        flexDirection: "row",
                        padding: 5
                    }}>
                        <MaterialIcons name="email" size={30} color="blue"/>
                        <Text
                            style={{
                            marginTop: 3,
                            marginLeft: 5,
                            fontSize: 17
                        }}>beardman@gmail.com</Text>
                    </View>
                </Card>
                <Card onPress={() => openDial()}>
                    <View
                        style={{
                        flexDirection: "row",
                        padding: 5
                    }}>
                        <Entypo name="phone" size={30} color="blue"/>
                        <Text
                            style={{
                            marginTop: 3,
                            marginLeft: 5,
                            fontSize: 17
                        }}>9849758616</Text>
                    </View>
                </Card>
            </View>
            <Button
                icon="upload"
                small={false}
                mode="contained"
                onPress={() => setModal(true)}>upload</Button>

            <Modal visible={modal} transparent={true}>
                <View
                    style={{
                    position: "absolute",
                    bottom: 2,
                    width: "100%",
                    padding: 10
                }}>
                    <View style={{flexDirection:"row", justifyContent:"space-around"}}>
                        <Button
                            icon="camera"
                            small={false}
                            mode="contained"
                            onPress={() => setModal(true)}>Camera</Button>
                        <Button
                            icon="image-area"
                            small={false}
                            mode="contained"
                            onPress={() => setModal(true)}>Gallery</Button>
                    </View>
                    <Button
                    style={{marginBottom:10}}
                            icon="cancel"
                            small={false}
                            mode="text"
                            onPress={() => setModal(false)}>Cancel</Button>
                </View>
            </Modal>
            <FAB
            icon="plus"
            theme={{
                colors: {
                    accent: '#007acc'
                }}}
            style={{position:"absolute",bottom:30,right:20,zIndex:1}}
            />
        </View>
    )
}

const styles = StyleSheet.create({})

export default EmployeeScreen;