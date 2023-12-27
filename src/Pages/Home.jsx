import React, { useState } from 'react'
import Add from '../Components/Add'
import { Link } from 'react-router-dom'
import View from '../Components/View'
import Category from '../Components/Category'
function Home() {
  const [UploadVideoResponse,SetUploadVideoResponse] = useState({})
 const [dropResponse,setdropResponse] = useState({})

  return (
    <div>
      <div className="container mt-5 mb-5 d-flex justify-content-between">
        <div className="add">
          <Add setUploadVideoResponse={SetUploadVideoResponse} />
        </div>
        <Link to={'/watchhistory'}  style={{color:"white"}} className='text-decoration-none'>
<span style={{fontSize:'30px'}}>watch history</span><i class="fa-solid fa-clock-rotate-left ms-2"></i>
        </Link>
      </div>
      <div className="comtainer-fluid mt-5 mb-5 w-100 row">
        <div className='all-videos col-lg-9'>
          <h2 style={{height:'70px'}}>All Uploaded Video</h2>
              <View UploadVideoResponse={UploadVideoResponse} setdropResponse={setdropResponse} />
       </div>
     <div className='category col-lg-3'>
        <Category/>
      </div>

      </div>
    </div>
  )
}

export default Home
