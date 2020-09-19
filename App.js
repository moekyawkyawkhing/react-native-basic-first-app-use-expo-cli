import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, SafeAreaView, Button, Alert, Image, Platform, View } from 'react-native';
import { useDeviceOrientation } from '@react-native-community/hooks'
import WelcomeViewImage from './app/components/WelcomeViewImage';

export default function App() {
  const orientation = useDeviceOrientation();

  return (
    <SafeAreaView style={styles.container}>
    {
      /*
      <Button
        title="hello"
        onPress={()=>Alert.alert('Title', 'content', [
          { text : "Yes", onPress : () => alert("Yes") },
          { text : "No", onPress : () => alert("No") }
        ] )}
      />
      <Image
        style={{ width: '100%', height: 200, marginTop: 10 }}
        source = {
          {
            uri : 'https://cdn.pixabay.com/photo/2020/06/26/00/25/summer-5341326__340.jpg'
          }
        }
       />
      */
    }
    {
      /* Orientation */
      /*
      <View
        style = {{
          backgroundColor: 'orange',
          height: orientation.landscape ? '100%' : '30%',
          width: '100%'
        }}
      >
      </View>
      */
    }
    {
      /* Flex Box */
      /*
        <View
          style = {{
            flex: 1,
            backgroundColor: 'pink',
            flexDirection : 'row', // default - column
            justifyContent : 'center', // main axis
            alignItems : 'center', // cross axis
            flexWrap : 'wrap',
            alignContent : 'center' // alignContent work when flexWrap is wrap
          }}
        >
          <View style= {{
              backgroundColor: 'red',
              flexBasic : 1, // width or height
              width : 100,
              height : 300,
              alignSelf : 'flex-start', // indivitual item
          }}
          />
          <View style= {{
              backgroundColor: 'green',
              width : 100,
              height : 200,
              top : 20,
              right : 50,
              position : 'absolute', // default - relative
          }}
          />
          <View style= {{
              backgroundColor: 'blue',
              width : 100,
              height : 200
          }}
          />
          <View style= {{
              backgroundColor: 'orange',
              width : 100,
              height : 200
          }}
          />
          <View style= {{
              backgroundColor: 'black',
              width : 100,
              height : 200
          }}
          />
        </View>
      */
    }
    { /* start backgroundViewImage */ }
      <WelcomeViewImage/>
    { /* end backgroundViewImage */ }
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop : Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
});
