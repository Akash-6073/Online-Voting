import React ,{useEffect} from 'react'
import vote from "../../../Images/vote.jpg"
import { Link ,useLocation } from "react-router-dom";
function Index() {
  const location = useLocation();
  useEffect(() => {
    console.log(location.pathname)
  }, [location]);
  return (
    <div>
      <nav className="navbar expand-lg shadow">
        <div className="left myvote">
      <img src={vote} alt="" />&nbsp;myVote
        </div>
        <div className="right">
          <Link to='/onlinevoting' className={`navs ${location.pathname==='/onlinevoting' ? "locActive" : ""}`}>Home</Link>
          <Link  className={`navs ${location.pathname==='/about' ? "locActive" : ""}`} to='/about'>About</Link>
           <div className="vertical"></div>
          <Link className="login1" to='/login' style={{textDecoration:"none"}}>Login</Link>
          <Link className="signup" to='/register'><button style={{fontWeight:"bold"}}>Signup</button></Link>
        </div>
      </nav>
    </div>
  )
}

export default Index
