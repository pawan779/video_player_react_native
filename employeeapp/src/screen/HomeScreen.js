import React, {useEffect, useState} from 'react'
import {View, StyleSheet} from 'react-native'
import Axios from 'axios'

import HomeDetails from '../components/HomeDetails'

import {useSelector,useDispatch} from 'react-redux'




const HomeScreen = ({navigation}) => {

    const {data,loading}=useSelector((state)=>{
        return state
    })
    
    const dispatch=useDispatch()


    // const [data,
    //     setData] = useState([])
    //     const [loading,setLoading]=useState(true)

    

    const fetchData=()=>{
        Axios.get("http://192.168.1.21:3000/")
        .then(response => {
            // setData(response.data)
            // console.log(response.data)
            // setLoading(false)

            dispatch({type:"ADD_DATA",payload:response.data})
            dispatch({type:"SET_LOADING",payload:false})
        })
    }
    
    //component didMount
    useEffect(() => {
     fetchData()
    }, [])
    return (
        <View style={{
            flex: 1
        }}>
            <HomeDetails data={data} navigate={navigation.navigate} loading={loading} fetchData={fetchData()}/>
        </View>
    )
}

const styles = StyleSheet.create({})

export default HomeScreen;