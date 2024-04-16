import Avatar from "react-avatar"
const Comments = ({comments}) => {
  return (
    <li className="my-2">
      <div className="flex">
        <Avatar src={comments?.snippet?.topLevelComment?.snippet?.authorProfileImageUrl}size={45} round={true}/>
        <div className="ml-3">
            <h1 className=" text-base text-gray-500">{comments?.snippet?.topLevelComment?.snippet?.authorDisplayName} <span>{comments.snippet?.publishedAt}</span></h1>
            <p className="text-lg font-normal text-black font-serif">{comments?.snippet?.topLevelComment?.snippet?.textDisplay}</p>
        </div>
      </div>
      <p className=" text-black font-semibold text-xl">{comments?.snippet?.topLevelComment?.snippet?.likeCount} <span className=" text-blue-600 font-bold text-lg">Likes</span></p>
    </li>
  )
}

export default Comments
