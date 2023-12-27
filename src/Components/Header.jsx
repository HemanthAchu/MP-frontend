import React from 'react'
import { Navbar,Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header() {
   
  return (
    <div>
     <Navbar className="bg-info">
        <Container>
          <Navbar.Brand   className='fw-bolder' style={{color:'white',fontSize:'25px'}}>
          <Link to={'/'} className=' text-decoration-none' style={{color:'white'}}>
          <i style={{height:'26px',width:'40px'}} class="fa-solid fa-cloud-arrow-up fa-beat ps-2"></i>
           <span  className='ps-2'> Media Player</span>
          </Link>
          </Navbar.Brand>
        </Container>
      </Navbar>

    </div>
  )
}

export default Header
