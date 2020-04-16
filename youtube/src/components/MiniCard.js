import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {MaterialIcons} from "@expo/vector-icons"
import {useTheme, useNavigation} from '@react-navigation/native'
import {color} from 'react-native-reanimated';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default MiniCard = ({data}) => {
    const {colors} = useTheme();
    const textColor = colors.textColor
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => {
                navigation.navigate("Video", {videoId: data.id.videoId})
            }}>
                <View style={{
                    flexDirection: "row"
                }}>

                    <Image
                        source={{
                        uri: `https://i.ytimg.com/vi/${data.id.videoId}/hqdefault.jpg`
                    }}
                        style={{
                        width: "45%",
                        height: 100,
                        margin: 10,
                        borderRadius: 5
                    }}/>

                    <View
                        style={{
                        marginTop: 10,
                        flex: 1,
                        marginRight: 3
                    }}>
                        <Text
                            style={{
                            fontSize: 18,
                            color: textColor
                        }}
                            ellipsizeMode="tail"
                            numberOfLines={3}>{data.snippet.title}</Text>

                        <Text
                            style={{
                            color: textColor
                        }}>
                            {data.snippet.channelTitle}
                        </Text>
                        <Text
                            style={{
                            color: textColor
                        }}>
                            1,000,000 Views
                        </Text>
                    </View>

                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({container: {}});
