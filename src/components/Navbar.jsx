import { useEffect, useState } from "react";
import { FaBell,FaUser,FaBookmark } from "react-icons/fa";
import { FaHouse } from "react-icons/fa6";
import { useLocation, useNavigate } from "react-router-dom";
const Navbar = () => {
  const [dark, setDark] = useState(true)
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;
  console.log('currentPath:', currentPath);

  useEffect(()=>{
    if(currentPath !== "/"){
      setDark(false)
    }else{
      setDark(true)
    }
  },[currentPath])
  return (
    <div className="navbar">
      <p className="logo_class" onClick={()=>navigate("/")}>TravelMedia.in</p>
      <div>
        <div>
          <FaHouse className="icon_class"  color={dark?"#F05A22":"#F9DDCF"} onClick={()=>navigate("/")}/>          
          <FaBell color="#F9DDCF" />
          <FaBookmark className="icon_class"  color={dark?"#F9DDCF":"#F05A22"}/>
          <FaUser color="#F9DDCF" />
          <div className="dot_class" style={{left:currentPath === "/"?"13.5%":"62%"}}></div>
        </div>
      </div>
    </div>
  )
}

export default Navbar