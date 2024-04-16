import { categories } from "../utils/constants"

const Navbar = ({activeNavbar,setActiveNavbar}) => {
  return (
    <div>
      <ul className=" flex gap-3 overflow-auto md:flex-col p-3 md:h-screen ">
        {
            categories.map((each)=>(
                <li key={each.name} className={`flex gap-1 items-center m-2 border border-red-400 px-3 py-2 rounded-xl md:border-none ${each.name===activeNavbar? "bg-red-600":""} cursor-pointer md:px-4`} onClick={()=>setActiveNavbar(each.name)}>
                    <span className= {`text-2xl ${each.name===activeNavbar? "text-white":""}`}>{<each.icon/>}</span>
                    <p className={`text-lg ${each.name===activeNavbar? "text-white": ""}`}>{each.name}</p>
                </li>
            ))
        }
      </ul>
    </div>
  )
}

export default Navbar
