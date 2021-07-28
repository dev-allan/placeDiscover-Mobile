import { NavigationContainer } from '@react-navigation/native';
import React, { useRef } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ImageBackground, Image, Animated, Button } from 'react-native';


const SplashScreen = ( props ) => {
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const { navigation } = props;

    // Configuration de l'animation, apparition en fondu du logo et du menu
    Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: false
    }).start();

    return (

        <ImageBackground
            style={styles.container}
            source={require('../img/bg/Amiens2.png')}
        >
            <Animated.View
                style={[
                    {
                        opacity: fadeAnim
                    }
                ]}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <View style={{ backgroundColor: '#E21232dd', padding: 10, marginBottom: 30, justifyContent: 'center', alignItems: 'center', borderRadius: 10, elevation: 5, width:'100%', height: '80%', marginLeft: 'auto', marginRight: 'auto' }} >
                        <Image
                            style={{ height: '40%', width: '80%', resizeMode: 'contain', opacity: 0.9 }}
                            source={require('../img/icon/mapWhite.png')}
                        />
                        <Text style={{ fontSize: 90, color: 'white' }}>WHAT</Text>
                        <Text style={{ fontSize: 50, color: 'white' }}>AROUND ?!</Text>
                    </View>
                </TouchableOpacity>
            </Animated.View>

        </ImageBackground>
    )

}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        resizeMode: 'cover',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff'
    },
    
});


export default SplashScreen;