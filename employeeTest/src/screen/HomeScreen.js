import React, {useState, useEffect} from 'react'
import {
    View,
    StyleSheet,
    Text,
    Image,
    ScrollView,
    FlatList,
    Alert
} from 'react-native'
import {FAB, Card, TextInput} from 'react-native-paper'
import {Feather} from '@expo/vector-icons'
import Axios from 'axios'
import yelp from '../api/yelp'
import SearchView from '../components/SearchView'

const HomeScreen = ({navigation}) => {
    const [data,
        setData] = useState([])

    const [refreshed,
        setRefresh] = useState(true)

    const [search,
        setSearch] = useState('')
    const fetchData = (searchValue) => {
        // yelp
        //     .get("/")
        //     .then((response) => {
        //         setData(response.data)
               
        //     })
        yelp
        .get(`/search/${searchValue}`)
        .then((result) => {
           console.log(result.data.length)
           setRefresh(false)
           setData(result.data)


           if(result.data.length<1)
           {
               Alert.alert("No data found")
               fetchData("pr")
           }
        })
        .catch((err)=>{
            Alert.alert("Something went wrong!!")
        })
    }

   


    useEffect(() => {
        fetchData("pr")
    }, [])

    return (
        <View style={{
            flex: 1
        }}>

            <View style={styles.serach}>
                <Feather name="search" size={30}/>
                <TextInput
                    placeholder="search"
                    placeholderTextColor="#000"
                    value={search}
                    onChangeText={(text) => setSearch(text)}
                    onEndEditing={() => fetchData(search)}
                    style={styles.text}/>
            </View>

            <FAB
                style={styles.fab}
                icon="plus"
                small={false}
                theme={{
                colors: {
                    accent: "#ff0000"
                }
            }}
                onPress={() => navigation.navigate("Create")}/>

            <FlatList
                onRefresh={() => fetchData()}
                refreshing={refreshed}
                data={data}
                keyExtractor={(datas) => datas._id}
                renderItem={({item}) => {
                return (
                    <Card onPress={()=>{
                        navigation.navigate("Profile",{employee:item})
                    }}>
                        <Image
                            source={{
                            uri: item.image
                        }}
                            style={{
                            width: 220,
                            height: 220,
                            borderRadius:5,
                            marginLeft:20
                        }}/>
                        <Text>{item.name}</Text>
                    </Card>
                )
            }}/>
        </View>
    )
}

const styles = StyleSheet.create({
    serach: {
        backgroundColor: "#c0c0c0",
        height: 50,
        flexDirection: "row",
        alignItems: "center",
        margin: 10,
        borderRadius: 5
    },
    text: {
        flex: 1,
        backgroundColor: "#c0c0c0",
        fontSize: 20
    },
    fab: {
        position: "absolute",
        bottom: 20,
        right: 20,
        zIndex: 1
    }
})

export default HomeScreen;
