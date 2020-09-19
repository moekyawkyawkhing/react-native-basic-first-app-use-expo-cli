import React from 'react';
import { ImageBackground, StyleSheet, View, Image, Text } from 'react-native';

const WelcomeViewImage = () => {
    return (
        <View style={styles.container}>
            <ImageBackground source={{
                uri: 'https://cdn.pixabay.com/photo/2020/09/13/13/00/charles-bridge-5568178__340.jpg'
            }}
                style={styles.image}>
                <View style={styles.logoContainer}>
                    <Image source={{
                        uri: 'https://cdn.pixabay.com/photo/2015/05/19/07/44/browser-773215__340.png'
                    }}
                        style={styles.logo} />
                     <Text>
                        This is background image view.
                    </Text>
                </View>
                <View style={styles.footerContainer}>
                    <View style={styles.footer1}></View>
                    <View style={styles.footer2}></View>
                </View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column"
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center'
    },
    logo: {
        width: 100,
        height: 100,
        alignSelf: 'center'
    },
    logoContainer: {
        position: 'absolute',
        top: 50,
        alignSelf: 'center',
        justifyContent: 'center'
    },
    footerContainer: {
        flex: 1,
        justifyContent: 'flex-end'
    },  
    footer1: {
        backgroundColor: 'orange',
        height: 50
    },
    footer2: {
        backgroundColor: 'green',
        height: 50,
        marginTop: 5
    }
})
export default WelcomeViewImage;