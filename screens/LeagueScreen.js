import React, {useState, useEffect} from 'react'

import {View, StyleSheet, Text,  ActivityIndicator} from 'react-native'
import MatchList from '../components/MatchLIsts'
import NoItem from '../components/NoItem'
import NetInfo from "@react-native-community/netinfo"
import ErrorComponent from '../components/ErrorComponent'
import { ScrollView } from 'react-native-gesture-handler'

export default LeagueScreen =({route, navigation})=>{
    const [matchData, setMatchData] = useState([])
    const [loading, setLoading] = useState(false)
    const [errorInternet, setErrorInternet] = useState({error: '', internetConnected: true})
  
    const {leagueCode} = route.params

    let _isMounted = false;
  
    const handleDispatch = async ()=>{
        setLoading(true)
        const internetState = await NetInfo.fetch()
        if(internetState.isConnected){
          setErrorInternet({error: '', internetConnected: true})
            setLoading(true)
            try{
            const res = await fetch('https://www.scorebat.com/video-api/v1/')
                if(!res.ok){
                    throw new Error('A server error. Try again')
                } 
                const data = await res.json()
        
                const updatedData = data.filter(match => match.competition.id.toString() === leagueCode)
                if(_isMounted){
                  setMatchData(updatedData)
                  setLoading(false)
                }
            
            
            }catch(error){
                setErrorInternet({error: error.message, internetConnected: true})
    
            }
        }else{
            setErrorInternet({error: 'No internet connection', internetConnected: false})
            setLoading(false)
          }
    }
  
  
    useEffect(()=>{
      _isMounted = true
      handleDispatch()
     return ()=> _isMounted = false
    }, [])

    let matcheRender;
    if(matchData.length < 1){
      matcheRender = <NoItem />
    }else{
      matcheRender = <MatchList footballDataArray={matchData} leagueScreen={true}/>
    }

    
    let conditionalElement = loading ? (<ActivityIndicator style={{marginTop: 20}} size={"large"} color='#5c65f1'/>) :  matcheRender
    
    if(errorInternet.error || !errorInternet.internetConnected){
      conditionalElement = <ErrorComponent errorMessage={errorInternet} retryHandle={handleDispatch}/>
    }

    return (
      <ScrollView>{conditionalElement}</ScrollView>
    )

    
    
}

const styles = StyleSheet.create({

})