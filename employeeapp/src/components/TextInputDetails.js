import React from 'react'
import {View, StyleSheet} from 'react-native'
import {TextInput, Button} from 'react-native-paper'

const TextInputDetails = ({title, value, onChange, type}) => {
    return (
        <View>
            <TextInput
                style={styles.textStyle}
                label={title}
                keyboardType={type}
                mode="outlined"
                theme={theme}
                value={value}
                onChangeText={onChange}/>
        </View>
    )
}

const theme = {
    colors: {
        primary: "blue"
    }
}
const styles = StyleSheet.create({
    textStyle: {
        marginHorizontal: 10,
        marginVertical: 5
    }
})

export default TextInputDetails;