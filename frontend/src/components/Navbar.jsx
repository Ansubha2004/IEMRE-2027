import React from 'react'
import iemlogo from "../assets/images/iemlogo.png"
import uemlogo from "../assets/images/uemlogo.png"
import iei from "../assets/images/iei.png"
import iet from "../assets/images/iet.png"
import iemrelogo from "../assets/images/iemrelogo.png"
import polycab from "../assets/images/polycab.png"
import springer from "../assets/images/springer.png"
import smart from "../assets/images/smart.png"
import conferencealerts from "../assets/images/conferencealerts.png"

function Navbar() {
    const logos=[iemlogo,iei,springer,smart,iemrelogo,conferencealerts,polycab,iet,uemlogo]
  return (
    <nav id="nav1" className="Navbar bg-white">
        {
            logos.map((logo,index)=>(
                <img key={index} className="h-3 sm:h-7 lg:h-11" src={logo}  />
            ))
        }
    </nav>
  )
}

export default Navbar