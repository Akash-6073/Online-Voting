import React from 'react'
import vote from "../../../Images/vote.jpg"
import { Link } from "react-router-dom";
import Navbar from '../Navbar/index.js'

function index() {
  return (
    <>
    <div className=' bg1'>
      <Navbar/>
      <div className="ctnt">
        <h1>Welcome ! to <span className='special' style={{color:"black",fontWeight:"bold"}}>"myVote"</span>  Online Voting System</h1>
        <p>You can vote your leader with just one tap !!</p>
        <Link className="signup" style={{marginTop:"25px"}} to='/login'><button >Vote Here</button></Link>
      </div>
      <div className='quote'>
          <h1> "The ballot is stronger than the bullet.”</h1>
          <p > - Abraham Lincoln</p>
          <hr />
      </div>
    </div>
     
    </>
  )
}

export default index
