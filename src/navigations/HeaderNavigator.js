import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, } from 'react-native';

// custom header //
import MyHeader from '../components/MyHeader'


const HeaderNavigator = ( props ) => {

    const { scene, navigation, setSearch } = props
    const { route } = scene
    const { name } = route

    // console.log('headernavigator', scene.route)

    switch(name) {

        case 'Splash':
            return null
            break

        default:
            return ( <MyHeader route={route} navigation={navigation} setSearch={setSearch} /> )
            break
    }


}


const styles = StyleSheet.create({

    container: { 
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },

});


export default HeaderNavigator;
