import React from 'react'
import {StyleSheet, View, Text, Dimensions, Platform} from 'react-native'

const HomeHeader =()=>{
    return (
        <View style={styles.homeHeader}>
            <Text style={styles.headerText}>Golite</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    homeHeader:{
        width: Dimensions.get('window').width,
        height: 160,
       paddingTop: 20,
        paddingLeft: 20,
        backgroundColor: '#5c65f1'
        
    },
    headerText: {
        //fontFamily: 'Roboto-Bold',
        fontSize: 30,
        fontWeight: '800',
        color: 'white',
    }
})

export default HomeHeader