import React,{useState} from 'react'
import {
    View,
    StyleSheet,
    FlatList,
    Image,
    Text,
    // ActivityIndicator
} from 'react-native'
import {Card, FAB} from 'react-native-paper'
import {} from '@react-navigation/native'


const HomeDetails = ({data, navigate,loading,fetchData}) => {
   
    return (
        <View style={{
            padding: 10,
            flex:1
        }}>
            <FAB
                style={styles.fab}
                small={false}
                icon="plus"
                theme={{
                colors: {
                    accent: '#007acc'
                }
            }}
                onPress={() => navigate("Create")}/>


{
    // loading ?
    // (
    //     <ActivityIndicator size="large" color="#0000ff"/>
    // )
    // :
    // (

        <FlatList
        refreshing={loading}
        onRefresh={()=>fetchData}
        data={data}
        keyExtractor={datas => datas._id}
        // onRefresh={}
        // refreshing={loading}
        renderItem={({item}) => {
        return (
            <Card
                style={styles.cardStyle}
                onPress={() => navigate('Profile', {employee: item})}>
                <View
                    style={{
                    flexDirection: "row"
                }}>
                    <Image
                        source={{
                        uri: item.image
                    }}
                        style={{
                        width: 70,
                        height: 70,
                        borderRadius: 70 / 2
                    }}/>
                    <View>
                        <Text
                            style={{
                            fontSize: 22,
                            color: '#fff',
                            marginLeft: 20
                        }}>{item.name}</Text>
                        <Text
                            style={{
                            fontSize: 17,
                            color: '#fff',
                            marginLeft: 20,
                            fontStyle: 'italic'
                        }}>{item.position}</Text>
                    </View>
                </View>
            </Card>
        )
    }}/>
    
}

        </View>
    )
}

const styles = StyleSheet.create({
    cardStyle: {
        backgroundColor: "#d01c27",
        fontSize: 30,
        padding: 10,
        marginVertical: 10
    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
        zIndex: 1
    }
})

export default HomeDetails;