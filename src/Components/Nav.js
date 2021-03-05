import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
function Nav() {
    return (
        <div>
        <>
        <Navbar bg="primary" variant="dark">
          <Navbar.Brand href="#home">
          {/*
            <img
              alt=""
              src=""
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
         */}
            
           Banking Managment System 
          </Navbar.Brand>
        </Navbar>
      </>
        </div>
    )
}

export default Nav
