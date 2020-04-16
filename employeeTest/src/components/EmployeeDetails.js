import React, {useState} from 'react'
import {View, StyleSheet, Modal, Alert} from 'react-native'
import {TextInput, Button} from 'react-native-paper'
import ModalComponent from './ModalComponent';
import yelp from '../api/yelp';
import Axios from 'axios';

const EmployeeDetails = ({navigation}) => {

    const [name,
        setName] = useState('');
    const [email,
        setEmail] = useState('');
    const [phone,
        setPhone] = useState('');
    const [position,
        setPosition] = useState('');

    const [picture,
        setPicture] = useState('')
    console.log(picture)

    const [modal,
        setModal] = useState(false)

    const data = {
        name,
        email,
        phone,
        position,
        image: picture

    }
    const submitHandle = () => {
        Axios
            .post("http://192.168.1.21:3000/send-data", data)
            .then((response) => {
                // Alert.alert(response.data)
                console.log(response.data)
                Alert.alert("Sucessfully created")
                navigation.navigate("Home")
            })
            .catch((err) => {
               console.log(err)
            })
    }

    return (
        <View style={styles.viewStyle}>

            <View >
                <TextInput
                    mode="outlined"
                    label="name"
                    value={name}
                    onChangeText={(text) => {
                    setName(text)
                }}/>
                <TextInput
                    mode="outlined"
                    label="email"
                    value={email}
                    keyboardType="email-address"
                    onChangeText={(text) => {
                    setEmail(text)
                }}/>
                <TextInput
                    mode="outlined"
                    label="phone"
                    value={phone}
                    keyboardType="number-pad"
                    onChangeText={(text) => {
                    setPhone(text)
                }}/>
                <TextInput
                    mode="outlined"
                    label="position"
                    value={position}
                    onChangeText={(text) => {
                    setPosition(text)
                }}/>

                <Button
                    icon="upload"
                    mode="contained"
                    theme={theme}
                    onPress={() => setModal(true)}
                    style={{
                    marginVertical: 10
                }}>
                    Upload
                </Button>
                <Button
                    icon="plus"
                    mode="contained"
                    theme={theme}
                    style={{
                    marginVertical: 10
                }}
                    onPress={() => submitHandle()}>
                    Save
                </Button>
            </View>

            <Modal
                visible={modal}
                transparent
                animationType="slide"
                onRequestClose={() => setModal(false)}>

                <ModalComponent onCancel={() => setModal(false)} value={setPicture}/>
            </Modal>

        </View>
    )
}

const theme = {
    colors: {
        primary: "blue"
    }
}

const styles = StyleSheet.create({
    viewStyle: {
        padding: 10
    }
})

export default EmployeeDetails;