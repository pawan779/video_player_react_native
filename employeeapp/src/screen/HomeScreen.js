import React, {useEffect, useState} from 'react'
import {View, StyleSheet} from 'react-native'
import Axios from 'axios'

import HomeDetails from '../components/HomeDetails'

const HomeScreen = ({navigation}) => {
    const [data,
        setData] = useState([])
        const [loading,setLoading]=useState(true)

    //component didMount

    const fetchData=()=>{
        Axios.get("http://192.168.1.21:3000/")
        .then(response => {
            setData(response.data)
            console.log(response.data)
            setLoading(false)
        })
    }
    useEffect(() => {
     fetchData()
    }, [])
    return (
        <View style={{
            flex: 1
        }}>
            <HomeDetails data={data} navigate={navigation.navigate} loading={loading}/>
        </View>
    )
}

const styles = StyleSheet.create({})

export default HomeScreen;