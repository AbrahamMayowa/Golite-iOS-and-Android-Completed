import React from 'react'
import {View, StyleSheet, Text, FlatList, Dimensions} from 'react-native'
import MatchCard from '../components/MatchCard'

export default MatchList =({footballDataArray, leagueScreen})=>{
 

    return(
        <View style={!leagueScreen && styles.matchlist}>
            <Text style={leagueScreen ? styles.makeOpacity : styles.listText}>Matches</Text>
            <FlatList
                data={footballDataArray}
                renderItem={({item}) => <MatchCard match={item} />}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    matchlist:{
        marginTop: 25
    },
    listText:{
        //fontFamily: 'Roboto-Bold',
        fontSize: 20,
        fontWeight: '700',
        paddingLeft: 12,
        marginBottom: 7
    },
    makeOpacity: {
        opacity: 0,
        marginTop: -8
    }
})