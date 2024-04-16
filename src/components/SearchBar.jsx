import { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [userSearch,setUserSearch] = useState("")
  const navigate = useNavigate()
  const handleSubmit = (e)=>{
    e.preventDefault()
    navigate(`/search/${userSearch}`)
    setUserSearch("")

  }
  return (
      <form onSubmit={handleSubmit} className=" flex justify-center w-[40%] gap-2 items-center rounded-xl bg-white px-1 py-1">
        <input type="text" placeholder="Search.." value={userSearch} onChange={(e)=>setUserSearch(e.target.value)} className=" outline-none border-none w-[90%] p-1 text-lg"/>
        <IoIosSearch style={{color:"black",fontSize:"25px"}}/>
      </form>
  )
}

export default SearchBar
