import { useState,useEffect } from "react"
import Avatar from "react-avatar"
import { fetchFromApi } from "../utils/apiFetchData"
import { Link } from "react-router-dom"
import { motion } from "framer-motion";

const SearchFeed = ({video}) => {
  const [ytIcon,setYtIcon] = useState("")
  const iconUrl = `https://www.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${video?.snippet?.channelId}&key=${"AIzaSyAWcW91mmysiZTVjg2pH-tauaoroa6jpoA"}`
  useEffect(()=>{
    fetchFromApi(iconUrl).then((result)=>setYtIcon(result?.items[0]?.snippet?.thumbnails?.high?.url))
  },[])
  return (
    <Link to={`/video/${video?.id?.videoId}`} className="card">
    <motion.li initial={{ scale: 0 }}
  animate={{ rotate: 360, scale: 1 }}
  transition={{
    type: "spring",
    stiffness: 260,
    damping: 20
  }} className=" shadow-xl p-2 rounded-xl">
      <img src={(video?.snippet?.thumbnails?.high?.url) ? (video?.snippet?.thumbnails?.high?.url) : ("https://fisnikde.com/wp-content/uploads/2019/01/broken-image.png")} alt="logo" className=" w-[98%] rounded-xl"/>
      <div className="flex mt-2">
        <Avatar src={ytIcon ? (ytIcon):("https://img2.freepng.fr/20180717/cz/kisspng-avatar-youtube-person-kahoot-a-roommate-who-plays-with-a-cell-phone-5b4d74010dd214.7783760115318026250566.jpg")} size={37} round={true}/>
        <div className="ml-2">
          <h1 className=" font-semibold text-base">{video?.snippet?.title}</h1>
          <p className=" text-sm text-gray-500">{video?.snippet?.channelTitle}</p>
        </div>
      </div>
    </motion.li>
    </Link>
  )
}

export default SearchFeed
