import React from 'react';
import {Link} from 'react-router-dom'
function NavBar({setDrawer}) {
    return (
        <nav className="navbar navbar-expand navbar-light bg-dark position-fixed top-0 w-100 ">
          <div className="nav navbar-nav container-fluid d-flex justify-content-between p-2 ms-5 me-5">
              
                 <Link to="/" style={{color:"white",textDecoration:"none"}}><h3 >React Cart App</h3></Link>
                  <input placeholder="Search " className="p-2"></input>
                  <button className="bg-transparent border border-0" onClick={()=>{
                    setDrawer(true)
                  }}>
                  <img src="https://img.icons8.com/color/50/000000/shopping-cart.png" alt=""/>
                  </button>
        
          </div>
      </nav>
    )
}

export default NavBar;
