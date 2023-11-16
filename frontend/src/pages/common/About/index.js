import React from 'react'
import Login from '../Login'
import Navbar from '../Navbar/index.js'
import akash from '../../../Images/akash.jpg'
import dinesh from '../../../Images/dinesh.jpg'
import akhil from '../../../Images/akhil.jpg'
import guru from '../../../Images/guru.png'
function index() {
  return (
    <div className='abt navF'>
        <Navbar/>
        <h1 className='text-center mt-5'>- <span style={{color:"#ff04f !important"}}>Our Team </span> -</h1>
        <div className="cards">
            <div className="card cds" style={{width: "20rem"}}>
                        <h4 className="card-title text-dark text-center pt-2" style={{fontWeight:"bold"}}>A K A S H</h4>

                    <img src={akash} className="card-img-top img-fluid" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title" style={{fontWeight:"bold"}}>Backend</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <div className='ag'>
                        <a href="#" className="btn btn-warning">Akash</a>
                        <span>Github</span>
                        </div>
                    </div>
            </div>
            <div className="card cds" style={{width: "18rem"}}>
                    <h4 className="card-title text-dark text-center pt-2" style={{fontWeight:"bold"}}>D I N E S H</h4>


                    <img src={dinesh} className="card-img-to img-fluid" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <div className='ag'>
                        <a href="#" className="btn btn-warning">Go somewhere</a>
                        <span>Github</span>
                        </div>
                    </div>
            </div>
            <div className="card cds" style={{width: "18rem"}}>
                    <h4 className="card-title text-dark text-center pt-2" style={{fontWeight:"bold"}}>A K H I L</h4>


                    <img src={akhil} className="card-img-top img-fluid" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <div className='ag'>
                        <a href="#" className="btn btn-warning">Go somewhere</a>
                        <span>Github</span>
                        </div>
                    </div>
            </div>
            <div className="card cds" style={{width: "18rem"}}>
                    <h4 className="card-title text-dark text-center pt-2" style={{fontWeight:"bold"}}>V A R I S H</h4>


                    <img src={guru} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <div className='ag'>
                        <a href="#" className="btn btn-warning">Go somewhere</a>
                        <span>Github</span>
                        </div>
                    </div>
            </div>
            <div className="card cds" style={{width: "18rem"}}>
                    <h4 className="card-title text-dark text-center pt-2" style={{fontWeight:"bold"}}>A K A S H</h4>


                    <img src="..." className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <div className='ag'>
                        <a href="#" className="btn btn-warning">Go somewhere</a>
                        <span>Github</span>
                        </div>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default index
