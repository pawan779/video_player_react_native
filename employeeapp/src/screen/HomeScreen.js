import React from 'react'
import {View, StyleSheet} from 'react-native'

import HomeDetails from '../components/HomeDetails'

const HomeScreen = ({navigation}) => {
    const employees=[
      
        {id:"1",name:'beard man1',email:"beardman1@gmail.com",phone:"9849758616",salary:"10 lakh rupees",position:'web developer',image:'https://images.unsplash.com/flagged/photo-1578848151039-b8916d7c1c34?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'},
        {id:'2',name:'beard man2',email:"beardman2@gmail.com",phone:"9849758616",salary:"10 lakh rupees",position:'mobile app developer',image:'https://images.unsplash.com/flagged/photo-1578848151039-b8916d7c1c34?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'},
        {id:'3',name:'beard man3',email:"beardman3@gmail.com",phone:"9849758616",salary:"10 lakh rupees",position:'fontend developer',image:'https://images.unsplash.com/flagged/photo-1578848151039-b8916d7c1c34?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'},
        {id:'4',name:'beard man4',email:"beardman4@gmail.com",phone:"9849758616",salary:"10 lakh rupees",position:'backend developer',image:'https://images.unsplash.com/flagged/photo-1578848151039-b8916d7c1c34?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'},
    ]
    return (
       <View style={{flex:1}}>
        <HomeDetails 
        data={employees}
        navigate={navigation.navigate}
        />
       </View>
    )
}

const styles = StyleSheet.create({
   
})

export default HomeScreen;