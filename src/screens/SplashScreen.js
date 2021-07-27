import { NavigationContainer } from '@react-navigation/native';
import React, { useRef } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ImageBackground, Image, Animated, Button } from 'react-native';


const SplashScreen = ( props ) => {
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const { navigation } = props;

        // Will change fadeAnim value to 1 in 5 seconds
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
                        // Bind opacity to animated value
                        opacity: fadeAnim
                    }
                ]}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <View style={{ backgroundColor: '#E21232dd', padding: 10, marginBottom: 30, justifyContent: 'center', alignItems: 'center', borderRadius: 10, elevation: 5, width:'80%', marginLeft: 'auto', marginRight: 'auto' }} >
                        <Image
                            style={{ height: '40%', width: '80%', resizeMode: 'contain', opacity: 0.9 }}
                            source={require('../img/icon/mapWhite.png')}
                        />
                        <Text style={{ fontSize: 90, color: 'white' }}>WHAT</Text>
                        <Text style={{ fontSize: 50, color: 'white' }}>AROUND ?!</Text>
                    </View>
                </TouchableOpacity>

                {/* <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <View style={{ backgroundColor: '#E21232dd', padding: 10, marginBottom: 30, justifyContent: 'center', alignItems: 'center', borderRadius: 10, elevation: 5}} >
                    <Image
                        style={{ height: '40%', width: '80%', resizeMode: 'contain', opacity: 0.9 }}
                        source={require('../img/icon/mapWhite.png')} 
                    />
                    <Text style={{ fontSize: 90 , color: 'white'}}>WHAT</Text>
                    <Text style={{ fontSize: 50, color: 'white'}}>AROUND ?!</Text>
                </View>
            </TouchableOpacity> */}

                <View style={{ width : '90%', flexDirection: 'row', backgroundColor: '#E21232', borderRadius: 10, marginHorizontal: '4%', elevation: 5 }}>

                    <TouchableOpacity
                        style={{ flex: 2, justifyContent: 'center', alignItems: 'center', borderRightColor: '#fff8', borderRightWidth: 1 }}
                        onPress={() => navigation.navigate('Register')}
                    >
                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#fff', backgroundColor: '#E21232', paddingVertical: 10, paddingHorizontal: 15, borderRadius: 10 }}>inscription</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{ flex: 2, justifyContent: 'center', alignItems: 'center', }}
                        onPress={() => navigation.navigate('Home')}
                    >
                        <Image
                            style={{ height: 25, width: 25, resizeMode: 'contain' }}
                            source={require('../img/icon/mapWhite.png')}
                        />
                        {/* <Text style={{ color: '#fff', }}>Entrez</Text> */}
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{ flex: 2, justifyContent: 'center', alignItems: 'center', borderLeftColor: '#fff8', borderLeftWidth: 1 }}
                        onPress={() => navigation.navigate('Login')}
                    >
                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#fff', paddingVertical: 10, paddingHorizontal: 15, borderRadius: 10 }}>connexion</Text>
                    </TouchableOpacity>
                </View>
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