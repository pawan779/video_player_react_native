import React,{useState} from 'react'
import {ScrollView, Text, StyleSheet, KeyboardAvoidingView} from 'react-native'
import {Card, TextInput, Button} from "react-native-paper"
import {LinearGradient} from 'expo-linear-gradient'
import {useDispatch, useSelector} from 'react-redux'
// import * as authActions from '../store/actions/auth'

const AuthScreen = () => {

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('');

    const dispatch = useDispatch();
    // const {email} = useSelector((state) => {
    //     return state
    // })

    return (
        <KeyboardAvoidingView
            behavior="padding"
            keyboardVerticalOffset={50}
            style={styles.screen}>

            <LinearGradient colors={["#ff0000", "#ffff00"]} style={styles.gradient}>

                <Card style={styles.container}>
                    <ScrollView>
                        <TextInput
                            label="Email Address"
                            keyboardType="email-address"
                            mode="outlined"
                            value={email}
                            onChangeText={(text)=>setPassword(text)}/>

                        <TextInput
                            mode="outlined"
                            label="Password"
                            secureTextEntry
                            value={email}
                            onChangeText={(text)=>setPassword(text)}/>
                        <Button
                            mode="contained"
                            style={{
                            marginVertical: 10
                        }}
                        onPress
                        >
                            Login
                        </Button>
                        <Button>
                            Switch to signUp
                        </Button>
                    </ScrollView>
                </Card>

            </LinearGradient>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1
    },
    gradient: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    container: {
        width: "90%",
        padding: 20,
        opacity: 0.9

    }
})

export default AuthScreen