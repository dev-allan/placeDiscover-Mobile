import React from 'react';
import { StyleSheet, SafeAreaView, View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';


const LoginScreen = ( props ) => {


    return (

        <View style={styles.container}>
            <Text style={{ color: '#a018db', }}>LoginScreen</Text>
        </View>
    )

}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000'
    },
    
});


export default LoginScreen;