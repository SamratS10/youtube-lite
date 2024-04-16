import SearchBar from "./SearchBar"
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <div className=" flex justify-between items-center bg-[#000] p-3 mx-auto sticky top-0">
      <div className=" flex items-center gap-2">
        <Link to="/"><img src="/youtube.png" alt="logo" className=" h-[35px] w-[60px] md:h-[40px] md:w-[80px]"/></Link>
        <h1 className=" text-lg md:text-3xl font-semibold text-[#fff]">YOUTUBE</h1>
      </div>
      <SearchBar/>
    </div>
  )
}

export default Header
