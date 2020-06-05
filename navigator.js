
import React from 'react'
import {Platform, View, TouchableNativeFeedback, TouchableOpacity} from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from './screens/HomeScreen'
import LeagueScreen from './screens/LeagueScreen'
import MatchStreaming from './screens/MatchStreaming'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context'

export default NavigationWrapper =()=>{
    const Stack = createStackNavigator()

    const BackHeaderIcon =(navigation)=>{
        return (
            <TouchableOpacity style={{marginLeft: 8}} onPress={()=> navigation.goBack()}>
            <MaterialIcons color={Platform.OS === 'android' ? 'white' : '#5c65f1'} name='keyboard-backspace' size={35}/>
            </TouchableOpacity>
        )
    }

    const LeagueNav =()=>{
        return (
            <Stack.Navigator>
                <Stack.Screen name='League' 
                component={LeagueScreen}  
                options={({route, navigation})=> ({
                        title: route.params.leagueTitle,
                        headerTitleAlign: 'center',
                        headerLeft: ()=> BackHeaderIcon(navigation),
                        headerStyle:{
                            backgroundColor: Platform.OS === 'android' ? '#5c65f1' : '',
                        },
                        headerTintColor: Platform.OS === 'android' ? 'white' : '#5c65f1',

                    })}
                />
           
            </Stack.Navigator>
        )
    }

    const MainNav =()=>{
        return (
            <Stack.Navigator
            initialRouteName='Home'
            >
                <Stack.Screen
                name='Home' 
                component={HomeScreen}
                options={{
                    headerShown:false
                }}
                />

                <Stack.Screen
                name='StreamingHome' 
                component={MatchStreaming}
                options={({navigation})=> ({
                    headerShown: false
                })}
                />
                <Stack.Screen 
                name='LeagueNav' 
                component={LeagueScreen}
                options={({route, navigation})=> ({
                    title: route.params.leagueTitle,
                    headerTitleAlign: 'center',
                    headerLeft: ()=> BackHeaderIcon(navigation),
                    headerStyle:{
                        backgroundColor: Platform.OS === 'android' ? '#5c65f1' : 'white',
                    },
                    headerTintColor: Platform.OS === 'android' ? 'white' : '#5c65f1',

                })}
                />
            </Stack.Navigator>
        )
    }

    return(
            <MainNav />
    )
}