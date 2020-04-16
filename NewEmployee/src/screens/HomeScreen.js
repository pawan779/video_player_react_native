import React, {useState, useEffect} from 'react'
import {StyleSheet, View, Text, Alert} from 'react-native'
import SearchBar from '../componnents/SearchBar'
import api from '../api/api'
import SearchDetails from '../componnents/SearchDetails'
import {useSelector,useDispatch} from 'react-redux'

const HomeScreen = () => {
    const [search,
        setSearch] = useState('')
        
        const {data,loading}=useSelector((state)=>{
            return state
        })
        
        const dispatch=useDispatch()


    // const [data,
    //     setData] = useState([])

    //     const[loading,setLoading]=useState(true)

    const searchResult = ((searchValue) => {
        api
            .get(`/search/${searchValue}`)
            .then((result) => {
                // setData(result.data)
                // setLoading(false)

                dispatch({type:"ADD_DATA",payload:result.data})
                dispatch({type:"SET_LOADING",payload:false})
            })
            .catch((err) => {
                console.log(err)
            })
    })

    useEffect(() => {
        searchResult("a")
    }, [])

    return (
        <View>

            <SearchBar
                value={search}
                onChange={(text) => setSearch(text)}
                onEditing={() => searchResult(search)}/>

            <SearchDetails value={data} load={loading} onEditing={() => searchResult(search)}/>

        </View>
    )

}

const styles = StyleSheet.create({})

export default HomeScreen;