import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import ops from '../JobOps.gif'

import './Home.css'
export default function Home() {
  return (
    <div>
        <Navbar/>
        <div >
        
       </div>
        <div className="banner" >
      <div>
      <img src={ops} alt="GIF" style={{float:'left', marginLeft:'15px' ,marginTop:'-100px', width:'40%', height:'40%'}}/>
        <h2>Welcome Gayathri Annam ! Looking for a job? </h2>
        <h3 style={{color:"white"}}>
          You are at the right place. Find Part Time and Full time jobs from different sectors.
        </h3>
      </div>
      
      
    
        </div>
       
        <div>
        
        </div>
       
    </div>
  )
}
