import React, {useState} from 'react'
import {View, Text, StyleSheet,Modal, Alert} from 'react-native'
import Header from '../components/Header'
import {Button, TextInput} from 'react-native-paper'
import ModalComponent from '../components/ModalComponent'
import VideoComponent from '../components/VideoComponent'

export default AddScreen = () => {
    const [name,
        setName] = useState('');

    const [modal,
        setModal] = useState(false)
        const [modal1,
            setModal1]=useState(false)
      
    return (
        <View style={{
            flex: 1
        }}>

            <Header/>

            <TextInput
                label="Name of the video"
                value={name}
                theme={colors = {
                accent: "red"
            }}
                onChangeText={(text) => setName(text)}
                mode="outlined"/>
            <Button
                icon="upload"
                color="red"
                mode="outlined"
                theme={theme}
                onPress={() => {
                setModal(true)
            }}>
                Upload Image
            </Button>


            <Button
                icon="upload"
                color="red"
                mode="outlined"
                theme={theme}
                onPress={() => {
                setModal1(true)
            }}>
                Upload Video
            </Button>

            <Modal visible={modal} transparent onDismiss={() => setModal(false)}>
                <ModalComponent onCancel={()=>setModal(false)} />
            </Modal>

            <Modal visible={modal1} transparent onDismiss={() => setModal1(false)}>
                <VideoComponent onCancel={()=>setModal(false)}/>
            </Modal>
        </View>
    )

}
const theme = {
    colors: {
        primary: "#fff"
    }
}
const styles = StyleSheet.create({})