import React,{useState} from 'react'
import {View, StyleSheet} from 'react-native'
import {Button} from 'react-native-paper'
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

const ModalComponent = ({onCancel,value}) => {

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
            .then(res => res.json())
            .then(data => {
                console.log(data)
                value(data.url)
                onCancel
            })

    }


    return (
        <View style={styles.viewStyle}>
            <View style={{
                flexDirection: "row",
                justifyContent:"space-around"
            }}>
                <Button mode="contained" icon="camera" onPress={pickFromCamers}>
                    Camera
                </Button>
                <Button mode="contained" icon="image-area" onPress={pickFromGallery}>
                    Gallery
                </Button>
            </View>
            <Button mode="outlined" icon="cancel" onPress={onCancel}>
                Cancel
            </Button>
        </View>
    )
}

const styles = StyleSheet.create({
    viewStyle: {
        position: "absolute",
        width: "100%",
        bottom: 10
    }
})

export default ModalComponent;