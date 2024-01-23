import { useNavigate } from "react-router-dom"
import { CiHeart } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { Cardmain } from "./Card1";
export function Home(){
    const navigate = useNavigate()
    return(
        <div>
            <ul style={{listStyleType:"none",display:"flex",flexWrap:"wrap",justifyContent:"space-evenly",alignItems:"center",backgroundColor:"whitesmoke",padding:20,cursor:"pointer"}}>
                <li style={{marginLeft:0}} onClick={()=>navigate("/")}>Exclusive</li>
                <li onClick={()=>navigate("/")}>Home</li>
                <li onClick={()=>navigate("/contact")}>Contact</li>
                <li onClick={()=>navigate("/about")}>About</li>
                <li onClick={()=>navigate("/sign-up")}>Sign Up</li>
                <li><FaSearch size={25}/></li>
                <li><CiHeart size={25} /></li>
                <li><MdOutlineShoppingCart size={25} /></li>
            </ul>
            <Cardmain/>
        </div>
    )
}