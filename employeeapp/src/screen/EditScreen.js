import React, {useState, useEffect} from 'react'
import {View, StyleSheet, Alert, Image} from 'react-native'
import {TextInput, Button} from 'react-native-paper'
import TextInputDetails from '../components/TextInputDetails'
import Axios from 'axios'
import { NavigationContainer } from '@react-navigation/native'

const EditScreen = ({route,navigation}) => {
    const data = route.params.employee;

    const [name,
        setName] = useState('');
    const [email,
        setEmail] = useState('');
    const [phone,
        setPhone] = useState('');
    const [salary,
        setSalary] = useState('');
    const [position,
        setPosition] = useState('');
    const [modal,
        setModal] = useState(false);
    const [picture,
        setPicture] = useState('')

    useEffect(() => {
        setName(data.name)
        setEmail(data.email)
        setPhone(data.phone)
        setSalary(data.salary)
        setPosition(data.position)

    }, [])


    
    const editEmployee=()=>{
        Axios({
            method:"put",
            url:`http://192.168.1.21:3000/edit/${data._id}`,
            data:{
                name,
                salary,
                position,
                email,
                phone
            }
        })
        .then((result)=>{
            Alert.alert("Updated sucessfully");
            navigation.navigate("Home")
        })
    }

    return (
        <View>
            <View style={{
                alignItems: 'center'
            }}>

                <Image
                    style={{
                    width: 220,
                    height: 220,
                    borderRadius: 110
                }}
                    source={{
                    uri: data.image
                }}/>
            </View>
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

            <TextInputDetails
                title="posotion"
                value={position}
                onChange={text => setPosition(text)}/>


                <Button mode="contained" onPress={()=>editEmployee()}>Update</Button>
        </View>
    )
}

const styles = StyleSheet.create({})

export default EditScreen;