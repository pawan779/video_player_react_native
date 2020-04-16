import React from 'react'
import {StyleSheet, View, Text, Image,FlatList} from 'react-native'
import {Card} from 'react-native-paper'

const SearchDetails = ({value, load,onEditing}) => {
    console.log(load)
    return (
        <View>

            <FlatList
                data={value}
                onRefresh={onEditing}
                refreshing={load}
                keyExtractor={data => data._id}
                renderItem={({item}) => {
                return (
                    <Card>
                        <Text>{item.name}</Text>
                        <Image
                            source={{
                            uri: item.image
                        }}
                            style={{
                            width: 150,
                            height: 150
                        }}/>
                    </Card>
                )
            }}/>

        </View>
    )

}

const styles = StyleSheet.create({})

export default SearchDetails;