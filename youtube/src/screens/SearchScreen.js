import React, {useState, useEffect} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    ScrollView,
    FlatList
} from 'react-native';
import {Ionicons, MaterialIcons} from '@expo/vector-icons'
import Constant from "expo-constants"
import MiniCard from '../components/MiniCard';
import Axios from 'axios';
import {useNavigation,useTheme} from '@react-navigation/native'
import {useSelector,useDispatch} from 'react-redux'
import { color } from 'react-native-reanimated';

// https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=rea
// ct&type=video&key=AIzaSyD5Pb00LDUmms8dYvC__2RAD5eDcjdCrhs

export default SearchScreen = () => {
    const navigation=useNavigation();
    const {colors}=useTheme();


    const [value,
        setValue] = useState('')

        const dispatch=useDispatch();
        const miniCardData=useSelector((state)=>{
            return state.cardData
        })

    // const [miniCardData,
    //     setMiniCard] = useState([])
    // const [loading,
    //     setLoading] = useState(true)

    const handleData = (value) => {

        fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${value}&type=video&key=AIzaSyCB2-ERWjcvvBAaKtGW_ttC3ssjhj7r7zM`)
            .then(res => res.json())
            .then((response) => {
                console.log(response)
                dispatch({type:"ADD",payload:response.items})
                // dispatch({type:"LOADING",payload:false})
                // setMiniCard(response.items)
                // setLoading(false)

            })
            .catch((err) => {
                console.log(err)
            })
    }
    //     useEffect(()=>{ handleData("react native")     },[])

    return (
        <View style={styles.container}>
            <View
                style={{
                flexDirection: "row",
                elevation: 4,
                height: 60,
                alignItems: "center",
                shadowOffset: {
                    width: 1,
                    height: 1
                },
                shadowColor: "#212121",
                shadowOpacity: 0.2,
                backgroundColor:colors.headerColor,
            }}>
                <Ionicons
                    name="md-arrow-back"
                    size={27}
                    color={colors.iconColor}
                    style={{
                    marginHorizontal: 10
                   
                }}
                onPress={()=>{navigation.goBack()}}/>
                <TextInput
                    value={value}
                    placeholder="Search YouTube"
                    placeholderTextColor={colors.textColor}
                    keyboardType="web-search"
                    onChangeText={(text) => setValue(text)}
                    onEndEditing={() => {
                    handleData(value)
                }}
                    style={{
                    flex: 1,
                    fontSize: 18,
                    color:colors.textColor
                }}/>

                <MaterialIcons name="keyboard-voice" size={27} color={colors.iconColor}/>
            </View>

            <FlatList
                data={miniCardData}
                keyExtractor={datas => datas.id.videoId}
                renderItem={({item}) => {
                return (< MiniCard data = {
                    item
                } />)
            }}/>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Constant.statusBarHeight
    }
});
