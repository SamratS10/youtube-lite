import { useParams } from "react-router-dom"
import SearchFeed from "./SearchFeed"
import { useState,useEffect } from "react"
import { fetchFromApi } from "../utils/apiFetchData"
const ClientSearch = () => {
    const {query} = useParams()
    const [searchVideos,setSearchVideos] = useState([])
    useEffect(()=>{
        const url =`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=60&type=video&regionCode=IN&key=${"AIzaSyAWcW91mmysiZTVjg2pH-tauaoroa6jpoA"}&q=${query}`
        fetchFromApi(url).then(({items})=>setSearchVideos(items)) 
    },[query])
  return (
    <ul className="cards-container overflow-y-auto h-screen">
      {
        searchVideos.map((each)=><SearchFeed key={each?.id?.videoId} video={each}/>)
      }
    </ul>
  )
}

export default ClientSearch
