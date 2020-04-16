import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {WebView} from 'react-native-webview'
import Constant from 'expo-constants'

export default VideoScreen=({route})=> {
  const video=route.params.videoId
  return (
    <View style={styles.container}>
     <View style={{
       height:200,
       width:"100%"
     }}>

       <WebView
       javaScriptEnabled
       domStorageEnabled
source={{uri:`https://www.youtube.com/embed/${video}`}}
       />

     </View>

     <Text sty>

     </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  marginTop:Constant.statusBarHeight,
  flex:1
  },
});
