import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
function Nav() {
    return (
        <div>
        <>
        <Navbar bg="primary" variant="dark">
          <Navbar.Brand href="/">
        
            <img
              alt=""
              src="src\icon.png"
              width="50"
              height="50"
              className="d-inline-block align-top"
            />{' '}
         
            
           Banking Managment System 
          </Navbar.Brand>
        </Navbar>
      </>
        </div>
    )
}

export default Nav
