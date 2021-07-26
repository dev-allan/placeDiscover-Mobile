import React, { useState} from 'react'
import { createStackNavigator } from '@react-navigation/stack'

// custom header and screens //
import HeaderNavigator from './HeaderNavigator'

import SplashScreen from '../screens/SplashScreen'
import HomeScreen from '../screens/HomeScreen'
import FilterScreen from '../screens/FilterScreen'
import LoginScreen from '../screens/LoginScreen'
import RegisterScreen from '../screens/RegisterScreen'
import RegisterScreen2 from '../screens/RegisterScreen2'


const Stack = createStackNavigator();


const MainStackNavigator = ( props ) => {

    const { currentPosition, search, setSearch } = props
    
    return (
        
        <Stack.Navigator
            initialRouteName='Splash'
        >

            <Stack.Screen
                name="Splash"
                options={{ 
                    title: 'Splash',
                    header: (props) => <HeaderNavigator {...props} />,
                }}
            >
                {props => <SplashScreen {...props} currentPosition={currentPosition} />}
            </Stack.Screen>

            <Stack.Screen
                name="Home"
                options={{ 
                    title: 'Accueil',
                    header: (props) => <HeaderNavigator {...props} setSearch={setSearch} search={search} />,
                }}
            >
                {props => <HomeScreen {...props} currentPosition={currentPosition} />}
            </Stack.Screen>

            <Stack.Screen
                name="Filter"
                options={{ 
                    title: 'FIltres',
                    header: (props) => <HeaderNavigator {...props} setSearch={setSearch} search={search} />,
                }}
            >
                {props => <FilterScreen {...props} currentPosition={currentPosition} setSearch={setSearch} search={search} />}
            </Stack.Screen>

            <Stack.Screen
                name="Login"
                options={{ 
                    title: 'Connexion',
                    header: (props) => <HeaderNavigator {...props}  />,
                }}
            >
                {props => <LoginScreen {...props} />}
            </Stack.Screen>

            <Stack.Screen
                name="Register"
                options={{ 
                    title: 'Inscription',
                    header: (props) => <HeaderNavigator {...props}  />,
                }}
            >
                {props => <RegisterScreen {...props} />}
            </Stack.Screen>

            <Stack.Screen
                name="Register2"
                options={{ 
                    title: 'Inscription2',
                    header: (props) => <HeaderNavigator {...props}  />,
                }}
            >
                {props => <RegisterScreen2 {...props} />}
            </Stack.Screen>
        
        </Stack.Navigator>

    );
};

export default MainStackNavigator;
