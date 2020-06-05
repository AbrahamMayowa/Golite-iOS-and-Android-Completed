import {useEffect, useState} from 'react'



const useFetchFootballData = dependences =>{


    const [footballData, setFootballData] = useState([
        {side1: {name: ''}, competition: {name: ''}}
    ])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')


    const fetchFootballData = async () =>{
        setIsLoading(true)
        try{
        const res = await fetch('https://www.scorebat.com/video-api/v1/')
            if(!res.ok){
                throw new Error('A server error. Try again')
            } 
            const data = await res.json()
            setFootballData(data)
            setIsLoading(false)
        }catch(error){
            console.log(error)
            setError(error.message)
        }
    }


    useEffect(() =>{
        fetchFootballData()

    }, dependences)

    return [footballData, isLoading, error]

}

export default useFetchFootballData