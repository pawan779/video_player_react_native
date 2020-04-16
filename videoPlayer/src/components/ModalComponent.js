import React,{useState} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {Modal, Button} from 'react-native-paper'
import {useTheme} from '@react-navigation/native'
import api from '../api/api';

import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';


export default ModalComponent = ({onCancel}) => {


    const [image,setImage]=useState('');


    const {colors} = useTheme();
    const textColor = colors.text

    const theme = {
        colors: {
            primary: `${textColor}`
        }
    }

const pickFromGallery = async() => {
    const {granted} = await Permissions.askAsync(Permissions.CAMERA_ROLL)
    if (granted) {
        let data = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
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
            mediaTypes: ImagePicker.MediaTypeOptions.All,
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


    console.log(image)
    const data = new FormData()
    data.append("image", image)

    api({method: "post", url: "/upload", data}).then((result) => {
        console.log(result.data)
        setImage(result.data.filename)

    }).catch((err) => {
        console.log(err)
  
    })
}  



    return (
        

        <View
            style={{
            flex: 1,
            position: "absolute",
            bottom: 10
        }}>
            <View style={{
                flexDirection: "row"
            }}>
                <Button theme={theme} mode="contained" icon="image-area" onPress={pickFromGallery}>
                    Choose From Gallary
                </Button>
                <Button theme={theme} mode="contained" icon="camera" onPress={pickFromCamers}>
                    Take Picture
                </Button>
            </View>
            <Button theme={theme} onPress={onCancel}>Cancel</Button>
        </View>

    )


}

const styles = StyleSheet.create({})