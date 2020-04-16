import React from 'react';
import {StyleSheet, Text, View, Image,TouchableOpacity} from 'react-native';
import {MaterialIcons} from "@expo/vector-icons"
import { color } from 'react-native-reanimated';
import {useTheme,useNavigation} from '@react-navigation/native'

export default CardDetails = ({data}) => {
    const {colors}=useTheme();
    const textColor=colors.textColor
    const navigation=useNavigation();
    return (
        <View style={styles.container} >
            <TouchableOpacity onPress={()=>{
            navigation.navigate("Video",{videoId:data.id.videoId})
        }}>
            <Image
                source={{
                    uri: `https://i.ytimg.com/vi/${data.id.videoId}/hqdefault.jpg`
            }}
                style={{
                width: "100%",
                height: 200
            }}/>
            <View
                style={{
                flexDirection: "row",
                margin: 5
            }}>
                <MaterialIcons name="account-circle" size={40} color="#212121"/>
                <View
                    style={{
                    marginLeft: 10,
                    flex: 1
                }}>
                    <Text
                        style={{
                        fontSize: 20,
                        color:textColor
                    }}
                        ellipsizeMode="tail"
                        numberOfLines={2}> {data.snippet.title}</Text>

                    <Text style={{  color:textColor}}> {data.snippet.channelTitle}</Text>
                </View>
            </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 20
    }
});
