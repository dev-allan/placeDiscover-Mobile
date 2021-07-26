import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';

import SplashScreen from './SplashScreen';

import MapboxGL from "@react-native-mapbox-gl/maps";
MapboxGL.setAccessToken("sk.eyJ1IjoibGVuZGVzeiIsImEiOiJja3FrcDlzbzYzc2lpMnBtdngxNzVpOHF5In0.BxvcSz7hFOONMHhz2lNLbA");

const defaultFilters = [
    {cat: 'restauration', selected: true},
    {cat: 'culture', selected: false},
    {cat: 'visit', selected: false},
    {cat: 'park', selected: false},
    {cat: 'activitie', selected: false},
    {cat: 'event', selected: false}
  ];


const HomeScreen = ( props ) => {

    const { navigation, currentPosition, search } = props

    const [ toggleMenu, setToggleMenu ] = useState(true)
    const [ catFilters, setCatFilters] = useState(defaultFilters)
    

    console.log('home', currentPosition)


    const toggleFilter = ( current ) => {
        
        let newFilters = catFilters.map( element => {
            
            if(element.cat == current) {
                element.selected = !element.selected
            }
            return element
        })

        console.log(newFilters)
        setCatFilters(newFilters)
    }


    return (

        <View style={styles.container} >

            { currentPosition == null ?
                <SplashScreen />
                :
                <MapboxGL.MapView
                    styleURL={MapboxGL.StyleURL.Street}
                    zoomLevel={16}
                    animated={true}
                    pitch={50}
                    centerCoordinate={[currentPosition.lon, currentPosition.lat]}
                    showUserLocation={true}
                    style={{flex: 1, height: '100%', width: '100%', tintColor: 'gray' }}>
                        <MapboxGL.Camera
                            zoomLevel={12}
                            centerCoordinate={[currentPosition.lon, currentPosition.lat]}
                        />
                        <MapboxGL.UserLocation 
                            showsUserHeadingIndicator={true}
                            animationMode={'flyTo'}
                            animationDuration={0.5}
                        />

                </MapboxGL.MapView>
            }

            { toggleMenu ? 

                <View style={{ position: 'absolute', top: '2%', width: '100%', height: '84%', backgroundColor: '#fff0', justifyContent: 'center', borderRadius: 24, paddingHorizontal: 5 }}>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingHorizontal: 5, marginBottom: 8 }}>
                        
                        { catFilters[0].selected === true ? 
                            <TouchableOpacity 
                                style={{ width: '48%', justifyContent: 'center', alignItems: 'center', backgroundColor: '#E21232dd', paddingHorizontal: 10, paddingVertical: 10, borderRadius: 20, elevation: 8, }}
                                onPress={ (cat) => toggleFilter('restauration')}
                            >
                                <Image
                                    style={{ height: 60, resizeMode: 'contain', }}
                                    source={require('../img/icon/pubWhite.png')}
                                />
                                <Text style={{ color: '#fff', fontSize: 20, fontWeight: 'bold',  }}>Restauration</Text>
                            </TouchableOpacity>
                        :
                            <TouchableOpacity 
                                style={{ width: '48%', justifyContent: 'center', alignItems: 'center', backgroundColor: '#fffe', paddingHorizontal: 10, paddingVertical: 10, borderRadius: 20, elevation: 8, }}
                                onPress={ (cat) => toggleFilter('restauration')}
                            >
                                <Image
                                    style={{ height: 60, resizeMode: 'contain', }}
                                    source={require('../img/icon/pubRed.png')}
                                />
                                <Text style={{ color: '#E21232', fontSize: 20, fontWeight: 'bold',  }}>Restauration</Text>
                            </TouchableOpacity>
                        }

                        { catFilters[1].selected === true ? 
                            <TouchableOpacity 
                                style={{ width: '48%', justifyContent: 'center', alignItems: 'center', backgroundColor: '#E21232dd', paddingHorizontal: 10, paddingVertical: 10, borderRadius: 20, elevation: 8, }}
                                onPress={ (cat) => toggleFilter('culture')}
                            >
                                <Image
                                    style={{ height: 60, resizeMode: 'contain', }}
                                    source={require('../img/icon/museumWhite.png')}
                                />
                                <Text style={{ color: '#fff', fontSize: 20, fontWeight: 'bold',  }}>culture</Text>
                            </TouchableOpacity>
                        :
                            <TouchableOpacity 
                                style={{ width: '48%', justifyContent: 'center', alignItems: 'center', backgroundColor: '#fffe', paddingHorizontal: 10, paddingVertical: 10, borderRadius: 20, elevation: 8, }}
                                onPress={ (cat) => toggleFilter('culture')}
                            >
                                <Image
                                    style={{ height: 60, resizeMode: 'contain', }}
                                    source={require('../img/icon/museumRed.png')}
                                />
                                <Text style={{ color: '#E21232', fontSize: 20, fontWeight: 'bold',  }}>culture</Text>
                            </TouchableOpacity>
                        }

                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingHorizontal: 5, marginBottom: 8 }}>
                        
                        { catFilters[2].selected === true ? 
                            <TouchableOpacity 
                                style={{ width: '48%', justifyContent: 'center', alignItems: 'center', backgroundColor: '#E21232dd', paddingHorizontal: 10, paddingVertical: 10, borderRadius: 20, elevation: 8, }}
                                onPress={ (cat) => toggleFilter('visit')}
                            >
                                <Image
                                    style={{ height: 60, resizeMode: 'contain', }}
                                    source={require('../img/icon/visitWhite.png')}
                                />
                                <Text style={{ color: '#fff', fontSize: 20, fontWeight: 'bold',  }}>visite</Text>
                            </TouchableOpacity>
                        :
                            <TouchableOpacity 
                                style={{ width: '48%', justifyContent: 'center', alignItems: 'center', backgroundColor: '#fffe', paddingHorizontal: 10, paddingVertical: 10, borderRadius: 20, elevation: 8, }}
                                onPress={ (cat) => toggleFilter('visit')}
                            >
                                <Image
                                    style={{ height: 60, resizeMode: 'contain', }}
                                    source={require('../img/icon/visitRed.png')}
                                />
                                <Text style={{ color: '#E21232', fontSize: 20, fontWeight: 'bold',  }}>visite</Text>
                            </TouchableOpacity>
                        }

                        { catFilters[3].selected === true ? 
                            <TouchableOpacity 
                                style={{ width: '48%', justifyContent: 'center', alignItems: 'center', backgroundColor: '#E21232dd', paddingHorizontal: 10, paddingVertical: 10, borderRadius: 20, elevation: 8, }}
                                onPress={ (cat) => toggleFilter('park')}
                            >
                                <Image
                                    style={{ height: 60, resizeMode: 'contain', }}
                                    source={require('../img/icon/parkWhite.png')}
                                />
                                <Text style={{ color: '#fff', fontSize: 20, fontWeight: 'bold',  }}>détente</Text>
                            </TouchableOpacity>
                        :
                            <TouchableOpacity 
                                style={{ width: '48%', justifyContent: 'center', alignItems: 'center', backgroundColor: '#fffe', paddingHorizontal: 10, paddingVertical: 10, borderRadius: 20, elevation: 8, }}
                                onPress={ (cat) => toggleFilter('park')}
                            >
                                <Image
                                    style={{ height: 60, resizeMode: 'contain', }}
                                    source={require('../img/icon/parkRed.png')}
                                />
                                <Text style={{ color: '#E21232', fontSize: 20, fontWeight: 'bold',  }}>détente</Text>
                            </TouchableOpacity>
                        }
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingHorizontal: 5, marginBottom: 0 }}>
                        
                        { catFilters[4].selected === true ? 
                            <TouchableOpacity 
                                style={{ width: '48%', justifyContent: 'center', alignItems: 'center', backgroundColor: '#E21232dd', paddingHorizontal: 10, paddingVertical: 10, borderRadius: 20, elevation: 8, }}
                                onPress={ (cat) => toggleFilter('activitie')}
                            >
                                <Image
                                    style={{ height: 60, resizeMode: 'contain', }}
                                    source={require('../img/icon/sportWhite.png')}
                                />
                                <Text style={{ color: '#fff', fontSize: 20, fontWeight: 'bold',  }}>activités</Text>
                            </TouchableOpacity>
                        :
                            <TouchableOpacity 
                                style={{ width: '48%', justifyContent: 'center', alignItems: 'center', backgroundColor: '#fffe', paddingHorizontal: 10, paddingVertical: 10, borderRadius: 20, elevation: 8, }}
                                onPress={ (cat) => toggleFilter('activitie')}
                            >
                                <Image
                                    style={{ height: 60, resizeMode: 'contain', }}
                                    source={require('../img/icon/sportRed.png')}
                                />
                                <Text style={{ color: '#E21232', fontSize: 20, fontWeight: 'bold',  }}>activités</Text>
                            </TouchableOpacity>
                        }

                        { catFilters[5].selected === true ? 
                            <TouchableOpacity 
                                style={{ width: '48%', justifyContent: 'center', alignItems: 'center', backgroundColor: '#E21232dd', paddingHorizontal: 10, paddingVertical: 10, borderRadius: 20, elevation: 8, }}
                                onPress={ (cat) => toggleFilter('event')}
                            >
                                <Image
                                    style={{ height: 60, resizeMode: 'contain', }}
                                    source={require('../img/icon/museumWhite.png')}
                                />
                                <Text style={{ color: '#fff', fontSize: 20, fontWeight: 'bold',  }}>événement</Text>
                            </TouchableOpacity>
                        :
                            <TouchableOpacity 
                                style={{ width: '48%', justifyContent: 'center', alignItems: 'center', backgroundColor: '#fffe', paddingHorizontal: 10, paddingVertical: 10, borderRadius: 20, elevation: 8, }}
                                onPress={ (cat) => toggleFilter('event')}
                            >
                                <Image
                                    style={{ height: 60, resizeMode: 'contain', }}
                                    source={require('../img/icon/museumRed.png')}
                                />
                                <Text style={{ color: '#E21232', fontSize: 20, fontWeight: 'bold',  }}>événement</Text>
                            </TouchableOpacity>
                        }
                    </View>
                    


                </View>
            : null }

            <View style={{ position: 'absolute', bottom: '4%', width: '100%', paddingHorizontal: '4.5%'}}>
            

                <View style={{ flexDirection: 'row', backgroundColor: '#E21232', borderRadius: 10, elevation: 5 }}>
                    
                    <TouchableOpacity
                        style={{ flex: 2, justifyContent: 'center', alignItems: 'center', borderRightColor: '#fff8', borderRightWidth: 1}}
                        onPress={() => navigation.navigate('Filter', { actualFilters: catFilters})}
                    >
                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#fff', backgroundColor: '#E21232', paddingVertical: 10, paddingHorizontal: 15, borderRadius: 10 }}>maintenant</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}
                        onPress={() => setToggleMenu(!toggleMenu)}
                    >
                        <Image
                            style={{ height: 18, width: 18, resizeMode: 'contain'}}
                            source={require('../img/icon/menuWhite.png')}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{ flex: 2, justifyContent: 'center', alignItems: 'center', borderLeftColor: '#fff8', borderLeftWidth: 1}}
                        onPress={() => navigation.navigate('Filter', { actualFilters: catFilters})}
                    >
                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#fff', paddingVertical: 10, paddingHorizontal: 15, borderRadius: 10 }}>ce soir</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    )

}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff'
    },
    
});


export default HomeScreen;