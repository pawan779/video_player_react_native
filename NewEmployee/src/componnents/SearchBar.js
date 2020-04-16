import React from 'react'
import {StyleSheet, View, Text, TextInput} from 'react-native'
import {Feather} from '@expo/vector-icons'

const SearchBar = ({value, onChange, onEditing}) => {
    return (
        <View style={styles.serachBox}>
            <Feather
                name="search"
                size={30}
                style={{
                marginLeft: 10
            }}/>
            <TextInput
                placeholder="Search"
                value={value}
                onChangeText={onChange}
                onEndEditing={onEditing}
                placeholderTextColor="#000"
                style={styles.search}/>
        </View>
    )

}

const styles = StyleSheet.create({
    serachBox: {
        backgroundColor: "#d8d8d8",
        flexDirection: "row",
        alignItems: "center"

    },
    search: {
        flex: 1,
        height: 50,
        fontSize: 20,
        marginLeft: 10
    }
})

export default SearchBar;