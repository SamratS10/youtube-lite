import { useState,useEffect } from "react"
import {useParams} from "react-router-dom"
import { fetchFromApi } from "../utils/apiFetchData"
import Avatar from "react-avatar"
import { BiLike } from "react-icons/bi";
import { FaRegShareSquare } from "react-icons/fa";
import Comments from "./Comments";
const VideoDetail = () => {
  const {id} = useParams()
  const [videoDetails,setVideoDetails] = useState([])
  const [channelIcon,setChannelIcon] = useState("")
  const [videoComments,setVideoComments] = useState([])
  useEffect(()=>{
    const commentsUrl = `https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&maxResults=50&videoId=${id}&key=${"AIzaSyAWcW91mmysiZTVjg2pH-tauaoroa6jpoA"}`
    const url = `https://www.googleapis.com/youtube/v3/videos?part=snippet%2Cstatistics%2CcontentDetails&id=${id}&key=${"AIzaSyAWcW91mmysiZTVjg2pH-tauaoroa6jpoA"}`
    fetchFromApi(url).then((result)=>setVideoDetails(result?.items[0]))
    const iconUrl = `https://www.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${videoDetails?.snippet?.channelId}&key=${"AIzaSyAWcW91mmysiZTVjg2pH-tauaoroa6jpoA"}`
    fetchFromApi(iconUrl).then((result)=>setChannelIcon(result?.items[0]?.snippet?.thumbnails?.high?.url))
    fetchFromApi(commentsUrl).then((result)=>setVideoComments(result?.items))
    console.log(videoComments)
  },[id,videoDetails?.snippet?.channelId])
  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-[100%] md:w-[60%] m-3 flex-1">
        <div>
          <iframe width="100%" 
          height="500" 
          src={`https://www.youtube.com/embed/${id}`} 
          title="YouTube video player" 
          frameBorder="0"
          webkitallowfullscreen="true"
          mozallowfullscreen="true"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerPolicy="strict-origin-when-cross-origin" allowfullscreen="true"></iframe>
        </div>  
        <h1 className=" text-xl font-bold mt-2">{videoDetails?.snippet?.title}</h1>
        <div className=" flex items-center justify-around md:justify-between mt-3">
            <div className="flex items-center gap-4">
              <div className="flex items-center">
                <Avatar src={channelIcon ? (channelIcon):("https://img2.freepng.fr/20180717/cz/kisspng-avatar-youtube-person-kahoot-a-roommate-who-plays-with-a-cell-phone-5b4d74010dd214.7783760115318026250566.jpg")} size={45} round={true}/>
                <h1>{videoDetails?.snippet?.channelTitle}</h1>
              </div>
              <button type="button" className=" text-white bg-black px-3 py-2 text-base rounded-xl">Subscribe</button>
            </div>
            <div className="flex justify-center gap-4">
              <div className="flex items-center bg-gray-300 rounded-2xl p-2">
                <span><BiLike size={20}/></span>
                <p className=" text-sm font-semibold text-black">{videoDetails?.statistics?.likeCount}</p>
              </div>
              <div className=" flex items-center bg-gray-300 rounded-xl p-1 gap-1">
                <span><FaRegShareSquare size={20}/></span>
                <p className="text-sm">Share</p>
              </div>
            </div>
          </div>
      </div>
      <ul className=" overflow-y-auto h-screen md:w-[35%]">
        {videoComments.length===undefined && <p>No Comments for this video</p>}
        {videoComments.length!==undefined && videoComments.map((each)=><Comments key={videoComments?.id} comments={each}/>)
        }
      </ul>
    </div>
  )
}

export default VideoDetail
