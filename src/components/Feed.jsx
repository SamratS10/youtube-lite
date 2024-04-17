import {useState,useEffect} from "react"
import Navbar from "./Navbar"
import { fetchFromApi } from "../utils/apiFetchData"
import SearchFeed from "./SearchFeed"
import { Vortex } from 'react-loader-spinner'

const Feed = () => {
    const [activeNavbar,setActiveNavbar] = useState("New")
    const [selectedCategory,setSelectedCategory] = useState([])
    //const [loading,setLoading] = useState(true)
    //console.log(import.meta.env.VITE_YOUTUBE_API_KEY)
    useEffect(()=>{
      const url =`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=60&type=video&regionCode=IN&key=${"AIzaSyAWcW91mmysiZTVjg2pH-tauaoroa6jpoA"}&q=${activeNavbar}`
      fetchFromApi(url)
        .then(({items})=>setSelectedCategory(items))  
      //setLoading(false)  
    },[activeNavbar])
  return (
    <div className=" flex flex-col md:flex-row">
      <Navbar activeNavbar={activeNavbar} setActiveNavbar={setActiveNavbar}/>  
        <ul className="cards-container overflow-y-auto h-screen scroll-smooth">
          {selectedCategory===undefined && <div><Vortex  visible={true} height="80"width="80"ariaLabel="vortex-loading" wrapperStyle={{}} wrapperClass="vortex-wrapper" colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}/></div>}
          {selectedCategory!==undefined && selectedCategory.map((each)=><SearchFeed key={each?.id?.videoId} video={each}/>)}
          {console.log(selectedCategory)}
        </ul>
    </div>
  )
}

export default Feed
