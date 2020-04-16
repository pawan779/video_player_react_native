import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import Header from '../components/Header';
import Card from '../components/Card';
import {useSelector} from 'react-redux'
import { FlatList } from 'react-native-gesture-handler';
import CardDetails from '../components/CardDetails';

export default HomeScreen = () => {

    const cardData=useSelector((state)=>{
        return state.cardData

    })

    return (
        <View style={styles.container}>

            <Header/>
          <FlatList
          data={cardData}
          keyExtractor={datas=>datas.id.videoId}
          renderItem={({item})=>{
              return(<CardDetails data={item}/>)
          }}
          />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
