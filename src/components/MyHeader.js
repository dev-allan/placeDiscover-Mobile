import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, TextInput, } from 'react-native';


const MyHeader = ( props ) => {

    const { route, navigation, setSearch, search } = props
    const { name } = route

    console.log('myheader', props)
    // ['#033245', '#084A65']


    const updateSearch = (search) => {
		console.log(search)
		setSearch(search)
	}

    return (
        
        <View style={[styles.container, { minHeight: 70, paddingBottom: 8, }]}>

            <Text style={{ color: '#fff', fontSize: 36, fontWeight: 'bold', marginVertical: 5}}>WHAT AROUND ..!?</Text>
            
            <View style={{ flexDirection: 'row',}}>
                {/* <TouchableOpacity 
                    style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}
                    onPress={ () => navigation.goBack()}
                >
                    <Image
                        style={{ height: 25, width: 25, resizeMode: 'contain'}}
                        source={require('../img/icon/arrowBackWhite.png')}
                    />
                </TouchableOpacity> */}

                {/* <View style={{ flex: 4, justifyContent: 'center', alignItems: 'center'}}>
                    <Text numberOfLines={1} style={{ color: '#fff', fontSize: 16, textAlign: 'center', }}>{name}</Text>
                </View> */}

                <View style={{ flex: 4, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 10,}}>
                    <TextInput
                        style={{ width: '100%', backgroundColor: '#fff', color: '#444', borderRadius: 10, paddingHorizontal: 20}}
                        onChangeText={(search) => updateSearch(search)}
                        // onSubmitEditing={(search) => updateSearch(search)}
                        value={search}
                        placeholder="Qu'est ce qu'il y a autour de moi ..?"
                        placeholderTextColor='#555'
                    />
                </View>

                {/* <View style={{ flex: 1,}}>
                    
                </View> */}
            </View>

        </View>

    )
}


const styles = StyleSheet.create({

    container: { 
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E21232',
        borderBottomColor: '#C50B28',
        borderBottomWidth: 1,
        elevation: 5,
    },

});


export default MyHeader;
