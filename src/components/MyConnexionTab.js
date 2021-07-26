import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';


const MyConnexionTab = ( props ) => {

    
    const { navigation } = props;


    return (
        
        <View style={[styles.container]}>
            <View style={styles.tab}>

                <View style={{ flex: 0.5, }} />

                <TouchableOpacity
                    style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}
                    onPress={() => navigation.navigate('Register')}
                >
                    <Image
                        style={{ height: 30, width: 30, marginBottom: 5,}}
                        source={require('../../src/img/icon/movieWhite.png')}
                    />
                    <Text style={{ color: 'white', fontSize: 12,}} >inscription</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}
                    onPress={() => navigation.navigate('Loger')}
                >
                    <Image
                        style={{ height: 25, width: 25, marginBottom: 11, }}
                        source={require('../../src/img/icon/searchWhite.png')}
                    />
                    <Text style={{ color: 'white', fontSize: 12,}} >connexion</Text>
                </TouchableOpacity>

                <View style={{ flex: 0.5, }} />

            </View>
        </View>
    )

}


const styles = StyleSheet.create({

    container: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        alignItems: 'center',
    },

    tab: { 
        flexDirection: 'row',
        width: '100%',
        height: 70,
        backgroundColor: '#000',
        borderTopColor: '#a018db',
        borderTopWidth: 1,
    },

});


export default MyConnexionTab;
