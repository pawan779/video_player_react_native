import React, {useState} from 'react'
import {View, StyleSheet, Modal, Alert} from 'react-native'
import TextInputDetails from '../components/TextInputDetails';
import {TextInput, Button} from 'react-native-paper'
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

const CreateEmployeeScreen = () => {

    const [name,
        setName] = useState('');
    const [email,
        setEmail] = useState('');
    const [phone,
        setPhone] = useState('');
    const [salary,
        setSalary] = useState('');
    const [modal,
        setModal] = useState(false);
        const[picture,setPicture]=useState('')

    const pickFromGallery = async() => {
        const {granted} = await Permissions.askAsync(Permissions.CAMERA_ROLL)
        if (granted) {
            let data = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [
                    1, 1
                ],
                quality: 0.5
            })
            if (!data.cancelled) {
                let newFile = {
                    uri: data.uri,
                    type: `test/${data
                        .uri
                        .split(".")[1]}`,
                    name: `test.${data
                        .uri
                        .split(".")[1]}`
                }
                   handleUpload(newFile)
            }
        } else {
            Alert.alert("You need permision")
        }
    }

    const pickFromCamers = async() => {
        const {granted} = await Permissions.askAsync(Permissions.CAMERA)
        if (granted) {
            let data = await ImagePicker.launchCameraAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [
                    1, 1
                ],
                quality: 0.5
            })
            if (!data.cancelled) {
                let newFile = {
                    uri: data.uri,
                    type: `test/${data
                        .uri
                        .split(".")[1]}`,
                    name: `test.${data
                        .uri
                        .split(".")[1]}`
                }
                handleUpload(newFile)
            }
        } else {
            Alert.alert("You need permision")
        }
    }

    const handleUpload = (image) => {
        const data = new FormData()
        data.append('file', image)
        data.append('upload_preset', 'employee')
        data.append('cloud_name', "pawan779")

        fetch("https://api.cloudinary.com/v1_1/pawan779/image/upload", {
            method: "post",
            body: data
        })
        .then(res=>
            res.json())
        .then(data=>{
            console.log(data)
            setPicture(data.url)
            setModal(false)
        })
    
    }
    return (
        <View>
            <TextInputDetails title="name" value={name} onChange={text => setName(text)}/>
            <TextInputDetails
                title="email"
                value={email}
                onChange={text => setEmail(text)}/>
            <TextInputDetails
                title="phone"
                value={phone}
                type="number-pad"
                onChange={text => setPhone(text)}/>
            <TextInputDetails
                title="salary"
                value={salary}
                type="number-pad"
                onChange={text => setSalary(text)}/>

            <Button
                theme={theme}
                style={{
                margin: 10
            }}
                mode="contained"
                onPress={() => setModal(true)}icon={picture==""?"upload":"check"} >Upload Image</Button>

            <Button
                theme={theme}
                style={{
                margin: 10
            }}
                mode="contained"
                onPress={() => console.log('save')}icon="content-save" >Save</Button>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modal}
                onRequestClose={() => setModal(false)}>

                <View
                    style={{
                    position: 'absolute',
                    bottom: 20,
                    width: "100%",
                    backgroundColor: "#aaaaaa"
                }}>
                    <View
                        style={{
                        flexDirection: "row",
                        justifyContent: 'space-around',
                        padding: 10
                    }}>
                        <Button
                            icon="camera"
                            theme={theme}
                            mode="contained"
                            onPress={() => pickFromCamers()}>Camera</Button>

                        <Button
                            icon="image-area"
                            theme={theme}
                            mode="contained"
                            onPress={() => pickFromGallery()}>Gallary</Button>
                    </View>

                    <Button icon="cancel" mode="contained" onPress={() => setModal(false)}>Cancel</Button>
                </View>
            </Modal>

        </View>
    )
}

const theme = {
    colors: {
        primary: "blue"
    }
}
const styles = StyleSheet.create({})

export default CreateEmployeeScreen;