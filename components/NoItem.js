import React from 'react'
import {Text, View, StyleSheet, Dimensions} from 'react-native'

export default NoItem=()=>{
    return (
        <View style={styles.noItem}>
            <Text style={styles.noItemText}>No match available. Check later.</Text>
        </View>
    ) 
}

const styles = StyleSheet.create({
    noItem:{
        width: Dimensions.get("window").width,
        alignItems: 'center'
    },
    noItemText:{
        marginTop: 25,  
        fontWeight: '700',
        fontSize: 16,
        color: 'black'
    }
})