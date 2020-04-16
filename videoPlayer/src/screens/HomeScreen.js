import React, {useState,useEffect} from 'react'
import {View, Text, StyleSheet,FlatList} from 'react-native'
import Header from '../components/Header'
import {DefaultTheme, FAB, Modal} from 'react-native-paper'
import {Video} from 'expo-av';
import {appleVideo} from '../../assets/a.mp4'
import api from '../api/api';
export default HomeScreen = ({navigation}) => {

    const myTheme = {
        ...DefaultTheme,
        roundness: 2,
        colors: {
            ...DefaultTheme.colors,
            accent: 'red'
        }
    }

    const [data,setData]=useState([])

    const showVideo=()=>{
        api({
            method:"get",
            url:"/"
        })
        .then((result)=>{
            console.log(result.data)
    setData(result.data)
        })
    }
  
useEffect(()=>{
showVideo()
},[])
    return (
        <View style={{
            flex: 1
        }}>
            <View>
                <Header/>
            </View>

    
            <View>
<FlatList
    data={data}
    keyExtractor={(items)=>items._id}
    renderItem={({item})=>{
    return(
        <View>
       <Video
        source={{uri:`http://192.168.1.21:3000/uploads/${item.video}`}}
        shouldPlay
        useNativeControls
        style={{ width: "100%", height: 200 }}
      />
      <Text>{item.video}</Text>
      </View>
    )
    }}
/>

            {/* <Video
        source={{ uri: 'https://file-examples.com/wp-content/uploads/2017/04/file_example_MP4_1280_10MG.mp4' }}
        shouldPlay
        useNativeControls
        style={{ width: "100%", height: "50%" }}
      /> */}
        {/* <Video
        source={require("../../assets/a.mp4")}
        shouldPlay
        useNativeControls
        style={{ width: "100%", height: "50%" }}
      /> */}
            </View>

            <FAB
                icon="plus"
                color="#fff"
                theme={myTheme}
                style={styles.fab}
                onPress={() => {
                navigation.navigate("Add")
            }}/>

        </View>
    )

}

const styles = StyleSheet.create({
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
      },
    fab: {
        position: "absolute",
        bottom: 10,
        right: 10
    }
})