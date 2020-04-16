import React from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import CardDetails from './CardDetails';

export default Card = () => {
    return (

        <View style={{}}>
         
                <CardDetails
                    image="https://images.unsplash.com/photo-1496715976403-7e36dc43f17b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
                    title="Hello this is sample image"
                    subTitle="Hello this is subtitle"/>

                <CardDetails
                    image="https://images.unsplash.com/photo-1496715976403-7e36dc43f17b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
                    title="Hello this is sample image"
                    subTitle="Hello this is subtitle"/>
                <CardDetails
                    image="https://images.unsplash.com/photo-1496715976403-7e36dc43f17b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
                    title="Hello this is sample image"
                    subTitle="Hello this is subtitle"/>
                <CardDetails
                    image="https://images.unsplash.com/photo-1496715976403-7e36dc43f17b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
                    title="Hello this is sample image"
                    subTitle="Hello this is subtitle"/>
        </View>

    );
}

const styles = StyleSheet.create({container: {}});