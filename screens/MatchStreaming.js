import React from 'react'
import {View, StyleSheet, Text, Dimensions, Platform, TouchableOpacity, ActivityIndicator} from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { WebView } from 'react-native-webview'
import Ionicons from 'react-native-vector-icons/Ionicons'
const moment = require('moment')


export default MatchStreaming =({navigation, route})=>{
    const {matchData} = route.params
    const {thumbnail, date, side1, side2, competition, videos} = matchData
    let sourceLink = videos[0].embed
    //split the html element by iframe first
    let  iframeSplit = sourceLink.split('iframe')
    //split the result by space
    let srcLink = iframeSplit[1].split(' ')
    //split srcLink to get the https link to the api
    const apiHttpsLink = srcLink[1].split("'")[1]
    const momentTime = moment(date).format('lll')
    console.log(apiHttpsLink)

    const Loading =()=>{
        return(
            <View style={styles.loading}>
                <ActivityIndicator  color= '#ffffff' size='large'/>
            </View>
        )
    }
 
    return(
        <View style={styles.matchWrapper}>
            <View style={styles.match}>
            <View style={styles.streamView}>
            <WebView
                source={{ uri: apiHttpsLink }}
                style={styles.embedStyle}
                startInLoadingState={true}
                renderLoading={() => <Loading />}
            />
            </View>
            <TouchableOpacity onPress={()=> navigation.goBack()} style={styles.navigationButton}>
                <MaterialIcons  name='keyboard-backspace' size={32} color='#7077e5'/>
            </TouchableOpacity>
           
            </View>

            <View style={styles.matchInfo}>
                <View style={styles.dateWrapper}>
                <Ionicons name="md-calendar" name='ios-calendar' color='#a8adfc' size={16}/>
                    <Text style={styles.date}>{momentTime}</Text>
                </View>
                <View style={styles.infoCard}>
                    <View style={styles.versus}>
                        <View style={styles.teamNameWrapper}>
                            <Text style={styles.teamName}>{side1.name}</Text>
                        </View>
                        <View style={styles.versusTextWrapper}>
                            <Text style={styles.versusText}>VS</Text>
                        </View>
                        <View style={styles.teamNameWrapper}>
                            <Text style={styles.teamName}>{side2.name}</Text>
                        </View>
                    </View>

                    <Text style={styles.leagueName}>{competition.name}</Text>
                </View>
            </View>
            
        </View>
     
    )
}

const styles = StyleSheet.create({
    matchWrapper: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    match:{
        width: '100%',
        height: '60%',
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative'
    },
    streamView: {
        backgroundColor: 'black',
        overflow: 'hidden',
        width: '100%',
        height: '100%',
        position: 'absolute',
        bottom: 0,
        top: 0
    },
    embedStyle:{
        marginTop: 35,
        width: '100%',
        height: '100%',
        backgroundColor: 'black'
    },
    loading:{
        height: '100%',
        width: '100%',
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center'
    },
    navigationButton:{
        position: 'absolute',
        left: 5,
        top: 37,
        backgroundColor: '#e6f2ff',
        padding: 4,
        borderRadius: 50
    },

    matchInfo:{
        height: '40%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    dateWrapper:{
        height: 40,
        width: 200,
        backgroundColor: '#ffffff',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: -20,
        zIndex: 2,
        elevation: 9,
        flexDirection: 'row'
    },
    date:{
        fontSize: 13,
        marginLeft: 6,
        color: '#5c65f1'
    },
    infoCard:{
        backgroundColor: '#ffffff',
        height: '86%',
        width: '95%',
        shadowColor: "#000",
        shadowOffset: {
	    width: 0,
	    height: 1,
        },
        shadowOpacity: 0.1,
        shadowRadius: 1.46,

        elevation: 9,
    },
    versus:{
        flexDirection:'row',
        marginTop: 25,
        justifyContent: 'space-around',
        marginTop: 50

    },
    teamNameWrapper:{
        width: 100,
        height: 60,
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e6f2ff'
    },
    teamName:{
        fontSize: 13,
        textAlign: 'center',
        fontWeight: '700',
        color: '#5c65f1'
    },
    versusTextWrapper:{
        marginTop: 10,
        backgroundColor: '#f7dbd5',
        height: 40,
        width: 40,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    versusText:{
        color: '#c70039'
    },
    leagueName:{
        width: '100%',
        alignItems: 'center',
        textAlign: 'center',
        marginTop: 30,
        fontWeight: '700',
        color: '#5c65f1'
    }


})