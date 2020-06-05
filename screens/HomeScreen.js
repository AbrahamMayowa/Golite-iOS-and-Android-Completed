import React, {useEffect, useState}from 'react'
import {View, StyleSheet, Text, StatusBar, SafeAreaView,  ActivityIndicator, ScrollView} from 'react-native'
import HomeHeader from '../components/HomeHeader'
import Leagues from '../components/Leagues'
import MatchLists from '../components/MatchLIsts'
import footballDataFetch from '../hooks/footballdataFetch'
import { set } from 'react-native-reanimated'
import {useNetInfo} from "@react-native-community/netinfo";
import NetInfo from "@react-native-community/netinfo"
import ErrorComponent from '../components/ErrorComponent'
import NoItem from '../components/NoItem'


const  HomeScreen =()=>{
  const [matchData, setMatchData] = useState([])
  const [loading, setLoading] = useState(false)
  const [errorInternet, setErrorInternet] = useState({error: '', internetConnected: true})
  

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
            setMatchData(data)
           
            setLoading(false)
         
        }catch(error){
            setErrorInternet({error: error.message, internetConnected: true})
  
        }
      }else{
        setErrorInternet({error: 'No internet connection', internetConnected: false})
        setLoading(false)
       

      }
  
  }


  useEffect(()=>{
    handleDispatch()
  }, [])
 
    const MyStatusBar = ({backgroundColor, ...props}) => (
        <View style={[styles.statusBar, { backgroundColor }]}>
          <StatusBar translucent backgroundColor={backgroundColor} {...props} />
        </View>
      )

      let matcheRender;
      if(matchData.length < 1){
        matcheRender = <NoItem />
      }else{
        matcheRender = <MatchList footballDataArray={matchData} />
      }

      let conditionalElement = loading ? (<ActivityIndicator style={{marginTop: 20}} size={'large'} color='#5c65f1'/>) : matcheRender
      if(errorInternet.error || !errorInternet.internetConnected){
        
        conditionalElement = <ErrorComponent errorMessage={errorInternet} retryHandle={handleDispatch}/>
      }
    return(
          <View>
            <MyStatusBar backgroundColor='#5c65f1' />
            <ScrollView>
                <HomeHeader />
                <Leagues />
                {conditionalElement}
            </ScrollView>
          </View>
         
            
            
   
    )
}

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 40 : StatusBar.currentHeight;
const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;

const styles = StyleSheet.create({
    statusBar:{
        height: STATUSBAR_HEIGHT,
    },
    appBar: {
        backgroundColor:'#5c65f1',
        height: APPBAR_HEIGHT,
      },

})

export default HomeScreen