import React from 'react'
import {View, StyleSheet, Text, Dimensions, Button} from 'react-native'

export default ErrorComponent = ({errorMessage, retryHandle})=>{
    return (
        <View style={styles.error}>
            <View style={styles.errorWrapper}>
                <Text style={styles.errorText}>{!errorMessage.internetConnected ? 'No internet connection' : errorMessage.error}</Text>
                <Button title='Retry' style={styles.button} onPress={retryHandle}/>
                
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    error: {
        marginTop: 20,
        width: Dimensions.get('window').width,
        alignItems: 'center',
      

    },
    errorWrapper: {
        backgroundColor: '#f7f8fc',
        width: '90%',
        height: 120,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
	    width: 0,
	    height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,

        elevation: 9,
    },
    errorText:{
        fontSize: 15,
        fontWeight: '700'
    }
})