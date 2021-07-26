import React,  { useState, useEffect } from 'react';
import {StyleSheet, StatusBar } from 'react-native';


// splash screen //
import SplashScreen from './src/screens/SplashScreen';

// navigation //
import { NavigationContainer } from '@react-navigation/native';
import MainStackNavigator from './src/navigations/MainStackNavigator'

// redux //
import {Provider} from 'react-redux';
import store from './src/stores/store';

// database //
import { getUserTable, getPreferenceTable } from './src/database/RealmDB';
import { objectId } from 'bson'; // génère l'objectId de la table

// maps //
import Geolocation from '@react-native-community/geolocation';
// Geolocation.setRNConfiguration();
// Geolocation.requestAuthorization();



const App = () => {

	const [ currentPosition, setCurrentPosition ] =  useState(null);
	const [ permissionIsGranted, setPermissionIsGranted ] =  useState(false);

	const [ search, setSearch ] = useState('restaurant');


	const RequestPermision = async () => {

        const permission = await MapboxGL.requestAndroidLocationPermissions();
		console.log('perm', permission)
        setPermissionIsGranted(true)
    } 


	useEffect(() => {

		Geolocation.getCurrentPosition(data => {

			const position = { lat: data.coords.latitude, lon: data.coords.longitude }
			console.log('current : ',position)
			setCurrentPosition(position)

		},
		(error => alert("Le gps est éteind..")
		))

	}, []);


    return (

		<Provider store={store}>

			<NavigationContainer>
				
				<StatusBar backgroundColor="#033245"  hidden={true}/>
				<MainStackNavigator currentPosition={currentPosition} setSearch={setSearch} search={search} />

			</NavigationContainer>

		</Provider>

    );
};


export default App;
